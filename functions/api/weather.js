const WEATHER_API = 'https://api.open-meteo.com/v1/forecast';
const QINGCAO_LAKE = {
  latitude: '24.7749348',
  longitude: '120.9709015',
};

const weatherDescriptions = {
  0: ['晴朗', '☀️'],
  1: ['大致晴朗', '🌤️'],
  2: ['局部多雲', '⛅'],
  3: ['陰天', '☁️'],
  45: ['有霧', '🌫️'],
  48: ['霧淞', '🌫️'],
  51: ['細雨', '🌦️'],
  53: ['細雨', '🌦️'],
  55: ['較強細雨', '🌧️'],
  56: ['凍毛雨', '🌧️'],
  57: ['凍毛雨', '🌧️'],
  61: ['小雨', '🌦️'],
  63: ['中雨', '🌧️'],
  65: ['大雨', '🌧️'],
  66: ['凍雨', '🌧️'],
  67: ['凍雨', '🌧️'],
  71: ['小雪', '🌨️'],
  73: ['降雪', '🌨️'],
  75: ['大雪', '❄️'],
  77: ['霰', '🌨️'],
  80: ['短暫陣雨', '🌦️'],
  81: ['陣雨', '🌧️'],
  82: ['強陣雨', '⛈️'],
  85: ['陣雪', '🌨️'],
  86: ['強陣雪', '🌨️'],
  95: ['雷雨', '⛈️'],
  96: ['雷雨伴隨冰雹', '⛈️'],
  99: ['強雷雨伴隨冰雹', '⛈️'],
};

const thunderCodes = new Set([82, 95, 96, 99]);

function describeWeather(code, isDay = true) {
  const [condition, icon] = weatherDescriptions[code] ?? ['天氣變化', '🌤️'];
  if (!isDay && code <= 1) return [condition, '🌙'];
  return [condition, icon];
}

function requiredNumber(value, field) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`Invalid weather field: ${field}`);
  }
  return value;
}

function dayLabel(date, index) {
  if (index === 0) return '今天';
  if (index === 1) return '明天';
  return new Intl.DateTimeFormat('zh-TW', {
    weekday: 'short',
    timeZone: 'Asia/Taipei',
  }).format(new Date(`${date}T00:00:00+08:00`));
}

function weatherAdvice(currentCode, today) {
  const severeWeather = thunderCodes.has(currentCode) || thunderCodes.has(today.weatherCode);

  if (severeWeather || today.precipitationProbability >= 70 || today.maxWindGust >= 60) {
    return {
      level: 'avoid',
      title: '湖區天氣風險偏高',
      text: '有強降雨、雷雨或強陣風可能，建議延後行程；雷雨時請遠離水面、橋梁、碼頭與樹下。',
    };
  }

  if (
    today.precipitationProbability >= 45 ||
    today.maxWindGust >= 40 ||
    today.maxTemperature >= 34
  ) {
    return {
      level: 'watch',
      title: '建議縮短湖區行程',
      text: '留意降雨、強風或高溫，優先走停車場至映月橋、於飛島的短線，並準備雨具與飲水。',
    };
  }

  return {
    level: 'good',
    title: '天氣條件相對穩定',
    text: '適合依體力安排湖岸散步；水上活動與步道開放狀況仍以現場公告為準。',
  };
}

function normalizeWeather(raw) {
  if (!raw?.current || !raw?.daily || !Array.isArray(raw.daily.time)) {
    throw new Error('Incomplete weather response');
  }

  const currentCode = requiredNumber(raw.current.weather_code, 'current.weather_code');
  const [currentCondition, currentIcon] = describeWeather(
    currentCode,
    raw.current.is_day === 1,
  );

  const daily = raw.daily.time.slice(0, 3).map((date, index) => {
    const code = requiredNumber(raw.daily.weather_code?.[index], `daily.weather_code.${index}`);
    const [condition, icon] = describeWeather(code);

    return {
      date,
      label: dayLabel(date, index),
      weatherCode: code,
      condition,
      icon,
      maxTemperature: requiredNumber(
        raw.daily.temperature_2m_max?.[index],
        `daily.temperature_2m_max.${index}`,
      ),
      minTemperature: requiredNumber(
        raw.daily.temperature_2m_min?.[index],
        `daily.temperature_2m_min.${index}`,
      ),
      precipitationProbability: requiredNumber(
        raw.daily.precipitation_probability_max?.[index],
        `daily.precipitation_probability_max.${index}`,
      ),
      maxWindGust: requiredNumber(
        raw.daily.wind_gusts_10m_max?.[index],
        `daily.wind_gusts_10m_max.${index}`,
      ),
    };
  });

  if (daily.length < 3) throw new Error('Three-day forecast unavailable');

  return {
    location: '青草湖',
    updatedAt: `${raw.current.time}:00+08:00`,
    source: {
      name: 'Open-Meteo',
      url: 'https://open-meteo.com/',
    },
    current: {
      weatherCode: currentCode,
      isDay: raw.current.is_day === 1,
      condition: currentCondition,
      icon: currentIcon,
      temperature: requiredNumber(raw.current.temperature_2m, 'current.temperature_2m'),
      apparentTemperature: requiredNumber(
        raw.current.apparent_temperature,
        'current.apparent_temperature',
      ),
      windSpeed: requiredNumber(raw.current.wind_speed_10m, 'current.wind_speed_10m'),
      windGust: requiredNumber(raw.current.wind_gusts_10m, 'current.wind_gusts_10m'),
    },
    today: daily[0],
    daily,
    advice: weatherAdvice(currentCode, daily[0]),
  };
}

function upstreamUrl() {
  const url = new URL(WEATHER_API);
  url.searchParams.set('latitude', QINGCAO_LAKE.latitude);
  url.searchParams.set('longitude', QINGCAO_LAKE.longitude);
  url.searchParams.set(
    'current',
    'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_gusts_10m,is_day',
  );
  url.searchParams.set(
    'daily',
    'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_gusts_10m_max',
  );
  url.searchParams.set('timezone', 'Asia/Taipei');
  url.searchParams.set('forecast_days', '3');
  return url;
}

export async function onRequestGet(context) {
  const cache = caches.default;
  const cacheUrl = new URL(context.request.url);
  cacheUrl.search = '';
  const cacheKey = new Request(cacheUrl, { method: 'GET' });
  const cached = await cache.match(cacheKey);
  if (cached) return cached;

  try {
    const upstream = await fetch(upstreamUrl(), {
      headers: { Accept: 'application/json' },
    });
    if (!upstream.ok) throw new Error(`Weather API returned ${upstream.status}`);

    const weather = normalizeWeather(await upstream.json());
    const response = Response.json(weather, {
      headers: {
        'Cache-Control': 'public, max-age=900, stale-while-revalidate=1800',
      },
    });

    context.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  } catch (error) {
    console.error(
      JSON.stringify({
        message: 'weather request failed',
        error: error instanceof Error ? error.message : String(error),
        path: new URL(context.request.url).pathname,
      }),
    );
    return Response.json(
      { error: 'weather_unavailable' },
      {
        status: 502,
        headers: { 'Cache-Control': 'no-store' },
      },
    );
  }
}

export { normalizeWeather, upstreamUrl, weatherAdvice };

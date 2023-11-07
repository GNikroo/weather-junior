import img1 from "./assets/clothing/Child.png";
import img2 from "./assets/clothing/Summer.png";
import img3 from "./assets/clothing/Chilly.png";
import img4 from "./assets/clothing/Raingear.png";
import img5 from "./assets/clothing/Wintergear.png";
import img6 from "./assets/clothing/Windy.png";

export const outfits = {
  default: { image: img1, alt: "child dressed in pajamas" },
  windy: { image: img6, alt: "child dressed for wind" },
  rainy: { image: img4, alt: "child dressed for rain" },
  warm: { image: img2, alt: "child dressed for heat" },
  chilly: { image: img3, alt: "child dressed for chill" },
  snowy: { image: img5, alt: "child dressed for cold" },
};

export const weatherConditions = {
  dry: {
    248: {
      description: "Fog",
      dayIcon: "wsymbol_0007_fog",
      nightIcon: "wsymbol_0007_fog",
    },
    143: {
      description: "Mist",
      dayIcon: "wsymbol_0006_mist",
      nightIcon: "wsymbol_0006_mist",
    },
    122: {
      description: "Overcast",
      dayIcon: "wsymbol_0004_black_low_cloud",
      nightIcon: "wsymbol_0004_black_low_cloud",
    },
    119: {
      description: "Cloudy",
      dayIcon: "wsymbol_0003_white_cloud",
      nightIcon: "wsymbol_0004_black_low_cloud",
    },
    116: {
      description: "Partly Cloudy",
      dayIcon: "wsymbol_0002_sunny_intervals",
      nightIcon: "wsymbol_0008_clear_sky_night",
    },
    113: {
      description: "Clear/Sunny",
      dayIcon: "wsymbol_0001_sunny",
      nightIcon: "wsymbol_0008_clear_sky_night",
    },
  },
  wet: {
    389: {
      description: "Moderate or heavy rain in area with thunder",
      dayIcon: "wsymbol_0024_thunderstorms",
      nightIcon: "wsymbol_0040_thunderstorms_night",
    },
    386: {
      description: "Patchy light rain in area with thunder",
      dayIcon: "wsymbol_0016_thundery_showers",
      nightIcon: "wsymbol_0032_thundery_showers_night",
    },
    359: {
      description: "Torrential rain shower",
      dayIcon: "wsymbol_0018_cloudy_with_heavy_rain",
      nightIcon: "wsymbol_0034_cloudy_with_heavy_rain_night",
    },
    356: {
      description: "Moderate or heavy rain shower",
      dayIcon: "wsymbol_0010_heavy_rain_showers",
      nightIcon: "wsymbol_0026_heavy_rain_showers_night",
    },
    338: {
      description: "Heavy snow",
      dayIcon: "wsymbol_0020_cloudy_with_heavy_snow",
      nightIcon: "wsymbol_0036_cloudy_with_heavy_snow_night",
    },
    335: {
      description: "Patchy heavy snow",
      dayIcon: "wsymbol_0012_heavy_snow_showers",
      nightIcon: "wsymbol_0028_heavy_snow_showers_night",
    },
    332: {
      description: "Moderate snow",
      dayIcon: "wsymbol_0020_cloudy_with_heavy_snow",
      nightIcon: "wsymbol_0036_cloudy_with_heavy_snow_night",
    },
    314: {
      description: "Moderate or Heavy freezing rain",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    311: {
      description: "Light freezing rain",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    308: {
      description: "Heavy rain",
      dayIcon: "wsymbol_0018_cloudy_with_heavy_rain",
      nightIcon: "wsymbol_0034_cloudy_with_heavy_rain_night",
    },
    305: {
      description: "Heavy rain at times",
      dayIcon: "wsymbol_0010_heavy_rain_showers",
      nightIcon: "wsymbol_0026_heavy_rain_showers_night",
    },
    302: {
      description: "Moderate rain",
      dayIcon: "wsymbol_0018_cloudy_with_heavy_rain",
      nightIcon: "wsymbol_0034_cloudy_with_heavy_rain_night",
    },
    299: {
      description: "Moderate rain at times",
      dayIcon: "wsymbol_0010_heavy_rain_showers",
      nightIcon: "wsymbol_0026_heavy_rain_showers_night",
    },
    296: {
      description: "Light rain",
      dayIcon: "wsymbol_0017_cloudy_with_light_rain",
      nightIcon: "wsymbol_0025_light_rain_showers_night",
    },
    293: {
      description: "Patchy light rain",
      dayIcon: "wsymbol_0017_cloudy_with_light_rain",
      nightIcon: "wsymbol_0033_cloudy_with_light_rain_night",
    },
    284: {
      description: "Heavy freezing drizzle",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    281: {
      description: "Freezing drizzle",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    266: {
      description: "Light drizzle",
      dayIcon: "wsymbol_0017_cloudy_with_light_rain",
      nightIcon: "wsymbol_0033_cloudy_with_light_rain_night",
    },
    263: {
      description: "Patchy light drizzle",
      dayIcon: "wsymbol_0009_light_rain_showers",
      nightIcon: "wsymbol_0025_light_rain_showers_night",
    },
    200: {
      description: "Thundery outbreaks in nearby",
      dayIcon: "wsymbol_0016_thundery_showers",
      nightIcon: "wsymbol_0032_thundery_showers_night",
    },
    176: {
      description: "Patchy rain nearby",
      dayIcon: "wsymbol_0009_light_rain_showers",
      nightIcon: "wsymbol_0025_light_rain_showers_night",
    },
  },
  snow: {
    395: {
      description: "Moderate or heavy snow in area with thunder",
      dayIcon: "wsymbol_0012_heavy_snow_showers",
      nightIcon: "wsymbol_0028_heavy_snow_showers_night",
    },
    392: {
      description: "Patchy light snow in area with thunder",
      dayIcon: "wsymbol_0016_thundery_showers",
      nightIcon: "wsymbol_0032_thundery_showers_night",
    },
    377: {
      description: "Moderate or heavy showers of ice pellets",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    374: {
      description: "Light showers of ice pellets",
      dayIcon: "wsymbol_0013_sleet_showers",
      nightIcon: "wsymbol_0029_sleet_showers_night",
    },
    371: {
      description: "Moderate or heavy snow showers",
      dayIcon: "wsymbol_0012_heavy_snow_showers",
      nightIcon: "wsymbol_0028_heavy_snow_showers_night",
    },
    368: {
      description: "Light snow showers",
      dayIcon: "wsymbol_0011_light_snow_showers",
      nightIcon: "wsymbol_0027_light_snow_showers_night",
    },
    365: {
      description: "Moderate or heavy sleet showers",
      dayIcon: "wsymbol_0013_sleet_showers",
      nightIcon: "wsymbol_0029_sleet_showers_night",
    },
    362: {
      description: "Light sleet showers",
      dayIcon: "wsymbol_0013_sleet_showers",
      nightIcon: "wsymbol_0029_sleet_showers_night",
    },
    350: {
      description: "Ice pellets",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    329: {
      description: "Patchy moderate snow",
      dayIcon: "wsymbol_0020_cloudy_with_heavy_snow",
      nightIcon: "wsymbol_0036_cloudy_with_heavy_snow_night",
    },
    326: {
      description: "Light snow",
      dayIcon: "wsymbol_0011_light_snow_showers",
      nightIcon: "wsymbol_0027_light_snow_showers_night",
    },
    323: {
      description: "Patchy light snow",
      dayIcon: "wsymbol_0011_light_snow_showers",
      nightIcon: "wsymbol_0027_light_snow_showers_night",
    },
    320: {
      description: "Moderate or heavy sleet",
      dayIcon: "wsymbol_0019_cloudy_with_light_snow",
      nightIcon: "wsymbol_0035_cloudy_with_light_snow_night",
    },
    317: {
      description: "Light sleet",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    260: {
      description: "Freezing fog",
      dayIcon: "wsymbol_0007_fog",
      nightIcon: "wsymbol_0007_fog",
    },
    230: {
      description: "Blizzard",
      dayIcon: "wsymbol_0020_cloudy_with_heavy_snow",
      nightIcon: "wsymbol_0036_cloudy_with_heavy_snow_night",
    },
    227: {
      description: "Blowing snow",
      dayIcon: "wsymbol_0019_cloudy_with_light_snow",
      nightIcon: "wsymbol_0035_cloudy_with_light_snow_night",
    },
    185: {
      description: "Patchy freezing drizzle nearby",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    182: {
      description: "Patchy sleet nearby",
      dayIcon: "wsymbol_0021_cloudy_with_sleet",
      nightIcon: "wsymbol_0037_cloudy_with_sleet_night",
    },
    179: {
      description: "Patchy snow nearby",
      dayIcon: "wsymbol_0013_sleet_showers",
      nightIcon: "wsymbol_0029_sleet_showers_night",
    },
  },
};

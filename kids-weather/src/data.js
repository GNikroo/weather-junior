import img1 from "./assets/clothing/Child.png";
import img2 from "./assets/clothing/Summer.png";
import img3 from "./assets/clothing/Chilly.png";
import img4 from "./assets/clothing/Raingear.png";
import img5 from "./assets/clothing/Wintergear.png";
import img6 from "./assets/clothing/Windy.png";
import icon1 from "./assets/icons/cloud.png";
import icon2 from "./assets/icons/rainy.png";

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
      icon: "wsymbol_0007_fog",
    },
    143: {
      description: "Mist",
      icon: "wsymbol_0006_mist",
    },
    122: {
      description: "Overcast",
      icon: "wsymbol_0004_black_low_cloud",
    },
    119: {
      description: "Cloudy",
      icon: "wsymbol_0003_white_cloud",
    },
    116: {
      description: "Partly Cloudy",
      icon: icon1,
    },
    113: {
      description: "Clear/Sunny",
      icon: "wsymbol_0001_sunny",
    },
  },
  wet: {
    389: {
      description: "Moderate or heavy rain in area with thunder",
      icon: "wsymbol_0024_thunderstorms",
    },
    386: {
      description: "Patchy light rain in area with thunder",
      icon: "wsymbol_0016_thundery_showers",
    },
    359: {
      description: "Torrential rain shower",
      icon: "wsymbol_0018_cloudy_with_heavy_rain",
    },
    356: {
      description: "Moderate or heavy rain shower",
      icon: "wsymbol_0010_heavy_rain_showers",
    },
    338: {
      description: "Heavy snow",
      icon: "wsymbol_0020_cloudy_with_heavy_snow",
    },
    335: {
      description: "Patchy heavy snow",
      icon: "wsymbol_0012_heavy_snow_showers",
    },
    332: {
      description: "Moderate snow",
      icon: "wsymbol_0020_cloudy_with_heavy_snow",
    },
    314: {
      description: "Moderate or Heavy freezing rain",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    311: {
      description: "Light freezing rain",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    308: {
      description: "Heavy rain",
      icon: "wsymbol_0018_cloudy_with_heavy_rain",
    },
    305: {
      description: "Heavy rain at times",
      icon: "wsymbol_0010_heavy_rain_showers",
    },
    302: {
      description: "Moderate rain",
      icon: "wsymbol_0018_cloudy_with_heavy_rain",
    },
    299: {
      description: "Moderate rain at times",
      icon: "wsymbol_0010_heavy_rain_showers",
    },
    296: {
      description: "Light rain",
      icon: icon2,
    },
    293: {
      description: "Patchy light rain",
      icon: "wsymbol_0017_cloudy_with_light_rain",
    },
    284: {
      description: "Heavy freezing drizzle",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    281: {
      description: "Freezing drizzle",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    266: {
      description: "Light drizzle",
      icon: "wsymbol_0017_cloudy_with_light_rain",
    },
    263: {
      description: "Patchy light drizzle",
      icon: "wsymbol_0009_light_rain_showers",
    },
    200: {
      description: "Thundery outbreaks in nearby",
      icon: "wsymbol_0016_thundery_showers",
    },
    176: {
      description: "Patchy rain nearby",
      icon: "wsymbol_0009_light_rain_showers",
    },
  },
  snow: {
    395: {
      description: "Moderate or heavy snow in area with thunder",
      icon: "wsymbol_0012_heavy_snow_showers",
    },
    392: {
      description: "Patchy light snow in area with thunder",
      icon: "wsymbol_0016_thundery_showers",
    },
    377: {
      description: "Moderate or heavy showers of ice pellets",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    374: {
      description: "Light showers of ice pellets",
      icon: "wsymbol_0013_sleet_showers",
    },
    371: {
      description: "Moderate or heavy snow showers",
      icon: "wsymbol_0012_heavy_snow_showers",
    },
    368: {
      description: "Light snow showers",
      icon: "wsymbol_0011_light_snow_showers",
    },
    365: {
      description: "Moderate or heavy sleet showers",
      icon: "wsymbol_0013_sleet_showers",
    },
    362: {
      description: "Light sleet showers",
      icon: "wsymbol_0013_sleet_showers",
    },
    350: {
      description: "Ice pellets",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    329: {
      description: "Patchy moderate snow",
      icon: "wsymbol_0020_cloudy_with_heavy_snow",
    },
    326: {
      description: "Light snow",
      icon: "wsymbol_0011_light_snow_showers",
    },
    323: {
      description: "Patchy light snow",
      icon: "wsymbol_0011_light_snow_showers",
    },
    320: {
      description: "Moderate or heavy sleet",
      icon: "wsymbol_0019_cloudy_with_light_snow",
    },
    317: {
      description: "Light sleet",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    260: {
      description: "Freezing fog",
      icon: "wsymbol_0007_fog",
    },
    230: {
      description: "Blizzard",
      icon: "wsymbol_0020_cloudy_with_heavy_snow",
    },
    227: {
      description: "Blowing snow",
      icon: "wsymbol_0019_cloudy_with_light_snow",
    },
    185: {
      description: "Patchy freezing drizzle nearby",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    182: {
      description: "Patchy sleet nearby",
      icon: "wsymbol_0021_cloudy_with_sleet",
    },
    179: {
      description: "Patchy snow nearby",
      icon: "wsymbol_0013_sleet_showers",
    },
  },
};

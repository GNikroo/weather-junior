import img1 from "./assets/clothing/Child.png";
import img2 from "./assets/clothing/Summer.png";
import img3 from "./assets/clothing/Chilly.png";
import img4 from "./assets/clothing/Raingear.png";
import img5 from "./assets/clothing/Wintergear.png";
import img6 from "./assets/clothing/Windy.png";
import icon1 from "./assets/icons/cloud.png";
import icon2 from "./assets/icons/rainy.png";
import icon3 from "./assets/icons/foog.png";
import icon4 from "./assets/icons/cloudy.png";
import icon5 from "./assets/icons/cloud1.png";
import icon6 from "./assets/icons/cloud2.png";
import icon8 from "./assets/icons/hail.png";
import icon9 from "./assets/icons/rain1.png";
import icon10 from "./assets/icons/rainy.png";
import icon11 from "./assets/icons/snowy.png";
import icon12 from "./assets/icons/snowy1.png";
import icon14 from "./assets/icons/storm.png";
import icon15 from "./assets/icons/storm1.png";
import icon16 from "./assets/icons/storm2.png";
import icon17 from "./assets/icons/storm3.png";
import icon18 from "./assets/icons/sun.png";
import icon19 from "./assets/icons/windy.png";
import head1 from "./assets/clothing/Chilly/Chilly1.png";
import head2 from "./assets/clothing/Raingear/Raingear1.png";
import head3 from "./assets/clothing/Snowgear/Snowgear1.png";
import head4 from "./assets/clothing/Summer/Summer1.png";
import head5 from "./assets/clothing/Windy/Windy1.png";
import clothing1 from "./assets/clothing/Chilly/Chilly2.png";
import clothing2 from "./assets/clothing/Raingear/Raingear2.png";
import clothing3 from "./assets/clothing/Snowgear/Snowgear2.png";
import clothing4 from "./assets/clothing/Summer/Summer2.png";
import acc1 from "./assets/clothing/Chilly/Chilly3.png";
import acc2 from "./assets/clothing/Raingear/Raingear3.png";
import acc3 from "./assets/clothing/Snowgear/Snowgear3.png";
import acc4 from "./assets/clothing/Summer/Summer3.png";
import acc5 from "./assets/clothing/Windy/Windy3.png";

export const outfits = {
  default: { image: img1, alt: "child dressed in pajamas" },
  windy: { image: img6, alt: "child dressed for wind" },
  rainy: { image: img4, alt: "child dressed for rain" },
  warm: { image: img2, alt: "child dressed for heat" },
  chilly: { image: img3, alt: "child dressed for chill" },
  snowy: { image: img5, alt: "child dressed for cold" },
};

export const buildableOutfits = {
  head: [head1, head2, head3, head4, head5],
  clothing: [clothing1, clothing2, clothing3, clothing4],
  accessories: [acc1, acc2, acc3, acc4, acc5],
  outfits: [img1, img2, img3, img4, img5, img6],
};

export const weatherConditions = {
  dry: {
    248: {
      description: "Fog",
      icon: icon3,
    },
    143: {
      description: "Mist",
      icon: icon19,
    },
    122: {
      description: "Overcast",
      icon: icon1,
    },
    119: {
      description: "Cloudy",
      icon: icon6,
    },
    116: {
      description: "Partly Cloudy",
      icon: icon4,
    },
    113: {
      description: "Clear/Sunny",
      icon: icon18,
    },
  },
  wet: {
    389: {
      description: "Moderate or heavy rain in area with thunder",
      icon: icon14,
    },
    386: {
      description: "Patchy light rain in area with thunder",
      icon: icon15,
    },
    359: {
      description: "Torrential rain shower",
      icon: icon9,
    },
    356: {
      description: "Moderate or heavy rain shower",
      icon: icon9,
    },
    338: {
      description: "Heavy snow",
      icon: icon11,
    },
    335: {
      description: "Patchy heavy snow",
      icon: icon12,
    },
    332: {
      description: "Moderate snow",
      icon: icon12,
    },
    314: {
      description: "Moderate or Heavy freezing rain",
      icon: icon10,
    },
    311: {
      description: "Light freezing rain",
      icon: icon10,
    },
    308: {
      description: "Heavy rain",
      icon: icon9,
    },
    305: {
      description: "Heavy rain at times",
      icon: icon9,
    },
    302: {
      description: "Moderate rain",
      icon: icon9,
    },
    299: {
      description: "Moderate rain at times",
      icon: icon9,
    },
    296: {
      description: "Light rain",
      icon: icon2,
    },
    293: {
      description: "Patchy light rain",
      icon: icon5,
    },
    284: {
      description: "Heavy freezing drizzle",
      icon: icon8,
    },
    281: {
      description: "Freezing drizzle",
      icon: icon8,
    },
    266: {
      description: "Light drizzle",
      icon: icon5,
    },
    263: {
      description: "Patchy light drizzle",
      icon: icon5,
    },
    200: {
      description: "Thundery outbreaks in nearby",
      icon: icon17,
    },
    176: {
      description: "Patchy rain nearby",
      icon: icon2,
    },
  },
  snow: {
    395: {
      description: "Moderate or heavy snow in area with thunder",
      icon: icon16,
    },
    392: {
      description: "Patchy light snow in area with thunder",
      icon: icon16,
    },
    377: {
      description: "Moderate or heavy showers of ice pellets",
      icon: icon8,
    },
    374: {
      description: "Light showers of ice pellets",
      icon: icon8,
    },
    371: {
      description: "Moderate or heavy snow showers",
      icon: icon11,
    },
    368: {
      description: "Light snow showers",
      icon: icon12,
    },
    365: {
      description: "Moderate or heavy sleet showers",
      icon: icon11,
    },
    362: {
      description: "Light sleet showers",
      icon: icon12,
    },
    350: {
      description: "Ice pellets",
      icon: icon8,
    },
    329: {
      description: "Patchy moderate snow",
      icon: icon11,
    },
    326: {
      description: "Light snow",
      icon: icon12,
    },
    323: {
      description: "Patchy light snow",
      icon: icon12,
    },
    320: {
      description: "Moderate or heavy sleet",
      icon: icon12,
    },
    317: {
      description: "Light sleet",
      icon: icon12,
    },
    260: {
      description: "Freezing fog",
      icon: icon3,
    },
    230: {
      description: "Blizzard",
      icon: icon11,
    },
    227: {
      description: "Blowing snow",
      icon: icon12,
    },
    185: {
      description: "Patchy freezing drizzle nearby",
      icon: icon12,
    },
    182: {
      description: "Patchy sleet nearby",
      icon: icon12,
    },
    179: {
      description: "Patchy snow nearby",
      icon: icon12,
    },
  },
};

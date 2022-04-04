interface Data {
  id: number;
  mainImage: string;
  allImages: string[];
}

export const allData: Data[] = [
  {
    id: 1,
    mainImage: "https://i.ibb.co/Mf08rRY/GIS.png",
    allImages: [
      "https://i.ibb.co/7gMrsdx/Homepage.png",
      "https://i.ibb.co/NmTFhgF/About-Us.png",
      "https://i.ibb.co/D5kgzD4/Contact-Us.png",
      "https://i.ibb.co/H4NYqXV/Modal-Request-Code.png",
      "https://i.ibb.co/BKYs1td/Tracking-Page.png",
    ],
  },
  {
    id: 2,
    mainImage: "https://i.ibb.co/vZDP8cH/Ilvaneo-2.png",
    allImages: [
      "https://i.ibb.co/pvS0HNw/Homepage.png",
      "https://i.ibb.co/mG8bMTK/Pop-up.png",
      "https://i.ibb.co/X3bs6yx/Product-Detail.png",
      "https://i.ibb.co/kXx91w0/Product.png",
    ],
  },
  {
    id: 3,
    mainImage: "https://i.ibb.co/WkYFQY6/Ilvaneo-1.png",
    allImages: ["https://i.ibb.co/WkYFQY6/Ilvaneo-1.png"],
  },
  {
    id: 4,
    mainImage: "https://i.ibb.co/41DF90h/Pokedex.png",
    allImages: [
      "https://i.ibb.co/2smfFRf/1-Homepage.png",
      "https://i.ibb.co/bvrhZ2z/2-List-pokemon.png",
      "https://i.ibb.co/827tLyh/Compare-Pokemon.png",
      "https://i.ibb.co/5xnbkzg/Compare-Pokemon-1.png",
      "https://i.ibb.co/7KS54Wm/Compare-Pokemon-2.png",
      "https://i.ibb.co/pfYxwmK/Compare-Pokemon-3.png",
      "https://i.ibb.co/MDGFWxf/Detail-Mobile-Version.png",
      "https://i.ibb.co/TMwK4YW/List-pokemon-1.png",
      "https://i.ibb.co/Jsxv7jR/List-pokemon-2.png",
    ],
  },
  {
    id: 5,
    mainImage: "https://i.ibb.co/K07WXkM/Liburun.png",
    allImages: [
      "https://i.ibb.co/LvMwQp2/1-Splash-Screen.png",
      "https://i.ibb.co/2hNkR5g/Homepage.png",
      "https://i.ibb.co/yP77nn8/Detail-2.png",
      "https://i.ibb.co/y5qwbfD/Detail-Tour-Guide.png",
      "https://i.ibb.co/dKDGH4M/Nusantarapedia-Detail.png",
      "https://i.ibb.co/9YB5hwK/Nusantarapedia.png",
      "https://i.ibb.co/pR6PT5T/Provinsi.png",
      "https://i.ibb.co/VSH0Tq6/Rekomendasi.png",
      "https://i.ibb.co/S3rmGs3/Tour-Guide.png",
      "https://i.ibb.co/yBK3CNS/Camera.png",
      "https://i.ibb.co/pQ9Kfsh/hasil.png",
    ],
  },
  {
    id: 6,
    mainImage: "https://i.ibb.co/SfTt9Vp/Erick-Websit.png",
    allImages: [
      "https://i.ibb.co/RH0DHJ5/Desktop-Version.png",
      "https://i.ibb.co/fM19WsW/Desktop-Version-1.png",
      "https://i.ibb.co/JcBZJNR/Mobile-Version.png",
      "https://i.ibb.co/x3BHHv1/Mobile-Version-1.png",
      "https://i.ibb.co/y0N6vWD/Mobile-Version-2.png",
      "https://i.ibb.co/60ynRLT/Modal-Detail.png",
    ],
  },
];

export const fontSize = {
  hxl: "60px",
  h1: "40px",
  h2: "34px",
  h3: "28px",
  h4: "24px",
  h5: "20px",
  h6: "18px",
  body1: "16px",
  body2: "14px",
  caption: "12px",
  small: "10px",
};

export const lineHeight = {
  hxl: "72px",
  h1: "48px",
  h2: "40px",
  h3: "34px",
  h4: "30px",
  h5: "24px",
  h6: "22px",
  body1: "20px",
  body2: "18px",
  caption: "14px",
  small: "12px",
};

export const letterSpace = {
  hxl: "-0.56px",
  h1: "-0.48px",
  h2: "-0.36px",
  h3: "-0.24px",
  h4: "-0.24px",
  h5: "-0.24px",
  h6: "-0.24px",
  body1: "-0.12px",
  body2: "-0.08px",
  caption: "0",
  small: "0",
};

export const blackShades = {
  black800: "#1f1f1f",
  black700: "#333333",
  black600: "#545454",
  black500: "#757575",
  black400: "#afafaf",
  black300: "#e2e2e2",
  black200: "#eeeeee",
};

export const redShades = {
  red800: "#5a0a00",
  red700: "#870f00",
  red600: "#ab1300",
  red500: "#e11900",
  red400: "#e85c4a",
  red300: "#f1998e",
  red200: "#fed7d2",
  red100: "#ffefed",
};

export const greenShades = {
  green800: "#10462d",
  green700: "#156a41",
  green600: "#09864a",
  green500: "#05a357",
  green400: "#06c167",
  green300: "#66d19e",
  green200: "#addec9",
  green100: "#e6f2ed",
};

export const orangeShades = {
  orange800: "#672a16",
  orange700: "#9a3f21",
  orange600: "#c14f29",
  orange500: "#ff6937",
  orange400: "#fa9269",
  orange300: "#fabda5",
  orange200: "#ffe1d6",
  orange100: "#fef3ef",
};

export const blueShades = {
  blue800: "#102c60",
  blue700: "#174291",
  blue600: "#1e54b7",
  blue500: "#276ef1",
  blue400: "#5b91f5",
  blue300: "#a0bff8",
  blue200: "#d4e2fc",
  blue100: "#eff3fe",
};

export const yellowShades = {
  yellow800: "#674d1b",
  yellow700: "#997328",
  yellow600: "#bc8b2c",
  yellow500: "#ffc043",
  yellow400: "#ffcf70",
  yellow300: "#ffe3ac",
  yellow200: "#fff2d9",
  yellow100: "#fffaf0",
};

export const darkBlueShades = {
  darkBlue800: "#050c4d",
  darkBlue700: "#081270",
  darkBlue600: "#0a1899",
  darkBlue500: "#0e1fc1",
  darkBlue400: "#535fcf",
  darkBlue300: "#949ce3",
  darkBlue200: "#d2d7f0",
  darkBlue100: "#ebedfa",
};

export const purpleShades = {
  purple800: "#2e224c",
  purple700: "#453473",
  purple600: "#574191",
  purple500: "#7356bf",
  purple400: "#c1b5e3",
  purple300: "#949ce3",
  purple200: "#e3ddf2",
  purple100: "#f4f1fa",
};

export const brownShades = {
  brown800: "#3d281e",
  brown700: "#5c3c2e",
  brown600: "#744c3a",
  brown500: "#99644c",
  brown400: "#d2bbb0",
  brown300: "#ebe0db",
  brown200: "#ebe0db",
  brown100: "#f6f0ea",
};

export const grayShades = {
  gray800: "#3d281e",
  gray700: "#5c3c2e",
  gray600: "#744c3a",
  gray500: "#99644c",
  gray400: "#d2bbb0",
  gray300: "#ebe0db",
  gray200: "#ebe0db",
  gray100: "#f6f0ea",
};

export const breakPoint = {
  mobileXS: 280,
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  mobileXL: 576,
  tablet: 768,
  tabletXL: 900,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

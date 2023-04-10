enum Size {
  MOBILE_S = "320px",
  MOBILE_M = "375px",
  MOBILE_L = "425px",
  TABLET = "768px",
  LAPTOP = "1024px",
  LAPTOP_L = "1440px",
  DESKTOP = "2560px",
}

export const device = {
  mobileS: `(min-width: ${Size.MOBILE_S})`,
  mobileM: `(min-width: ${Size.MOBILE_M})`,
  mobileL: `(min-width: ${Size.MOBILE_L})`,
  tablet: `(min-width: ${Size.TABLET})`,
  laptop: `(min-width: ${Size.LAPTOP})`,
  laptopL: `(min-width: ${Size.LAPTOP_L})`,
  desktop: `(min-width: ${Size.DESKTOP})`,
};

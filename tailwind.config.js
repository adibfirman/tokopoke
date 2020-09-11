const THEME_CUSTOM = {
  "mycolor-10": "#F4E1F2",
  "mycolor-20": "#EECCED",
  "mycolor-50": "#765BAA",
  "mycolor-60": "#594E93",
  "mycolor-80": "#3F455D",
  "mycolor-90": "#8962B6",
  "mycolor-100": "#181B1D",
  "mycolor-120": "#5B4C95",
  "mycolor-150": "#44486D",
  "mycolor-180": "#2E343E",
  "mycolor-190": "#cfecff",
};

module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...THEME_CUSTOM,
    }),
    borderColor: { ...THEME_CUSTOM },
    textColor: { ...THEME_CUSTOM },
  },
};

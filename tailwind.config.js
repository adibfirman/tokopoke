const THEME_CUSTOM = {
  "mycolor-50": "#765BAA",
  "mycolor-60": "#594E93",
  "mycolor-80": "#3F455D",
  "mycolor-100": "#181B1D",
  "mycolor-150": "#44486D",
};

module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...THEME_CUSTOM,
    }),
    textColor: { ...THEME_CUSTOM },
  },
};

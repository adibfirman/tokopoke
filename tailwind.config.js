module.exports = {
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "mycolor-80": "#3F455D",
      "mycolor-100": "#7959AC",
    }),
  },
};

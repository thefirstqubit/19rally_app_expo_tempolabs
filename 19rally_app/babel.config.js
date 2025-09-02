module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "babel-preset-expo",
      "@babel/preset-typescript",
    ],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};

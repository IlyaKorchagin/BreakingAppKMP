console.log("🛠 Webpack polyfill config loaded");

config.resolve = config.resolve || {};
config.resolve.fallback = {
    ...config.resolve.fallback,
    os: require.resolve("os-browserify/browser"),
    path: require.resolve("path-browserify"),
};
module.exports = {
  webpack: (config) => {
    const newConfig = config;
    // Fixes npm packages that depend on `fs` module
    newConfig.node = {
      fs: 'empty',
    };

    return newConfig;
  },
};

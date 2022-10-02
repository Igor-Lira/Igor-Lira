const publicPath =
  process.env.NODE_ENV === "development" ? "/" : "/Igor-Lira/";
module.exports.publicPath = publicPath;
module.exports = {
  publicPath,
  devServer: {
    allowedHosts: "all",
  },
};

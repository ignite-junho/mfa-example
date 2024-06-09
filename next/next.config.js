const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          remotes: {
            reactRemote: "reactRemote@http://localhost:3002/remoteEntry.js",
          },
          filename: "static/chunks/remoteEntry.js",
        }),
        new FederatedTypesPlugin({
          federationConfig: {
            name: "host",
            remotes: {
              reactRemote: "reactRemote@http://localhost:3002/remoteEntry.js",
            },
            filename: "static/chunks/remoteEntry.js",
          },
        })
      );
    }

    return config;
  },
};

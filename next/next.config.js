// const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
// const { FederatedTypesPlugin } = require("@module-federation/typescript");

// const federationConfig = {
//   name: "host",
//   remotes: {
//     remote: "remote@http://localhost:8081/_next/static/chunks/remoteEntry.js",
//     microAppB: "microAppB@http://localhost:3001/remoteEntry.js",
//   },
//   shared: {},
//   filename: "static/chunks/remoteEntry.js",
// };

// module.exports = {
//   webpack(config, options) {
//     if (!options.isServer) {
//       config.plugins.push(
//         new NextFederationPlugin(federationConfig),
//         new FederatedTypesPlugin({ federationConfig })
//       );
//     }

//     return config;
//   },
// };

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

class TracerPlugin {
  constructor(serverless, options) {
    for (let hookName of Object.keys(serverless.pluginManager.hooks)) {
      for (let { pluginName, hook } of serverless.pluginManager.hooks[hookName]) {
        serverless.pluginManager.hooks[hookName] = {
          pluginName,
          hook: (...args) => {
            serverless.cli.log(`Running hook ${hookName} of plugin ${pluginName}.`);
            return hook(args);
          }
        }
      }
    }
  }
}

module.exports = TracerPlugin;

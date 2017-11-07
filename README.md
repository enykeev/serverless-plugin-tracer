# Serverless Tracer plugin

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![npm version](https://badge.fury.io/js/serverless-plugin-tracer.svg)](https://badge.fury.io/js/serverless-plugin-tracer)

Trace serverless hooks being invoked.

## Getting Started
Install the plugin
```
npm i --save-dev serverless-plugin-tracer
```

Configure your service to use the plugin

```yaml
service: my-service

provider:
  name: aws
  runtime: python2.7

...

plugins:
  - serverless-plugin-tracer
```

Then run any sls command
```
$ sls package
Serverless: Running hook before:package:cleanup of plugin Package.
Serverless: Running hook package:cleanup of plugin AwsPackage.
Serverless: Running hook aws:common:validate:validate of plugin AwsCommon.
Serverless: Running hook aws:common:cleanupTempDir:cleanup of plugin AwsCommon.
Serverless: Running hook package:initialize of plugin AwsPackage.
Serverless: Running hook package:setupProviderConfiguration of plugin AwsPackage.
Serverless: Running hook package:createDeploymentArtifacts of plugin Package.
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Running hook before:package:compileFunctions of plugin AwsPackage.
Serverless: Running hook package:compileFunctions of plugin AwsCompileFunctions.
Serverless: Running hook package:compileEvents of plugin AwsCompileCognitoUserPoolEvents.
Serverless: Running hook package:finalize of plugin AwsPackage.
Serverless: Running hook aws:package:finalize:mergeCustomProviderResources of plugin AwsPackage.
Serverless: Running hook aws:package:finalize:saveServiceState of plugin AwsPackage.
Serverless: Running hook aws:common:moveArtifactsToPackage:move of plugin AwsCommon.
```

const componentIndex = require("./component-index");

const componentDesign = require("./component-design-module");
const componentPublish = require("./component-publish-module");
const componentRuntime = require("./component-runtime-module")

const componentModel = require("./component-model");
const componentContract = require("./component-contract");
const componentHandler = require("./component-handler");
const componentModelBinder = require("./component-model-binder");

const reactIndex = require("./react-index");
const reactComponent = require("./react-component");
const reactComponentModule = require("./react-component-module");
const reactComponentBinder = require("./react-component-binder");

const runtimeIndex = require("./runtime-index");
const runtimeComponent = require("./runtime-component");

module.exports = [
    componentIndex,
    componentModel,
    componentContract,
    componentHandler,
    componentDesign,
    componentPublish,
    componentRuntime,
    componentModelBinder,
    reactComponent,
    reactIndex,
    reactComponentModule,
    reactComponentBinder,
    runtimeIndex,
    runtimeComponent,
  ];
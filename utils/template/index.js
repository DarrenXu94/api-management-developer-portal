const componentIndex = require("./component-index");

const componentModel = require("./component-model");
const componentHandler = require("./component-handler");
const componentDesign = require("./component-design-module");
const componentPublish = require("./component-publish-module");

const reactIndex = require("./react-index");
const reactComponent = require("./react-component");
const reactComponentModule = require("./react-component-module");
const reactComponentBinder = require("./react-component-binder");


module.exports = [
    componentIndex,
    componentModel,
    componentHandler,
    componentDesign,
    componentPublish,
    reactComponent,
    reactIndex,
    reactComponentModule,
    reactComponentBinder
  ];
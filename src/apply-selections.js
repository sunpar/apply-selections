import initialProperties from "./initial-properties.js";
import template from "./template.html";
import definition from "./definition.js";
import controllerfunc from "./controller.js";
import paint from "./paint.js";
import resize from "./resize.js";
import beforeDestroy from "./beforeDestroy.js";
import "./style.scss";

export default window.define(["jquery", "qlik"], function($, qlik) {
  const controller = controllerfunc(qlik);
  return {
    initialProperties: initialProperties,
    template: template,
    definition: definition(qlik),
    controller: controller,
    paint: paint,
    resize: resize,
    beforeDestroy: beforeDestroy(qlik)
  };
});

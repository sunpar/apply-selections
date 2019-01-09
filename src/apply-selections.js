import initialProperties from "./initial-properties.js";
import template from "./template.html";
import definition from "./definition.js";
import controller from "./controller.js";
import paint from "./paint.js";
import resize from "./resize.js";
import "./style.scss";

export default window.define(['jquery','qlik'], function($, qlik) {

  return {
    initialProperties: initialProperties,
    template: template,
    definition: definition(qlik),
    controller: controller,
    paint: paint,
    resize: resize
  };
});


// This is the style entry file
import "../styles/index.css";
import { Application } from "@hotwired/stimulus";
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers";

const application = Application.start();
const context = require.context("../controllers", true, /\.js$/);
application.load(definitionsFromContext(context));

// We can import other JS file as we like
import Jumbotron from "../components/jumbotron";

window.document.addEventListener("DOMContentLoaded", function () {
  window.console.log("dom ready");

  // Find elements and initialize
  for (const elem of document.querySelectorAll(Jumbotron.selector())) {
    new Jumbotron(elem);
  }
});

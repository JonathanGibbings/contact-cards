import "./form";
import "./submit";
import { Tooltip, Toast, Popover } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

import { initDb, getDb, postDb } from "./database";

window.addEventListener("load", function () {
  initDb();

  getDb();
  postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
  getDb();

  document.getElementById("logo").src = Logo;
  document.getElementById("bearThumbnail").src = Bear;
  document.getElementById("dogThumbnail").src = Dog;
});

// Import CSS files
import "../css/index.css";

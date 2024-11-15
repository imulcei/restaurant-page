import "./css/styles.css";
import { createHeader } from "./header.js";
import { createContent } from "./content.js";

function loadPage() {
    const body = document.querySelector("body");

    createHeader(body);
    createContent();
}

loadPage();
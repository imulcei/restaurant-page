export {createContent};
import { createDivWithId } from "./elements";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

const createContent = () => {
    const body = document.querySelector("body");
    createDivWithId(body, "content");
    createHomeImage();
    createHome();
    createMenu();
    createAbout();
}

const createHomeImage = () => {
    const content = document.querySelector("#content");
    createDivWithId(content, "img-home");
}
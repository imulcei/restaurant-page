export {createContent};
import { createDivWithId } from "./elements";
import { createHome } from "./home.js";
import { createMenu } from "./menu.js";
import { createAbout } from "./about.js";

const createContent = () => {
    const body = document.querySelector("body");
    createDivWithId(body, "content");
    createHome();
    createMenu();
    createAbout();
}
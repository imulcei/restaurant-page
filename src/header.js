export {createHeader};
import {createNav, createImage} from "./elements.js";
import logoImg from "./img/logo.png";

const createHeader = (parent) => {
    const header = document.createElement("header");

    createImage(header, "logo-nav", logoImg);

    createNav(header, [
        {text: "Home", id: "home"},
        {text: "Menu", id: "menu"},
        {text: "About", id: "about"}
    ]);

    parent.appendChild(header);
};
export {createAbout};
import { createDivWithId, createElement, createImage } from "./elements";
import img from "./img/logo-white.png";

const createAbout = () => {
    const content = document.querySelector("#content");
    const about = createDivWithId(content, "about");
    createImage(about, "logo-about", img);
    const aboutDesc = createDivWithId(about, "about-desc");
    createElement(aboutDesc, "h4", "CONTACT");
    createElement(aboutDesc, "p", "123 Rogers Ave, Brooklyn, NYC");
    createElement(aboutDesc, "p", "(555)-555-5555");
    createElement(aboutDesc, "p", "false.email@pulse.com");
}
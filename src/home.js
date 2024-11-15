export {createHome};
import { createDivWithId, createImage, createElement } from "./elements";
import imgHomepage from "./img/coffee-homepage.png";

const createHome = () => {
    const content = document.querySelector("#content");
    createDivWithId(content, "home");
    divHome();
}

const divHome = () => {
    const home = document.querySelector("#home");
    createDivWithId(home, "content-home");
    contentHome();
    coffeeHome();
}

const contentHome = () => {
    const divContentHome = document.querySelector("#content-home");

    createElement(divContentHome, "h1", "Good coffee, good vibes");
    createElement(divContentHome, "p", "At Pulse., we believe in the magic of a great cup of coffee. Nestled in the heart of Brooklyn, our cozy space is crafted for connection and comfort, inviting you to savor each sip. Join us for fresh brews and a warm welcome every day.");
    createElement(divContentHome, "button", "View Button");
}

const coffeeHome = () => {
    const home = document.querySelector("#home");
    createDivWithId(home, "coffee-home");
    imageCoffeeHome();
}

const imageCoffeeHome = () => {
    const coffeeHome = document.querySelector("#coffee-home");
    createImage(coffeeHome, "coffee-homepage", imgHomepage);
}
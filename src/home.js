export {createHome};
import { createDivWithId, createImage, createElement } from "./elements";
import imgHomepage from "./img/coffee-homepage.png";

const createHome = () => {
    const content = document.querySelector("#content");
    createDivWithId(content, "img-home");
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
    const button = createElement(divContentHome, "button", "View Menu");

    button.addEventListener("click", () => {
        const menuElement = document.querySelector("#menu");
        if (menuElement) {
            const headerHeight = 40; 
            const menuPosition = menuElement.offsetTop - headerHeight;

            window.scrollTo({
                top: menuPosition,
                behavior: "smooth"
            });
        }
    });
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
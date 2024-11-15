export {createNav, 
    createImage, 
    createDivWithId, 
    createDivWithClass,
    createElement,
    createMenuCard};

const createNav = (parent, navElements) => {
    const nav = document.createElement("nav");

    const navArray = [];

    navElements.forEach(element => {
        const button = document.createElement("button");
        button.textContent = element.text;
        if (element.id) {
            button.addEventListener("click", () => {
                const targetSection = document.getElementById(element.id);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
        nav.appendChild(button);
        navArray.push(button);
    });

    parent.appendChild(nav);
    return navArray;
};

const createImage = (parent, classes, src) => {
    const image = document.createElement("img");

    image.setAttribute("class", classes);
    image.setAttribute("src", src);

    parent.appendChild(image);
    return image;
};

const createDivWithId = (parent, id) => {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    parent.appendChild(div);
    return div;
}

const createDivWithClass = (parent, classes) => {
    const div = document.createElement("div");
    div.setAttribute("class", classes);
    parent.appendChild(div);
    return div;
}

const createElement = (parent, box, text) => {
    const element = document.createElement(`${box}`);
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

const createMenuCard = (parent, coffee) => {
    const card = createDivWithClass(parent, "card");
    createImage(card, "coffee-menu", coffee.src);
    const coffeeDesc = createDivWithClass(card, "coffee-desc");
    createElement(coffeeDesc, "h3", coffee.name);
    createElement(coffeeDesc, "p", coffee.text);
    const price = createDivWithClass(coffeeDesc, "coffee-price");
    price.textContent = coffee.price;
}
export {createMenu};
import { createDivWithId, createElement, createMenuCard } from "./elements";
import {coffee} from "./coffee-items.js";

const createMenu = () => {
    const content = document.querySelector("#content");
    createDivWithId(content, "menu");

    divMenuList();
}

const divMenuList = () => {
    const menu = document.querySelector("#menu");

    createElement(menu, "h1", "MENU");
    createDivWithId(menu, "menu-list");

    createCards();
}

const createCards = () => {
    const menuList = document.querySelector("#menu-list");
    coffee.forEach(element => {
        createMenuCard(menuList, element);
    });
}
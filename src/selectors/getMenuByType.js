import { menu } from "../data/menu";

export const getMenuByType = (type) => {
    
    const validMenu = ["taco", "agua", "tamal", "antojito"];

    if (!validMenu.includes(type)){
        throw new Error(`${type} is not a valid type of menu`);
    }

    return menu.filter(menu => menu.type === type);
}
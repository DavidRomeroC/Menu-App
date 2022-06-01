import { menu } from "../data/menu";

export const getMenuByType = (type) => {
    
    const validMenu = ["taco", "agua", "tamal", "antojito"];

    if (!validMenu.includes(type)){
        throw new Error(`${type} is not a valid publisher`)
    }

    return menu.filter(menu => menu.type === type);
}
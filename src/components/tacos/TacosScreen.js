import { MenuList } from "../menu/MenuList"

export const TacosScreen = () => {
    return (
        <div className="menu__main-container">
            <h1>Tacos</h1>
            <MenuList type={"taco"}/>
        </div>
    )
}

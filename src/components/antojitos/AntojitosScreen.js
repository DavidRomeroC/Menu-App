import { MenuList } from "../menu/MenuList"

export const AntojitosScreen = () => {
    return (
        <div className="menu__main-container">
            <h1>Antojitos</h1>
            <MenuList type={"antojito"}/>
        </div>
    )
}

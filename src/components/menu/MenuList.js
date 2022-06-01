import { useMemo } from "react";
import { getMenuByType } from "../../selectors/getMenuByType";
import { CategoryCard } from "./CategoryCard";
import { useNavigate } from "react-router-dom";

export const MenuList = ({ type }) => {

    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1);
    };

    const menu = useMemo(() => getMenuByType(type), [type]);


    return (

        <div className="menu__main">
            <div className="menu__brand">
                <button
                    onClick={handleReturn}
                ><img src={("./assets/back.svg")} alt="back" />
                </button>
                <img src={("./assets/logo-menu.svg")} alt="logo" />
            </div>
            {
                menu.map(m => (
                    <CategoryCard key={m.id}
                        {...m}
                    />
                ))
            }
        </div>

    )
}

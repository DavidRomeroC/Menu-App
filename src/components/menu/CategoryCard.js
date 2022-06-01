
export const CategoryCard = ({ id, dish, description, type, name_img, price }) => {
    
    const img = `./assets/${name_img}.jpg`;
    
    return (
        <div className="menu__container">
            <div className="menu__img-dish">
                <img src={`.${img}`} alt={dish} />
            </div>
            <div className="menu__description-container">
                <h3>{dish}</h3>
                <p>{description}</p>
                <p className="price">{price}</p>
            </div>
        </div>
    )
}

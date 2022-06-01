import { Link } from "react-router-dom"

export const MainMenuScreen = () => {



    return (
        <div className="mainmenu__main-container">
            <div className="mainmenu__background">
                <div className="mainmenu__logo">
                    <img src={("./assets/logo-menu.svg")} alt="logo" />
                </div>
            </div>
            <h1>Nuestro Menú</h1>
            <div className="mainmenu__nav-container">
                <nav className="mainmenu__nav">
                    <Link className="link antojito" to="/antojitos">Antojitos</Link>
                    <Link className="link tamal" to="/tamales">Tamales</Link>
                    <Link className="link taco" to="/tacos">Tacos</Link>
                    <Link className="link bebida" to="/bebidas">Bebidas</Link>
                </nav>
                <div className="mainmenu__contact-contain">
                    <p>Contactanos</p>
                    <div className="mainmenu__contact-logo">
                        <img src={("./assets/whatsapp-logo.svg")} alt="logo-whatsapp" />
                        <p> +52 232 227 15 10 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

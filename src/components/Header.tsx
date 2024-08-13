import { Link, useNavigate } from "react-router-dom";
import { ToggleBtn } from ".";
import { productCategories } from "../util";
import { useState } from "react";

export function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [isSearchShown, setIsSearchShown] = useState(false);

  const handleProductsHover = () => {
    setShowMenu(true);
  };

  const handleMenuUnhover = () => {
    setShowMenu(false);
  };

  const handleCategoryClick = (category: string) => {
    navigate(`/produtos/${category}`);
  };

  const categories = productCategories.map((category, i) => (
    <li key={i} onClick={handleCategoryClick.bind(self, category)}>
      {category}
    </li>
  ));

  const handleSearchHover = () => {
    setIsSearchShown((prevVal) => !prevVal);
  };

  return (
    <>
      <header className="header">
        <Link to={"/"}>
          <div className="header__logo-container">
            <img className="header__logo" src="logo.png" />
          </div>
        </Link>
        <ul>
          <li className="header__products" onMouseEnter={handleProductsHover}>
            <Link to={"/produtos"}>PRODUTOS</Link>
          </li>
          <li>
            <a href="#how-it-works">COMO FUNCIONA</a>
          </li>
          <li>
            <a href="https://mpabrasil.org.br/" target="_blank">
              SITE OFICIAL
            </a>
          </li>
        </ul>
        <div>
          <div>
            <ion-icon name="person-sharp"></ion-icon>
          </div>
          <div>
            <div
              className={`header__search-container ${
                isSearchShown ? "header__search-container--show" : ""
              }`}
            >
              <form action="/produtos" role="search" method="GET">
                <input type="search" name="query" />
              </form>
            </div>
            <div onMouseEnter={handleSearchHover}>
              <ion-icon name="search-sharp"></ion-icon>
            </div>
          </div>
          <div>
            <ToggleBtn />
          </div>
          <div>
            <Link to={"/cesta"}>
              <ion-icon name="basket-sharp"></ion-icon>
            </Link>
          </div>
        </div>
      </header>
      <div
        className={`menu-dropdown ${showMenu ? "menu-dropdown-show" : ""}`}
        onMouseLeave={handleMenuUnhover}
      >
        <div>
          <span>CATEGORIA</span>
          <div>
            <ul>{categories}</ul>
          </div>
        </div>
        <div>
          <span>
            O valor já está de acordo com o preço de entrega por cidade
          </span>
          <span>Os tipos e quantidades variam de acordo com cada semana</span>
        </div>
      </div>
    </>
  );
}

import { Link, useNavigate } from "react-router-dom";
import { ToggleBtn } from ".";
import { productCategories } from "../util";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuHover = () => {
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
      <a href={`/produtos/${category}`}>{category}</a>
    </li>
  ));

  const handleSearchHover = () => {
    setShowSearch(true);
  };

  const handleSearchUnhover = () => {
    setShowSearch(false);
  };

  const handleToggleDropdownClick = () => {
    setShowDropdownMobile((prev) => !prev);
  };

  return (
    <>
      <div className="header-container" menu-dropdown-show={`${showMenu}`}>
        <header className="header">
          <div className="header__logo-container">
            <Link to={"/"}>
              <img src="logo.png" />
            </Link>
          </div>
          <div
            className="header__toggle-dropdown"
            onClick={handleToggleDropdownClick}
          >
            <ion-icon name="menu-sharp"></ion-icon>
          </div>
        </header>
        <div
          className={
            showDropdownMobile ? "header-dropdown-mobile" : "header-dropdown"
          }
        >
          <ul>
            <li
              className="header-dropdown-products"
              onMouseEnter={handleMenuHover}
            >
              <Link to={"/produtos"}>PRODUTOS</Link>
              <div
                className={`menu-dropdown ${
                  showMenu ? "menu-dropdown-show" : "menu-dropdown-hidden"
                }`}
                onMouseLeave={handleMenuUnhover}
              >
                <div className="menu-dropdown__category menu-dropdown-hidden__category menu-dropdown-show__category">
                  <span>CATEGORIA</span>
                  <div>
                    <ul>{categories}</ul>
                  </div>
                </div>
                <div className="menu-dropdown__info menu-dropdown-hidden__info menu-dropdown-show__info">
                  <span>
                    O valor já está de acordo com o preço de entrega por cidade
                  </span>
                  <span>
                    Os tipos e quantidades variam de acordo com cada semana
                  </span>
                </div>
              </div>
            </li>
            <li>
              <a href={"/#how-it-works"}>COMO FUNCIONA</a>
            </li>
            <li>
              <a href="https://mpabrasil.org.br/" target="_blank">
                SITE OFICIAL
              </a>
            </li>
          </ul>
          <div className="header-dropdown-utilitaries">
            <div className="header-dropdown-utilitaries--login">
              <ion-icon name="person-sharp"></ion-icon>
            </div>
            <div
              className={
                showSearch
                  ? "header-dropdown-utilitaries--search-show"
                  : "header-dropdown-utilitaries--search"
              }
              onMouseEnter={handleSearchHover}
              onMouseLeave={handleSearchUnhover}
            >
              <form action="/produtos" role="search" method="GET">
                <input
                  className="input"
                  type="search"
                  name="query"
                  placeholder="O que você está buscando?"
                />
              </form>
              <div>
                <ion-icon name="search-sharp"></ion-icon>
              </div>
            </div>
            <div className="header-dropdown-utilitaries--toggle-btn">
              <ToggleBtn />
            </div>
            <div>
              <Link to={"/cesta"}>
                <ion-icon name="basket-sharp"></ion-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

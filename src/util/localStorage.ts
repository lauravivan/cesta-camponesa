export function getBasket() {
  const basket: BasketType[] =
    JSON.parse(localStorage.getItem("basket")!) || [];

  return basket;
}

export function setBasket(basket: BasketType[]) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

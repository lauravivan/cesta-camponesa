import { DEFAULT_SORT, DEFAULT_FILTER } from "./variable";

export function getBasket() {
  const basket: BasketType[] =
    JSON.parse(localStorage.getItem("basket")!) || [];

  return basket;
}

export function getSort() {
  const sort: string = localStorage.getItem("cc-sortSelected") || DEFAULT_SORT;

  return sort;
}

export function getFilters() {
  const filter: FilterType[] = JSON.parse(
    localStorage.getItem("cc-filtersSelected")!
  ) || [DEFAULT_FILTER];

  return filter;
}

export function setBasket(basket: BasketType[]) {
  localStorage.setItem("basket", JSON.stringify(basket));
}

export function setSort(sort: string) {
  localStorage.setItem("cc-sortSelected", sort);
}

export function setFilters(filter: FilterType[]) {
  localStorage.setItem("cc-filtersSelected", JSON.stringify(filter));
}

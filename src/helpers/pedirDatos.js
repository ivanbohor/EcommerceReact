import { popularProducts } from "../data";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(popularProducts);
    }, 1000);
  });
};

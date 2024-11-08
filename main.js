import { Product } from "./Products";

const pData = {
  products: [
    {
      amazonChoice: false,
      amazonPrime: true,
      asin: "B087623TMW",
      bestSeller: false,
      price: {
        before_price: 0,
        currency: "USD",
        current_price: "399.00",
        discounted: false,
        savings_amount: 0,
        savings_percent: 0,
      },
      reviews: {
        rating: 4.6,
        total_reviews: 73,
      },
      score: "335.80",
      sponsored: false,
      thumbnail:
        "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
      title:
        "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
      url: "https://www.amazon.com/dp/B087623TMW",
    },
  ],
};

const products = pData.products.map(
  (productData) =>
    new Product(
      productData.amazonChoice,
      productData.amazonPrime,
      productData.asin,
      productData.bestSeller,
      productData.price,
      productData.reviews,
      productData.score,
      productData.sponsored,
      productData.thumbnail,
      productData.title,
      productData.url
    )
);

const productList = document.createElement("ul");

// Crear los elementos de lista y agregarlos al DOM
products.forEach((product) => {
  const li = document.createElement("li");
  li.textContent = product.title; // Puedes agregar otros atributos aquí
  productList.appendChild(li);
});
// Luego agregar productList al DOM
document.body.appendChild(productList);

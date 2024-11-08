import { Products } from "./Products";

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

// Crear instancia del producto
const p1 = new Products(
  pData.products[0].amazonChoice,
  pData.products[0].amazonPrime,
  pData.products[0].asin,
  pData.products[0].bestSeller,
  pData.products[0].price,
  pData.products[0].reviews,
  pData.products[0].score,
  pData.products[0].sponsored,
  pData.products[0].thumbnail,
  pData.products[0].title,
  pData.products[0].url
);

const p1Array = [
  p1.title,
  p1.url,
  p1.thumbnail,
  p1.score,
  p1.reviews.total_reviews,
];

// Crear lista de productos
const productList = document.createElement("ul");

p1Array.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item; // Directamente asignar el texto
  productList.appendChild(li);
});

// Luego agregar productList al DOM
document.body.appendChild(productList);

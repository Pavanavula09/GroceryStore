// Data for products
const products = {
  Beverages: [
    { name: "Monster Drink", price: "1.99 GBP", image: "Products/monster-drink.png" },
    { name: "Lucozade Drink", price: "2.49 GBP", image: "Products/lucozade-drink.jpeg" },
    { name: "L'or Coffee", price: "3.49 GBP", image: "Products/lor-coffee.jpg" },
    { name: "Rossa Coffee", price: "4.99 GBP", image: "Products/rossa-coffee.jpg" },
    { name: "Caprisun Juice", price: "2.99 GBP", image: "Products/capriisun-juice.jpeg" },
    { name: "Robinsons Juice", price: "3.99 GBP", image: "Products/robinsons-juice.jpeg" },
  ],
  Confectionery: [
    { name: "Galaxy Chocolate", price: "1.29 GBP", image: "Products/galaxy-chocolate.jpg" },
    { name: "Twix Chocolate", price: "1.49 GBP", image: "Products/twix-chocolate.jpg" },
    { name: "Extra Gum", price: "0.99 GBP", image: "Products/extra-gum.jpg" },
    { name: "Hubba Bubba Gum", price: "1.09 GBP", image: "Products/hubba-gum.jpg" },
    { name: "Werthers Caramel", price: "1.59 GBP", image: "Products/wertherrs-jelly.png" },
    { name: "Haribos Jelly", price: "1.89 GBP", image: "Products/haribos-jelly.jpg" },
  ],
  Snacks: [
    { name: "Pringles Crisps", price: "1.99 GBP", image: "Products/pringles-crisps.jpeg" },
    { name: "Tayto Crisps", price: "2.49 GBP", image: "Products/tayto-crisps.jpg" },
    { name: "Bakehouse Cookies", price: "2.99 GBP", image: "Products/bakehouse-cookies.jpeg" },
    { name: "McVities Cookies", price: "3.49 GBP", image: "Products/mcvities-cookies.jpeg" },
    { name: "Jacobs Crackers", price: "2.59 GBP", image: "Products/jacobs-crackers.jpg" },
    { name: "Ritz Crackers", price: "2.89 GBP", image: "Products/ritz-crackers.jpg" },
  ],
  Dairy: [
    { name: "Brown Eggs", price: "2.99 GBP", image: "Products/brown-eggs.jpeg" },
    { name: "White Eggs", price: "2.99 GBP", image: "Products/white-eggs.jpg" },
    { name: "Cheddar Cheese", price: "4.99 GBP", image: "Products/cheddar-cheese.jpg" },
    { name: "Mozzarella Cheese", price: "4.99 GBP", image: "Products/mozzarella-cheese.jpeg" },
    { name: "Evaporated Milk", price: "1.99 GBP", image: "Products/carnation-milk.jpg" },
    { name: "Coconut Milk", price: "2.29 GBP", image: "Products/coconut-milk.jpeg" },
  ],
  Baking: [
    { name: "Butter Croissant", price: "2.49 GBP", image: "Products/butter-croissant.jpg" },
    { name: "Chocolate Croissant", price: "2.79 GBP", image: "Products/chocolate-croissant.jpeg" },
    { name: "Brown Bread", price: "1.99 GBP", image: "Products/brown-bread.jpg" },
    { name: "White Bread", price: "2.19 GBP", image: "Products/white-bread.jpg" },
    { name: "Vanilla Cake", price: "3.99 GBP", image: "Products/vanilla-cake.jpg" },
    { name: "Cupcakes", price: "4.49 GBP", image: "Products/cupcakes-cake.jpeg" },
  ],
  "Fresh Grocery": [
    { name: "Vegetables", price: "3.99 GBP", image: "Products/vegetables.jpeg" },
    { name: "Fruits", price: "4.99 GBP", image: "Products/fruits.jpeg" },
    { name: "Mix Nuts", price: "5.99 GBP", image: "Products/mixnuts.jpg" },
    { name: "Pickles", price: "2.49 GBP", image: "Products/pickels.jpg" },
    { name: "Jams & Butter", price: "3.49 GBP", image: "Products/jams-butter.jpeg" },
    { name: "Fresh Meat", price: "8.99 GBP", image: "Products/meat.jpeg" },
  ],
  "Personal Care": [
    { name: "Pantene Shampoo", price: "4.99 GBP", image: "Products/pantene-shampoo.jpeg" },
    { name: "Dove Shampoo", price: "4.99 GBP", image: "Products/dove-shampoo.png" },
    { name: "Nivea Moisturizing Cream", price: "6.99 GBP", image: "Products/nivea-skincare.jpg" },
    { name: "Vaseline Lip Therapy", price: "6.99 GBP", image: "Products/vaseline-skincare.jpg" },
    { name: "Astonish Handwash", price: "2.99 GBP", image: "Products/astonish-handwash.jpg" },
    { name: "Dove Handwash", price: "1.49 GBP", image: "Products/dove-handwash.jpg" },
  ]
};
// Data for products (same as provided)

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("product-container");

  for (const category in products) {
    const section = document.createElement("div");
    section.classList.add("category");

    const title = document.createElement("h2");
    title.textContent = category;
    section.appendChild(title);

    products[category].forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;

      img.style.width = "100%";
      img.style.height = "200px";
      img.style.objectFit = "contain";
      img.style.backgroundColor = "#fff";

      const name = document.createElement("div");
      name.classList.add("name");
      name.textContent = product.name;

      const price = document.createElement("div");
      price.classList.add("price");
      price.textContent = product.price;

      productDiv.appendChild(img);
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      section.appendChild(productDiv);
    });

    container.appendChild(section);
  }
});

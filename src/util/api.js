export default async function fetchData(query = "") {
  const url = query.trim()
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}&limit=0`
    : "https://dummyjson.com/products?limit=0";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to load products");
  }

  const data = await response.json();
  return data.products;
}

export async function getItemDetails(id) {
  const response = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  if (!response.ok) {
    throw new Error("Unable to load product");
  }

  return response.json();
}
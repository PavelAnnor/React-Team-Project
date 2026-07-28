import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemDetails } from "../util/api";

function ItemDetails() {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadItem() {
      try {
        const data = await getItemDetails(id);
        setItem(data);
      } catch {
        setError("Unable to load product.");
      }
    }

    loadItem();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>{item.title}</h1>

      <img
        src={item.thumbnail}
        alt={item.title}
        width="300"
      />

      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <p>Rating: {item.rating}</p>
      <p>Category: {item.category}</p>
    </main>
  );
}

export default ItemDetails;
import React, { useEffect, useState } from "react";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let url = `https://dummyjson.com/products`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setProducts(data.products); // Set the state with data.products
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.thumbnail} alt={product.title} />
          </div>
        ))
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
};

export default Test;

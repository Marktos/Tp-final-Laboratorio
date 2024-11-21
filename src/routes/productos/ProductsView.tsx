import ProductCard from "../../components/ProductoCard";



export default function ProductsView() {

  const products = [
    { name: 'Product 1', description: 'Description 1', quantity: 10, price: 15.99 },
    { name: 'Product 2', description: 'Description 2', quantity: 5, price: 24.5 },
    { name: 'Product 3', description: 'Description 3', quantity: 7, price: 8.99 },
    { name: 'Product 3', description: 'Description 3', quantity: 7, price: 8.99 },
    { name: 'Product 3', description: 'Description 3', quantity: 7, price: 8.99 },
    { name: 'Product 3', description: 'Description 3', quantity: 7, price: 8.99 },
    { name: 'Product 3', description: 'Description 3', quantity: 7, price: 8.99 },
  ];

  return (
    <>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          description={product.description}
          quantity={product.quantity}
          price={product.price}
        />
      ))}
    </>
  )
}
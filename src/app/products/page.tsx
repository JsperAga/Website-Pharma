
export default function Product() {
  const products = [
    { name: 'Hair', description: 'Shampoo, conditioner, and hair oils' },
    { name: 'Soap', description: 'Natural and scented soaps' },
    { name: 'Food', description: 'Healthy snacks and supplements' },
  ];

  return (
    <div className="store-container">
      <h1 className="store-title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.name} className="product-card">
            <div className="product-image">📦</div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <button className="buy-button">View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

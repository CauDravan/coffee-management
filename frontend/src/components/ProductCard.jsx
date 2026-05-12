const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />

      <h2 className="text-xl font-semibold mt-3">
        {product.name}
      </h2>

      <p className="text-gray-500">
        {product.price} VND
      </p>

      <button className="mt-3 bg-amber-900 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
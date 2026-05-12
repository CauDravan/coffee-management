import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Latte",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c"
  },

  {
    id: 2,
    name: "Espresso",
    price: 40000,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  }
];

const HomePage = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8">
          Our Coffee
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
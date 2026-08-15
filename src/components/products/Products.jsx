import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/category/groceries"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log("Added to cart:", product);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="mb-8 text-3xl font-bold">منتجاتنا</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <figure className="h-64 bg-white p-6">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title line-clamp-2">
                {product.title}
              </h2>
              <p className="line-clamp-3 text-sm text-base-content/70">
                {product.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xl font-bold text-primary">
                  ${product.price}
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    إضافة للسلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
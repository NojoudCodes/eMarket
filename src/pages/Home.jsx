import hero from "../assets/images/hero.jpg";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <>
      <header
        className="hero min-h-screen justify-start"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-content w-full justify-start px-6 md:px-12 lg:px-24">
          <div className="max-w-xl text-right">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl lg:text-7xl">
              كل احتياجاتك اليومية في مكان واحد
            </h1>
            <p className="mb-5 text-lg">
              تسوّق منتجاتك المفضلة بأسعار مميزة، ونوصّلها إلى باب منزلك بكل
              سهولة.
            </p>
            <button className="btn btn-primary">
              تسوق الآن
            </button>
          </div>
        </div>
      </header>
      <Products />
    </>
  );
};

export default Home;
import { Link } from "react-router";

const About = () => {
  return (
    <main className="bg-base-200">
      {/* Hero */}
      <section className="bg-primary text-primary-content">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            عن إي ماركت
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg opacity-90">
            كل احتياجاتك اليومية في مكان واحد، بجودة عالية وأسعار
            مميزة، ونوصّلها إلى باب منزلك بكل سهولة.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">

          <div>
            <div className="badge badge-primary mb-4">
              قصتنا
            </div>

            <h2 className="text-3xl font-bold md:text-4xl">
              التسوق اليومي أصبح أسهل
            </h2>

            <p className="mt-5 leading-8 text-base-content/70">
              في إي ماركت، نؤمن أن التسوق للمنزل يجب أن يكون بسيطاً
              وسريعاً ومريحاً. لذلك أنشأنا منصة تجمع المنتجات التي
              تحتاجها في حياتك اليومية، من المواد الغذائية إلى
              مستلزمات المنزل والعناية الشخصية.
            </p>

            <p className="mt-4 leading-8 text-base-content/70">
              هدفنا هو توفير تجربة تسوق سهلة وموثوقة، مع منتجات
              عالية الجودة وأسعار مناسبة وخدمة توصيل تساعدك على
              توفير وقتك.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="mb-4 text-6xl">
                  🛒
                </div>

                <h3 className="card-title text-2xl">
                  إي ماركت
                </h3>

                <p className="text-base-content/70">
                  تسوق بسهولة، واستلم طلبك عند باب منزلك.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="bg-base-100">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">
              لماذا إي ماركت؟
            </h2>

            <p className="mt-3 text-base-content/60">
              نسعى دائماً لتقديم أفضل تجربة تسوق لعملائنا.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Quality */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="text-5xl">
                  🥬
                </div>
                <h3 className="card-title mt-2">
                  جودة عالية
                </h3>
                <p className="text-base-content/70">
                  نحرص على توفير منتجات ذات جودة عالية تلبي
                  احتياجاتك اليومية.
                </p>
              </div>
            </div>
            {/* Prices */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="text-5xl">
                  💰
                </div>
                <h3 className="card-title mt-2">
                  أسعار مميزة
                </h3>
                <p className="text-base-content/70">
                  نقدم لك أسعاراً مناسبة وعروضاً تساعدك على
                  التسوق بميزانية أفضل.
                </p>
              </div>
            </div>

            {/* Delivery */}
            <div className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="text-5xl">
                  🚚
                </div>
                <h3 className="card-title mt-2">
                  توصيل سريع
                </h3>
                <p className="text-base-content/70">
                  نعمل على إيصال طلباتك بسرعة وسهولة إلى باب منزلك.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="stats stats-vertical w-full shadow md:stats-horizontal">
          <div className="stat place-items-center text-center">
            <div className="stat-title">
              المنتجات
            </div>
            <div className="stat-value text-primary">
              1000+
            </div>
            <div className="stat-desc">
              منتج متوفر
            </div>
          </div>
          <div className="stat place-items-center text-center">
            <div className="stat-title">
              العملاء
            </div>
            <div className="stat-value text-primary">
              5K+
            </div>
            <div className="stat-desc">
              عميل سعيد
            </div>
          </div>
          <div className="stat place-items-center text-center">
            <div className="stat-title">
              التوصيل
            </div>
            <div className="stat-value text-primary">
              24/7
            </div>
            <div className="stat-desc">
              لخدمتك دائماً
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-primary text-primary-content">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            جاهز لبدء التسوق؟
          </h2>
          <p className="mt-4 opacity-90">
            اكتشف منتجاتنا واستمتع بتجربة تسوق سهلة ومريحة.
          </p>
          <Link
            to="/"
            className="btn mt-6 bg-white text-primary hover:bg-base-200">
            ابدأ التسوق
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
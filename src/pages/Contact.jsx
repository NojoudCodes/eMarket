
const Contact = () => {
  return (
    <main className="min-h-screen bg-base-200 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        {/* Page heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            تواصل معنا
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            لديك سؤال أو تحتاج إلى مساعدة؟ تواصل معنا وسنكون سعداء بمساعدتك.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* Contact information */}
          <div className="space-y-6">

            <div className="card bg-primary text-primary-content shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-2xl">
                  نحن هنا لمساعدتك
                </h2>

                <p className="mt-2 opacity-90">
                  فريق إي ماركت جاهز للإجابة عن استفساراتك ومساعدتك
                  في أي مشكلة تواجهها.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm">
              <div className="card-body gap-5">

                <div>
                  <span className="text-sm text-base-content/60">
                    البريد الإلكتروني
                  </span>
                  <p className="mt-1 font-medium">
                    support@emarket.com
                  </p>
                </div>

                <div>
                  <span className="text-sm text-base-content/60">
                    رقم الهاتف
                  </span>
                  <p className="mt-1 font-medium">
                    +966 50 123 4567
                  </p>
                </div>

                <div>
                  <span className="text-sm text-base-content/60">
                    ساعات العمل
                  </span>
                  <p className="mt-1 font-medium">
                    يومياً من 9 صباحاً إلى 10 مساءً
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Contact form */}
          <div className="card bg-base-100 shadow-lg lg:col-span-2">
            <form
              className="card-body"
            >
              <h2 className="card-title mb-4 text-2xl">
                أرسل لنا رسالة
              </h2>

              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    الاسم
                  </legend>

                  <input
                    type="text"
                    name="name"
                    placeholder="أدخل اسمك"
                    className="input w-full"
                    required
                  />
                </fieldset>

                {/* Email */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    البريد الإلكتروني
                  </legend>

                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="input w-full"
                    required
                  />
                </fieldset>

              </div>

              {/* Subject */}
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend">
                  الموضوع
                </legend>

                <input
                  type="text"
                  name="subject"
                  placeholder="ما هو موضوع رسالتك؟"
                  className="input w-full"
                  required
                />
              </fieldset>

              {/* Message */}
              <fieldset className="fieldset mt-2">
                <legend className="fieldset-legend">
                  الرسالة
                </legend>

                <textarea
                  name="message"
                  placeholder="اكتب رسالتك هنا..."
                  className="textarea h-40 w-full"
                  required
                />
              </fieldset>

              {/* Submit */}
              <div className="card-actions mt-5 justify-start">
                <button
                  type="submit"
                  className="btn btn-primary px-8"
                >
                  إرسال الرسالة
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Contact;
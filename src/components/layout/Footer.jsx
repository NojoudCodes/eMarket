import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 p-10">
      <nav className="flex flex-wrap justify-center gap-6">
        <Link
          to="/"
          className="link link-hover text-base font-medium"
        >
          الرئيسية
        </Link>
        <Link
          to="/about"
          className="link link-hover text-base font-medium"
        >
          من نحن
        </Link>
        <Link
          to="/contact"
          className="link link-hover text-base font-medium"
        >
          تواصل معنا
        </Link>
      </nav>

      <div>
        <p className="font-semibold">
          إي ماركت
          <span dir="ltr"> © </span>
          ٢٠٢٦ — جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const cartitems = useSelector(
    (state) => state.cart.cartItems || []
  );
  const totalCount = cartitems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartitems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          إي ماركت
        </Link>
      </div>

      {/* Desktop Categories */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">الكل</Link>
          </li>
          <li>
            <Link to="/">المدرسة</Link>
          </li>
          <li>
            <Link to="/">احتياجات المنزل</Link>
          </li>
          <li>
            <Link to="/">سناكات</Link>
          </li>
          <li>
            <Link to="/">الجمال</Link>
          </li>
          <li>
            <Link to="/">الحيوانات</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Categories */}
      <div className="lg:hidden">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost">
            القائمة
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/">الكل</Link>
            </li>
            <li>
              <Link to="/">المدرسة</Link>
            </li>
            <li>
              <Link to="/">احتياجات المنزل</Link>
            </li>
            <li>
              <Link to="/">سناكات</Link>
            </li>
            <li>
              <Link to="/">الجمال</Link>
            </li>
            <li>
              <Link to="/">الحيوانات</Link>
            </li>
          </ul>
        </details>
      </div>

      {/* Cart */}
      <div className="flex-none ms-1">
        <div className="dropdown dropdown-end">
          {/* Cart Button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <IoCartOutline size={20} />
              <span className="badge badge-sm indicator-item">
                {totalCount}
              </span>
            </div>
          </div>
          {/* Cart Dropdown */}
          <div
            tabIndex={0}
            className="card card-sm dropdown-content bg-base-100 z-10 mt-3 w-80 shadow"
          >
            <div className="card-body">
              {/* Cart Header */}
              <span className="text-lg font-bold">
                السلة ({totalCount})
              </span>
              {/* Products */}
              <div className="max-h-64 overflow-y-auto">
                {cartitems.length === 0 ? (
                  <p className="text-center text-gray-500 py-4">
                    السلة فارغة
                  </p>
                ) : (
                  cartitems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b py-3"
                    >
                      {/* Product Image */}
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 object-contain rounded"
                        />
                      )}
                      {/* Product Info */}
                      <div className="flex-1">
                        <p className="font-semibold">
                          {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          الكمية: {item.quantity}
                        </p>
                        <p className="text-sm">
                          السعر: ${item.price}
                        </p>
                      </div>
                      {/* Total Product Price */}
                      <div className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Subtotal */}
              {cartitems.length > 0 && (
                <div className="flex justify-between mt-3">
                  <span className="font-semibold">
                    المجموع:
                  </span>
                  <span className="text-info font-bold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              )}
              {/* View Cart */}
              <div className="card-actions mt-3">
                <Link
                  to="/"
                  className="btn btn-primary btn-block"
                >
                  عرض السلة
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
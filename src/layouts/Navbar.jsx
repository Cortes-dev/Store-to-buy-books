import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white py-1 border-b border-gray-200 shadow-sm">
      {/* NAVBAR PRINCIPAL */}
      <nav className="flex justify-around items-center px-28 py-4">
        <div className="text-xl font-bold text-gray-800">
          <Link to="/">Librerías - dev</Link>
        </div>

        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/librerias"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Librerías
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link
              to="/eventos"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25"
                />
              </svg>
              Eventos
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link
              to="/ayuda"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 .765.669.974 1.672.624 2.56-.23.576-.738 1.086-1.37 1.402a3.5 3.5 0 0 0-1.25 1.269c-.344.581-.615 1.288-.615 2.25v.75"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 17.25h.008v.008H12v-.008z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Ayuda
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link
              to="/mi-cuenta"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Mi cuenta
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link
              to="/favoritos"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Favoritos
            </Link>
          </li>
          <li>
            <span className="text-gray-300">|</span>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              Bolsa (0)
            </Link>
          </li>
        </ul>
      </nav>

      {/* NAVBAR SECUNDARIO */}
      <nav className="relative px-6 py-3 w-[70%] mx-auto ">
        <div className="relative group flex items-center justify-between gap-4">
          {/* Categorías */}
          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-semibold text-black cursor-pointer group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              Categorías
            </div>

            {/* Submenú animado */}
            <div
              className="absolute top-6 left-0 w-56 bg-white shadow-lg rounded-md p-4 
                       opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
                       transition-all duration-300 origin-top z-50 pointer-events-none group-hover:pointer-events-auto"
            >
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/libros"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Libros</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ebooks"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Ebooks</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/audiolibros"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Audiolibros</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/lectores-kobo"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>LectoresKobo</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gandhi-selecto"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Gandhi Selecto</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accesorios"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Accesorios</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/juegos-juguetes"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <span>Juegos y juguetes</span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Buscador */}
          <div className="flex-1 flex justify-center">
            <div className="flex w-full max-w-xl">
              <input
                type="search"
                placeholder="¿Qué estás buscando?"
                className="w-full h-[2.2em] px-4 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-3 rounded-r-md flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Imagen o promo */}
          <div className="hidden md:block">
            <h1>Promociónes</h1>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

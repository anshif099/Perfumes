import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { PRODUCTS } from "@/lib/Products";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  img: string;
  ribbon?: string;
  ribbonColor?: "default" | "blue";
};

const FILTERS = ["All", "Floral", "Oriental", "Woody", "Fresh", "Citrus"];

const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const navigate = useNavigate();

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleDetailsClick = (product: Product) => {
    const params = new URLSearchParams({
      title: product.title,
      price: `$${product.price}`,
      desc: product.description,
      img: product.img,
      tags: product.tags.join(","),
    });

    // client-side navigation (no full page reload)
    navigate(`/ProductDetails?${params.toString()}`);
  };

  return (
    <div className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative -mt-[76px] flex min-h-[80vh] items-center pt-[100px] text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image2.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-xl">
            {/* Luxury Fragrances badge */}
            <div className="inline-block border border-[#d9a93b] px-6 py-2 text-xs font-semibold tracking-wide text-[#d9a93b] font-Inter">
              Luxury Fragrances
            </div>

            <h1 className="mt-5 font-['Playfair_Display'] text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Timeless Scents,
              <br />
              Capturing Moments
            </h1>

            <p className="mt-4 max-w-lg font-Inter text-base leading-relaxed text-white/90 md:text-lg">
              Discover our curated selection of luxury fragrances, each
              meticulously crafted to capture moments of elegance and emotion.
              From fresh florals to deep orientals.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex h-11 items-center justify-center bg-[#d9a93b] px-6 text-sm font-semibold text-white shadow-md transition hover:bg-[#c8892f] hover:shadow-lg active:scale-95 rounded-none">
                Explore Collection
              </button>
              <button className="inline-flex h-11 items-center justify-center border border-white/40 bg-transparent px-6 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white rounded-none">
                View Best Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main
        id="collections"
        className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-8"
      >
        {/* FILTER ROW */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex w-full items-center gap-4 overflow-hidden md:w-auto">
            <span className="whitespace-nowrap text-sm text-slate-500 font-Inter">
              Filter by scent:
            </span>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap px-4 py-2 text-xs font-semibold transition rounded-none font-Inter ${
                    activeFilter === filter
                      ? "border border-slate-900 bg-slate-900 text-white"
                      : "border border-slate-200 bg-white text-slate-500 hover:border-slate-900/60 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="ml-auto text-sm text-slate-500 max-sm:hidden font-Inter">
            Showing {filteredProducts.length} fragrances
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <section
          aria-label="perfume products"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-[14px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative bg-slate-100 pb-[120%]">
                <img
                  src={product.img}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {product.ribbon && (
                  <span
                    className={`absolute left-3 top-3 rounded px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-md ${
                      product.ribbonColor === "blue"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-slate-900"
                    }`}
                  >
                    {product.ribbon}
                  </span>
                )}
              </div>

              <div className="px-3 pb-4 pt-4">
                {/* Tags */}
                <div className="mb-2 flex flex-wrap gap-1">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-[#fff4e0] px-3 py-1 text-[11px] font-medium text-[#d9a93b] rounded-none font-Inter"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* TITLE */}
                <h3 className="font-['Playfair_Display'] text-[20px] leading-[1.1] font-semibold text-slate-900">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 line-clamp-2 font-Inter text-[14px] leading-relaxed text-slate-500">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  {/* Price */}
                  <div className="font-['Playfair_Display'] text-xl text-[#d9a93b]">
                    ${product.price}
                  </div>

                  {/* View Details */}
                  <button
                    type="button"
                    onClick={() => handleDetailsClick(product)}
                    className="flex items-center gap-1 text-sm font-semibold text-slate-800 hover:text-slate-900 hover:underline rounded-none"
                  >
                    View Details &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Shop;

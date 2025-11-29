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
};

const FILTERS = ["All", "Floral", "Oriental", "Woody", "Fresh", "Citrus"];

const Shop: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const navigate = useNavigate();

  const handleExploreCollection = () => {
    // Scroll to the products section
    const productsSection = document.querySelector('main');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewBestSellers = () => {
    // Filter to show only best sellers (products with ribbon "Best Seller")
    setActiveFilter("Best Seller");
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return PRODUCTS;
    if (activeFilter === "Best Seller") return PRODUCTS.filter(p => p.ribbon === "Best Seller");
    return PRODUCTS.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleDetailsClick = (product: Product) => {
    const params = new URLSearchParams({
      title: product.title,
      price: `$${product.price}`,
      desc: product.description,
      img: product.img,
      tags: product.tags.join(","),
    });

    navigate(`/ProductDetails?${params.toString()}`);
  };

  return (
    <div className="bg-white text-slate-900">
      <Header />

      {/* HERO */}
      <section className="relative -mt-[76px] flex min-h-[80vh] items-center pt-[100px] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/image2.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="max-w-xl">
            <div className="inline-block border border-[#d9a93b] bg-[#d9a93b]/20 px-6 py-2 text-xs font-semibold tracking-wide text-white font-Inter">
              Luxury Fragrances
            </div>

            <h1 className="mt-5 font-['Playfair_Display'] text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-tight">
              Our Collections
            </h1>

            <p className="mt-4 max-w-lg font-Inter text-white/90">
              Discover our curated selection of luxury fragrances, crafted to evoke elegance and emotion.
            </p>

            <div className="mt-8 flex gap-4">
              <button onClick={handleExploreCollection} className="bg-[#d9a93b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c8892f] rounded-none">
                Explore Collection
              </button>
              <button onClick={handleViewBestSellers} className="border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 rounded-none">
                View Best Sellers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="mx-auto max-w-6xl px-6 py-16 md:px-8">

        {/* FILTER BAR */}
        <div className="mb-8 flex flex-wrap items-center gap-4 justify-between">
          <div className="flex gap-4 items-center overflow-x-auto">
            <span className="text-sm text-slate-500 font-Inter">
              Filter by scent:
            </span>

            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-none font-Inter transition-all duration-200 active:scale-95 ${
                  activeFilter === filter
                    ? "bg-[#d9a93b] text-white shadow-md"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-[#d9a93b] hover:text-[#d9a93b]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="text-sm text-slate-500 font-Inter hidden sm:block">
            Showing {filteredProducts.length} fragrances
          </div>
        </div>

        {/* GRID */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map(product => (
            <article
              key={product.id}
              className="group bg-white shadow-sm transition hover:shadow-xl hover:-translate-y-1 rounded-[14px] overflow-hidden"
            >
              <div className="relative pb-[120%] bg-slate-100">
                <img
                  src={product.img}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* RIBBON */}
                {product.ribbon && (
                  <span
                    className="
                      absolute left-3 top-3
                      bg-[#d9a93b]
                      text-white
                      px-3 py-1
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-wider
                      shadow-md
                      rounded-none
                      font-Inter
                    "
                  >
                    {product.ribbon}
                  </span>
                )}
              </div>

              <div className="p-4">
                {/* TAGS */}
                <div className="mb-2 flex flex-wrap gap-1">
                  {product.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-[#fff4e0] text-[#d9a93b] text-[11px] px-3 py-1 font-medium font-Inter rounded-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-['Playfair_Display'] text-[18px] font-semibold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500 font-Inter line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-4 flex justify-between items-center">
                  <span className="font-['Playfair_Display'] text-[#d9a93b] text-lg">
                    ${product.price}
                  </span>

                  <button 
                    onClick={() => handleDetailsClick(product)} 
                    className="text-sm font-semibold hover:underline text-slate-800 rounded-none">
                    View Details →
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

import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

type Product = {
  title: string;
  price: string;
  desc: string;
  img: string;
  tags: string[];
};

type CartItem = {
  title: string;
  price: string;
  img: string;
  qty: number;
};

type Order = {
  id: string;
  createdAt: string;
  customer: {
    name: string;
    phone: string;
    address: string;
  };
  payment: string;
  items: CartItem[];
};

type WishlistItem = {
  title: string;
  price: string;
  img: string;
  size: string;
};

const isBrowser = typeof window !== "undefined";

const thumbnailImages = [
  "/images/image3.jpeg",
  "/images/image4.jpeg",
  "/images/image5.jpeg",
  "/images/image6.jpeg",
];

function parseNumberFromPrice(price: string): number {
  const num = parseFloat(price.replace(/[^0-9.]/g, ""));
  return isNaN(num) ? 0 : num;
}

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductDetails: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    title: "Noir Elegance",
    price: "$139",
    desc: "A sophisticated symphony of sensuality and grace. Noir Elegance captures the essence of timeless beauty, weaving together rare botanicals and precious essences to create an unforgettable olfactory journey. For those who embrace the art of refined living.",
    img: "/images/image3.jpeg",
    tags: ["Oriental", "Floral"],
  });

  const [basePrice, setBasePrice] = useState<number>(139);
  const [selectedSize, setSelectedSize] = useState<"30" | "50" | "100">("30");
  const [selectedQty, setSelectedQty] = useState<number>(1);
  const [displayPrice, setDisplayPrice] = useState<string>("$139");
  const [mainImage, setMainImage] = useState<string>("/images/image3.jpeg");

  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const [checkoutOpen, setCheckoutOpen] = useState<boolean>(false);
  const [custName, setCustName] = useState<string>("");
  const [custPhone, setCustPhone] = useState<string>("");
  const [custAddress, setCustAddress] = useState<string>("");

  const [openIngredients, setOpenIngredients] = useState<boolean>(false);
  const [openShipping, setOpenShipping] = useState<boolean>(false);
  const [openReturns, setOpenReturns] = useState<boolean>(false);

  // --- INIT: read URL params + localStorage ---
  useEffect(() => {
    if (!isBrowser) return;

    const params = new URLSearchParams(window.location.search);
    const urlProduct: Product = {
      title: params.get("title") || "Noir Elegance",
      price: params.get("price") || "$139",
      desc:
        params.get("desc") ||
        "A sophisticated symphony of sensuality and grace. Noir Elegance captures the essence of timeless beauty, weaving together rare botanicals and precious essences to create an unforgettable olfactory journey.",
      img: params.get("img") || "/images/image3.jpeg",
      tags: (params.get("tags") || "Oriental,Floral").split(","),
    };

    setProduct(urlProduct);
    setBasePrice(parseNumberFromPrice(urlProduct.price) || 139);
    setDisplayPrice(urlProduct.price);
    setMainImage(urlProduct.img || "/images/image3.jpeg");

    // Wishlist
    try {
      const wRaw = window.localStorage.getItem("wishlist");
      if (wRaw) {
        setWishlist(JSON.parse(wRaw));
      }
    } catch {
      // ignore
    }

    // Cart
    try {
      const cRaw = window.localStorage.getItem("cart");
      if (cRaw) {
        setCart(JSON.parse(cRaw));
      }
    } catch {
      // ignore
    }
  }, []);

  // --- Sync wishlist + cart to localStorage ---
  useEffect(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  useEffect(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  // --- Price calculation ---
  useEffect(() => {
    const multiplier =
      selectedSize === "50" ? 1.3 : selectedSize === "100" ? 1.8 : 1;
    const pricePerUnit = Math.round(basePrice * multiplier);
    const total = pricePerUnit * selectedQty;
    setDisplayPrice("$" + total.toFixed(0));
  }, [selectedSize, selectedQty, basePrice]);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + (item.qty || 0), 0),
    [cart]
  );

  // --- Wishlist helpers ---
  const isInWishlist = wishlist.some((item) => item.title === product.title);

  const toggleWishlist = () => {
    if (!product) return;
    if (isInWishlist) {
      setWishlist((prev) =>
        prev.filter((item) => item.title !== product.title)
      );
      window.alert("Removed from wishlist");
    } else {
      setWishlist((prev) => [
        ...prev,
        {
          title: product.title,
          price: product.price,
          img: product.img,
          size: selectedSize,
        },
      ]);
      window.alert("Added to wishlist");
    }
  };

  // --- Qty handlers ---
  const increaseQty = () => {
    setSelectedQty((q) => q + 1);
  };

  const decreaseQty = () => {
    setSelectedQty((q) => (q > 1 ? q - 1 : q));
  };

  // --- Share ---
  const handleShare = () => {
    if (!isBrowser) return;
    const productUrl = window.location.href;
    const shareText = `Check out ${product.title} from Beek Perfumes!`;

    const anyNavigator = navigator as any;

    if (anyNavigator && typeof anyNavigator.share === "function") {
      anyNavigator
        .share({
          title: product.title,
          text: shareText,
          url: productUrl,
        })
        .catch(() => {
          // ignore
        });
    } else if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(productUrl)
        .then(() => window.alert("Product link copied to clipboard!"))
        .catch(() => window.alert("Share link: " + productUrl));
    } else {
      window.alert("Share link: " + productUrl);
    }
  };

  // --- Cart helpers ---
  const handleAddToCart = () => {
    const cartTitle = `${product.title} (${selectedSize}ml)`;
    const multiplier =
      selectedSize === "50" ? 1.3 : selectedSize === "100" ? 1.8 : 1;
    const pricePerUnit = Math.round(basePrice * multiplier);
    const finalPrice = `$${pricePerUnit.toFixed(0)}`;

    setCart((prev) => {
      const existingIndex = prev.findIndex((i) => i.title === cartTitle);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          qty: (updated[existingIndex].qty || 0) + selectedQty,
        };
        return updated;
      }
      return [
        ...prev,
        {
          title: cartTitle,
          price: finalPrice,
          img: product.img,
          qty: selectedQty,
        },
      ];
    });

    window.alert(
      `${selectedQty}x ${product.title} (${selectedSize}ml) added to cart!`
    );
    setSelectedQty(1);
  };

  const cartTotal = useMemo(() => {
    return cart
      .reduce(
        (total, item) =>
          total + parseNumberFromPrice(item.price) * (item.qty || 1),
        0
      )
      .toFixed(2);
  }, [cart]);

  const changeCartQty = (index: number, delta: number) => {
    setCart((prev) => {
      const updated = [...prev];
      const item = updated[index];
      if (!item) return prev;
      const newQty = Math.max(1, (item.qty || 1) + delta);
      updated[index] = { ...item, qty: newQty };
      return updated;
    });
  };

  const removeCartItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckoutClick = () => {
    if (!cart.length) {
      window.alert("Cart is empty");
      return;
    }
    setCheckoutOpen(true);
  };

  const handlePlaceOrder = () => {
    if (!custName.trim() || !custPhone.trim() || !custAddress.trim()) {
      window.alert("Please fill name, phone and address");
      return;
    }
    if (!cart.length) {
      window.alert("Cart is empty");
      return;
    }

    const order: Order = {
      id: "ORD" + Date.now(),
      createdAt: new Date().toISOString(),
      customer: {
        name: custName.trim(),
        phone: custPhone.trim(),
        address: custAddress.trim(),
      },
      payment: "Cash on Delivery",
      items: cart,
    };

    if (isBrowser) {
      try {
        const existingRaw = window.localStorage.getItem("orders");
        const existing = existingRaw ? JSON.parse(existingRaw) : [];
        existing.push(order);
        window.localStorage.setItem("orders", JSON.stringify(existing));
      } catch {
        // ignore
      }
    }

    setCart([]);
    setCheckoutOpen(false);
    setIsCartOpen(false);
    setCustName("");
    setCustPhone("");
    setCustAddress("");

    window.alert(
      `Order placed! Order ID: ${order.id}\nPayment: Cash on Delivery`
    );
  };

  // --- Thumbnail active index ---
  const activeThumbIndex = useMemo(() => {
    const idx = thumbnailImages.indexOf(mainImage);
    return idx === -1 ? 0 : idx;
  }, [mainImage]);

  return (
    <main className="bg-white">
        <Header />
      {/* PRODUCT SECTION */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Images */}
            <div className="flex flex-col gap-4">
              <div className="relative h-[480px] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <img
                  src={mainImage}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute right-4 top-4 rounded-md bg-[#d9a93b] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  New Arrival
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {thumbnailImages.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setMainImage(src)}
                    className={classNames(
                      "h-24 w-full overflow-hidden rounded-lg border-2 border-transparent bg-gray-100 transition-colors",
                      index === activeThumbIndex && "border-[#d9a93b]"
                    )}
                  >
                    <img
                      src={src}
                      alt={`View ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="text-xs text-slate-500">
                Home / Collections /{" "}
                <span className="text-slate-700">{product.title}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                {product.title}
              </h1>

              <p className="text-sm leading-relaxed text-slate-500">
                {product.desc}
              </p>

              {/* Scent Profile */}
              <div className="space-y-3">
                <h3 className="font-serif text-lg font-semibold text-[#d9a93b]">
                  Scent Profile
                </h3>
                <div className="space-y-2">
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="text-xs font-semibold">⭐ Top Notes</div>
                    <div className="text-xs text-slate-500">
                      Bergamot • Pink Pepper • Mandarin
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="text-xs font-semibold">♥ Heart Notes</div>
                    <div className="text-xs text-slate-500">
                      Jasmine • Rose • Ylang Ylang
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3">
                    <div className="text-xs font-semibold">⬇ Base Notes</div>
                    <div className="text-xs text-slate-500">
                      Amber • Vanilla • Sandalwood
                    </div>
                  </div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <h4 className="font-serif text-xs font-semibold uppercase tracking-wide text-slate-800">
                  Select Size
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {(["30", "50", "100"] as const).map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={classNames(
                        "flex flex-col items-center rounded-lg border px-3 py-3 text-center text-sm transition-colors",
                        selectedSize === size
                          ? "border-[#d9a93b] bg-[#d9a93b] text-white"
                          : "border-gray-200 bg-white hover:border-[#d9a93b]"
                      )}
                    >
                      <div className="text-base font-semibold">{size}ml</div>
                      <div
                        className={classNames(
                          "text-[11px]",
                          selectedSize === size
                            ? "text-white/80"
                            : "text-slate-500"
                        )}
                      >
                        {size === "30"
                          ? "Travel Size"
                          : size === "50"
                          ? "Standard"
                          : "Signature"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price & Qty */}
              <div className="flex items-center justify-between gap-6 border-b border-gray-200 pb-5">
                <div>
                  <div className="text-3xl font-bold text-[#d9a93b]">
                    {displayPrice}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-500">
                    Free shipping over $100
                  </div>
                </div>

                <div className="text-right">
                  <div className="mb-2 text-[11px] text-slate-500">
                    Quantity:
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-gray-200 px-1 py-1">
                    <button
                      type="button"
                      onClick={decreaseQty}
                      className="px-3 py-1 text-lg"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={1}
                      value={selectedQty}
                      onChange={(e) =>
                        setSelectedQty(
                          Math.max(1, parseInt(e.target.value || "1", 10))
                        )
                      }
                      className="w-12 border-0 bg-transparent text-center text-sm font-semibold outline-none"
                    />
                    <button
                      type="button"
                      onClick={increaseQty}
                      className="px-3 py-1 text-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 rounded-lg bg-[#d9a93b] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#c8892f]"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={toggleWishlist}
                  className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-3 text-lg"
                  title="Wishlist"
                >
                  {isInWishlist ? (
                    <span className="text-[#d9a93b]">♥</span>
                  ) : (
                    <span>♡</span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-3 text-lg"
                  title="Share"
                >
                  ⤴
                </button>
              </div>

              {/* View Cart Button (since header is removed) */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setIsCartOpen(true)}
                  className="text-xs font-semibold uppercase tracking-wide text-slate-700 underline underline-offset-4"
                >
                  View Cart {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-5 border-b border-gray-200 pb-5 pt-2 text-center text-xs">
                <div>
                  <div className="mb-1 text-2xl">🚚</div>
                  <div className="text-[11px] font-semibold">Free Shipping</div>
                  <div className="text-[11px] text-slate-500">Over $100</div>
                </div>
                <div>
                  <div className="mb-1 text-2xl">✓</div>
                  <div className="text-[11px] font-semibold">Authentic</div>
                  <div className="text-[11px] text-slate-500">
                    100% Genuine
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-2xl">↩</div>
                  <div className="text-[11px] font-semibold">
                    30-Day Returns
                  </div>
                  <div className="text-[11px] text-slate-500">Easy Returns</div>
                </div>
              </div>

              {/* Collapsible Sections */}
              <div className="space-y-3 pt-3 text-sm text-slate-500">
                {/* Ingredients */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIngredients((v) => !v)}
                    className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left text-sm font-semibold"
                  >
                    <span>Ingredients</span>
                    <span
                      className={classNames(
                        "text-lg transition-transform",
                        openIngredients && "rotate-180"
                      )}
                    >
                      ▼
                    </span>
                  </button>
                  {openIngredients && (
                    <div className="px-4 pb-4 pt-2 text-xs leading-relaxed text-slate-500">
                      Alcohol, Fragrance (Parfum), Aqua, Linalool, Limonene,
                      Geraniol, Citronellol, Eugenol, Isoeugenol, Benzyl
                      Salicylate, Cinnamyl Alcohol, Coumarin, Benzyl Benzoate.
                    </div>
                  )}
                </div>

                {/* Shipping & Delivery */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenShipping((v) => !v)}
                    className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left text-sm font-semibold"
                  >
                    <span>Shipping &amp; Delivery</span>
                    <span
                      className={classNames(
                        "text-lg transition-transform",
                        openShipping && "rotate-180"
                      )}
                    >
                      ▼
                    </span>
                  </button>
                  {openShipping && (
                    <div className="px-4 pb-4 pt-2 text-xs leading-relaxed text-slate-500">
                      We ship worldwide with reliable carriers. Standard
                      delivery takes 5–7 business days. Express shipping
                      available. All orders are carefully packaged to ensure
                      safe delivery.
                    </div>
                  )}
                </div>

                {/* Returns & Exchanges */}
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenReturns((v) => !v)}
                    className="flex w-full items-center justify-between bg-gray-50 px-4 py-3 text-left text-sm font-semibold"
                  >
                    <span>Returns &amp; Exchanges</span>
                    <span
                      className={classNames(
                        "text-lg transition-transform",
                        openReturns && "rotate-180"
                      )}
                    >
                      ▼
                    </span>
                  </button>
                  {openReturns && (
                    <div className="px-4 pb-4 pt-2 text-xs leading-relaxed text-slate-500">
                      We offer a hassle-free 30-day return policy. Items must
                      be unused and in original packaging. Contact our support
                      team to initiate a return or exchange.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CART MODAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
          <div className="flex w-[92%] max-w-2xl flex-col gap-3 rounded-xl bg-white p-4 shadow-xl">
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setCheckoutOpen(false);
              }}
              className="self-end text-2xl leading-none"
            >
              &times;
            </button>
            <h3 className="mb-2 font-serif text-lg font-semibold">
              Your Cart
            </h3>

            {/* Cart Items */}
            <div className="max-h-80 w-full overflow-y-auto border-y border-gray-100 py-2">
              {!cart.length ? (
                <div className="px-3 py-4 text-sm text-slate-500">
                  Your cart is empty.
                </div>
              ) : (
                cart.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="flex items-center gap-3 border-b border-gray-50 px-1 py-2 last:border-0"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-18 w-18 h-[72px] w-[72px] rounded-lg object-cover"
                    />
                    <div className="flex-1 text-sm">
                      <div className="font-semibold text-slate-800">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.price}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => changeCartQty(index, -1)}
                          className="rounded-md border border-gray-200 px-2 py-1"
                        >
                          -
                        </button>
                        <span>{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => changeCartQty(index, 1)}
                          className="rounded-md border border-gray-200 px-2 py-1"
                        >
                          +
                        </button>
                        <button
                          type="button"
                          onClick={() => removeCartItem(index)}
                          className="ml-3 rounded-md border border-red-200 px-2 py-1 text-[11px] font-semibold text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Total + Checkout button */}
            <div className="mt-1 flex items-center justify-between gap-3 text-sm">
              <div className="font-semibold">
                Total: <span>{cartTotal}</span>
              </div>
              {!checkoutOpen && (
                <button
                  type="button"
                  onClick={handleCheckoutClick}
                  className="rounded-lg bg-[#d9a93b] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#c8892f]"
                >
                  Checkout
                </button>
              )}
            </div>

            {/* Checkout Form */}
            {checkoutOpen && (
              <form
                className="mt-3 flex flex-col gap-3 text-sm"
                onSubmit={(e) => {
                  e.preventDefault();
                  handlePlaceOrder();
                }}
              >
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={custName}
                  onChange={(e) => setCustName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#d9a93b]"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  required
                  value={custPhone}
                  onChange={(e) => setCustPhone(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#d9a93b]"
                />
                <textarea
                  placeholder="Delivery address"
                  required
                  value={custAddress}
                  onChange={(e) => setCustAddress(e.target.value)}
                  className="w-full min-h-[80px] rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-[#d9a93b]"
                />
                <div className="mt-1 flex items-center justify-between gap-3 text-xs">
                  <div>
                    Payment:{" "}
                    <span className="font-semibold">Cash on Delivery</span>
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-[#d9a93b] px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#c8892f]"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            )}
          </div>
          
        </div>
        
      )}
      <Newsletter />
          <Footer />
    </main>
  );
};

export default ProductDetails;

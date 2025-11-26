import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import React from "react";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
        <Header />
      {/* HERO */}
      <section className="relative flex min-h-[50vh] items-center bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/80">
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <main className="mx-auto w-full max-w-5xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* FORM */}
          <div className="space-y-6">
            <div>
              <h2 className="font-serif text-3xl text-slate-900">
                Send us a Message
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#d9a93b] focus:ring-2 focus:ring-[#d9a93b1a]"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#d9a93b] focus:ring-2 focus:ring-[#d9a93b1a]"
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#d9a93b] focus:ring-2 focus:ring-[#d9a93b1a]"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  required
                  placeholder="Your Message"
                  className="w-full min-h-[120px] rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#d9a93b] focus:ring-2 focus:ring-[#d9a93b1a] resize-y"
                />
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-8 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-slate-700 sm:w-auto"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-50 sm:w-auto"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="rounded-2xl bg-slate-50 p-8 sm:p-10">
            {/* Address */}
            <div className="border-b border-slate-200 pb-8 mb-8 last:mb-0 last:pb-0 last:border-b-0">
              <div className="mb-2 text-base font-bold text-slate-900">
                📍 Address
              </div>
              <div className="text-sm leading-relaxed text-slate-500">
                BK Tower, Oud Metha
                <br />
                Dubai, United Arab Emirates
              </div>
            </div>

            {/* Phone */}
            <div className="border-b border-slate-200 pb-8 mb-8 last:mb-0 last:pb-0 last:border-b-0">
              <div className="mb-2 text-base font-bold text-slate-900">
                📞 Phone
              </div>
              <div className="text-sm leading-relaxed text-slate-500">
                <a
                  href="tel:+971551141144"
                  className="font-medium text-[#c8892f] hover:underline"
                >
                  +971 (0) 55 114 1144
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="border-b border-slate-200 pb-8 mb-8 last:mb-0 last:pb-0 last:border-b-0">
              <div className="mb-2 text-base font-bold text-slate-900">
                ✉️ Email
              </div>
              <div className="text-sm leading-relaxed text-slate-500 space-y-1">
                <a
                  href="mailto:hello@beekperfumes.com"
                  className="block font-medium text-[#c8892f] hover:underline"
                >
                  hello@beekperfumes.com
                </a>
                <a
                  href="mailto:support@beekperfumes.com"
                  className="block font-medium text-[#c8892f] hover:underline"
                >
                  support@beekperfumes.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="last:mb-0 last:pb-0 last:border-b-0">
              <div className="mb-2 text-base font-bold text-slate-900">
                🕐 Business Hours
              </div>
              <div className="text-sm leading-relaxed text-slate-500">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MAP SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(22,28,36,0.06)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6051464370395!2d55.31262!3d25.21369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sOud%20Metha%2C%20Dubai!5e0!3m2!1sen!2sae!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
<Newsletter />
<Footer />

    </div>
  );
};

export default Contact;

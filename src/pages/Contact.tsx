import ContactFind from "@/components/ContactFind";
import ContactForm from "@/components/ContactForm";
import ContactReact from "@/components/ContactReach";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroContact from "@/components/HeroContact";
import Newsletter from "@/components/Newsletter";


const Contact= () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <HeroContact />
      <ContactForm />
      <ContactReact />
      <ContactFind />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Contact;

import Hero from "./components/Hero";
import SuperQuality from "./components/SuperQuality";
import NavBar from "./components/NavBar";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/(Services)";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReviews from "./components/CustomerReviews";

const Home = () => {
  return (
    <main className="relative">
      <NavBar />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts></PopularProducts>
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x md:py-32 py-16 w-full">Subscribe</section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        Footer
      </section>
    </main>
  );
};

export default Home;

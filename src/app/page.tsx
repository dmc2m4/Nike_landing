import Hero from "./components/Hero";
import SuperQuality from "./components/SuperQuality";

const Home = () => {
  return (
    <main className="relative">
      Nav
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">Popular products</section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">Services</section>
      <section className="padding">Special Offers</section>
      <section className="bg-pale-blue padding">Customer reviews</section>
      <section className="padding-x md:py-32 py-16 w-full">Subscribe</section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        Footer
      </section>
    </main>
  );
};

export default Home;

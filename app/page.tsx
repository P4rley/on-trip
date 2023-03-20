import About from "../section/About";
import Banner from "../section/Banner";
import CountryDestination from "../section/CountryDestination";
import Destination from "../section/Destination";
import Hero from "../section/Hero";

const page = () => {
  return (
    <div>
      <title>Home | On Trip</title>
      <Hero />
      <About />
      <Destination />
      <CountryDestination />
      <Banner />
    </div>
  );
};
export default page;

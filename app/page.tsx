import About from "../section/About";
import Banner from "../section/Banner";
import CountryDesctination from "../section/CountryDesctination";
import Destination from "../section/Destination";
import Hero from "../section/Hero";

const page = () => {
  return (
    <div>
      <title>Home | On Trip</title>
      <Hero />
      <About />
      <Destination />
      <CountryDesctination />
      <Banner />
    </div>
  );
};
export default page;

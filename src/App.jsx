import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Dishes from "./sections/Dishes";
import Gallery from "./sections/Gallery";
import HoursServices from "./sections/HoursServices";
import Reservation from "./sections/Reservation";
import Location from "./sections/Location";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Dishes />
        <Gallery />
        <HoursServices />
        <Reservation />
        <Location />
      </main>
      <Footer />
    </>
  );
}

export default App;

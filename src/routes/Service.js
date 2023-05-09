import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/34.jpg";
import Footer from "../components/Footer";
// import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Our Services"
        btnClass="hide"
      />
      <Navbar />
      <button>
        <button placeholder="Enter your url here:"> </button>
      </button>

      <Footer />
    </>
  );
}

export default Service;

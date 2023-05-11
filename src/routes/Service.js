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
      <div className="from-container">
        <h1>Let's Detect</h1>
        <form>
          <input placeholder="Title" />
        </form>
        <form>
          <input placeholder="Author" />
        </form>
        <form>
          <input placeholder="News" />
        </form>
        <form>
        
          <button rows="2">Fake</button>
          <button>Real</button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Service;

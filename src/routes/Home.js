import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import heroImag from "../assets/12.jpg";

function Home() {
  return (
    <>
      <Navbar />
      {/* <img alt="img" src={MainImg} /> */}
      {/* <button>Lets detect</button> */}
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Hi!"
        text="Click here to detect"
        buttonText="Lets Detect"
        url="/ "
        btnClass="show"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Home;

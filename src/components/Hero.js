// import "./HeroStyles.css";

// function Hero(props) {
//   return (
//     <>
//       <div className="hero">
//         <imag
//         <h1>Your Code Here</h1>
//       </div>
//     </>
//   );
// }

// export default Hero;

import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="Herpling" src={props.heroImag}></img>

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnclass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;

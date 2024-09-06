import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import "../styles/home.css";
import { useHoroscope } from "../components/datas";

function Home() {
  const { horoscope, currentIndex, setCurrentIndex } = useHoroscope();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    populateData(index);
    changeTop(index);
  }, [index]);

  const populateData = (index) => {
    setCurrentIndex(index);
  };

  const changeTop = (index) => {
    // Signe précédent
    const signePrecedent = index <= 0 ? horoscope.length - 1 : index - 1;
    document.querySelector(".left-horoscope").innerHTML = `${horoscope[signePrecedent].signe} <span>${horoscope[signePrecedent].date}</span>`;
    document.querySelector(".left-horoscope").setAttribute("data-index", signePrecedent);

    // Signe suivant
    const signeSuivant = index >= horoscope.length - 1 ? 0 : parseInt(index + 1);
    document.querySelector(".right-horoscope").innerHTML = `${horoscope[signeSuivant].signe} <span>${horoscope[signeSuivant].date}</span>`;
    document.querySelector(".right-horoscope").setAttribute("data-index", signeSuivant);
  };

  const handleArrowRight = () => {
    setIndex(index >= horoscope.length - 1 ? 0 : index + 1);
  };

  const handleArrowLeft = () => {
    setIndex(index <= 0 ? horoscope.length - 1 : index - 1);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <Link className="left-horoscope" to="#" onClick={handleArrowLeft}>
              Sagittaire <span>22 NOV AU 21 DEC</span>
            </Link>
            <Link className="right-horoscope" to="#" onClick={handleArrowRight}>
              Cancer <span>22 NOV AU 21 DEC</span>
            </Link>
          </div>

          <article>
            <p id="datejour">-- HOROSCOPE DU {new Date().toLocaleDateString()}</p>
            <h1>{horoscope[currentIndex].signe}</h1>
            <span id="date">{horoscope[currentIndex].date}</span>
            <div>
              <p id="amour">
                <span>Amour : {horoscope[currentIndex].amour}</span>
              </p>
              <p id="travail">
                <span>Travail : {horoscope[currentIndex].travail}</span>
              </p>
              <p id="argent">
                <span>Argent : {horoscope[currentIndex].argent}</span>
              </p>
              <p id="sante">
                <span>Santé : {horoscope[currentIndex].sante}</span>
              </p>
              <p id="famille">
                <span>Famille et amis : {horoscope[currentIndex].famille}</span>
              </p>
              <p id="conseil">
                <span>Conseil : {horoscope[currentIndex].conseil}</span>
              </p>
            </div>
          </article>
        </section>
        <aside>
          <img src={horoscope[currentIndex].image} alt={horoscope[currentIndex].signe} />
        </aside>
      </main>
    </>
  );
}

export default Home;

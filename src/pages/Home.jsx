// import React from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import logements from '../ressources/logements.json';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Card from '../components/Cards';
import Footer from '../components/Footer';


function Home() {

  const [houses, setHouses] = useState([])

  useEffect(() => {
    console.log(logements)
    setHouses(logements)
  }, [])

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='container__home'>
        <Banner />
        <div className='home-all-cards'>
          {houses.map((houses, id) => (
            <div className="card" key={id}>
              <Link className="card__link" to={`/logement/${houses.id}`}>
                <Card cover={houses.cover} title={houses.title} />
              </Link>
            </div>
          ))}
        </div>
      </main >
      <Footer />
    </div >
  );
};

export default Home;



// function Home() {
//   const [houses, setHouses] = useState([])

//   useEffect(() => {
//     console.log(logements)
//     setHouses(logements)
//   }, [])

//   return (
//     <div>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Banner />
//         <div className='home-all-cards'>
//           {houses.map((house, id) => (
//             <div className="card" key={id}>
//               <Link className="card__link" to={`/logement/${house.id}`}>
//                 <Card cover={house.cover} title={house.title} />
//               </Link>
//             </div >
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }



// export default Home;


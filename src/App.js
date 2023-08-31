
import './App.css';
import data from './jsonData.json'
function App() {
  
  return (
   
    <main className="App">
      <section class="head">
        <h1>Bigest Car Care Company in UAE</h1>
        <div class="headImage">
          <img src="./images/headImage.webp" alt="Car Image" />
        </div>
        <div class="centerContent">
          <img
            class="headTitle"
            src="./images/isolation_mode.webp"
            alt="title"
          />

          <p class="title2">Group of Companies</p>
        </div>
      </section>
      <section class="allCars">
        <div class="cars">
          {
            data.map((car,i)=>{
              return (
                <div class="car">
                <div class="imageCar">
                  <img src={car.logo} alt={car.name} />
                </div>
                <div class="carLinks">
                  {
                    car.links.insta&&<a href={car.links.insta}><img src="./images/insta.webp" alt="insta" /></a>
                  }
                   {
                    car.links.facebook&&<a href={car.links.facebook}><img src="./images/facebook.webp" alt="facebook" /></a>
                  }
                   {
                    car.links.tiktok&&<a href={car.links.tiktok}><img src="./images/tiktok.webp" alt="tiktok" /></a>
                  }
                  
                 
                 
                </div>
                <div class="part2">
                  <a href={car.contact.whatsapp} class="part whatsApp">
                    <img src="./images/whatsApp.svg" alt="whatsApp" />
                    <p>WhatsApp</p>
                  </a>
                  <a href={car.contact.call} class="part call">
                    <img src="./images/call.svg" alt="call" />
                    <p>Call</p>
                  </a>
                  <a href={car.contact.map} class="part map">
                    <img src="./images/map.svg" alt="location" />
                  </a>
                </div>
              </div>
              )
            })
          }
        
        </div>
      </section>
    </main>
    
  );
}

export default App;

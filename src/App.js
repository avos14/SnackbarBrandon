import './App.css';
import { useState } from "react";
import phom1 from './images/main13.jpg';
import phom2 from './images/img1.png';
import phom3 from './images/img2.png';
import phom4 from './images/img3.png';
import phom5 from './images/img4.png';

import {Menu1, Menu2, Menu3, Menu4, Menu5, Menu6} from './Menu.js';

function App() {
  const [menu, setmenu] = useState("0")
  const menuHeaders = ["empty", "Snacks", "Drinken", "Frites", "Milkshakes", "Burgers", "IJsjes"]
  return (
    <div>
      <div className="App-Section">
        <div className="App-SectionC" >
        <img
            className="mainbackground-image"
            src={phom1}
            alt="Background"
        />
        <div className="content-container">
          <div>
            <h1 className="center-logo"> Snackbar Brandon</h1>
          </div>
        </div>

        </div>
      </div>
      <div className="App-Section">
        <div className="App-SectionC"  >
        <img
            className="mainbackground-image two"
            src={phom2}
            alt="Background"
        />
        <img
            className="mainbackground-image two"
            src={phom3}
            alt="Background"
        />
        <div className="content-container">
          <div style={{width: '100%'}}>
            <h1 className="center-logo menu">De Menukaart</h1>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(1)}}> Snacks </button>
              <button className="menubutton" onClick={(event) => {setmenu(2)}}> Drinken </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(3)}}> Frites </button>
              <button className="menubutton" onClick={(event) => {setmenu(4)}}> Milkshakes </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(5)}}> Burgers </button>
              <button className="menubutton"onClick={(event) => {setmenu(6)}}> IJsjes </button>
            </div>
            <br></br>
          </div>
        </div>
        </div>
      </div>
      { menu > 0 && <div style={{backgroundColor: 'antiquewhite'}}>
        <div></div>
        <h1 className='center-logo sub'>{menuHeaders[menu]}</h1>
        <div className="Menu-Section" style={{}}>
          {menu === 1 && Menu1.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
          {menu === 2 && Menu2.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
          {menu === 3 && Menu3.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
          {menu === 4 && Menu4.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
          {menu === 5 && Menu5.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
          {menu === 6 && Menu6.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- €{item.price}</p>  </div></div>})}
        </div>
      </div>}
      <div className="App-Section info">
        <br></br>
        <br></br>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
          <div className="InfoSection">
            <br></br>
            <img
            className="info-image"
            src={phom4}
            alt="Background"
            />
            <b>
              <p>Dagelijks geopend</p> 	
              <p>11:00 AM - 11:00 PM*</p> 
            </b>
              <p>* Tijdens vakanties, aangepaste tijden</p>
          </div>
          <div className="InfoSection">
            <img
            className="info-image"
            src={phom5}
            alt="Background"
            />
            <b>
              <p>Contact:</p> 	
              <p>Phone: (06)-2343-5935 </p> 
            </b>
           
          </div>
          <div className="InfoSection">
            <br></br>
            <iframe title="Location"className="info-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78169.53875114149!2d5.581029!3d52.247051049999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6360e068303f1%3A0x14724a3adc0912a2!2sPutten%2C%20Netherlands!5e0!3m2!1sen!2sil!4v1684416613586!5m2!1sen!2sil" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <b>
              <p>Putten Gelderland, </p> 
              <p>3880 AK Nederland</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

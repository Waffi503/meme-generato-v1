import {useState} from 'react';
import html2canvas from 'html2canvas';
import "./App.css";
function App() {

  const [linea1, setLinea1] = useState("Linea 1");
  const [linea2, setLinea2] = useState("Linea 2");
  const [img, setImg] = useState("1meme.jfif");

  const exportarMeme = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "meme.png";
      link.click();

    });
  }

  return (
    <div className="App">

      <select onChange={(e)=> setImg(e.target.value)}>
        <option value="1meme.jfif">Meme 1</option>
        <option value="2meme.jpg">Meme 2</option>
        <option value="3meme.jpg">Meme 3</option>
        <option value="4meme.jfif">Meme 4</option>
      </select>
      <br/>
     
      <input type="text" placeholder="Segunda linea" onChange={(e)=> setLinea1(e.target.value)}/>
      <br/>
      <input type="text" placeholder="Primer linea" onChange={(e)=> setLinea2(e.target.value)} />
      <br/>
      <button onClick={exportarMeme}>Crear meme</button>
      <div className='meme' id='meme'>
        <span className='linea1'>{linea1}</span>
        <br/>
        <span className='linea2'>{linea2}</span>
        <img className='img_meme' src={`imgs/${img}`} alt="meme"/>
      </div>
     
      

     
      
    </div>
  );
}

export default App;

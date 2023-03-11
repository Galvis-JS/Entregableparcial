import React from "react";
import styles from "./app.module.css";
import {useState} from "react";
import Card from "./Card";


function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState("");
  const [send, setSend] = useState(false);
  
  const changeName = (e) => setName(e.target.value);
  const changeColor = (e) => setColor(e.target.value);

  const validNameAndColor = (name,color) => {
    const spacesName = name.trim();
    return (spacesName.length >= 3 && color.length >= 6) ? true : false;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isValidNameAndColor = validNameAndColor(name,color);

    if (isValidNameAndColor){
      setSend(true)
      setError("")
    }else{
      setError("Por favor chequea que la información sea correcta")
      setSend(false);
    }
  }
  return (
    <div className={styles.App}>
      <h3 className={styles.title}>Ingresa Tu Color Favorito.!</h3>
      <form onSubmit={handleSubmit} className={styles.containerMain}>
        <input className={styles.inputNameAndColor} type="text" placeholder="Ingresa Tu Nombre" value={name} onChange={changeName}/>
        <input className={styles.inputNameAndColor} type="text" placeholder="Ingrese Tu Color (Formato HEX)" value={color} onChange={changeColor}/>
        <button className={styles.buttonSubmit} type="submit">ENVIAR</button>
        
      </form>
      <p className={styles.error}>{error}</p>
      {send ? <Card nombre = {name} color = {color}/> : ""}
      
    </div>
  );
}

export default App;

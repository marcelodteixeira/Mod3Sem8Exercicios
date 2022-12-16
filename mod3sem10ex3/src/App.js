import { React, useState } from 'react'
import logo from './logo.svg';
import './App.css';

export default function App() {

  const dataInit = {
    cep: "",
    rua:"",
    estado: "",
    cidade: "", 
    bairro: "",
    
  }

const [dataInicial,setData] = useState(dataInit)

const [cep,setCep] = useState("")


const buscarCep = ()=>{

  if(setCep.length < 8) {
    return;
} else {      
     fetch(url, {mode: 'cors'})
      .then((res) => res.json())
      .then((data) => {
          if (data.hasOwnProperty("erro")) {
              setCep(valor => valor = "" );
              alert('Cep não existente');
          } else {
              setData();
          }
      })
      .catch(err => console.log(err));
}

}


  const url = ()=>{
    return `https://brasilapi.com.br/api/cep/v1/{setCep}`;
  }

  const handleChange = event => {
    const value = event.target.value;
    const name = event.target.name; 

     buscarCep();

  };

  return (
    <div>
    <label> Digite o cep:
   <input type={"text"} value={cep} onChange={buscarCep}></input>
    </label>
    <div>Endereço/Rua: {dataInicial.rua}</div>
    <div>Bairro: {dataInicial.bairro}</div>
    <div>Cidade: {dataInicial.cidade}</div>
    <div>UF: {dataInicial.estado}</div>
    

  </div>
  );
}



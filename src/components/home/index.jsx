import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  function buscarVeiculos() {
    axios
      .get("https://parkingapisenai.azurewebsites.net/api/veiculos")
      .then((res) => {
        console.log("🚗 Dados recebidos da API:", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("❌ Erro ao buscar veículos:", err.message);
      });

  }
  useEffect(() => {
    buscarVeiculos();
  }, []);


  return (
    <div className="home-page">
      <button onClick={()=> navigate("/registro")} className="btn-voltar">Voltar</button>


      <h1>Veículos ativos</h1>

      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div className="Cards "key={index}>
            <p>Placa: {item.placa}</p>
            <p>Data entrada: {item.dataEntrada}</p>
            <p>Hora entrada: {item.horarioEntrada}</p>
          </div>
              ))
              ) : (
              <p>Nenhum veículo encontrado</p>
      )}
            </div>

            )

}
import { useState } from 'react';
import McQuenn from '../../assets/images/carros.svg'
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Registro = () => {
    const [placaEntrada, setPlacaEntrada] = useState("");
    const [placaSaida, setPlacaSaida] = useState("");
     const navigate = useNavigate();
    async function handleEntrada(e) {
        e.preventDefault();
        if (!placaEntrada) {
            alert("Digite a placa do veicículo para registrar a entrada!");
            return;
        }
        try {
            const response = await axios.post(
                "https://parkingapisenai.azurewebsites.net/api/veiculos/entrada",
                { placa: placaEntrada }
            );
            console.log("Entrada registrada:", response.data);
            alert("Entrada resgistrda com sucesso!");
            navigate("/home");

        } catch (error) {
            console.error("Erro ao registrar entrada:", error);
            alert("Erro ao registrar entrada.verifique a placa.");
        }
    }
    //saída
    async function handleSaida(e) {
        e.preventDefault();
        if (!placaSaida) {
            alert("Digite a placa do veículo para registrar a saída!");
            return;
        }

        try {
            const response = await axios.put(
                "https://parkingapisenai.azurewebsites.net/api/veiculos/saida",
                { placa: placaSaida }
            );

            console.log("Saída registrada:", response.data);
            alert("Saída registrada com sucesso!");
            setPlacaSaida("");
        } catch (error) {
            console.error("Erro ao registrar saída:", error);
            console.log(placaSaida)
            alert("Erro ao registrar saída. Verifique a placa.");
        }
    }
    return (
        <div className='registro-page'>
            <button onClick={()=> navigate("/home")} className="btn-voltar">Voltar</button>
            <div className='registro-container'>

                <form className="section" onSubmit={handleEntrada}>
                    <h2>Registrar Entrada</h2>

                    <input
                        className="form-input"
                        placeholder="Digite a placa aqui"onChange={(e) => setPlacaEntrada(e.target.value)} />

                    <button className="btn-entrada">Registrar entrada </button>
                </form>
                {/* saída */}
                <form className="section-saída" onSubmit={handleSaida}>
                    <h2>Registrar Saída</h2>

                    <input
                        className="form-input"
                        placeholder="Digite a placa aqui"onChange={(e) => setPlacaSaida(e.target.value)} />

                    <button className="btn-saída" >
                        Registrar saída
                    </button>
                </form>


            </div>
        </div>

    )


}

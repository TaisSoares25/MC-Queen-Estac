import "./style.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    async function handleCadastro(e) {
        e.preventDefault()

        if (!nome || !email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            console.log(nome, email, senha)
            const response = await axios.post(
                "https://parkingapisenai.azurewebsites.net/auth/register",
                {
                    nome: nome,
                    email: email,
                    senha: senha,
                }
            );
            
            console.log("Resposta da API:", response.data);
            if(response.status === 200){
                alert("Sucesso", "Cadastro realizado!");
                navigate("/registro");
            }
        }catch(error){
            console.error("Erro no Cadastro:", error);
            alert ("Erro", "Falha ao fazer Cadastro. Verifique seus dados.");
        }
    }
    return (
        <div className="CadastroPage">
            <form className="cadastro-box" onSubmit={handleCadastro}>
                <h2>CADASTRAR</h2>

                <label>Nome:</label>
                <input type="Nome" onChange={(e) => setNome(e.target.value)} />

                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />

                <label>Senha:</label>
                <input type="password" onChange={(e) => setSenha(e.target.value)}/>

                <button className="btn-cadas">Cadastrar</button>
            </form>



        </div>

    );

}
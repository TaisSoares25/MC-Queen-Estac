
import Mcqueen from '../../../assets/images/mcqueen.svg'
import car from '../../../assets/images/carros.svg'
import "./style.css";
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault()

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      console.log(email, senha)
      const response = await axios.post(
        "https://parkingapisenai.azurewebsites.net/auth/login",
        {
          email: email,
          senha: senha,
        }
      );

      console.log("Resposta da API:", response.data);

      if (response.status === 200) {
        alert("Sucesso", "Login realizado!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Erro", "Falha ao fazer login. Verifique seus dados.");
    }
  }



  return (
    <div className='loginPage'>

      <header>
        <img src={Mcqueen} alt="" />
      </header>
      <div className="login-container">
        <form className="login-box" onSubmit={handleLogin}>
          <h1>Login</h1>

          <label>Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />

          <label>Senha:</label>
          <input type="password" onChange={(e) => setSenha(e.target.value)} />

          <button className="btn-login"  >ENTRAR</button>




        </form>

        <div className='linha-cadastro'>
          {/* <p>Ainda não tem conta?</p> */}


          <button className="btn-cadastrar" onClick={() => navigate("/cadastro")}>Cadastrar-se</button>
        </div>
        <div className='car'>
          <img src={car} alt='' />
        </div>



      </div>
    </div>

  );

}
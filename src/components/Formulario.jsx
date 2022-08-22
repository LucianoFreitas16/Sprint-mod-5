import { Button } from "./Button";

import "./css/Formulario.css";


export const Forms = () => {
  return (
    <form className="form">
      <div className="formTxt">
        <h3>Ajude o algorítimo a ser mais certeiro</h3>
      </div>

      <div className="formulario">
        <label htmlFor="name">Seu nome</label>
        <input
          type="text"
          className="input"
          name="name"
          placeholder="Digite seu nome"
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          className="input"
          name="email"
          placeholder="Digite seu E-mail"
        />

        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          className="input"
          name="cpf"
          placeholder="Digite seu CPF"
        />

        <div>
          <input type="radio" name="gender" />
          <label htmlFor="gender" className="inputRadio">
            Masculino
          </label>

          <input type="radio" name="gender" />
          <label htmlFor="gender" className="inputRadio">
            Femoinino
          </label>
        </div>

        <Button buttonText="Enviar" />
      </div>
    </form>
  );
};

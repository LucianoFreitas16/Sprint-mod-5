import { Button } from "./Button";

import "./css/header.css";

import "./css/button.css";

export const Header = () => {
  return (
    <header>
      <p className="text1">uma seleção de produtos</p>
      <h1 className="text2">especial para você</h1>
      <p className="text3">
        todos os produtos dessa lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>

      <div className="botoesHeader">
        <Button buttonText="Conheça a Linx" />
        <Button buttonText="Ajude o algoritimo" />
        <Button buttonText="Seus produtos" />
        <Button buttonText="Compartilhe" />
      </div>
    </header>
  );
};

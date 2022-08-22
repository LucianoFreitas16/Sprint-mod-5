import { Button } from "./Button";

export const Cards = (props) => {
  return (
    <div className="card">
      <img className="image" width="120px" height="120px" src={props.image} />
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.descricao}</p>
      <p className="oldPrice">{props.oldPrice.toFixed(2).replace(".", ",")}</p>
      <strong className="price">
        {props.price.toFixed(2).replace(".", ",")}
      </strong>
      <p className="price2x">
        {props.installmentsCount}
        {props.installmentsValue.toFixed(2).replace(".", ",")}
      </p>

      <Button texto="Comprar" />
    </div>
  );
};

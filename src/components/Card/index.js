import React from "react";
import styles from "./Card.module.scss";

function Card({onFavorive, imageUrl, title, price, onPlus}) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favotire} onClick={onFavorive}>
        <img width={32} height={32} src="/img/unliked.svg" alt="unliked" />
      </div>

      <img width={170} height={133} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} kzt.</b>
        </div>
        <img
          onClick={onClickPlus}
          src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
          alt="Add to Card"
        />
      </div>
    </div>
  );
}

export default Card;

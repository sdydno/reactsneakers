import React from "react";
import styles from "./Card.module.scss";

function Card({id, onFavorite, imageUrl, title, price, onPlus, favorited=false}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  }

  return (
    <div className={styles.card}>
      <div className={styles.favotire} onClick={onClickFavorite}>
        <img
          width={32}
          height={32}
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
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

import React from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loading = false
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={265}
          viewBox="0 0 210 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="190" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="220" rx="5" ry="5" width="80" height="25" />
          <rect x="126" y="113" rx="5" ry="5" width="32" height="32" />
          <rect x="0" y="0" rx="10" ry="10" width="160" height="155" />
          <rect x="0" y="170" rx="5" ry="5" width="160" height="15" />
          <rect x="125" y="213" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Card;

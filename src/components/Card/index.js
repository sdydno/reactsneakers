import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
  const onClickButton = () => {
    alert(props.price);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favotire}>
        <img width={32} height={32} src="/img/unliked.svg" alt="unliked" />
      </div>

      <img width={170} height={133} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{props.price} kzt.</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;

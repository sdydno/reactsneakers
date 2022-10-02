// eslint-disable-next-line no-unused-vars
function Card() {
  return (
    <div className="card">
      <div className="favotire">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>

      <img width={170} height={133} src="/img/sneakers/1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>12 999 kzt.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

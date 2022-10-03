function Drawer () {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Card
          <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="" />
        </h2>

        <div className="items">
          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 kzt.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 kzt.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>15 999 kzt.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>

          <div className="cardItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cardItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999 kzt.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
          </div>
        </div>

        <div className="cardTotalBlock">
          <ul>
            <li className="d-flex">
              <span>Coast:</span>
              <div></div>
              <b>21 498 kzt.</b>
            </li>
            <li className="d-flex">
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 kzt.</b>
            </li>
          </ul>
          <button className="greenBtn">
            Checkout <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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

      <header className="d-flex justify-between align-center">
        <div className="d-flex">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span>1205 kzt.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="sneakers">
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

          <div className="card">
            <img width={170} height={133} src="/img/sneakers/2.jpg" alt="" />
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

          <div className="card">
            <img width={170} height={133} src="/img/sneakers/3.jpg" alt="" />
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

          <div className="card">
            <img width={170} height={133} src="/img/sneakers/4.jpg" alt="" />
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
        </div>
      </div>
    </div>
  );
}

export default App;

function Drawer ({ onClose, items = []}) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Card
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        <div className="items">
          {items.map((obj) => (
            <div className="cardItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cardItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price}</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="" />
            </div>
          ))}
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
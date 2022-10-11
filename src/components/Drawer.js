function Drawer ({ onClose, onRemove, items = []}) {
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

        {items.length > 0 ? (
          <div>
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
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt=""
                  />
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
        ) : (
          <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              width="120px"
              height="120px"
              class="mb-20"
              src="/img/empty-cart.jpg"
              alt="Empty cart"
            />
            <h2>Cart empty</h2>
            <p class="opacity-6">Add something to cart</p>
            <button onClick={onClose} class="greenBtn">
              <img src="/img/arrow.svg" alt="Arrow" />
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
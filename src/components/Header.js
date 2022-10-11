import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <Link to="/">
        <div className="d-flex">
          <img width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
          <span>1205 kzt.</span>
        </li> 
        <Link to="/favorites">
          <li className="mr-20 cu-p">
            <img width={18} height={18} src="/img/heart.svg" alt="Favorite" />
          </li>
        </Link>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

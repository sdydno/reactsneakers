function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span>1205 kzt.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  );
}

export default Header;

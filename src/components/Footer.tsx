export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div>
          <h3>FALE CONOSCO</h3>
          <ul>
            <li>
              <span>(27)99987-3360 / (27) 99783-9747</span>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </li>
            <li>
              <span>mpaescestacamponesa@gmail.com</span>
              <ion-icon name="mail-sharp"></ion-icon>
            </li>
            <li>
              <span>@rede_bemviver</span>
              <ion-icon name="logo-instagram"></ion-icon>
            </li>
          </ul>
        </div>
        <div>
          <h3>SOBRE NÓS</h3>
          <ul>
            <li>
              <a href="#history">Nossa história</a>
            </li>
            <li>
              <a href="#about-us">Quem somos</a>
            </li>
            <li>
              <a href="#gathering">Encontros nacionais</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <span>Política de privacidade</span>
        <div className="footer__logo-container">
          <img className="footer__logo" src="logo2.png" />
        </div>
      </div>
    </footer>
  );
}

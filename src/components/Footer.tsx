export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div>
          <h3 className="footer__heading">FALE CONOSCO</h3>
          <ul className="footer__list">
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
          <h3 className="footer__heading">SOBRE NÓS</h3>
          <ul className="footer__list">
            <li>
              <a href="#history">Nossa história</a>
            </li>
            <li>
              <a href="#about-us">Quem somos</a>
            </li>
            <li>
              <a href="#meetings">Encontros nacionais</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__privacy">
        <span>Política de privacidade</span>
        <div className="footer__logo-container">
          <img
            className="footer__logo"
            src="/logo2.png"
            alt="Logo da rede bem viver"
          />
        </div>
      </div>
    </footer>
  );
}

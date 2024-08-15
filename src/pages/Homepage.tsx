import { useState } from "react";
import { Header, Footer } from "../components";

export function Homepage() {
  const [showPush, setShowPush] = useState(false);

  const handleNewsletterBtnClick = () => {
    setShowPush((prev) => !prev);
  };

  return (
    <>
      <Header />
      <main className="homepage">
        <div className="homepage__main-img-container">
          <img src="/homepage-main.jpg" />
        </div>
        <section
          className="homepage__section homepage__section--about-us"
          id="about-us"
        >
          <div>
            <h3 className="homepage__section--title">QUEM SOMOS</h3>
            <div>
              <p>
                Somos um movimento organizado do campesinato, constituído por
                crianças, jovens, mulheres, homens, famílias e comunidades que
                desejam seguir sua trajetória de produção agrícola e reprodução
                da vida. Somos o MPA (Movimento dos Pequenos Agricultores),
                cofundadores e coadministradores da Rede Bem Viver para a
                Transição Agroecológica e o Abastecimento Popular..
              </p>
              <p>
                Estamos em vários cantos do Brasil, cuidando da roça, das
                pessoas, das comunidades urbanas e da natureza, produzindo com
                responsabilidade a alimento de verdade, livre de veneno e de
                toda forma de opressão, animados e com a certeza de que a
                agroecologia é a melhor base produtiva para alimentar o povo e
                cultivar a terra.
              </p>
              <p>
                Conectamos o campo e a cidade, através do alimento, da
                solidariedade entre as classes, das consciências, da alegria e
                da vontade de fazer diferente, reforçando o valor do agricultor
                e da agricultora, frequentemente invisibilizados(as) pelo
                sistema. Vamos, assim, construindo novas maneiras de prover o
                pão, o fruto, os “alimentos saudáveis em todas as mesas”
                capixabas.
              </p>
              <p>
                Aliando-se ao MPA e à Rede Bem Viver-ES, você não apenas apoia a
                economia local, o campesinato e a agroecologia, como também tem
                a oportunidade de integrar uma rede de apoio mútuo e de consumir
                produtos que contem história, sabor, qualidade, carinho e amor.
              </p>
            </div>
          </div>

          <div>
            <img src="/about-us.jpg" />
          </div>
        </section>
        <section
          className="homepage__section homepage__section--call"
          id="call"
        >
          <div>
            <ion-icon name="hand-right-sharp"></ion-icon>
          </div>
          <span>
            O MPA Nasceu da pressão da base organizada; nasceu da luta dos
            agricultores e agricultoras para resistir na roça; nasceu para lutar
            pela mudança da Política Agrícola; lutar por Crédito Subsidiado e
            Seguro Agrícola. Nasceu para lutar e construir um Novo Modelo para
            Agricultura Brasileira.
          </span>
        </section>
        <section
          className="homepage__section homepage__section--history"
          id="history"
        >
          <h3 className="homepage__section--title">NOSSA HISTÓRIA</h3>
          <div>
            <div>
              <p>
                O MPA nasceu no ano de 1996, como fruto histórico da crise
                econômica e social na agricultura brasileira produto da abertura
                neoliberal dos anos 90 e do esgotamento do movimento sindical de
                trabalhadores rurais como instrumento de representação e luta
                dos camponeses brasileiros. Confluíram para formar o movimento
                militantes oriundos do movimento sindical combativo, da teologia
                da libertação e do Partido dos Trabalhadores.
              </p>
              <p>
                O MPA, assim como um rio, tem muitas nascentes, surgiu em vários
                lugares do país, na mesma época e, pelas mesmas razões,
                construído pela força da luta, pela pressão da base, pela
                vontade da militância e para mudar a situação vivida pela classe
                camponesa.
              </p>
            </div>
            <figure>
              <img src="/history-1.webp" />
              <figcaption>
                Camponeses do MPA participam em Brasília da luta contra o Golpe
                em 2016
              </figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img src="/history-2.webp" />
              <figcaption>
                Camponeses do MPA participam em Brasília da luta contra o Golpe
                em 2016
              </figcaption>
            </figure>
            <div>
              <p>
                O fato que deflagrou este entendimento para os pequenos
                agricultores foi a Seca que castigou as plantações no final de
                1995 e início de 1996 no Rio Grande do Sul. Enquanto os
                agricultores angustiavam-se com a perda total das plantações,
                dirigentes de Sindicatos e da Federação dos Trabalhadores faziam
                acordos entre si e conchavos políticos com os governantes da
                época para negociar soluções que nunca chegavam até a roça dos
                agricultores.
              </p>
              <p>
                Houve um momento em que a indignação dos agricultores atingidos
                pela seca conseguiu sensibilizar alguns sindicalistas. Estes
                dirigentes tiveram a sensatez de ouvir o clamor da base.
                Articulou-se uma mobilização histórica pela Agricultura
                Camponesa no RS.
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>
                A Mobilização da Seca provocou uma avaliação profunda sobre o
                modo da atual organização dos camponeses e camponesas na época
                além de também revigorar o método de organização das lutas
                políticas. Cinco foram os Acampamentos da Seca que se
                organizaram nos meses de janeiro e de fevereiro de 1996 no RS,
                reunindo mais de 25.000 pequenos agricultores. Ali germinou a
                semente do MPA.
              </p>
            </div>
            <figure>
              <img src="/history-3.webp" />
              <figcaption>
                Camponeses do MPA participam em Brasília da luta contra o Golpe
                em 2016
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="homepage__section homepage__section--meetings"
          id="meetings"
        >
          <h3 className="homepage__section--title">ENCONTROS NACIONAIS</h3>
          <div>
            <div>
              <span>1º</span>
              <p>
                Ocorreu em maio de 2000, em Ronda Alta, Rio Grande do Sul
                reunindo cerca de 280 pessoas. Aqui se firmou a forma de
                organização pelos grupos de base, e a necessidade de formar
                militantes para o Movimento.
              </p>
            </div>
            <div>
              <p>
                Ocorreu em maio de 2000, em Ronda Alta, Rio Grande do Sul
                reunindo cerca de 280 pessoas. Aqui se firmou a forma de
                organização pelos grupos de base, e a necessidade de formar
                militantes para o Movimento.
              </p>
              <span>2º</span>
            </div>
            <div>
              <span>3º</span>
              <p>
                Ocorreu em maio de 2000, em Ronda Alta, Rio Grande do Sul
                reunindo cerca de 280 pessoas. Aqui se firmou a forma de
                organização pelos grupos de base, e a necessidade de formar
                militantes para o Movimento.
              </p>
            </div>
          </div>
        </section>
        <section
          className="homepage__section homepage__section--how-it-works"
          id="how-it-works"
        >
          <h3 className="homepage__section--title">COMO FUNCIONA</h3>
          <div>
            <figure>
              <div>
                <ion-icon name="fast-food-sharp"></ion-icon>
              </div>
              <figcaption>
                <span>ESCOLHA SEUS PRODUTOS</span>
                <span>
                  Escolha os produtos disponíveis na semana para a sua cidade
                </span>
              </figcaption>
            </figure>
            <figure>
              <div>
                <ion-icon name="cart-sharp"></ion-icon>
              </div>
              <figcaption>
                <span>FINALIZE SUA COMPRA</span>
                <span>Criar um texto aqui</span>
              </figcaption>
            </figure>
            <figure>
              <div>
                <ion-icon name="basket-sharp"></ion-icon>
              </div>
              <figcaption>
                <span>MONTAMOS A SUA CESTA</span>
                <span>Nós iremos SEPARAR os produtos e MONTAR a sua CESTA</span>
              </figcaption>
            </figure>
            <figure>
              <div>
                <ion-icon name="walk-sharp"></ion-icon>
              </div>
              <figcaption>
                <span>ENTREGAMOS NA SUA CASA</span>
                <span>Nós iremos entergar sua CESTA na sua casa</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          className="homepage__section homepage__section--newsletter"
          id="newsletter"
        >
          <span>DESEJA RECEBER NOVIDADES?</span>
          <form>
            <div>
              <input className="input" placeholder="Seu nome" />
              <input className="input" placeholder="Seu e-mail" />
            </div>
            <button
              className="button"
              type="button"
              onClick={handleNewsletterBtnClick}
            >
              Receber
            </button>
          </form>
          {showPush && (
            <div className="push">Essa função ainda está em construção.</div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

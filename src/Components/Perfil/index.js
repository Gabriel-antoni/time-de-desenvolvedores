import React, { Component } from "react";
import ReactDOm from "react-dom";
import "./perfil.css";
import Imagem from "../../Assents/icon/html5.png";
import Imagem2 from "../../Assents/icon/css-3.png";
import Imagem3 from "../../Assents/icon/script-java.png";
import Imagem4 from "../../Assents/icon/react2.png";
import Imagem5 from "../../Assents/icon/edesildo.jpeg";
import Imagem6 from "../../Assents/icon/iara.jpeg";
import Imagem7 from "../../Assents/icon/gabriel.jpeg";
import Imagem8 from "../../Assents/icon/jessica.jpeg";
import Imagem9 from "../../Assents/icon/Design.png";

export default class Perfil extends Component {
  render() {
    return (
      <div className="conteiner">
        <div className="box">
          <div className="box1">
            <h1>Conheça o time de Desenvolvedores</h1>
            <p>front-end Jr's sejam todox bem vindxs.</p>
            <div className="botoes">
              <a target="_black" href="https://github.com/iarawatson2">
                <button className="botao">Iara-Portifólio</button>
              </a>

              <a target="_black" href="">
                <button className="botao">Jessica-Portifólio</button>
              </a>

              <a target="_black" href="https://github.com/Gabriel-antoni">
                <button className="botao">Gabriel-Portifólio</button>
              </a>

              <a target="_black" href="https://github.com/Edesildo">
                <button className="botao">Edesildo-Portifólio</button>
              </a>
            </div>
          </div>
          <div className="box2">
            {" "}
            <img id="foto1" src={Imagem9} />
          </div>
        </div>
        <main className="cursos">
          <div className="caixa1-2">
            <div className="caixa1">
              <div className="texto1"></div>
            </div>
            <div className="caixa2">
              <div className="texto2">
                <h3>Experiencias</h3>
              </div>
            </div>
          </div>
          <section className="caixa3-4-5-6">
            <div className="caixa3">
              <div className="icon1">
                <img className="iconi" src={Imagem} />
                <h3>HTML</h3>
              </div>
            </div>
            <div className="caixa4">
              <div className="icon1">
                <img className="iconi" src={Imagem2} />
                <h3>CSS</h3>
              </div>
            </div>
            <div className="caixa5">
              <div className="icon1">
                <img className="iconi" src={Imagem3} />
                <h3>JAVA_SCRIPT</h3>
              </div>
            </div>
            <div className="caixa6">
              <div className="icon1">
                <img className="iconi" src={Imagem4} />
                <h3>REACT</h3>
              </div>
            </div>
          </section>
        </main>

        <section id="sobreMim">
          <div className="user1">
            <img id="foto" src={Imagem5} />
            <button className="bntc">Curriculo</button>
          </div>
          <div className="user2">
            <img id="foto" src={Imagem6} />
            <button className="bntc">Curriculo</button>
          </div>
          <div className="user3">
            <img id="foto" src={Imagem7} />
            <button className="bntc">Curriculo</button>
          </div>
          <div className="user4">
            <img id="foto" src={Imagem8} />
            <button className="bntc">Curriculo</button>
          </div>
        </section>
      </div>
    );
  }
}

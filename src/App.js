import React, { Component } from "react";
import "./estilo.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: ""
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Entregue suas preocupações ao Senhor, e ele o susterá; jamais permitirá que o justo venha a cair. Salmos 55:22",
      "Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. Josué 1:9",
      "Ainda que eu passe por angústias, tu me preservas a vida da ira dos meus inimigos; estendes a tua mão direita e me livras. Salmos 138:7",
      "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam, Naum 1:7",
      "Por isso, não abram mão da confiança que vocês têm; ela será ricamente recompensada. Vocês precisam perseverar, de modo que, quando tiverem feito a vontade de Deus, recebam o que ele prometeu; Hebreus 10:35-36",
      "Quem segue a justiça e a lealdade encontra vida, justiça e honra. Provérbios 21:21"
    ];
  }

  quebraBiscoito() {
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/biscoito.png")} className="img" />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;

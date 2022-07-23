class Forca {
  status = {
    letrasChutadas: [],
    vidas: 6,
    palavra: [],
  };

  constructor(data) {
    this.data = data;
    this.esconderPalavra();
  }
  esconderPalavra() {
    for (let i in this.data) this.status.palavra.push("_");
  }


  chutar(letra) {
    if (!this.error(letra)) {
      const acerto = this.data.includes(letra);
      this.status.letrasChutadas.push(letra);

      if (acerto) {
        for (let i in this.data) {
          this.data[i] === letra &&
            (this.status.palavra[i] = letra);
        } 
      } else this.status.vidas--;

      return true;
    }
  }

  error(letra) {
    const problema = (problem) => {
      alert(problem);
    };

    if (letra.length > 1) {
      problema("Apenas uma letra por vez parça");
    }
    if (this.status.letrasChutadas.includes(letra)) {
      problema("Você usou essa letra");
    } else {
      console.log("voce errou :(")
    }

  }

  buscarEstado() {
    if (this.status.vidas === 0) {
      return "perdeu";
    } else if (
      this.status.palavra.join("") === this.data &&
      this.status.vidas > 0
    ) {
      return "ganhou :D ";
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return this.status;
  }
}

module.exports = Forca;

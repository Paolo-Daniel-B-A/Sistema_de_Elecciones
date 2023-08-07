//Principio de Responsabilidad Única (SRP - Single Responsibility Principle):
//El SRP establece que una clase debe tener una sola responsabilidad y que esta debe estar encapsulada en esa clase.

// Clase para representar el voto
namespace Dominio.Votacion.entities {
  class Voto {
    private idVoto: number;
    private idVotante: number;
    private idCandidato: number;
    private validado: boolean;

    constructor(idVoto: number, idVotante: number, idCandidato: number, validado: boolean) {
      this.idVoto = idVoto;
      this.idVotante = idVotante;
      this.idCandidato = idCandidato;
      this.validado = validado;
    }

    // Getter methods
    getIdVoto(): number {
      return this.idVoto;
    }

    getIdVotante(): number {
      return this.idVotante;
    }

    getIdCandidato(): number {
      return this.idCandidato;
    }

    isValidado(): boolean {
      return this.validado;
    }
  }
}


// Clase para representar el voto
namespace Dominio.Votacion.entities {
  interface Voto {
    idVoto: number;
    idVotante: number;
    idCandidato: number;
    validado: boolean;
  }
}

// Clase para operaciones con votos
namespace Dominio.Votacion.services {
  class ServicioVotos {
    static encontrarCandidatoMasVotado(votos: Voto[]): number | null {
      if (votos.length === 0) {
        return null;
      }

      const votosPorCandidato: { [idCandidato: number]: number } = {};
      let candidatoMasVotado = votos[0].idCandidato;
      let votosMasAltos = 0;

      for (const voto of votos) {
        const idCandidato = voto.idCandidato;
        if (!votosPorCandidato[idCandidato]) {
          votosPorCandidato[idCandidato] = 1;
        } else {
          votosPorCandidato[idCandidato]++;
        }

        if (votosPorCandidato[idCandidato] > votosMasAltos) {
          votosMasAltos = votosPorCandidato[idCandidato];
          candidatoMasVotado = idCandidato;
        }
      }

      return candidatoMasVotado;
    }
  }
}


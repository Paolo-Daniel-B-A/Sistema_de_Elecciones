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
    // Implement getter methods here
  }
}

// Clase para operaciones con votos
namespace Dominio.Votacion.services {
  class ServicioVotos {
    static encontrarCandidatoMasVotado(votos: Voto[]): number | null {
      // Implementación para encontrar el candidato más votado (código previo)
    }
  }
}

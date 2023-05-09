export class Peso {
  cantCajas;
  pesoCaja;
  pesoTotal;

  constructor(cantCajas, pesoCaja) {
    this.cantCajas = cantCajas;
    this.pesoCaja = pesoCaja;
  }

  pesoTotalFlete(cantCajas, pesoCaja) {
    this.pesoTotal = cantCajas * pesoCaja;
    return this.pesoTotal;
    alert("El PESO TOTAL de su mercancia es de: " + pesoTotal + "kg");
  }
}

// /**
//  * Los clientes no deberian estar obligados a depender de interfaces
//  * que no necesiten
//  */

// interface Bird {
//   fly(): void;
//   eat(): void;
//   run(): void;
//   swim(): void;
// }

// class Tucan implements Bird {
//   swim(): void {
//     throw new Error("Method not implemented.");
//   }
//   public fly() {}
//   public eat() {}
//   public run() {}
// }

// class HummingBird implements Bird {
//   swim(): void {
//     throw new Error("Method not implemented.");
//   }
//   public fly() {}
//   public eat() {}
//   public run() {}
// }

// class Ostrich implements Bird {
//   public fly(): void {
//     throw new Error("Method not implemented.");
//   }
//   public eat(): void {
//     throw new Error("Method not implemented.");
//   }
//   public run(): void {
//     throw new Error("Method not implemented.");
//   }

//   public swim() {}
// }

// class Penguin implements Bird {
//   public fly(): void {
//     throw new Error("Method not implemented.");
//   }
//   public eat(): void {
//     throw new Error("Method not implemented.");
//   }
//   public run(): void {
//     throw new Error("Method not implemented.");
//   }

//   public swim() {}
// }


/**
 * Detectar violaciones
 * 1- Si las interfaces que diseñamos nos obligan a violar los principios
 * de responsabilidad única y substitución de Liskov
 * 2- 
 */
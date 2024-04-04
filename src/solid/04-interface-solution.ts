/**
 * Los clientes no deberian estar obligados a depender de interfaces
 * que no necesiten
 */

interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): number;
}

interface RunningBird {
  run(): void;
}

interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public eat(): void {}
  public fly() {
    return 10;
  }
}

class HummingBird implements Bird, FlyingBird {
  public fly() {
    return 120;
  }
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public fly(): void {}
  public eat(): void {}
  public run(): void {}
}

class Penguin implements Bird, SwimmerBird {
  public eat(): void {}
  public swim(): void {}
}

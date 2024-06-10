//Crea clase Base
class Vehiculo {
    //Crea atributos
    constructor(marca, modelo, año) {
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
    }
    //Crea función para devolver datos
    obtenerInformacion() {
      console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.año})`);
    }
  }
  
  //Crea clase hija
  class Automovil extends Vehiculo {
    //Crea atriutos con la herencia de la clase base
    constructor(marca, modelo, año, color, precio) {
      super(marca, modelo, año); // Llama al constructor de la clase base
      this.color = color;
      this.precio = precio;
    }
    //Crea función para devolver datos
    obtenerInformacion() {
      super.obtenerInformacion(); // Llama al método de la clase base
      console.log(`Color: ${this.color}`);
      console.log(`Precio: $${this.precio}`);
    }
  }
  
  // Crea instancias y envia información
  const auto1 = new Automovil("Toyota", "Corolla", 2023, "Rojo", 25000000);
  const auto2 = new Automovil("Ford", "Fiesta", 2022, "Azul", 20000000);
  
  //Imprime en consola la instancia 1
  console.log("Información del auto 1:");
  auto1.obtenerInformacion();
   //Imprime en consola la instancia 2
  console.log("\nInformación del auto 2:");
  auto2.obtenerInformacion();
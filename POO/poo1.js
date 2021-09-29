// Ejercicio POO 1

//     Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  obtDetalles() {
    console.log(`Hola me llamo ${this.nombre} y mi edad es ${this.edad} y soy un ${this.genero}`);
  }
}

let ruru = new Persona ("Ruben", 31, "hombre")

console.log(ruru.obtDetalles());
//     Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
  constructor(nombre, edad, genero, curso, grupo) {
    super(nombre, edad, genero); 
    this.curso = curso;
    this.grupo = grupo;
  }
  registrar() {
    console.log(`Hola me llamo ${this.nombre} y mi edad es ${this.edad} y soy un ${this.genero} del curso de ${this.curso} y del grupo ${this.grupo}`);
  }
}

let maryloEstudia = new Estudiante("Marylo", 29, "mujer", "programacion", 1.2)

console.log(maryloEstudia.registrar());
//     Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Estudiante {
  constructor(nombre, edad, genero, curso, grupo, asignatura, nivel){
    super(nombre, edad, genero, curso, grupo);
    this.asignatura = asignatura;
    this.nivel = nivel;
    
  }
  asignar(){
    console.log(`Hola me llamo ${this.nombre} y mi edad es ${this.edad} y soy un ${this.genero} del curso de ${this.curso} y del grupo ${this.grupo} y mi asignatura es ${this.asignatura} y el nivel es ${this.nivel}`);
  }
}

let data = new Profesor("Marylo", 29, "mujer", "programacion", 1.2, "ciencias", "pro")

console.log(data.asignar());
//     Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

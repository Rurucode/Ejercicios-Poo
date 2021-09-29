

// Ejercicio POO 1

//     Crear la clase Persona, con propiedades nombre, edad y género, y el metodo obtDetalles(), que muestra por pantalla las propiedades de la persona.

//     Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el metodo asignar(), que muestre por pantalla el resultado.
//     Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

class Persona {
    constructor(nombre, edad, genero){
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
    obtDetalles() {
      console.log(`hola soy ${this.nombre}`)
      console.log(`hola soy ${this.edad}`)
      console.log(`hola soy ${this.genero}`)
    }
  }
  
  let profe = new Persona("Data", 40, "hombre")
  
  
  console.log(profe.obtDetalles())
  
  //     Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el metodo registrar(), que muestre por pantalla 
  
  class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
      super(nombre, edad, genero);
      this.curso = curso;
      this.grupo = grupo;
    }
    asignar(){
      console.log(`mi curso es ${this.curso} y mi grupo es el ${this.grupo} y mola mazo`)
    }
  }
  
  let ruru = new Estudiante("Ruben", 31, "hombre", "fullstack", 1.2)
  
  console.log(ruru.asignar())
  
  //     Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el metodo asignar(), que muestre por pantalla el resultado.
  
  class Profesor extends Estudiante{
    constructor(nombre, edad, genero, curso, grupo, asignatura, nivel){
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
    
  }
  
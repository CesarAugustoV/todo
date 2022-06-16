import { Todo } from "./todo.class";
export class TodoList {

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){

        this.todos.push(todo); // hace referencia al arreglo todos en el constructor
        this.guardarLocalStorage();
        
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id ); 
        //explicacion: this.todos.filter es un metodo, recibe un callback, recibe un todo y si todo.id es diferente id que recibo 
        //por argumento, retorna un arreglo excluyendo el id que llega como argumento. el todo que retorna lo reemplaza.
        this.guardarLocalStorage();

        

    }

    marcarCompletado(id){

        for (const todo of this.todos){//recorremos el arreglo todos hasta que se cumpla la condicion
            
            if (todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }



    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado ); //retorna todos los no completados.
        this.guardarLocalStorage();

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos) );//guardamos en el local storage el todo, y convertimos el objeto todos en un JSON
        
    }

    cargarLocalStorage(){
//verificar siempre si existe lo que deseas cargar.
        this.todos = (localStorage.getItem('todo'))
        ?
            JSON.parse(localStorage.getItem('todo'))//convertimos el json string en un objeto, get consultamos.
            
        :
            [];//si no existe inicia un arreglo vacio
        

            //cambiamos el objeto por una instancia de clase.
            
        this.todos = this.todos.map(obj => Todo.fromJson(obj));//mutamos los objetos, a instancia utilizando el metodo fromJson, mapp lo que hace es devolver el objeto mutado
        // todos es igual a los todos mutados, pasados por la clase Todo el metodo from Json.

    }

}
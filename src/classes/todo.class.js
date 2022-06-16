export class Todo{
    
    static fromJson({id, tarea, completado, creado}){ //recibe el obj y desestructuramos.

        const tempTodo = new Todo(tarea);//instancia de clase Todo
        
        tempTodo.id         = id; //las propiedades del nuevo todo van a ser igual a la recibidas por el metodo.
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;


    }

    constructor(tarea){
        
        this.tarea      = tarea;
        this.id         = new Date().getTime(); // con el date tenemos la fecha y getTime trae consigo los milisegundos. Resutaldo = 1231578923
        this.completado = false;
        this.creado     = new Date();

    }

    imprimirClase(){
        console.log(`${this.tarea} - ${this.id}`);
    }

}
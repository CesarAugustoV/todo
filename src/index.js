//estilos
import './styles.css';
//clases
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


//instaciamos TodoList que tiene todos los metodos para hacer la insercion en nuestro arreglo.
export const todoList = new TodoList();    

//ejecutame crearTodoHtml por cada todo.
todoList.todos.forEach(crearTodoHtml);//funciona de la siguiente manera, funciona solo si envia 1 solo argumento, el argumento que envie es el primer argumento que devuelve el foreach.
//es lo mismo que:
//todoList.todos.forEach(todo => crearTodoHtml(todo));


console.log('todos', todoList.todos);









//esto es lo que que construimos para pruebas


// //agregamos a tarea la instancia de Todo, crea un nuevo todo con las caracteristicas de su clase
// const tarea = new Todo('Aprender JS');
// tarea.completado=true;
// //utilizamos el metodo nuevoTodo de la clase TodoList, que inserta un Todo en el arreglo.
// todoList.nuevoTodo(tarea);

// //imprimimos la clase TodoList
// console.log(todoList);


// crearTodoHtml(tarea);


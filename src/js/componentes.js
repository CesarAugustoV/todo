//importaciones
import { Todo } from '../classes';
import{ todoList } from '../index';

//referencias al hmtl
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltors     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');


export const crearTodoHtml = ( todo )=>{

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''  }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''}>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);//inserta el primer hijo del elemento, es decir no inserta el div sino el <li>

    return div.firstElementChild;

}

//eventos
txtInput.addEventListener('keyup', (event)=>{//el evento que se recibe es la letra que se presiona
    if(event.keyCode===13 && txtInput.value.length>0){//si es igual a enter y el input no esta vacio
        const nuevoTodo = new Todo (txtInput.value);//crea un Todo con el contenido de txtinput
        todoList.nuevoTodo(nuevoTodo);//finalmente utilizamos el metodo nuevoTodo para insertarlo en la lista de todos
        
        crearTodoHtml(nuevoTodo);//llamamos a la funcion crearTodoHtml con los datos del nuevo todo

        txtInput.value = '';//limpiamos el imput
        
    }
});

divTodoList.addEventListener('click', (event)=>{//el evento que se recibe es donde se esta realizando el click con sus propiedades
    

    const nombreElemento = event.target.localName;//trae el tipo de etiqueta, input, label, button.
    const todoElemento    = event.target.parentElement.parentElement;//parentElement se usa para buscar la etiqueta que contiene ese elemnto enviado por el evento
    const todoId         = todoElemento.getAttribute('data-id'); //trae el contenido del atributo, data-id;

    

    if (nombreElemento.includes('input')){//click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');//toggle cambia el estado cada vez que se usa.
    } else if(nombreElemento.includes('button')){ // si nombre elemento incluye button al hacer click borra el elemento
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);//elemina el elemento hijo de todoElemento.
    }
});

btnBorrar.addEventListener('click',()=>{
    todoList.eliminarCompletados(); //ejecutamos el metodo eliminar completados elimina del arreglo

    for(let i = divTodoList.children.length-1; i>=0; i--){//ejecutame este codigo mientras los hijos del divtodolist(donde estan los todo) sean menor mayor o igual a cero, y me restas 1 por cada iteraccion
        const elemento = divTodoList.children[i];//elemento es igual a cada hijo de div todo list en la posicion i

        if(elemento.classList.contains('completed')){// si elemento contiene la propiedad completed 
            divTodoList.removeChild(elemento);//remueve el hijo elemento.
        }
    }
});

ulFiltors.addEventListener('click',(event)=>{

    const filtro = event.target.text; //guardamos lo que devuelve el evento click en una variable
    if(!filtro){ return; }//si no recibe nada. no hagas nada.


    anchorFiltros.forEach(elem=> elem.classList.remove('selected')); //barremos todos los elementos que estan en anchorfiltros y eliminamos la clase selected

    event.target.classList.add('selected');//y segun el evento devuelto añadimos la clase selected seria el cuadro de seleccion


    for(const elemento of divTodoList.children){ //recorremos todo los elelementos de divTodoList
        elemento.classList.remove('hidden');//eliminamos el hidden
        const completado = elemento.classList.contains('completed');//si elemento contiene completed devuelve true.
        

        switch( filtro ){ 

            case 'Pendientes':
                if(completado){
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(!completado){
                    elemento.classList.add('hidden');

                }
            break;

        }
    }


});
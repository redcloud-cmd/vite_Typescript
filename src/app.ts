import { ITodoData } from "./js/typeings";

console.log(1);
((doc)=>{
    const oInput  : HTMLInputElement = document.querySelector('input')
    const oAddBtn :HTMLButtonElement = document.querySelector('button')
    const oTodoList  :HTMLElement = document.querySelector('.todo-list')

    const todoData: [] = [
        {
            id:1,
            content:'123',
            completed:true
        },
        {
            id:2,
            content:'234',
            completed:true
        },
        {
            id:3,
            content:'345',
            completed:true
        },
    ]
})(document)
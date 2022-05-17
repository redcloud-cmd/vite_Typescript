import { ITodoData } from "./js/typings";
import TodoEvent from './js/TodoEvent'
console.log(1);
((doc)=>{
    const oInput  : HTMLInputElement = document.querySelector('input')
    const oAddBtn :HTMLButtonElement = document.querySelector('button')
    const oTodoList  :HTMLElement = document.querySelector('.todo-list')

    const todoData: ITodoData [] = [
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
    ];
    const todoEvent:TodoEvent  = new TodoEvent(todoData)

    const init = () : void =>{
        bindEvent();
    }
    function bindEvent () : void{
        oAddBtn.addEventListener('click',handleAddBtnClick,false);
        oTodoList.addEventListener('click',handleListClick,false);
    }
    function handleAddBtnClick() :void {
        todoEvent.addTodo(<ITodoData>{
            id:4,
            content:"999",
            completed:false
        })
        console.log(todoData)
    }
    function  handleListClick(e:MouseEvent):void{
        const tar = e.target as HTMLElement;
        const tagName = tar.tagName;
        if(tagName ==='input'||tagName ==='button'){
            switch (tagName) {
                case 'input' :
                        break;
                case 'button':
                        break;
                    default:
                        break;
            }
        }
    }


    init();
})(document)
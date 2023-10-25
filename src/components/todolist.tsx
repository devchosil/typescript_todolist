import React,{ useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoInput from './todoInput';
import { TodoListContainer } from '../styles/todolist.styled'
const TodoList = () => {

    interface Item { 
        id: number,
        text: string,
        done: boolean
    } 
    const [todoItem,setTodoItem] = useState<Item[]>([]);
    const [count,setCount] = useState<number>(0);
    const [isChecked,setIsChecked] = useState<boolean[]>([]);

    const [todoInput, setTodoInput] = useState<string>('');

    useEffect(()=>{
        if(localStorage.getItem('item')) {
            const tmpArr = JSON.parse(localStorage.getItem('item'));
            setTodoItem([...tmpArr]);
        }
    },[]);

    const addItem = () => {
        if(todoItem.length===0) {
            setTodoItem([{id:0, text:todoInput, done:false}]);
            localStorage.setItem('item',JSON.stringify([{id:0, text:todoInput, done: false}]));

            // setIsChecked([false]);
        } else {
            const originArray = JSON.parse(localStorage.getItem('item')||"[]");
            const newId = parseInt(originArray[originArray.length-1].id)+1;
            const newArray = [...originArray, {id:newId, text:todoInput, done:false}]
            setTodoItem([...newArray]);
            localStorage.setItem('item',JSON.stringify(newArray));
            // setIsChecked([...isChecked, false]);
        }
    }

    return(
        <TodoListContainer>
            <div 
                style={{paddingTop:"20px", fontSize:"25px"}}
            >To-Do List</div>
                <TodoInput 
                    todoInput={todoInput}
                    setTodoInput={setTodoInput}
                    addItem={addItem}
                    />
                <TodoItem
                    todoItem={todoItem} 
                    setTodoItem={setTodoItem}
                    // isChecked={isChecked}
                    // setIsChecked={setIsChecked}
                />
        </TodoListContainer>
    )
}

export default TodoList;
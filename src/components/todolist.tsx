import React,{ useState, useEffect } from "react";
import TodoItem from "./todoItem";
import TodoInput from './todoInput';
import styled from 'styled-components';

const Wrapper = styled.div`
    /* background-color: #ffd400; */
    background-color: #fcdd76;
    /* background: repeating-linear-gradient(#a07526, #a07526 2px, #fcdd76 0, #fcdd76 40px); */
    width: 25%;
    /* height: 75%; */
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 15px 10px 15px 10px;
    /* border-radius: 10px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
`;

// const Footer = styled.div`
//     width:100%; 
//     height: 40px;
//     background-color: #9EB384;
//     align-items: flex-end;
// `;

const TodoList = () => {

    interface Item { 
        id: number,
        text: string
    } 
    const [todoItem,setTodoItem] = useState<Item[]>([]);
    const [count,setCount] = useState<number>(0);

    const [todoInput, setTodoInput] = useState<string>('');

    // localStorage 활용
    // useEffect(()=>{
    //     const firstSetting  = JSON.parse(localStorage.getItem('item')||"[]");
    //     setTodoItem(firstSetting);
    // },[]);

    const addItem = () => {
        // setCount(count+1);
        console.log(todoItem);
        if(todoItem.length===0) {
            setTodoItem([{id:0, text:todoInput}]);
            localStorage.setItem('item',JSON.stringify([{id:0, text:todoInput}]));
        } else {
            const originArray = JSON.parse(localStorage.getItem('item')||"[]");
            const newId = parseInt(originArray[originArray.length-1].id)+1;
            const newArray = [...originArray, {id:newId, text:todoInput}]
            setTodoItem([...newArray]);
            localStorage.setItem('item',JSON.stringify(newArray));
        }
    }

    return(
        <Wrapper>
            <div 
                style={{paddingTop:"20px", fontSize:"25px"}}
            >To-Do List</div>
                {/* <div style={{height:"380px"}}> */}
                    <TodoInput 
                        todoInput={todoInput}
                        setTodoInput={setTodoInput}
                        addItem={addItem}
                        />
                    <TodoItem todoItem={todoItem}
                    />
                {/* </div> */}
            {/* <Footer/> */}
            </Wrapper>
    )
}

export default TodoList;
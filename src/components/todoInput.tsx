import React,{ useState, useEffect } from "react";
import { InputContainer, InputButton } from '../styles/todolist.styled';
interface Props {
    todoInput: string;
    setTodoInput: React.Dispatch<React.SetStateAction<string>>;
    addItem:()=>void;
}

const TodoInput = (props:Props) => {

    return(
        <InputContainer>
            <input
                style={{backgroundColor:"transparent", fontSize:"20px", width:"230px"}}
                value={props.todoInput}
                maxLength={19}
                onChange={(e)=>props.setTodoInput(e.target.value)}
            />
            <InputButton onClick={()=>props.addItem()}>+</InputButton>
        </InputContainer>

    )
}

export default TodoInput;
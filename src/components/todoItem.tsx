
import React,{ useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { DeleteButton, 
    ItemContainer, 
    BackGroundPattern, 
    CustomCheckboxWrapper, 
    StyledCheckbox,
    StyledLabel } from '../styles/todolist.styled';
import { SetterOrUpdater } from 'recoil';
import { todoState, TodoTypes } from '../recoil/atoms';

    interface PropTypes {
        todos: TodoTypes[];
        setTodos: SetterOrUpdater<TodoTypes[]>;
    }

const TodoItem = ({todos, setTodos}:PropTypes) => {

    const onClickDelete = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  {
        const name = +e.currentTarget.dataset.name;
        const updatedList = todos.filter(val => val.id !== name);
        setTodos([...updatedList]);
    }

    const onClickCheckbox = (e:React.MouseEvent<HTMLElement,MouseEvent>) => {
        const name = +e.currentTarget.dataset.name;

        const updatedList = todos.map((val)=>{
            return val.id === name ? { ...val, done: !val.done} : val;
        })
        setTodos([...updatedList]);

    }

    return(
        <ItemContainer>
            <BackGroundPattern></BackGroundPattern>
            {
                todos.length===0
                ? <div></div>
                : todos.map((val,idx) => {
    
                    return(
                    <div 
                        key={idx} 
                        style={{display:"flex", paddingBottom:'14.5px'}}>
                        <CustomCheckboxWrapper>
                            <StyledCheckbox type="checkbox"/>
                            <StyledLabel
                                data-name={val.id} 
                                onClick={(e)=>onClickCheckbox(e)}
                                // isChecked={props.isChecked[idx]}
                                isChecked={val.done}
                                />
                        </CustomCheckboxWrapper>
                        {/* <span>{val.id}: </span> */}
                        <div>{val.text}</div>
                        <DeleteButton
                            data-name={val.id}
                            onClick={(e)=>onClickDelete(e)}
                            >X</DeleteButton>
                    </div>)
                })    
            }
        </ItemContainer>
    )
}

export default TodoItem;
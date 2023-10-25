import styled from 'styled-components';

// App.tsx
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fafaf3;
    display: flex;
    justify-content: space-around;
`;

//todolist 
export const TodoListContainer = styled.div`
    background-color: #fcdd76;
    width: 25%;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 15px 10px 15px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

//input
export const InputContainer = styled.div`
    padding: 10px 0 40px 0;
    align-self: center;
`

export const InputButton = styled.button`
    cursor:pointer;
    margin-left: 10px;
    font-size: 25px;
    /* font-weight: bold; */
    background-color: transparent;
    border:none;
`;

//item
export const DeleteButton = styled.button`
    margin-left: 5px;
    border:none;
    background-color: transparent;
    z-index: 100;
    cursor: pointer;
`;

export const ItemContainer = styled.div`
    position:relative;
    width:345px;
    height: 380px;
    font-size: 17px;
    /* text-justify: center; */
`;

export const BackGroundPattern = styled.div`
    /* padding: 5px; */
    position:absolute;
    /* left:1px; */
    top: 27px;
    width: 345px;
    height: 380px;
    background: repeating-linear-gradient(#a07526, #a07526 2px, transparent 0, transparent 40px);
`;

export const CustomCheckboxWrapper = styled.div`
    position:relative;
    padding-right:12px;
`;

export const StyledCheckbox = styled.input`
    visibility: hidden;
`;

export const StyledLabel = styled.label<{isChecked:boolean}>`
    background-color: transparent;
    border: 1px solid #a07526;
    cursor: pointer;
    width: 15px;
    height: 15px;
    position: absolute;
    top:6px;
    left: 10px;
    ${({ isChecked }) => {
        return isChecked
            ? `
                // background-color: #66bb6a;
                // border-color: #66bb6a;
                &:after {
                    border: 2px solid #a07526;
                    border-top: none;
                    border-right: none;
                    content: "";
                    width: 14px;
                    height: 8px;
                    position: absolute;
                    transform: rotate(-45deg);
                }
            `
            : `
                background-color: transparent !important;
                &:after {
                    opacity: 1;
                }
            `}}
`;
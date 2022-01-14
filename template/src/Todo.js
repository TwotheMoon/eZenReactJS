import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-weight:bold;
    font-size: 40px;
    color: purple;
    margin-top: 50px;
    padding-bottom: 30px;
`;
const TodoWrap = styled.div`
    width: 400px;
    height: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
`;
const TodoUl = styled.ul`
`;
const TodoLi = styled.li`
    display: flex;
    align-items:center;
    justify-content: space-between;
    background-color: lavender;
    padding: 20px 20px;
    list-style: none;
    font-weight: bold;
    margin-top: 10px;
`;

const InputWrap = styled.div`
    margin-top: 20px;
`;

const DeleteBtn = styled.button`
    background-color: whitesmoke;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    width: 50px;
    height: 30px;
    cursor: pointer;
`;


function Todo() {
    const [list, setList] = useState([]);
    const [todo, setTodo] = useState("");
    const onSubmit = ((e) => {
        e.preventDefault();
    })
    const addTodo = (() => {
        setList([...list, todo]);
        setTodo("");
    });

    const writeTodo = ((e) => {
        const todoText = e.target.value;
        setTodo(todoText);
    });

    const deleteTodo = ((e) => {
        const li = e.target.parentElement;
        li.remove();
    });

    return (
        <Container>
            <Title>내 버킷리스트</Title>
            <TodoWrap>
                <TodoUl>
                    {list.map((item, index) => {
                        return <>
                            <TodoLi key={index}>
                                {item}
                                <DeleteBtn onClick={deleteTodo}>❌</DeleteBtn>
                            </TodoLi>
                        </>
                    })}
                </TodoUl>
            </TodoWrap>
            <InputWrap>
                <form onSubmit={onSubmit}>
                    <input onChange={writeTodo} value={todo} type="text"></input>
                    <button onClick={addTodo}>추가하기</button>
                </form>
            </InputWrap>
        </Container>
    );
}

export default Todo;
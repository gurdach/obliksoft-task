import React from 'react'
import styled from 'styled-components'
import cancelIcon from '../assets/icons/cancel.svg';
import searchicon from '../assets/icons/search.svg';
import { useDispatch } from 'react-redux';
import { queryPhone } from './redux/actions/tableActions'


export const Search = (props) => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target[0].value
        dispatch(queryPhone(value));
    }

    const handleCancel = (e) => {
        let value = e.target.form[0].value = '';
        dispatch(queryPhone(value));
    }

    return (
        <SearchContainer>
            <SearchForm  onSubmit={handleSubmit}>
                <InputText type="text" />
                <InputCancel type="button" onClick={handleCancel}/>
                <InputSubmit type="submit" value="" />
            </SearchForm>
        </SearchContainer>   
    )
}

const SearchContainer = styled.div`
    width: 100%;
    padding: 20px 50px;
    box-sizing: border-box;
    max-width: 900px;
`;

const SearchForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 40px;
    background-color: #fff;
    box-shadow: 0 0 10px #d8e4f1;
    box-sizing: border-box;
`;

const InputText = styled.input`
    width: 80%;
    border: none;
    outline: none;
`;

const InputCancel = styled.input`
    cursor: pointer;
    width: 25px;
    height: 25px;
    padding: 0;
    border-radius: 50%;
    border: none;
    outline: none;
    background: url(${cancelIcon}) no-repeat center;
    background-color: #ebebeb;
    &:active {
        background-color: #d6d6d6;
    }
`;

const InputSubmit = styled.input`
    cursor: pointer;
    width: 35px;
    height: 35px;
    padding: 0;
    border-radius: 50%;
    border: none;
    outline: none;
    background: url(${searchicon}) no-repeat center;
    background-color: transparent;
`;
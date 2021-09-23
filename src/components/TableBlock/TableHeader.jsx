import React from 'react'
import styled from 'styled-components'
import refreshIcon from '../../assets/icons/refresh.svg'


export const TableHeader = (props) => {


    return (
            <TableContainer>
                <HeaderLoader />
                <HeaderText>
                    Знайдено {props.countItems} клiент(iв)
                </HeaderText>
            </TableContainer>
    )
}

const TableContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #EAF2FF;
    padding: 5px 15px;
`;

const HeaderText = styled.div`
    padding: 0 20px;
    font-weight: 600;
    text-align: left; 
`;

const HeaderLoader = styled.button`
    display: block;
    width: 15px;
    height: 15px;
    outline: none;
    border: none;
    background: url(${refreshIcon}) no-repeat;
    background-color: transparent;
    background-position: center;
    background-size: cover;
`;
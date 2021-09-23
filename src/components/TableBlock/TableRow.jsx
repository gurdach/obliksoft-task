import React from 'react'
import styled from 'styled-components'
import { Date, LastMessage, Time, UserInfo } from '../ChatBlock'
import { readMessage, sortItems } from '../redux/actions/tableActions'
import { useDispatch } from 'react-redux';

export const TableRow = ({ item, term }) => {
    const dispatch = useDispatch();

    const setReadFlag = () => {
        dispatch(readMessage(item.id));
        dispatch(sortItems());
    }

    return (
        <RowContainer readStatus={item.readed} onClick={setReadFlag}>
            <RowTh>
                <UserInfo term={term} data={item} />
                <LastMessage message={item.lastmessage} />
                <Time time={item.date.time} />
                <Date date={item.date.dmy} />
            </RowTh>
        </RowContainer>
    )
}

const RowContainer = styled.table`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #f0f0f0;
        background-color: ${props => props.readStatus ? '#fff' : '#d8dbed'};
`;

const RowTh = styled.tr`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 10px 0
`;
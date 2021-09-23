import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const UserInfo = ({data, term}) => {

    const selectSearchSymbols = () => {
        const phone = data.phone;
        const arrayNums = phone.split("");
        const arrayQueries = term.split("");
        return phone.slice(arrayQueries.length, arrayNums.length);
    }

    const lastNums = selectSearchSymbols();

    return (
        <UserTh>
            <Avatar data={data}/>
            <UserContainer>
                <UserName>{data.name}</UserName>
                <UserPhone termInclude={term}>{term || data.phone}<LastNums>{term ? lastNums : ''}</LastNums></UserPhone>
            </UserContainer>
        </UserTh>
    )
}

const UserTh = styled.th`
    display: flex;
`;

const UserPhone = styled.span`
        margin: 0;
        padding: 5px 0;
        font-weight: bold;
        overflow: hidden;
        text-align: left;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: ${props => props.termInclude ? "#2C7DFA" : "#333"}
`;

const UserContainer = styled.span`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0;
    padding: 0px 10px;
`;

const LastNums = styled.span`
    margin: 0;
    padding: 5px 0;
    font-weight: bold;
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333!important;
`;

const UserName = styled.span`
    margin: 0;
    padding: 10px 0 5px 0;
    font-weight: bold;
    overflow: hidden;
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 200px;
`;

export default UserInfo;
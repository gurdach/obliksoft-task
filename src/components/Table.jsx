import React from 'react'
import styled from 'styled-components'
import { TableHeader } from '../components/TableBlock/TableHeader';
import { TableRow } from '../components/TableBlock/TableRow'

export const Table = ({items, loadingStatus, term}) => {

    return (
        <TableContainer>
            <TableHeader countItems={items.length}/>
            {
               loadingStatus ? <Loader>Зачекайте, дані завантажуються...</Loader> : items.map((item, index) => <TableRow term={term} item={item} key={index} />)
            }
        </TableContainer>
    )
}

const Loader = styled.p`
    width: 100%;
    box-sizing: border-box;
    padding: 50px 0
`;

const TableContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    max-width: 1024px;
    box-shadow: 0 0 10px #dfdfdf;
`;
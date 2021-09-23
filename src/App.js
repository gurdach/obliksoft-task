import React, { useEffect } from 'react'
import styled from 'styled-components'
import './App.css';
import 'normalize.css';
import {Search} from './components/Search';
import {Table} from './components/Table';
import {Pagination} from './components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './components/redux/actions/tableActions'

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.table.items);
  const searchItems = useSelector(state => state.table.searchItems);
  const isSearch = useSelector(state => state.table.isSearch);
  const loadingStatus = useSelector(state => state.table.loading);
  const term = useSelector(state => state.table.term);

  useEffect(() => {
      dispatch(fetchData());
  }, [dispatch]);
  

  return (
    <Container className="App">
      <Search />
      <Table 
        items={isSearch ? searchItems : items}
        loadingStatus={loadingStatus}
        term={term}
      />
      <Pagination />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export default App;

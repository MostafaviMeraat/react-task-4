import './App.css';
import PhonesList from './components/PhoneList';
import SearchResult from './components/SearchResult';
import React, { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';


function App() {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then(res => res.json())
      .then(data => setList(data.products))
  }, [])

  const [value, setValue] = useState('')
  return (
    <div className="App">
      <div className='search'>
        <DebounceInput
          type='text'
          placeholder='Search...'
          autoFocus='on'
          debounceTimeout={500}
          onChange={(e) => {
          setValue(e.target.value)
        }} />
      </div>
      <PhonesList list={list} />
      <SearchResult value={value} list={list} />
      

    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import Header from './components/Header';
import ContentList from './components/ContentList';

function App(){
  return(
    <div>
      <Header />
      <div>
        <ContentList />
      </div>
    </div>
  )
}

export default App;
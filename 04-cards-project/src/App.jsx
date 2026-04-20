import React from 'react'
import { Bookmark } from 'lucide-react'
import  Card  from "./components/Card";
import User from './components/User';

const App = () => {

  const arr = [1, 2];


  return (
    <div className='parent'>
      
     <Card />
    <User first="John" last="Doe" />
    <User first={arr[0]} />

    {arr.map(function(item){
      return <User first={item} />;
    })}
    
    </div>
  )
}

export default App
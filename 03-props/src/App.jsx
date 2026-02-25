import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Deepesh' age={25} />
      <Card user='Rahul' age={30} />
      <Card user='Suresh' age={35} />
    </div> 
  )
}

export default App
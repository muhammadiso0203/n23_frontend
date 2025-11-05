import React from 'react'
import { AppContextWrapper } from './context/AppContext'
import { Card } from './components/card';
import { Form } from './components/form';

const App = () => {
  const {data} = React.useContext(AppContextWrapper);
  return (
    <div className='container'>
      <Form/>
      {data?.userList?.map( (item) => (
        <Card key={item.id} username={item.username} id={item.id}/>
      ))}
    </div>
  )
}

export default App
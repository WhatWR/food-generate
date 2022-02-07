import React from 'react';
import Card from './Card';
import Heading from './Heading';
import Input from './Input';
import SeachNav from './SeachNav';

const App = () => {
  return (
    <div>
      <div className='Heading'>
        <h1>Cooking master</h1>
      </div>
      <SeachNav />

      
      <div className='App'>

        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />
        <Card
          img='https://picsum.photos/id/237/200/300'
          title='Food'
        />

      </div>
    </div>)
};

export default App;

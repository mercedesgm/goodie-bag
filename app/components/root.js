import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Candies from './Candies';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          Goodie Bag
          <Link to="/candies">Candies</Link>
        </nav>
        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
          <Route path="/candies" component={Candies} />
        </main>
      </div>
    </BrowserRouter>
  )
}


export default Root

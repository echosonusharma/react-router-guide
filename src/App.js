import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loading from './dir/Loading';
import About from './dir/About';
import Posts from './dir/Posts';



function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route path='/' exact component={Loading} />
        <Route path='/about' exact component={About} />
        <Route path='/posts/:id' exact component={Posts} /> {/*passing id for match to work */}
        <Route path='/' render={() => <h2>404</h2>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;


/*
/ exact will only let you render the component that on the path.
/ switch makes you only select one route
/
/
/
/
*/
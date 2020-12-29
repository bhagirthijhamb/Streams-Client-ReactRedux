import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';
import history from './../history';

// 867139672249-vhtl7g75hjurbrgr5rv0qbvg5koginio.apps.googleusercontent.com

const App = () => {
  return (
    <div className="ui container"> 
      {/* <BrowserRouter history={history}> */}
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" component={StreamCreate} />
          {/* <Route path="/streams/edit" component={StreamEdit} /> */}
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App;
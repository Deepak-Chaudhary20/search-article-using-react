// This is the component of the main index.html ( id - root)

import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

class App extends Component {
  // we use render() in class.
  render() {
    return (
      // Here we can write JSX 
      <>
        {/* // empty fragment for the html  */}
        {/* here we write html code in JSX format. */}
        <div>Hello World</div>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



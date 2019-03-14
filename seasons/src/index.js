import React from 'react';
import ReactDOM from 'react-dom';


// functional component
/*const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position), //success callback
    (err) => console.log(err) // failure callback
  );

  return <div>Latitude:  </div>
};*/


class App extends React.Component{
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position), //success callback
      (err) => console.log(err) // failure callback
    );
    return <div>Latitude: </div>;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))

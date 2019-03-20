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
  // not required by React
  constructor(props) {
    super(props);

    // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      //(position) => console.log(position), //success callback
      //console.log(err) // failure callback
      (position) => {
        // we call setState!!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }

    );
  }


  /*componentDidMount() {
    console.log('My component was rendered to the screen')
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rerendered!')
  }*/
  // React says we have to define render!!
  render() {
    if(this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))

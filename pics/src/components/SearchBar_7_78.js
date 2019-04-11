import React from 'react';

//use class b/c we need state, as we will need user input
class SearchBar extends React.Component {
  /*onInputChange(event)  {
    console.log(event.target.value);
  }*/
  state = {term: ''}

/* THIS IS BROKEN
onFormSubmit(event){
  event.preventDefault();
  console.log(this.state.term);
}*/
// This one works
/*onFormSubmit = (event) => {
  // arrow function automatically bind this
  event.preventDefault();
  console.log(this.state.term);
}*/
//<form onSubmit={this.onFormSubmit} className="ui form">
// to this:
//<form onSubmit={event => this.onFormSubmit(event)} className="ui form">

onFormSubmit = (event) => {
  // arrow function automatically bind this
  event.preventDefault();
  console.log(this.state.term);
}


    render() {
      return (
        <div className = "ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
      </div>
      );
    }
}

export default SearchBar;

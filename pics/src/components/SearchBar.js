import React from 'react';

//use class b/c we need state, as we will need user input
class SearchBar extends React.Component {
  /*onInputChange(event)  {
    console.log(event.target.value);
  }*/
  state = {term: ''}

    render() {
      return (
        <div className = "ui segment">
          <form className="ui form">
            <div className="field">
              <label>Image Search</label>
              <input type="text"
                value={this.state.term}
                onChange={(e) => this.setState({term: e.target.value})}
              />
            </div>
          </form>
      </div>
      );
    }
}

export default SearchBar;

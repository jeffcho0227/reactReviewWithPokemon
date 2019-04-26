import React, { Component }from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  


  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input name='pokemonid' type="text" onChange={(e) => {this.props.handleChange(e)}}/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default Search;
import React, {Component, Fragment} from 'react';
import API from '../utils/API';

class Search extends Component {
  state = {
    breedList: [],
  };

  componentDidMount () {
    API.breedList ()
      .then (res => this.setState ({breedList: res.data.message}))
      .catch (err => console.log (err));
  }

  render () {
    return (
      <Fragment>
        <h2>Search</h2>
        <form>
          <label htmlFor="breed-choice">Breed name:</label>
          <input
            list="breeds"
            id="breed-choice"
            name="breed-choice"
            className="form-control"
            placeholder="Choose a Breed"
          />
          <datalist id="breeds">
            {this.state.breedList.map (breed => (
              <option key={breed}>{breed}</option>
            ))}
          </datalist>
          <button type="submit" className="btn btn-success btn-block mt-2">
            Search
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Search;

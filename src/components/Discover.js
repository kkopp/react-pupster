import React, {Component, Fragment} from 'react';
import API from '../utils/API';

class Discover extends Component {
  state = {
    dogImage: '',
    matchCount: 0,
    matched: false,
  };

  componentDidMount () {
    this.newDogImage ();
  }

  newDogImage = () => {
    API.newDogImage ()
      .then (res => this.setState ({dogImage: res.data.message}))
      .catch (err => console.log (err));
  };

  handleButtonClick = event => {
    const action = event.target.attributes.getNamedItem ('data-action').value;
    const newState = {...this.state};

    if (action === 'like') {
      //choose random dog
      //see if our guess matches random num
      //increment matchCount and set matched to true
      const randomNum = Math.floor (Math.random () * 5) + 1;
      newState.matched = randomNum === 3;
      newState.matchCount = newState.matched
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      //set matched to false
      newState.matched = false;
    }
    this.setState (newState);
    this.newDogImage ();
  };

  render () {
    return (
      <Fragment>
        <h2>Discover</h2>
        <h3>You have {this.state.matchCount} pupper friends!</h3>
        {/* <div
          style={{opacity: this.state.matched ? 1 : 0}}
          className="alert alert-success"
          role="alert"
        >
          Yay! You've made a pupper friend!
        </div> */}
        <div className={`alert alert-${this.state.matched ? "success" : "danger"}`} role="alert">
          {this.state.matched ? "Yay! You made a pupper friend!" : "Boo! No one likes you!"}
        </div>
        <img src={this.state.dogImage} style={{height: 400}} alt="pupper" />
        <p>
          <button
            data-action="like"
            type="button"
            className="btn btn-primary mr-2"
            onClick={this.handleButtonClick}
          >
            Like
          </button>
          <button
            data-action="dislike"
            type="button"
            className="btn btn-secondary"
            onClick={this.handleButtonClick}
          >
            Dislike
          </button>
        </p>
      </Fragment>
    );
  }
}

export default Discover;

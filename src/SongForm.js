import React from "react";

class SongForm extends React.Component {
  constructor() {
    super();
    this.state = {};

    this.onInput = this.onInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInput(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    console.log("songtitle submitted: " + this.state.songtitle);
    // console.log("artist submitted: " + this.state.artist);
    // console.log("genre submitted: " + this.state.genre);
    // console.log("rating submitted: " + this.state.rating);
    event.preventDefault();
    // na submitten input leegmaken en daarna weer kunnen invullen.., hoe?
    // this.setState({
    //   value/songtitle enz: ""});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="input-form">
        <label>
          <input
            type="text"
            placeholder="songtitle"
            name="songtitle"
            value={this.state.value}
            onChange={this.onInput}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="artist"
            name="artist"
            value={this.state.value}
            onChange={this.onInput}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="genre"
            name="genre"
            value={this.state.value}
            onChange={this.onInput}
          />
        </label>

        <select
          placeholder="rating"
          name="rating"
          value={this.state.value}
          onChange={this.onInput}
        >
          <option value=" ">give your rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">submit</button>
      </form>
    );
  }
}

export default SongForm;

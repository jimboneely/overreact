import React, {Component} from 'react';
import "./QuestionGen.css";

class QuestionGen extends Component {
  state = {
    noun: "",
    verb: "",
    number: ""
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    alert(`${this.state.noun} ${this.state.verb} ${this.state.number}`);
    this.setState({
      noun: "",
      verb: "",
      number: ""
    });
  };

  render() {

    return (
    <div className="question-body">
    <form>
      <div className="form-group">
        <h4>
          <strong>Noun</strong>
        </h4>
        <input
          className="form-control"
          type="text"
          value={this.state.noun}
          name="noun"
          onChange={this.handleInputChange}
          required
        />
        <h4>
          <strong>Verb</strong>
        </h4>
        <input
          className="form-control"
          type="text"
          value={this.state.verb}
          name="verb"
          onChange={this.handleInputChange}
          required
        />
        <h4>
          <strong>Number</strong>
        </h4>
        <input
          className="form-control"
          type="number"
          value={this.state.number}
          name="number"
          onChange={this.handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={this.handleFormSubmit}
          type="submit"
          className="btn btn-lg">
          Submit
        </button>
      </div>
    </form>
    </div>
);
  }
}
export default QuestionGen;

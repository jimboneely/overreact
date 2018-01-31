import React, {Component} from 'react';
import API from "../../utils/API";
import "./QuestionGen.css";

class QuestionGen extends Component {
  state = {
    noun: "",
    verb: "",
    number: "",
    sentence:""
  };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getSentence(this.state.noun,this.state.verb,this.state.number).then(data => {
      this.setState({
        sentence: data.data.sentences
      });
      console.log(data)}
    );
    this.setState({
      noun: "",
      verb: "",
      number: "",
      sentence:""
    });

  };

  render() {

    return (
    <div>
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
  {this.state.sentence.length > 0 &&
  <h2>
    {this.state.sentence}
  </h2>
  }
  {this.state.sentence.length > 0 &&
    <button className= "btn btn-lg">use passphrase
    </button>
  }
  </div>
);
  }
}
export default QuestionGen;

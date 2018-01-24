import React from 'react';
import "./QuestionGen.css";
const QuestionGen = props => (
<div className="question-body">
<form>
  <div className="form-group">
    <h4>
      <strong>Noun</strong>
    </h4>
    <input
      className="form-control"
      type="text"
      value={props.noun}
      name="noun"
      onChange={props.handleInputChange}
      required
    />
    <h4>
      <strong>Verb</strong>
    </h4>
    <input
      className="form-control"
      type="text"
      value={props.verb}
      name="verb"
      onChange={props.handleInputChange}
      required
    />
    <h4>
      <strong>Number</strong>
    </h4>
    <input
      className="form-control"
      type="number"
      value={props.number}
      name="number"
      onChange={props.handleInputChange}
      required
    />
  </div>
  <div className="pull-right">
    <button
      onClick={props.handleFormSubmit}
      type="submit"
      className="btn btn-lg"
    >
      Submit
    </button>
  </div>
</form>
</div>
);
export default QuestionGen;

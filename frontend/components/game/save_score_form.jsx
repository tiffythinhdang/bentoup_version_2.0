import React from 'react';

class SaveScoreForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit() {

  }

  render() {
    return(
      <div className="form-container hidden">
        <form id="save-score-form">
          <input className="form input" type="text" placeholder="Name"/>
          <button id="submit-score">Submit</button>
        </form>
      </div>
    )
  }
}

export default SaveScoreForm;

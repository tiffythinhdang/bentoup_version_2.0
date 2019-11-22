import React from 'react';
import { saveScore } from '../../actions/save_score';

class SaveScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      score: this.props.score,
      mode: this.props.mode
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {

  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit() {
    
  }

  render() {
    return(
      <div className="form-container hidden">
        <form id="save-score-form">
          <input
            className="form input"
            type="text"
            placeholder="Name"
            onChange={this.handleChange("username")}/>
          <button id="submit-score">Submit</button>
        </form>
      </div>
    )
  }
}

export default SaveScoreForm;

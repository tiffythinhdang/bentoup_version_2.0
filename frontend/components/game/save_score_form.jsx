import React from 'react';

class SaveScoreForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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

  handleSubmit(e) {
    const { score, mode } = this.props.currentSession;
    const request = {
      username: this.state.username,
      score: score,
      mode: mode
    }
    e.preventDefault();
    this.props.saveScore(request)
      .then(score => {
        this.props.closeModal();
        this.props.history.push(`/scores/high-${mode}`);
      })
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
          <button
            id="submit-score"
            onClick={this.handleSubmit}
            >Submit
          </button>
        </form>
      </div>
    )
  }
}

export default SaveScoreForm;

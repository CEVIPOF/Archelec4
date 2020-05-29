import React, { Component } from 'react';

const initialState = {
    name: '',
    job: ''
}

class Form extends Component {

    state = initialState

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
      this.props.handleSubmit(this.state);
      this.setState(initialState)
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <select type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange}>
                     <option selected value={null}></option>
                     <option value="testounet">testounet</option>
                     <option value="toto">toto</option>
                     <option value="test">test</option>
                </select>

                <label htmlFor="job">Job</label>
                <select type="text" name="job" id="job" value={this.state.job} onChange={this.handleChange}>
                     <option selected value={null}></option>
                     <option value="conseiller">conseiller</option>
                     <option value="maire">maire</option>
                     <option value="president">president</option>
                </select>

                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;

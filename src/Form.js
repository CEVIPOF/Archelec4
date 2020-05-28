import React, { Component } from 'react';
import { filterData } from './Helpers'
import { dataMock } from './Data'


class Form extends Component {
    initialState = [{
        name: '',
        job: ''
    }]

    state = this.initialState

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
      const data = filterData(this.state, dataMock);
      this.props.handleSubmit(data);
      this.setState(this.initialState)
    }

    render() {
        const { name, job } = this.state;
        return (
            <form>
                <label htmlFor="name">Name</label>
                <select type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange}>
                    <option value="testounet">testounet</option>
                    <option value="toto">toto</option>
                    <option value="test">test</option>
                </select>

                <label htmlFor="job">Job</label>
                <select type="text" name="job" id="job" value={this.state.value} onChange={this.handleChange}>
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

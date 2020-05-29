import React, { Component } from 'react'
import { filterData } from './helpers'
import { dataMock } from './data'
import Form from './Form'
import Table from './Table'

class App extends Component {
    state = {
        formData: {},
        loadedData: dataMock
    }

    handleSubmit = search => {
        this.setState({ formData: search });
    }

    render() {
        const { formData, loadedData } = this.state;

        const data = filterData(formData, loadedData);

        return (
            <div>
                <h1>Recherche avancée</h1>
                <Form handleSubmit={this.handleSubmit} />

                <h1>Résultats</h1>
                <Table data={data} />
            </div>
        );
    }
}

export default App;

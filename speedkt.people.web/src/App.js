import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { persons: [], loading: true };
    }

    componentDidMount() {
        this.populatePersonData();
    }

    static renderPersonTable(persons) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Nick Name</th>
                        <th>Avatar ID</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(item =>
                        <tr key={item.firstName}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.nickName}</td>
                            <td>{item.avatarID}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : App.renderPersonTable(this.state.persons);

        return (
            <div>
                <h1 id="tabelLabel" >Person list</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populatePersonData() {
        try {
            const response = await fetch('https://localhost:44379/Person');

            const data = await response.json();

            this.setState({ persons: data, loading: false });
        }
        catch (e) {
            console.log(e);
        }
    }
}

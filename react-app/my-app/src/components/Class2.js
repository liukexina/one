import React, { Component } from 'react';

class Class2 extends Component {
    render() {
        console.log(this.props.match)
        return (
            <div>
                <h1>Class2 {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default Class2;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Moment from 'react-moment';


class Experience extends Component {
    render() {
        const experience = this.props.experience.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment> - { ' ' }
                    { exp.to ? <Moment format="YYYY/MM/DD">{exp.to}</Moment> : 'now'}

                </td>
                <td>{exp.from} - {exp.to}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ));
        return (
            <div>
                <h4 className="mb-4">Experience Credentials</h4>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {experience}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = {};

export default connect(null)(withRouter(Experience));
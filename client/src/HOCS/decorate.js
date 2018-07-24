import React, {Component} from 'react';

import getDisplayName from '../helpers/getDisplayName';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from 'redux';


const Decorate = ComponentToDecorate => {
  class ComponentDecorated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        errors: {}
      };
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
    }

    onSubmit = e => {
      e.preventDefault();
      this.props.addFunction(this.state, this.props.history);
    };

    onChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    onCheck = () => {
      this.setState({
        disabled: !this.state.disabled,
        current: !this.state.current
      });
    };

    render() {
      return (
        <ComponentToDecorate
          {...this.props}
          data={this.state}
          onChange={this.onChange}
          onCheck={this.onCheck}
          onSubmit={this.onSubmit}
        />
      );
    }

  }

  ComponentDecorated.displayName = `withForm(${getDisplayName(Component)}`;

  return withRouter(ComponentDecorated);
};

export default Decorate;

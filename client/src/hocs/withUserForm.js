import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

const withUserForm = (addFunction) => Component => {
  class WithUserForm extends React.Component {
    constructor(props) {
      super(props);

      this.state = {...props.data};
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
    }

    onSubmit = e => {
      e.preventDefault();
      console.log('addFunc', addFunction);
      console.log('this-history', this.props.history);

      addFunction(this.state, this.props.history);

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

    render(){
      return (
        <Component
          {...this.props}
          onChange={this.onChange}
          onCheck={this.onCheck}
          onSubmit={this.onSubmit}
          data={this.state}
        />
      );
    }

  }

  WithUserForm.displayName = `withForm(${getDisplayName(Component)}`;

  return WithUserForm;
};

export default withUserForm;

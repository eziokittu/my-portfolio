import React from 'react';

const DisableInspectMenu = (WrappedComponent) => {
  return class extends React.Component {
    handleKeyDown = (e) => {
      if (e.keyCode === 123) {
        // F12 key was pressed
        e.preventDefault();
      }
    };

    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default DisableInspectMenu;

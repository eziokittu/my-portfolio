import React from 'react';

const DisableRightClick = (WrappedComponent) => {
  return class extends React.Component {
    handleContextMenu = (e) => {
      e.preventDefault();
    };

    componentDidMount() {
      document.addEventListener('contextmenu', this.handleContextMenu);
    }

    componentWillUnmount() {
      document.removeEventListener('contextmenu', this.handleContextMenu);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default DisableRightClick;

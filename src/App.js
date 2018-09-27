import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from './actions/ui_actions';
//import './styles/index.scss';
import './App.css';
import Layouts from './components/Layouts';
//import Tables from './components/Tables';

class App extends React.Component {
  render() {
    console.log("Initial state",this.props);
    return (
      <div className="App">
        <Layouts/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS, dispatch)
  };
}

function mapStateToProps(state) {
  return {ui: state};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

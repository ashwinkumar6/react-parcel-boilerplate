import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UI_ACTIONS from './actions/ui_actions';
//import './styles/index.scss';
import './App.css';
import Layouts from './components/Layouts';
//import Tables from './components/Tables';

class App extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.props.uiActions.filterMonth;
  //   console.log("Initial statezz",this.props.ui);
  // }
  render() {
    //console.log("Initial statezz",this.props.ui);
    //console.log("after action",this.props.ui);
    console.log("Initial statezz",this.props.ui);
    return (
      <div className="App"> 
      <Layouts data={this.props.ui} filter={this.props.uiActions}/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    uiActions: bindActionCreators(UI_ACTIONS,dispatch)
  };
}

function mapStateToProps(state) {
  return {ui: state};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

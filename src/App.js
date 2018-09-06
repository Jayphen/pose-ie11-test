import React from "react";
import pose from "react-pose";

const Expandy = pose.div({
  enter: {
    height: "auto"
  },
  exit: {
    height: 0
  }
});

export default class App extends React.Component {
  state = {
    expanded: false
  };
  toggleExpanded = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
  render() {
    return (
      <div className="App">
        <div>expanded: {this.state.expanded.toString()}</div>
        <h1
          style={{ cursor: "pointer", userSelect: "none" }}
          onClick={this.toggleExpanded}
        >
          Click me
        </h1>
        <Expandy
          style={{ overflow: "hidden" }}
          pose={this.state.expanded ? "enter" : "exit"}
        >
          I should expand and collapse please.<br />long<br />long<br />maaaan
        </Expandy>
      </div>
    );
  }
}

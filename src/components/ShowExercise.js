import React, { Component } from "react";
import { ListView, View, Text } from "react-native";
import {
  BaseContainer,
  BottomNav,
  CardSection,
  Spinner,
  ErrorMessage,
  SubHeader
} from "./common";
import { connect } from "react-redux";
import { Container } from "native-base";
import { getLogs } from "../actions";
import ShowLog from "./ShowLog";

class ShowExercise extends Component {
  componentDidMount() {
    this.props.getLogs(this.props.exercise.id);
  }

  renderLog(log) {
    return <ShowLog log={log} />;
  }

  render() {
    const { exercise, logs, errorMessage, loading } = this.props;
    if (errorMessage) {
      return <ErrorMessage />;
    }
    if (loading) {
      return <Spinner />;
    }
    return (
      <Container>
        <SubHeader>{exercise.name}</SubHeader>

        <BaseContainer>
          <ListView
            dataSource={logs}
            renderRow={this.renderLog}
            enableEmptySections
          />
        </BaseContainer>

        {/* <BottomNav /> */}
      </Container>
    );
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const mapStateToProps = state => {
  const { exercise: { logs }, errorMessage, loading } = state.showExercise;
  return {
    exercise: state.exercise,
    logs: ds.cloneWithRows(logs || []),
    errorMessage,
    loading
  };
};

export default connect(mapStateToProps, { getLogs })(ShowExercise);

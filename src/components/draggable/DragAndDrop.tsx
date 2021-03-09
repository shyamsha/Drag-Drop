import React, { Component, Fragment } from "react";
import {
  TextCard,
  Container,
  Header,
  CardLayout,
  TextContainer,
} from "../styles.ts/styles";

export default class DragAndDrop extends Component {
  state = {
    data: [
      { id: 1, title: "#item1", status: "todo" },
      { id: 2, title: "#item2", status: "todo" },
      { id: 3, title: "#item3", status: "todo" },
      { id: 4, title: "#item4", status: "inProgress" },
      { id: 5, title: "#item5", status: "inProgress" },
      { id: 6, title: "#item6", status: "done" },
      { id: 7, title: "#item7", status: "done" },
      { id: 8, title: "#item8", status: "todo" },
    ],
  };

  onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("ondragover");
    e.stopPropagation();
    e.preventDefault();
  };

  onDragStart = (ev: React.DragEvent<HTMLDivElement>, id: string) => {
    ev.dataTransfer.setData("id", id);
  };

  onDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    console.log(status, +" ondrop");
    let title = e.dataTransfer.getData("id");
    let tasks = this.state.data.filter((task) => {
      if (task.title === title) {
        task.status = status;
      }
      return task;
    });
    this.setState({ ...this.state, tasks });
  };

  render() {
    let filteredTasks: any = {
      todo: [],
      inProgress: [],
      done: [],
    };
    this.state.data.forEach((t) => {
      filteredTasks[t.status].push(
        <TextCard
          key={t.title}
          draggable="true"
          onDragStart={(e) => this.onDragStart(e, t.title)}
        >
          {t.title}
        </TextCard>
      );
    });
    return (
      <Fragment>
        <Container>
          <div
            onDragOver={this.onDragOver}
            onDrop={(e) => this.onDrop(e, "todo")}
          >
            <Header>To Do</Header>
            <CardLayout>
              <TextContainer>{filteredTasks.todo}</TextContainer>
            </CardLayout>
          </div>
          <div
            onDragOver={this.onDragOver}
            onDrop={(e) => this.onDrop(e, "inProgress")}
          >
            <Header style={{ background: "tomato" }}>In Progress</Header>
            <CardLayout>
              <TextContainer>{filteredTasks.inProgress}</TextContainer>
            </CardLayout>
          </div>
          <div
            onDragOver={this.onDragOver}
            onDrop={(e) => this.onDrop(e, "done")}
          >
            <Header style={{ background: "green" }}>Done</Header>
            <CardLayout>
              <TextContainer>{filteredTasks.done}</TextContainer>
            </CardLayout>
          </div>
        </Container>
      </Fragment>
    );
  }
}

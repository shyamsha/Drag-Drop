import React from "react";
import styled from "styled-components";

interface Props {
  color: string;
}

function Card() {
  const ondragstart = (e: React.DragEvent<HTMLDivElement>, name: string) => {
    e.dataTransfer.setData("name", name);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, name: string) => {
    let title = e.dataTransfer.getData("name");
    // filter among the tasks
  };

  const ondragover = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <Container>
        <div>
          <Header>To Do</Header>
          <CardLayout>
            <TextContainer>
              <div>
                <TextCard draggable onDragStart={(e) => ondragstart(e, "#1")}>
                  Item#0
                </TextCard>
                <TextCard draggable onDragStart={(e) => ondragstart(e, "#1")}>
                  Item#0
                </TextCard>
                <TextCard draggable onDragStart={(e) => ondragstart(e, "#1")}>
                  Item#0
                </TextCard>
              </div>
            </TextContainer>
          </CardLayout>
        </div>
        <div>
          <Header style={{ background: "tomato" }}>In Progress</Header>
          <CardLayout>
            <TextContainer>
              <div>
                <TextCard
                  draggable
                  onDrop={(e) => onDrop(e, "progress")}
                  onDragOver={(e) => ondragover(e)}
                >
                  Item#3
                </TextCard>
              </div>
            </TextContainer>
          </CardLayout>
        </div>
        <div>
          <Header style={{ background: "green" }}>Done</Header>
          <CardLayout>
            <TextContainer>
              <div>
                <TextCard
                  draggable
                  onDrop={(e) => onDrop(e, "progress")}
                  onDragOver={(e) => ondragover(e)}
                >
                  Item#4
                </TextCard>
              </div>
            </TextContainer>
          </CardLayout>
        </div>
      </Container>
    </React.Fragment>
  );
}

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CardLayout = styled.div`
  width: 320px;
  height: 400px;
  border-radius: 4px;
  background: lightgrey;
  overflow: hidden;
  overflow-y: scroll;
`;

export const Header = styled.div`
  height: 10%;
  background: #1890ff;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: xx-large;
  width: 320px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const TextCard = styled.div`
  height: 50px;
  background: #fff;
  color: #000;
  font-size: 16px;
  border-radius: 8px;
  padding: 6px 0 0 6px;
  margin-bottom: 8px;
`;

export default Card;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
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
import styled from "styled-components";

export const Modal = styled.div`
position: fixed;
z-index: 999;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0, 0, 0);
background-color: rgb(0, 0, 0, 0.4);
text-align: center;
& > div {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
& > div > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border: 1px solid white;
  border-radius: 5%;
}
`
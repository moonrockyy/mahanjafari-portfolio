import styled from "styled-components";

const SectionTitle = styled.h3`
  background: #e07a5f;
  width: 160px;
  height: 50px;
  padding: 10px;
  border-radius: 8px;
  margin: 30px 0 0 60px;
  color: ${(props: { color: "string" }) => props.color};
  display: flex;
  justify-content: center;
  cursor: default;
`;

export default SectionTitle;

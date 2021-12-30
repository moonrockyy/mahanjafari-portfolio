import styled from "styled-components";

const CvButton = styled.button`
  border: none;
  width: 160px;
  padding: 10px;
  background: #81b29a;
  border-radius: 12px;
  font-size: 1.5rem;
  margin-top: 20px;
  margin-left: 10px;
  transition: 0.3s;

  &:hover {
    border-radius: 2px;
  }
`;

export default CvButton;

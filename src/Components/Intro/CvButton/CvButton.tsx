import styled from "styled-components";

const CvButton = styled.button`
  border: none;
  width: 200px;
  padding: 10px;
  background: #81b29a;
  border-radius: 12px;
  font-size: 1.5rem;
  margin: 20px 0 0 90px;
  transition: 0.4s;

  &:hover {
    border-radius: 4px;
  }

  @media (max-width: 991px) {
    margin: 20px auto 0;
    display: block;
  }
`;

export default CvButton;

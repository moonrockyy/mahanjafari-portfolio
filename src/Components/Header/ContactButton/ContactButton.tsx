import styled from "styled-components";

const ContactButton = styled.button`
  border: 1px solid #cccccc;
  padding: 10px;
  border-radius: 8px;
  font-size: 1.3rem;

  &:hover {
    background: #e07a5f;
  }

  @media (max-width: 767px) {
    padding: 10px 62px;
    font-size: 1.6rem;
    margin: 20px auto 0;
    display: block;
  }
`;

export default ContactButton;

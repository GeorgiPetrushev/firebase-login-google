import styled from "styled-components";

const LoginStyle = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  margin-top: 2rem;
  font-size: 1.5rem;

  input {
    margin-right: 1rem;
    height: 1.5rem;
    padding-left: 0.2rem;
  }
  .login-btn {
    height: 1.8rem;
    transition: 400ms;
    border: none;
    &:hover {
      background-color: aqua;
      border-radius: 0.4rem;
    }
  }

  .google-btn-container {
    padding: 0.4rem;
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
  }
  .google-btn {
    height: 1.5rem;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;

export default LoginStyle;

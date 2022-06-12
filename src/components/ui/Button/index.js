import styled from "styled-components";

/**
 - membuat variable button (component)
 - buat element button dan beri styling
 - styleing menggunakan tagged tamplate
 */
const Button = styled.button`
  padding: 0.8rem 2rem;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ theme, variant }) =>
    // PROPS VARIANT
    theme.colors[variant] || theme.colors["primary"]};
  // PROPS SIZE
  font-size: ${({ size }) => {
    if (size === "sm") {
      return "0.8 rem";
    } else if (size === "lg") {
      return "1.3rem";
    } else {
      return "1rem";
    }
  }};

  padding: ${({ size }) => {
    if (size === "sm") {
      return "0.2rem 0.5rem";
    } else if (size === "lg") {
      return "0.5rem 1rem";
    } else {
      return "0.5rem 1rem";
    }
  }};
`;

export default Button;

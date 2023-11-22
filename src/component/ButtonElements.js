import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px ")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 1px solid var(--primary);
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  }
`;

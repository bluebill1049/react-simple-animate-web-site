import styled from "styled-components";
import colors from "../styled/colors";

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  & button {
    border-color: ${colors.primary};
  }
`

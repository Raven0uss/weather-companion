import styled from "styled-components";
import { ColorScheme } from "../../styles/theme";

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const LoadingElement = styled.div`
  margin: auto;
  animation: spin 3s linear infinite;
  font-size: 15vw;
  color: rgba(${ColorScheme.CONTAINER_BG_RGB}, 0.8);

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

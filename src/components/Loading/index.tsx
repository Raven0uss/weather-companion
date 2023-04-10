import { LoadingContainer, LoadingElement } from "./Loading.styled";

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <LoadingElement
        className="wi wi-owm-800 loading"
        data-testid="loading-spinner"
      />
    </LoadingContainer>
  );
};

export default Loading;

import { ErrorContainer, ErrorElement } from "./Error.styled";

const Error: React.FC = () => {
  return (
    <ErrorContainer data-testid="error-component">
      <ErrorElement>Oops an error occured !</ErrorElement>
    </ErrorContainer>
  );
};

export default Error;

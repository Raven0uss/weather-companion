import { Bird, BirdAnimation, BirdContainer } from "./Birds.styled";

const Birds: React.FC = () => {
  return (
    <>
      <BirdAnimation data-testid="birds" />
      {[1, 2, 3, 4].map((bird) => (
        <BirdContainer
          className={`bird-${bird}`}
          data-testid={`bird-${bird}`}
          key={`bird-${bird}`}
        >
          <Bird className={`bird-${bird}`} />
        </BirdContainer>
      ))}
    </>
  );
};

export default Birds;

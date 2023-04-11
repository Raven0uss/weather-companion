import styled from "styled-components";

export const Bird = styled.div`
  position: fixed;
  background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg);
  background-size: auto 100%;
  width: 88px;
  height: 125px;
  will-change: background-position;

  animation-name: fly-cycle;
  animation-timing-function: steps(10);
  animation-iteration-count: infinite;

  &.bird-1 {
    animation-duration: 1s;
    animation-delay: -0.5s;
  }

  &.bird-2 {
    animation-duration: 0.9s;
    animation-delay: -0.75s;
  }

  &.bird-3 {
    animation-duration: 1.25s;
    animation-delay: -0.25s;
  }

  &.bird-4 {
    animation-duration: 1.1s;
    animation-delay: -0.5s;
  }
`;

export const BirdContainer = styled.div`
  position: absolute;
  top: 20%;
  left: -10%;
  transform: scale(0) translateX(-10vw);
  will-change: transform;

  animation-name: fly-right-one;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  &.bird-1 {
    animation-duration: 15s;
    animation-delay: 0;
  }

  &.bird-2 {
    animation-duration: 16s;
    animation-delay: 1s;
  }

  &.bird-3 {
    animation-duration: 14.6s;
    animation-delay: 9.5s;
  }

  &.bird-4 {
    animation-duration: 16s;
    animation-delay: 10.25s;
  }
`;

export const BirdAnimation = styled.div`
  overflow: hidden !important;
  @keyframes fly-cycle {
    100% {
      background-position: -900px 0;
    }
  }

  @keyframes fly-right-one {
    0% {
      transform: scale(0.3) translateX(0vw);
      opacity: 0;
    }

    10% {
      transform: translateY(2vh) translateX(10vw) scale(0.4);
      opacity: 0.2;
    }

    20% {
      transform: translateY(0vh) translateX(30vw) scale(0.5);
      opacity: 0.4;
    }

    30% {
      transform: translateY(4vh) translateX(50vw) scale(0.6);
      opacity: 1;
    }

    40% {
      transform: translateY(2vh) translateX(70vw) scale(0.6);
    }

    50% {
      transform: translateY(0vh) translateX(90vw) scale(0.6);
    }

    60% {
      transform: translateY(0vh) translateX(100vw) scale(0.6);
      opacity: 0;
    }

    100% {
      transform: translateY(0vh) translateX(100vw) scale(0.6);
      opacity: 0;
    }
  }

  @keyframes fly-right-two {
    0% {
      transform: translateY(-2vh) translateX(0vw) scale(0.5);
      opacity: 0;
    }

    10% {
      transform: translateY(0vh) translateX(10vw) scale(0.4);
      opacity: 0.2;
    }

    20% {
      transform: translateY(-4vh) translateX(30vw) scale(0.6);
      opacity: 0.4;
    }

    30% {
      transform: translateY(1vh) translateX(50vw) scale(0.45);
      opacity: 1;
    }

    40% {
      transform: translateY(-2.5vh) translateX(70vw) scale(0.5);
    }

    50% {
      transform: translateY(0vh) translateX(90vw) scale(0.45);
    }

    51% {
      transform: translateY(0vh) translateX(100vw) scale(0.45);
      opacity: 0;
    }

    100% {
      transform: translateY(0vh) translateX(100vw) scale(0.45);
      opacity: 0;
    }
  }
`;

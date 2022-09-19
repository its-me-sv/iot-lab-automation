import styled from "styled-components";

// images
import ProjectorScreen from '../../assets/icons/screen.png';
import TubeLight from '../../assets/icons/tube-light.png';
import CeilFanOff from '../../assets/icons/fan-off.png';
import CeilFan from '../../assets/icons/fan-on.gif';
import Screener from '../../assets/icons/projector.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: geomanist-regular;
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.42rem;
  align-items: center;
  border-radius: 0.7rem;
  /* background: #e8e9ed;
  box-shadow: 20px 20px 60px #c5c6c9, -20px -20px 60px #ffffff; */
  img {
    cursor: pointer;
  }
  @media only screen and (min-width: 768px) {
    margin-top: 3%;
    align-self: center;
  }
`;

export const Seperator = styled.div`
  width: 16rem;
  margin-bottom: 1rem;
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  place-items: center;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 18vh;
  }
`;

export const Screen = styled.img.attrs({
  src: ProjectorScreen,
  alt: "Projector Screen",
})`
  width: 4.2rem;
  height: auto;
  margin-bottom: 0.42rem;
  @media only screen and (max-width: 768px) {
    width: 6rem;
  }
`;

export const Light = styled.img.attrs({
  src: TubeLight,
  alt: "Tube Light",
})<{on: Boolean}>`
  height: 4.2rem;
  width: auto;
  border-radius: 0.42rem;
  padding: 0.36rem;
  /* background: #eef0f4;
  box-shadow: inset 9.91px 9.91px 15px #d9dade,
    inset -9.91px -9.91px 15px #ffffff; */
  ${props => props.on && `
    background: #eff95d;
    box-shadow: 9.91px 9.91px 15px #d9e355, -9.91px -9.91px 15px #ffff65;
  `}
  @media only screen and (max-width: 768px) {
    height: 7rem;
  }
`;

export const Fan = styled.img.attrs<{on:Boolean}>((props) => ({
  src: props.on ? CeilFan : CeilFanOff,
  alt: "Ceiling Fan",
}))<{on: Boolean}>`
  width: 4.2rem;
  height: auto;
  border-radius: 0.42rem;
  padding: 0.36rem;
  /* background: #eef0f4;
  box-shadow: inset 9.91px 9.91px 15px #d9dade,
    inset -9.91px -9.91px 15px #ffffff; */
  /* background: #67e1e9;
  box-shadow: 9.91px 9.91px 15px #5ecdd4, -9.91px -9.91px 15px #70f5fe; */
  @media only screen and (max-width: 768px) {
    width: 6rem;
  }
`;

export const Projector = styled.img.attrs({
  src: Screener,
  alt: "Projector",
})`
  height: 2.1rem;
  margin-bottom: 0.84rem;
  width: auto;
  border: 0.18rem solid black;
  border-radius: 0.42rem;
  padding: 0 42%;
  @media only screen and (max-width: 768px) {
    height: 3rem;
    padding: 0 40%;
  }
`;

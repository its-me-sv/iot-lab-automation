import { 
  Container, Room, Seperator,
  Screen, Light, Fan, Projector,
} from './styles';

// images

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <Room>
        <Screen />
        <Seperator>
          <Light />
          <Fan />
          <Fan />
          <Light />
        </Seperator>
        <Seperator>
          <Light />
          <Fan />
          <Fan />
          <Light />
        </Seperator>
        <Projector />
        <Seperator>
          <Light />
          <Fan />
          <Fan />
          <Light />
        </Seperator>
        <Seperator>
          <Light />
          <Fan />
          <Fan />
          <Light />
        </Seperator>
      </Room>
    </Container>
  );
};

export default App;




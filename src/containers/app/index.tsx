import { useState } from 'react';

import { 
  Container, Room, Seperator,
  Screen, Light, Fan, Projector,
} from './styles';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [powers, setPowers] = useState<Array<Number>>([]);

  const togglePower = (id: Number) => {
    if (powers.includes(id)) {
      setPowers(prev => prev.filter(v => v != id));
    } else {
      setPowers(prev => [...prev, id]);
    }
  };

  return (
    <Container>
      <Room>
        <Screen />
        <Seperator>
          <Light 
            onClick={() => togglePower(1)}
            on={powers.includes(1)}
          />
          <Fan 
            onClick={() => togglePower(2)}
            on={powers.includes(2)}
          />
          <Fan 
            onClick={() => togglePower(3)}
            on={powers.includes(3)}
          />
          <Light 
            onClick={() => togglePower(4)}
            on={powers.includes(4)}
          />
        </Seperator>
        <Seperator>
          <Light 
            onClick={() => togglePower(5)}
            on={powers.includes(5)}
          />
          <Fan 
            onClick={() => togglePower(6)}
            on={powers.includes(6)}
          />
          <Fan 
            onClick={() => togglePower(7)}
            on={powers.includes(7)}
          />
          <Light 
            onClick={() => togglePower(8)}
            on={powers.includes(8)}
          />
        </Seperator>
        <Projector />
        <Seperator>
          <Light 
            onClick={() => togglePower(9)}
            on={powers.includes(9)}
          />
          <Fan 
            onClick={() => togglePower(10)}
            on={powers.includes(10)}
          />
          <Fan 
            onClick={() => togglePower(11)}
            on={powers.includes(11)}
          />
          <Light 
            onClick={() => togglePower(12)}
            on={powers.includes(12)}
          />
        </Seperator>
        <Seperator>
          <Light 
            onClick={() => togglePower(13)}
            on={powers.includes(13)}
          />
          <Fan 
            onClick={() => togglePower(14)}
            on={powers.includes(14)}
          />
          <Fan 
            onClick={() => togglePower(15)}
            on={powers.includes(15)}
          />
          <Light 
            onClick={() => togglePower(16)}
            on={powers.includes(16)}
          />
        </Seperator>
      </Room>
    </Container>
  );
};

export default App;










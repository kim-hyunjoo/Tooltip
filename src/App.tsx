import styled from '@emotion/styled';
import Button from './components/Button';
import Input from './components/Input';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33dvh;//30dvh;
  gap: 20px;
`

const App = () => {
  return (
    <>
    <Container>
      <Button direction='left'></Button>
      <Button direction='right'></Button>
      <Button direction='top'></Button>
      <Button direction='bottom'></Button>
      
    </Container>
    
    <Container>
      <Button direction='left'></Button>
      <Button direction='right'></Button>
      <Button direction='top'></Button>
      <Button direction='bottom'></Button>
    </Container>
    <Container>
      <Input direction='left'/>
      <Input direction='right'/>
      <Input direction='top'/>
      <Input direction='bottom'/>
    </Container>
    
  </>
    
  );
};

export default App;
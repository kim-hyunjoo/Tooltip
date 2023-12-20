import styled from '@emotion/styled';
import HoverButton from 'components/Button/HoverButton';
import ClickButton from 'components/Button/ClickButton'
import Input from './components/Input';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 33dvh;
  margin-left: 50px;
  margin-right: 50px; 
  gap: 20px;
`

const App = () => {
  return (
    <>
    <Container>
      <HoverButton direction='left'></HoverButton>
      <HoverButton direction='right'></HoverButton>
      <HoverButton direction='top'></HoverButton>
      <HoverButton direction='bottom'></HoverButton>  
    </Container>
    
    <Container>
      <ClickButton direction='left'></ClickButton>
      <ClickButton direction='right'></ClickButton>
      <ClickButton direction='top'></ClickButton>
      <ClickButton direction='bottom'></ClickButton>
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
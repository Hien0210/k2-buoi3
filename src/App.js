import logo from './logo.svg';
import './App.css';
import Index from './components/Button'
import Button from './components/Button'
import Input from './components/Input'

function App() {
  return (
    <div className="App">        
        <Button title = 'Cancel'/> 
        <Button title = 'Sell'/>   
        <Button title = 'Approve'/>
        <Button title = 'Delist'/> 
        <Button title = 'Create'/> <br/>
        <Input  title = 'username'/>    <br/> 
        <Input  title = 'password'/>    <br/> 
        <Input  title = 'address'/>     <br/>
    </div>
  );
}

export default App;

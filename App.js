import React from "react";
import './App.css';
import { Button , Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
      <div className="App">
        <header className="App-header">
        <Card className='mb-5' style={{color:'white', width:'250px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/59.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'black'}}>
              Mr Eino Karjala
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/person1">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'white',width:'250px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/75.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'black'}}>
              Monsieur Toni Lecomte
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/person2">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'white',width:'250px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/98.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'black'}}>
              Mr Akash Fernandes
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/person3">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'white',width:'250px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/men/60.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'black'}}>
              Mr Giray Babacan
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/person4">view details</Button>
          </Card.Body>
        </Card>
        <Card className='mb-5' style={{color:'white',width:'250px'}}>
          <Card.Img src="https://randomuser.me/api/portraits/women/53.jpg"/>
          <Card.Body>
            <Card.Title style={{color:'black'}}>
              Mrs Pernille Borch
            </Card.Title>
            <Button href="https://ranjeni.neocities.org/person5">view details</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;

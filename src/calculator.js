import React, {useState} from "react";
import { Form, Card } from 'react-bootstrap';

const Calculator = ({setTokens}) => {
  const [solana, setSolana] = useState(1);
  const [codi, setCodi] = useState(5000);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.name)
    if(e.target.name === "solana"){
      let codiTemp = e.target.value / 0.0002; 
      setSolana(e.target.value)
      setCodi(codiTemp)
      setTokens(codiTemp);
    }else {
      let solanaTemp = e.target.value * 0.0002;
      setCodi(e.target.value)
      setSolana(solanaTemp)
      setTokens(e.target.value)
    }
  }

  return (
     
        <Card style={{ width: '18rem', background: "transparent", color: "white", fontWeight: "bolder" , border: "0px solid black"}}>
          <Card.Body>
            <Card.Text>
            <Form.Group className="mb-3" controlId="solana">
              <Form.Label>Solana</Form.Label>
              <Form.Control disabled={true} onChange={handleClick} value={solana} type="number" name="solana"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="codi">
              <Form.Label>CODI</Form.Label>
              <Form.Control disabled={true} onChange={handleClick} value={codi} type="number" name="codi"/>
            </Form.Group>
            </Card.Text>
          </Card.Body>
        </Card>
        
  );
}

export default Calculator;

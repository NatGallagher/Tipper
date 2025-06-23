import { useEffect, useState, useRef } from "react"
import { Container, Button, Form, Card } from "react-bootstrap";

function Home() {

    const [total, setTotal] = useState("");
    const [newTotal, setNewTotal] = useState("");
    const input = useRef(null);

    function smallTip() {
        let msg = "smallTip";
        console.log(msg);
        const inputValue = parseFloat(input.current.value);
        const tipped = (inputValue * 18) / 100
        const afterTip = (inputValue + tipped);
        const roundedTip = parseFloat(tipped.toFixed(2));
        const roundedTotal = parseFloat(afterTip.toFixed(2));
        setTotal(roundedTip)
        setNewTotal(roundedTotal);
        input.current.value = "";
    }

    function mediumTip() {
        let msg = "mediumTip";
        console.log(msg); 
        const inputValue = parseFloat(input.current.value);
        const tipped = (inputValue * 20) / 100
        const afterTip = (inputValue + tipped);
        const roundedTip = parseFloat(tipped.toFixed(2));
        const roundedTotal = parseFloat(afterTip.toFixed(2));
        setTotal(roundedTip)
        setNewTotal(roundedTotal);
        input.current.value = "";
    }

    function largeTip() {
        let msg = "largeTip";
        console.log(msg);
        const inputValue = parseFloat(input.current.value);
        const tipped = (inputValue * 22) / 100
        const afterTip = (inputValue + tipped);
        const roundedTip = parseFloat(tipped.toFixed(2));
        const roundedTotal = parseFloat(afterTip.toFixed(2));
        setTotal(roundedTip)
        setNewTotal(roundedTotal);
        input.current.value = "";
    }

  return (
    <div className="bg-dark text-light min-vh-100 d-flex justify-content-center align-items-center">
            <Container style={{ maxWidth: '400px' }} className="p-3">
                <Card bg="dark" text="light" className="shadow-lg">
                    <Card.Body>
                    <h1 className="text-center display-4 fw-bold mb-4">💸 Tipper</h1>
                        <Form.Group className="mb-3">
                            <Form.Control
                                ref={input}
                                type="number"
                                placeholder="Enter amount"
                                className="bg-secondary text-light border-0"
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-between mb-3">
                            <Button variant="outline-info" onClick={smallTip}>18%</Button>
                            <Button variant="outline-warning" onClick={mediumTip}>20%</Button>
                            <Button variant="outline-success" onClick={largeTip}>22%</Button>
                        </div>
                        <div className="text-center">
                            <p className="mb-1">Tip: <strong>${total}</strong></p>
                            <p>New Total: <strong>${newTotal}</strong></p>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
  );
}

export default Home;

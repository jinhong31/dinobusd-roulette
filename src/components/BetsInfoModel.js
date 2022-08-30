import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import './Info.css';


const InfoModel = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="warning" size='lg' onClick={handleShow}>
                Payout Rules
            </Button>

            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Payout Rules</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='Payout-list'>
                        <li>On a number (0 to 36), with a payout of 10x</li>
                        <li>On a dozen (1-12, 13-24, 25-36), with a payout of 3x</li>
                        <li>On a color (black or red), with a payout of 2x</li>
                        <li>If the number is even or odd, with a payout of 2x</li>
                        <li>On a column (left, middle or right), with a payout of 3x</li>
                        <li>The roulette just accepts a bet when has sufficient funds to pay for it and every other active bet</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModel;
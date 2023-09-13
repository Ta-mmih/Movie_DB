import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card text-center bg-warning m-2 ">
            <div className="card-body">

                <img className="card-img-top" src={API_IMG + poster_path} />
                <div className="mt-2"><h5>{title}</h5></div>
                <button type="button" className="btn btn-danger mt-3" onClick={handleShow}>View More</button>
                <Modal id='modal' show={show} onHide={handleClose} backdrop="static"  keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img className="card-img-top mb-3" src={API_IMG + poster_path} />

                        <h4>ImDb: {vote_average}</h4>
                        <h5>Release Date: {release_date}</h5>
                        <br />
                        <h6>Description: {overview}</h6>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Exit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}


export default MovieBox;
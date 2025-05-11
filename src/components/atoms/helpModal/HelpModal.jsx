
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const HelpModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body><p>Especifica el nombre de {props.element} que desitges tenir a la teva Web.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
};

export default HelpModal;

import React, {Component} from "react";
import {Button, Modal} from "react-bootstrap";

class ProjectForm extends Component{
    show = true
    handleClose = () => this.show = false

    render() {
        return (
            <Modal show={this.show} size={'lg'} centered onHide={()=> this.handleClose()}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className={'mr-auto'} onClick={() => this.handleClose()}>
                        Close
                    </Button>
                    <Button variant="success">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ProjectForm
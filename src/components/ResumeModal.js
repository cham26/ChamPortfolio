import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { pdfjs, Document, Page } from "react-pdf";
import file from "../assets/Cham's Resume.pdf";
import FileSaver from "file-saver";
import { css } from "emotion";
import { CircleLoader } from "react-spinners";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const modalClasses = css`
  .modal-content {
    width: fit-content !important;
    margin-top: 70px !important;
  }
  .modal-body {
    overflow-y: scroll;
    max-height: 60vh;
    min-width: 630px !important;
  }
  .modal-header {
    background-color: lightcoral;
    color: white;
  }
`;

const override = css`
  margin: auto;
`;

class ResumeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.downloadResume = this.downloadResume.bind(this);
  }

  closeModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  downloadResume(event) {
    event.preventDefault();
    const fileName = "Charmaine_Stepaniuk.pdf";
    FileSaver.saveAs(file, fileName);
    this.closeModal();
  }

  render() {
    return (
      <Fragment>
        <Button
          onClick={this.closeModal}
          className={this.props.cssClasses.join(" ")}
        >
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.closeModal}
          className={modalClasses}
        >
          <ModalHeader toggle={this.closeModal}>Resume</ModalHeader>
          <ModalBody>
            <Document
              file={file}
              onLoadError={console.error}
              loading={
                <CircleLoader
                  sizeUnit={"px"}
                  size={150}
                  color={"#123abc"}
                  className={override}
                />
              }
            >
              <Page pageNumber={1} />
            </Document>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.downloadResume}>
              Save as pdf
            </Button>
            <Button color="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ResumeModal;

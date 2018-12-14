import React, { Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { pdfjs, Document, Page } from "react-pdf";
import file from "../assets/chamPortfolio.pdf";
import FileSaver from "file-saver";
import { css } from "emotion";
import { CircleLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

const modalClasses = css`
  .modal-content {
    max-width: 100%;
    overflow-x: auto;
    margin-top: 70px !important;
    @media (min-width: 1200px) {
      min-width: 630px !important;
    }
  }
  .modal-body {
    overflow-y: scroll;
    max-height: 60vh;
  }
  .modal-header {
    background-color: lightcoral;
    color: white;
  }
  .document-wrapper {
    widht: 400px;
  }
  .controls {
    display: flex;
    flex: 1;
  }
}
`;

const override = css`
  margin: auto;
`;

class ResumeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      numPages: null,
      pageNumber: 1
    };

    this.closeModal = this.closeModal.bind(this);
    this.downloadResume = this.downloadResume.bind(this);
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.pageToggler = this.pageToggler.bind(this);
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  pageToggler = () => {
    if (this.state.pageNumber === 1) {
      this.setState(state => ({ pageNumber: 2 }));
    } else {
      this.setState(state => ({ pageNumber: 1 }));
    }
  };

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
            <div className="document-wrapper">
              <Document
                file={file}
                onLoadError={console.error}
                loading={
                  <CircleLoader
                    sizeUnit={"px"}
                    size={150}
                    color={"#123abc"}
                    className={override}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  />
                }
              >
                <Page pageNumber={this.state.pageNumber} width={600} />
              </Document>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="controls">
              <FontAwesomeIcon
                icon={["far", "arrow-alt-circle-left"]}
                size="2x"
                title="Go to previous page"
                onClick={this.pageToggler}
              />
              <FontAwesomeIcon
                icon={["far", "arrow-alt-circle-right"]}
                size="2x"
                title="Go to next page"
                onClick={this.pageToggler}
              />
            </div>
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

import React from "react";
import { highResImages, lowResImages } from "./shoes";
import Modal from "./components/Modal";
import * as StackBlur from "stackblur-canvas";

import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highResImages,
      lowResImages,
      modalVisible: false,
      modalImage: null,
      loading: true
    };
    this.targetRef = React.createRef();
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      if (this.state.loading) {
        setInterval(() => {
          this.setState({
            loading: false
          });
        }, 5000);
      }
    };
    img.src = highResImages.map((highResImg, i) => highResImg.src);
  }

  displayImage = student => {
    console.log("std displayImage", this.targetRef.current);
    this.setState({
      modalVisible: true,
      modalImage: student
    });
    document.body.style.overflow = "hidden";
  };

  closeModal = () => {
    this.setState({
      modalVisible: false
    });
    document.body.style.overflow = "visible";
  };
  render() {
    const { students, modalVisible, modalImage } = this.state;
    console.log("studetns", students);
    console.log("modalImage", modalImage);
    return (
      <>
        {modalVisible && (
          <Modal
            modalCloseButtonColor="black"
            visible={modalVisible}
            onClose={this.closeModal}
          >
            <div ref={this.targetRef} className="modal-image-conatiner">
              <img
                src={require(`./assets/lowRes/${modalImage.src}`)}
                alt={modalImage.firstName}
                style={{ height: 1000, width: "100%" }}
              />
            </div>
          </Modal>
        )}
        <div className="App">
          {highResImages.map((highResImg, hIndex) => (
            <div
              onClick={() => this.displayImage(highResImg)}
              key={hIndex}
              className="image-container"
            >
              <img
                src={require(`./assets/highRes/${highResImg.src}`)}
                alt={highResImg.name}
                style={{ height: 100, width: 100 }}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;

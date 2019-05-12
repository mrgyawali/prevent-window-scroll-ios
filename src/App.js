import React from "react";
import Students from "./studentsList";
import Modal from "./components/Modal";
import "./App.scss";

class App extends React.Component {
  state = {
    students: Students,
    modalVisible: false,
    modalImage: null
  };

  displayImage = student => {
    console.log("std displayImage", student);
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
            <div className="modal-image-conatiner">
              <img
                src={require(`./assets/${modalImage.src}`)}
                alt={modalImage.firstName}
                style={{ height: 1000, width: "100%" }}
              />
            </div>
          </Modal>
        )}
        <div className="App">
          {students.map((student, sIndex) => (
            <div
              onClick={() => this.displayImage(student)}
              key={sIndex}
              className="image-container"
            >
              <img
                src={require(`./assets/${student.src}`)}
                alt={student.firstName}
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

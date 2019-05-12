// const CSSTransition = window.ReactTransitionGroup.CSSTransition;
import * as React from "react";
import "./index.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.currentHeight = 0;
  }

  //   UNSAFE_componentWillReceiveProps(nextProps) {
  //     if (!nextProps.visible && this.props.visible) {
  //       document.body.style.position = "relative";
  //       document.body.style.top = null;
  //       document.body.style.bottom = null;
  //       document.body.style.left = null;
  //       document.body.style.right = null;
  //       window.scrollTo(0, this.currentHeight);
  //     } else if (nextProps.visible && !this.props.visible) {
  //       this.currentHeight = window.scrollY;
  //       document.body.style.position = "fixed";
  //       // document.body.scrollTo(0, this.currentHeight);
  //       document.body.style.top = -this.currentHeight + "px";
  //       document.body.style.bottom = 0;
  //       document.body.style.left = 0;
  //       document.body.style.right = 0;
  //       // setTimeout(() => {
  //       // }, 400)
  //     }
  //   }

  render() {
    //   <CSSTransition
    //     in={this.props.visible}
    //     timeout={300}
    //     unmountOnExit
    //     classNames="modal"
    //   >
    return (
      <>
        {this.props.visible && (
          <div className="modal-container">
            <div className="close-modal-btn" onClick={this.props.onClose}>
              <span
                style={{
                  border: "2px solid " + this.props.modalCloseButtonColor
                }}
                className="line"
              />
              <span
                style={{
                  border: "2px solid " + this.props.modalCloseButtonColor
                }}
                className="line"
              />
            </div>
            <div className="modal-backdrop">
              <div className="modal-content">{this.props.children}</div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Modal;

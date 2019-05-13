import React, { Component } from "react";

class AsyncImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loading: false
      });
      img.src = this.props.highResImage;
    };
  }

  render() {
    const { highResImage, lowResImage } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <img src={loading ? lowResImage : highResImage} alt="" />
      </div>
    );
  }
}

export default AsyncImg;

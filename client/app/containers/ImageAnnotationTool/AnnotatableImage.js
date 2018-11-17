import React, { PureComponent } from 'react';
import { Image } from 'react-konva';

export class AnnotatableImage extends PureComponent {
  state = {};

  componentDidMount() {
    const image = new window.Image();
    image.src = this.props.src;
    image.onload = () => {
      this.setState(() => ({ image }));
    };
  }

  render() {
    return (
      <Image image={this.state.image} />
    )
  }
}

export default AnnotatableImage;

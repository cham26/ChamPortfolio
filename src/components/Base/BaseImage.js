import React, { Component, Fragment } from "react";
import { CircleLoader } from "react-spinners";
import { css } from "emotion";

const override = css`
  display: block !important;
  margin: auto;
`;

class BaseImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.onError = this.onError.bind(this);
  }

  handleImageLoaded() {
    this.setState(() => ({ loaded: true }));
  }

  onError() {
    this.setState({ loaded: false });
  }

  render() {
    const { imageSrc, cssClasses, style } = this.props;
    const { loaded } = this.state;
    return (
      <Fragment>
        {!loaded && (
          <CircleLoader
            className={override}
            sizeUnit={"px"}
            size={150}
            color={"#123abc"}
            loading={!loaded}
          />
        )}
        <img
          src={imageSrc}
          alt="did not load"
          style={style}
          className={cssClasses.join(" ")}
          onLoad={this.handleImageLoaded}
          onError={this.onError}
        />
      </Fragment>
    );
  }
}

export default BaseImage;

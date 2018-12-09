import React from "react";
import classNames from "classnames";

export default class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false,
      position: Slider.CENTER,
      animatePrepare: false
    };

    this.startAnimation = this.startAnimation.bind(this);
    this.postPrepareAnimation = this.postPrepareAnimation.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    this.startAnimation(this.props.position);
    if (this.node) {
      this.node.addEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.position !== this.props.position) {
      this.startAnimation(newProps.position, newProps.animationCallback);
    }
  }

  startAnimation(position, animationCallback) {
    const noAnimate = position === Slider.CENTER;
    const animatingOut = [Slider.TO_LEFT, Slider.TO_RIGHT].includes(position);
    const currentlyIn = [
      Slider.CENTER,
      Slider.FROM_LEFT,
      Slider.FROM_RIGHT
    ].includes(this.state.position);
    if (noAnimate || (currentlyIn && animatingOut)) {
      // in these cases we don't need to prepare our animation at all, we can just
      // run straight into it
      this._animationCallback = animationCallback;
      return this.setState({
        animatePrepare: false,
        position
      });
    }

    this._animationCallback = this.postPrepareAnimation;
    // in case the transition fails, we also post-prepare after some ms (whichever
    // runs first should cancel the other)
    this._postPrepareTimeout = setTimeout(this.postPrepareAnimation, 500);

    this.setState({
      animating: true,
      animatePrepare: true,
      position
    });
  }

  postPrepareAnimation() {
    clearTimeout(this._postPrepareTimeout);
    this._animationCallback = null;

    this.setState(
      { animatePrepare: false },
      () => (this._animationCallback = this.props.animationCallback)
    );
  }

  onTransitionEnd(e) {
    // the Slider transitions the `transform` property. Any other transitions
    // that occur on the element we can just ignore.
    if (e.propertyName !== "transform") return;

    const callback = this._animationCallback;
    delete this._animationCallback;

    // an animation callback is another animation, so we only set `animating` to
    // `false` when we finish the follow-up animation
    if (callback) setTimeout(callback, 0);
    else this.setState({ animating: false });
  }

  render() {
    return (
      <div
        ref={node => (this.node = node)}
        className={classNames("animatable", {
          ["to"]: [Slider.TO_LEFT, Slider.TO_RIGHT].includes(
            this.state.position
          ),
          ["from"]: [Slider.FROM_LEFT, Slider.FROM_RIGHT].includes(
            this.state.position
          ),
          ["right"]: [Slider.TO_RIGHT, Slider.FROM_RIGHT].includes(
            this.state.position
          ),
          ["left"]: [Slider.TO_LEFT, Slider.FROM_LEFT].includes(
            this.state.position
          ),
          ["prepare"]: this.state.animatePrepare
        })}
        data-qa-loading={Boolean(
          this.props["data-qa-loading"] || this.state.animating
        )}
      >
        <div className={this.props.className}>{this.props.children}</div>
      </div>
    );
  }
}

Slider.CENTER = "CENTER";
Slider.TO_LEFT = "TO_LEFT";
Slider.TO_RIGHT = "TO_RIGHT";
Slider.FROM_LEFT = "FROM_LEFT";
Slider.FROM_RIGHT = "FROM_RIGHT";

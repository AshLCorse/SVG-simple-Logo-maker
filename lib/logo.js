const Component = require("./component.js");

class Logo extends Component {
  constructor(children) {
    super(children);
  }
  render() {
    return `${this.renderInnerSVG()}`;
  }
}

module.exports = Logo;

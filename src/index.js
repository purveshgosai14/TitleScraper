const React = require("react");
const ReactDom = require("react-dom");
const axios = require("axios");

const styles = {
  img: {
    height: "15em"
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    //this.state={inputfield: "no value"};
    this.handleClick = this.handleClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      title: ""
    };
  }

  handleClick() {
    axios
      .get(
        "https://textance.herokuapp.com/title/https%3A%2F%2F" +
          this.state.inputfield
      )
      .then(response => {
        this.setState({
          title: response.data.message
        });
      })
      .catch(err => {
        console.log("error fetching data");
      });
  }
  updateInputValue(evt) {
    this.state = { inputfield: evt.target.value };
  }

  render() {
    const { title } = this.state;
    var r;
    r = (
      <div>
        <p>{title}</p>
        <input
          type="text"
          id="addpixinputfield"
          onChange={this.updateInputValue}
        />
        <input
          type="button"
          value="add"
          id="addpix"
          onClick={this.handleClick}
        />
      </div>
    );
    return r;
  }
}

ReactDom.render(<App />, document.getElementById("root"));

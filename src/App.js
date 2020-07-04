import React from 'react';
import logo from './logo.svg';
import './App.css';

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' },
];

// 生命周期 state
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return <div>{this.props.name + this.state.date.toLocaleTimeString()}</div>;
  }
}

// 事件
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = (type) => {
    console.log(type);
    this.setState({
      isToggleOn: !this.state.isToggleOn,
    });
  };

  render() {
    return (
      <button
        onClick={(e) => {
          this.handleClick('button');
        }}
      >
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

// 表单
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'text',
      select: '123',
      checkbox: true,
    };
  }

  handleChange = (event) => {
    const type = event.target.type;
    const name = event.target.name;
    const value =
      type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form>
        <label>
          input
          <input
            name="text"
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <select
          value={this.state.select}
          onChange={this.handleChange}
          name="select"
        >
          <option value="123">123</option>
          <option value="456">456</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            checked={this.state.checkbox}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>{this.props.top}</div>
        <div>{this.props.children}</div>
        <div>{this.props.bottom}</div>
      </div>
    );
  }
}

function App() {
  let listItems = posts.map((item) => {
    return <li key={item.id}>{item.title}</li>;
  });

  return (
    <div>
      {/* <Clock name="one" /> */}
      {/* <Toggle></Toggle> */}
      {/* <div>{logo && <img src={logo} alt="logo" />}</div> */}
      {/* <div>
        <ul>{listItems}</ul>
      </div> */}
      {/* <Form></Form> */}
      <Dialog bottom={<h1>bottom</h1>} top={<h1>top</h1>}>
        <div>123</div>
      </Dialog>
    </div>
  );
}

export default App;

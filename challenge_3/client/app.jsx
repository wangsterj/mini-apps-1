// import Checkpoint from './checkout.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      checkout: true,
      confirm: false,
      form: "F1",
    }
    this.setState = this.setState.bind(this);
  }   
  
  addCheckout(checkoutButtonHandler) {
    if (this.state.checkout) {
      return (
        <button onClick = {checkoutButtonHandler}>Checkout</button>
      )
    }
  }
  
  checkoutButtonHandler() {
    this.setState({
      checkout: !this.state.checkout
    })
  }

  addForm(nextButtonHandler) {
    if (!this.state.checkout && !this.state.confirm) {
      if (this.state.form === "F1") {
        return (
          <F1 nextButtonHandler = {nextButtonHandler}/>
        );
      }
      else if (this.state.form === "F2") {
        return (
          <F2 nextButtonHandler = {nextButtonHandler}/>
        );
      }
      else {
        return (
          <F3 nextButtonHandler = {nextButtonHandler}/>
        );
      }
    }
  }

  sendData(data) {
    console.log(data)
    const myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      mode: 'cors',
      cache: 'default',
      body: JSON.stringify(data)
    }
    fetch(new Request('/'), myInit)
      .then((response)=> {
        if (!response.ok) {
          throw new Error("bad");
        }
        console.log(response.body);
        console.log('Successful post!');
      })
  }

  getData(data) {
    console.log(data)
    const myInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/JSON'
      },
      mode: 'cors',
      cache: 'default'
    }
    fetch(new Request('/data'), myInit)
      .then((response)=> {
        if (!response.ok) {
          throw new Error("bad");
        }
        console.log(response.body);
        console.log('Successful post!');
      })
  }

  nextButtonHandler(event, data){
    event.preventDefault();

    var currForm = this.state.form;
    if (currForm === "F1") {
      this.setState({
        form: "F2"
      });
    } else if (currForm === "F2") {
      this.setState({
        form: "F3"
      });
    } else {
      this.setState({
        form: "F1"
      });
    }
    this.sendData(data);
  }

  render() {
    return (
      <div>
        {this.addCheckout.bind(this)(this.checkoutButtonHandler.bind(this))}
        {this.addForm.bind(this)(this.nextButtonHandler.bind(this))}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  setInput(event) {
    this.state[event.target.placeholder] = event.target.value;
  }
  render() {
    return (
      <form >
        <input id ="name" type = "text" placeholder = "name" onChange = {(event) => this.setInput(event)}></input>
        <input type = "text" placeholder = "email" onChange = {(event) => this.setInput(event)}></input>
        <input type = "text" placeholder = "password" onChange = {(event) => this.setInput(event)}></input>
        <button onClick = {(event) => {this.props.nextButtonHandler(event, this.state);}}>Next</button>
      </form>
    )
  }
}
class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setInput(event) {
    this.state[event.target.placeholder] = event.target.value;
  }
  render() {
    return (
      <form>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "address"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "address2"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "city"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "state"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "zip code"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "phone number"></input>
        <button onClick = {(event) => {this.props.nextButtonHandler(event, this.state);}}>Next</button>
      </form>
    )
  }
}
class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  setInput(event) {
    this.state[event.target.placeholder] = event.target.value;
  }
  render() {
    return (
      <form>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "CC#"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "expiry date"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "CVV"></input>
        <input onChange = {(event) => this.setInput(event)} type = "text" placeholder = "billing zip code"></input>
        <button onClick = {(event) => {this.props.nextButtonHandler(event, this.state);}}>Next</button>
      </form>
    )
  }
}
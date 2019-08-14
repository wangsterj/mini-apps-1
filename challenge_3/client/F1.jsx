

class F1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type = "text" placeholder = "stuff"></input>
          <button onClick = {this.props.nextButtonHandler}>Checkout</button>
        </form>
      </div>
    )
  }
}
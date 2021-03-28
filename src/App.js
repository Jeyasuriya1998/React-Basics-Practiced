import logo from './logo.svg';
import './App.css';
import HeaderElement from './header'
import MainContainer from './mainContainer'
import Footer from './footer';
import todoData from './components/Tododata';
import TodoItem from './components/TodoItems';
import ContactCard from './components/ContactCard';
import Joke from './components/joke';
import JokesData from './components/jokesData';
import productsdata from './components/productsData'
import Products from './components/product';
import { render } from '@testing-library/react';
import React, { Children } from 'react';
import Conditional from "./components/Conditional";
import FormPractice from "./components/formpractice"

import MemeHeader from './components/Meme/Header';
import MemeGenerator from './components/Meme/MemeGenerator';

function BasicApp() {
  return (
    <div className="container">
      <HeaderElement />
      <MainContainer />
      <Footer/>
    </div>
  );
}
//export default BasicApp;

class TodoApp extends React.Component {
  constructor(){
    super()
    this.state = {
      todos : todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed
              console.log(todo.completed)
            }
            console.log("todo")
            console.log(todo)
          
            return todo
        })
        console.log("updatedTodos")
        console.log(updatedTodos)
        return {
            todos: updatedTodos
        }
      
      })
  }

  render(){
    const TodoComponent = this.state.todos.map(item => <TodoItem key={item.id} text={item.text} 
      completed={item.completed} item = {item}
      handleChange={this.handleChange}/>)

    return(
      <div className="todo-list">
          {TodoComponent}
      </div>
  )
  }
  
}

//export default TodoApp;

function JSXtoJSandBack() {
  const firstname="Jeya"
  const lastname="Suriya"
  return(
    <div>
      <h1>My name is {firstname + " " + lastname}</h1>
      <h2>My name is {`${firstname} ${lastname}`}</h2>
    </div>
  )
}
//export default JSXtoJSandBack;

// Get the current hour
function CurrentTimeApp() {
  const date = new Date()
  return(
    <h1>It is currently about {date.getHours() % 12} o'clock</h1>
  )
}
//export default CurrentTimeApp;

//Get the status of the day i.e. morning, afternoon, evening, night
function StatusOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  const styles = {
    fontSize: "200px",
    backgroundColor: "#FFCCFF",
  }

  if (hours < 12){
    timeOfDay = "Morning";
    styles.color = "#04756F"
  } else if (hours >=12 && hours < 16){
    timeOfDay = "Afternoon";
    styles.color = "#2E0927"
  } else if (hours >=16 && hours <=20){
    timeOfDay = "Evening";
    styles.color = "#FFBC00"
  } else {
    timeOfDay = "Night";
    styles.color = "#D90000"
  }

  
  return (
    <h1 style={styles}>Good {timeOfDay}</h1>
  )
}
//export default StatusOfDay;

function ContactCards() {
  return (
    <div className="contacts">
      <ContactCard 
      contact = {{ name:"Mr.Jeyasuriya",
      imgUrl:"http://placekitten.com/300/200",
      phone:"8189880266",
      email:"suriyajeyasuriya123@gmail.com"}}
      />
      <ContactCard 
      contact = {{name:"Mr.Iraianbu",
      imgUrl:"http://placekitten.com/400/200",
      phone:"7373221765",
      email:"irianbu@gmail.com"}}
      />
      <ContactCard 
      contact = {{name:"Mr.Udhaya",
      imgUrl:"http://placekitten.com/400/300",
      phone:"6383293763",
      email:"udhaya@gmail.com"}}
      />
      <ContactCard 
      contact = {{name:"Mr.Siva",
      imgUrl:"http://placekitten.com/200/100",
      phone:"9943987317",
      email:"siva@gmail.com"}} 
      />
    </div>
  )
}
//export default ContactCards;

function JokeApp() {
  const nums = [1,2,3,4,5,6,7,8,9]
  const double = nums.map(function(num) {
    return num *2
  })
  console.log(double)
  return (
    <div>
      <Joke 
          punchLine="I don't know, but the flag is a big plus!"
      />
      <Joke 
          question="Did you hear about the mathematician who's afraid of negative numbers?"
          punchLine="He'll stop at nothing to avoid them!"
      />
      <Joke 
          punchLine="There's no menu: You get what you deseve."
      />
      <Joke 
          question="Did you hear about the actor who fell through the floorboards?"
          punchLine="He was just going through a stage."
      />
      <Joke 
          question="Did you hear about the claustrophobic astronaut?"
          punchLine="He justneeded a little space."
      />
    </div>
  )
}
//export default JokeApp;

function JokesDataApp() {
  const JokeComponent = JokesData.map(joke => <Joke question={joke.question} punchLine={joke.punchLine}/>)

  return (
    <div>
      {JokeComponent}
    </div>
  )
}
//export default JokesDataApp;

function ProductsApp() {
  const ProductsComponent = productsdata.map(products => <Products name={products.name} price={products.prices} description={products.description}/>)
  return(
    <div>
      {ProductsComponent}
    </div>
  )
}
// export default ProductsApp;

// Pratice Class
class ClassApp extends React.Component {

  yourmethod(){}
  render(){
    const date = new Date()
    return(
      <div>
        hello
      </div>
    )
  }
};
//export default ClassApp;

class MultipleClassConnectionApp extends React.Component {
  render() {
    return (
      <div>
        <Header username="Suriya"/>
        <Greeting />
      </div>
    )
  }
}

// #2
class Header extends React.Component {
  render () {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

// #3
class Greeting extends React.Component {
  render(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;

    const styles = {
      fontSize: "200px",
      backgroundColor: "#FFCCFF",
    }

    if (hours < 12){
      timeOfDay = "Morning";
      styles.color = "#04756F"
    } else if (hours >=12 && hours < 16){
      timeOfDay = "Afternoon";
      styles.color = "#2E0927"
    } else if (hours >=16 && hours <=20){
      timeOfDay = "Evening";
      styles.color = "#FFBC00"
    } else {
      timeOfDay = "Night";
      styles.color = "#D90000"
    }
    return (
      <h1 style={styles}>Good {timeOfDay}</h1>
    )
  }
}

// export default MultipleClassConnectionApp;

// #1
class ConstructorClassApp extends React.Component {
  constructor() {
    super()
    this.state = {
      name : "Jeyasuriya",
      age : 23,
      answer : "yes"
    }
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>{this.state.age}</p>
        <ChildrenClass answer={this.state.name}/>
      </div>
    )
  }
}

// #2
class ChildrenClass extends React.Component {
  render() {
    return(
      <p>ChildrenClass {this.props.name} </p>
    )
  }
}
//export default ConstructorClassApp;

class LoginOrOurApp extends React.Component {
  constructor() {
    super()
    this.state = {
      LoggedIn : true
    }
  }
  render(){
    let LoggedStatus
    if (this.state.LoggedIn === true){
      LoggedStatus = "Logged IN"
    }else{
      LoggedStatus = "Logged OUT"
    }
    return(
      <h1>Now Your are {LoggedStatus}</h1>
    )
  }
}
//export default LoginOrOurApp;

class HandlingEvents extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <img onMouseOver={() => console.log("Hovered!")}
        src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button onClick={() => console.log("Button Clicked")}>Click me</button>
      </div>
    )
  }
}
//export default HandlingEvents;

class ChangingState extends React.Component {
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}
//export default ChangingState;

// Lifecycle Methods
class LifecycleMethods extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    // Get the data I need to correctly display
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.whatever !== this.props.whatever) {
      // do something important here
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // return true if want it to update
    // return false if not
  }

  componentWillUnmount() {
    // teardown or cleanup your code before your component disappers
    // remove event listener
  }

  render() {
    return (
      <div>
        LifeCycle Methods
      </div>
    )
  }
}
//export default LifecycleMethods;

// Conditional Rendering
class ConditionalRenderingApp extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: true  
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3500)
    }
    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}
//export default ConditionalRenderingApp;
class ConditionalRenderingApp2 extends React.Component {
    constructor() {
        super()
        this.state = {
             unreadMeassages: ['aa', 'bb']
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.unreadMeassages.length > 0 &&
                    <h2>You have {this.state.unreadMeassages.length} unread message!</h2>
                }
            </div>
        )
    }
  }
//export default ConditionalRenderingApp2;

class ConditionaRenPractice extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn : false
        }
        this.handleClick = this.handleClick.bind(this)
    }
handleClick() {
  this.setState(prevState => {
    
      return {
          isLoggedIn: !this.state.isLoggedIn
      } 
      
  })
}

render() {
    let ButtonStatus = this.state.isLoggedIn ? "LOGOUT" : "LOGIN"
    let DisplayText = this.state.isLoggedIn ? "Logged In" : "Logged Out"
    return (
        <div>
            <h1>Now your are in {DisplayText} Mode</h1>
            <button onClick={this.handleClick}>{ButtonStatus}</button>
        </div>
    )
}
}
//export default ConditionaRenPractice;

class FetchDataApp extends React.Component {
  constructor(){
      super()
      this.state = {}
  }

  componentDidMount() {
      fetch("https://swapi.co/api/people/1")
          .then(response => response.json())
          .then(data => {
              this.setState({
                  character: data
              })
          })
  }

  render(){
      return (
        <div>
            {this.state.character.name}
        </div>
      )
  }
}
// export default FetchDataApp;

class FromApp1 extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName : "",
      lastName : "",
      isFriendly : true,
      gender : "",
      favColor : "",
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked}) : this.setState({ [name]: value})
      // this.setState({
      //   [event.target.name] : event.target.value
      //})
  }

  

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
          <input 
              type="text"
              value={this.state.value} 
              name="firstName" 
              placeholder="First Name" 
              onChange={this.handleChange}
          />
          <br />
          <input 
              type="text" 
              value={this.state.value}
              name="lastName" 
              placeholder="Last Name" 
              onChange={this.handleChange}
          />
          <br />
          <textarea value={"Some default value"}/>

          <br />
          <label>
              <input
                  type="checkbox"
                  name="isFriendly"
                  checked={this.state.isFriendly}
                  onChange={this.handleChange}
              /> Is friendly?
          </label>

          <br />
          <label>
              <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={this.state.gender === "male"}
                  onChange={this.handleChange}
              /> Male
          </label>

          <br />
          <label>
              <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleChange}
              /> Female
          </label>
          
          <br />
          <label>Favorite Color</label>
          <select
              value={this.state.favColor}
              onChange={this.handleChange}
              name="favColor">
              
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="orange">Orange</option>
              <option value="yellow">Yellow</option>

          </select>
          <br />
          <button>Submit</button>
          <h1>{this.state.firstName} {this.state.lastName}</h1>
          <h2>Your Gender is {this.state.gender}</h2>
          <h2>Your favorite color is {this.state.favColor}</h2>
      </form>
    )
  }
}
//export default FromApp1;

class FormPracticeApp extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
          <FormPractice />
      </div>
    )
  }
}
//export default FormPracticeApp;

class MemeApp extends React.Component {
  constructor(){
    super()
  }
  render(){
    return(
      <div>
        <MemeHeader />
        <MemeGenerator />
      </div>
    )
  }
}
export default MemeApp;
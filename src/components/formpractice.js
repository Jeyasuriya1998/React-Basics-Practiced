import React from 'react';

class FormPractice extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false,
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name] : checked
            })
        :
        this.setState({
            [name] : value
        })
    }
    render(){
        return(
            <main>
                <form>
                    <input 
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange} 
                        placeholder="Last Name" /><br />
                    <input 
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange} 
                        placeholder="Age" /><br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />

                    <select
                        value={this.state.destination}
                        onChange={this.handleChange}
                        name="destination">
                        
                        <option value="">Please Choose Your Destination</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UAE">UAE</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>

                    </select>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> LactoseFree?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Enter Information:</h2>
                <p>Your Name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your Destination: {this.state.destination}</p>
                <p>Your dietary restictions:</p>
                <p>Vegan : {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher : {this.state.isKosher ? "Yes" : "No"}</p>
                <p>LactoseFree : {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}
export default FormPractice;
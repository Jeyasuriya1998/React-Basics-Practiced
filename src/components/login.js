import react,{Component} from 'react';


function MyApp() {
    return (
        <ul>
            <li>1.suriya</li>
            <li>2.Jeya</li>
            <li>3.Suri</li>
            <li>4.Suriya</li>
        </ul>
    )
}
export class Login extends Component {
    render(){
        return(
            <div className='mt-5 d-flex jsutify-content-left'>
                <h1>Welcome to the login Page</h1>
                <MyApp />
            </div>
        )
    }
}
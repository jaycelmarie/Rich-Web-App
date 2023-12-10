import { Link } from 'react-router-dom';
import '../main.css';

function Index() {

    return(
        <button id="loginAndFactbtn">
            <Link to='/HomeLogin'> Notes App</Link>
        </button>
    );
}

export default Index;
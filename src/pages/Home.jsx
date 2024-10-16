import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

import './home.css';

export default function Home() {
    return(
        <>
            <p className="text-center pt-5">A place to track your meals and goals all in one place.</p>
            <div className="btn-div">
                <Link to='login'><Button className='btn btn-login' variant='success'>Login</Button>{' '}</Link>
                <Link to='signup'><Button className='btn btn-signup' variant="primary">Sign-up</Button>{' '}</Link>
            </div>
        </>
    )
}
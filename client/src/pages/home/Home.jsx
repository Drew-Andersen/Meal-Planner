import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';
import Dashboard from '../dashboard/Dashboard';
import './home.css';

export default function Home() {
    return (
        <>
            {Auth.loggedIn() ? (
                <>
                    <Dashboard />
                </>
            ) : (
                <>
                    <p className="text-center pt-5">A place to track your meals and goals all in one place.</p>
                    <div className="btn-div">
                        <Link to='login' className='link'>
                            <Button className='btn btn-login' variant='success'>Login</Button>{' '}
                        </Link>
                        <Link to='signup' className='link'>
                            <Button className='btn btn-signup' variant="primary">Sign-up</Button>{' '}
                        </Link>
                    </div>
                </>
            )}
        </>
    )
}
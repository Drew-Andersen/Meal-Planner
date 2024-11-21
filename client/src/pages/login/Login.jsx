// Imports
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../utils/API';
import Auth from '../../utils/auth';
import './login.css';

export default function Login () {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!userFormData.email || !userFormData.password) {
            setAlertMessage('Please enter both email and password');
            setShowAlert(true);
            return;
        }

        try {
            const response = await loginUser(userFormData);

            if (!response.ok) {
                const { message } = await response.json();
                setAlertMessage(message || 'Login failed, please try again');
                setShowAlert(true);
                return;
            }

            const data = await response.json();
            const { token, user } = data;

            if (token) {
                Auth.login(token);
                setUserFormData({ email: '', password: '' });
                navigate('/dashboard');
            } else {
                setAlertMessage('No token received, please try again.');
                setShowAlert(true);
            }
        } catch (err) {
            console.error(err);
            setAlertMessage('Something went wrong. Please try again later');
            setShowAlert(true);
        }
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className="form-div">
                    <h2 className='text-center mb-4'>Login</h2> 
                    {/* noValidate validated={validated} onSubmit={handleFormSubmit} */}
                    <Form>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            {alertMessage}
                        </Alert>
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor='email'>
                                <strong>Email</strong>
                            </Form.Label>
                            <Form.Control 
                                type='email'
                                placeholder='Enter your email'
                                onChange={handleInputChange}
                                name='email'
                                value={userFormData.email}
                                className='form-control rounded'
                                required
                            />
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor='password'>
                                <strong>Password</strong>
                            </Form.Label>
                            <Form.Control 
                                type='password'
                                placeholder='Enter your password'
                                onChange={handleInputChange}
                                name='password'
                                value={userFormData.password}
                                className='form-control rounded'
                                required
                            />
                        </Form.Group>

                        <div className='text-center'>
                            <Button
                                disabled={!(userFormData.email && userFormData.password)}
                                onClick={handleFormSubmit}
                                type='submit'
                                className='btn btn-success w-50 rounded'
                            >
                                Login
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-center mb-0 mt-3">Don't have an account?</p>
                            <Link to='/signup'><Button className='btn btn-primary border w-50 rounded text-decoration-none'>Sign-up</Button>{' '}</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
// Imports
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Signup () {
    const [userFormData, setUserFormData] = useState({ email: '', password: '' });
    // const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    // const handleFormSubmit = async (e) => {

    // }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className="form-div">
                    <h2 className='text-center mb-4'>Sign-Up</h2> 
                    {/* noValidate validated={validated} onSubmit={handleFormSubmit} */}
                    <Form>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your login credentials!
                        </Alert>
                        <Form.Group className='form-group'>
                            <Form.Label htmlFor='username'>
                                <strong>Username</strong>
                            </Form.Label>
                            <Form.Control 
                                type='text'
                                placeholder='Enter your username'
                                name='username'
                                onChange={handleInputChange}
                                value={userFormData.username}
                                className='form-control rounded'
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                        </Form.Group>

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
                            <Form.Control.Feedback type='invalid'>Eamil is required!</Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <div className='text-center'>
                            <Button
                                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                                type='submit'
                                className='btn btn-success w-50 rounded'
                            >
                                Sign-up
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/login'><Button className='btn btn-primary border w-50 rounded text-decoration-none'>Login</Button>{' '}</Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}
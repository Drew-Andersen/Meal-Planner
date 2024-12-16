// Imports
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createUser } from '../../utils/API';
import Auth from '../../utils/auth';

export default function Signup() {
    const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);  // Indicate loading state
        setShowAlert(false);  // Reset any previous error alerts

        try {
            // Send data to API to create a new user
            const response = await createUser(userFormData);

            // If the response is successful, it should contain the new user data or a success message
            const data = await response.json();

            if (!response.ok) {
                // If the response is not OK, throw an error
                throw new Error(data.message || 'Something went wrong during signup.');
            }

            // On success, navigate to the dashboard
            Auth.login(data.token, data.user); // You can log the user in automatically here if the API response includes a token
            navigate('/dashboard');
        } catch (error) {
            // Show an error alert if something goes wrong
            setShowAlert(true);
            console.error('Signup error:', error.message);
        } finally {
            setLoading(false);  // Stop loading state
        }
    };

    return (
        <>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div className="form-div">
                    <h2 className='text-center mb-4'>Sign-Up</h2>
                    <Form onSubmit={handleFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                            Something went wrong with your signup credentials!
                        </Alert>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor='name'>
                                <strong>Name</strong>
                            </Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Enter your name'
                                name='name'
                                onChange={handleInputChange}
                                value={userFormData.name}
                                className='form-control rounded'
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Name is required!</Form.Control.Feedback>
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
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className='form-group'>
                            <Form.Label htmlFor='password'>
                                <strong>Password</strong>
                            </Form.Label>
                            <div className="password-input-container">
                                <Form.Control
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder='Enter your password'
                                    onChange={handleInputChange}
                                    name='password'
                                    value={userFormData.password}
                                    className='form-control rounded'
                                    required
                                />
                                <div
                                    variant="link"
                                    onClick={() => setPasswordVisible(!passwordVisible)}
                                    className="password-toggle-btn"
                                >
                                    {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>

                        <div className='text-center'>
                            <Button
                                disabled={loading || !(userFormData.name && userFormData.email && userFormData.password)}
                                type='submit'
                                className='btn btn-success w-50 rounded'
                            >
                                {loading ? 'Signing Up...' : 'Sign-up'}
                            </Button>
                        </div>

                        <div className="text-center">
                            <p className="text-center mb-0 mt-3">Already have an account?</p>
                            <Link to='/login'>
                                <Button className='btn btn-primary border w-50 rounded text-decoration-none'>
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
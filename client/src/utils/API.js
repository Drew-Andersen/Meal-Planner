export const getMe = (token) => {
    // /api/users/me
    return fetch('http://localhost:3001/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },       
    });
};

export const createUser = async (userData) => {
    try {
        // /api/users
        const response = await fetch('http://localhost:3001/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        console.log('Response from server:', response);  

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Signup failed, please try again.');
        }

        
    } catch (err) {
        console.error('Error creating user:', err);
        throw err;  
    }
};

export const loginUser = async (userData) => {
    try {
        // /api/users/login
        const response = await fetch('http://localhost:3001/api/users/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response;
    } catch (err) {
        console.error('Login failed:', err);
        throw err;
    }
};

export const getFoods = async () => {
    // /api/foods
    const data = await fetch('http://localhost:3001/api/foods', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return data;
}
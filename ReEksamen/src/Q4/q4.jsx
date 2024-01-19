import React from 'react';

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                id: userId,
                name: 'John Doe',
                email: 'johndoe@example.com'
            };

            const success = true; // Change to false to simulate failure

            if (success) {
                resolve(userData);
            } else {
                reject('Failed to fetch user data');
            }
        }, 2000);
    });
}

const PromiseExample = () => {
    const handleSyncClick = () => {
        console.log('Sync button clicked');
    };

    const handleAsyncClick = () => {
        fetchUserData(1)
            .then(userData => {
                console.log('User Data Retrieved:', userData);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    };

    return (
        <> 
            <button onClick={handleSyncClick}>Sync</button>
            <button onClick={handleAsyncClick}>Async</button>
        </>
    );
};

const Q4 = () => {
    return (
        <>
            <br />
            <PromiseExample />
        </>
    );
};

export default Q4;

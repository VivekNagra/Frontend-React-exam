/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';


function PhotoFetcher() {
    const [photoUrl, setPhotoUrl] = useState(null);

    const fetchRandomPhoto = async () => {
       
        const randomId = Math.floor(Math.random() * 1000); 
        try {
            
            const response = await fetch(`https://picsum.photos/id/${randomId}/200/300`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            setPhotoUrl(response.url);
        } catch (error) {
            console.error('Error fetching photo: ', error);
        }
    };

    return (
        <div className="photo-fetcher">
            <button onClick={fetchRandomPhoto}>Fetch Random Photo</button>
            {photoUrl && <img src={photoUrl} alt="Random" />}
        </div>
    );
}




// error boundary forklaring 
const ErrorBoundary = ({ children }) => {
const [hasError, setHasError] = useState(false);

useEffect(() => {
const handleError = (error, info) => {
console.error('Error caught by error boundary:', error, info);
setHasError(true);

};

window.addEventListener('error', handleError);

return () => {
window.removeEventListener('error', handleError);

};
}, []);

if (hasError) {
return <h1>Something went wrong.</h1>;

}

return children;

};

//1.EroorBoundry komponenten er designet til at fange og håndtere fejl i sine child-komponenter.
//2. useState hooket bruges til at holde øje med, om der er sket en fejl. Det er her vi gemmer værdien i en form af en boolean.
//Opsætning med useEffect Hook: useEffect-hooket bruges til at opsætte og fjerne en global fejl event listener.
//3. useEffekt bruges som en listener til at lytte efter fejl. Hvis der opstår en fejl, sætter ErrorBoundary hasError til true.
//4. Når hasError er true, vises en en <h1> med teksten "Something went wrong".

//MyComponent i bunden demonstrer hvordan vi wrapper alle child components med ErrorBoundary componenten.
 // istedet for my component så exporterer jeg til app.jsx så jeg kan gøre brug af den rundt om mine routes.. 
 //export default ErrorBoundary; her er det så jeg ville kunne bruge den i app.jsx
 


const Q4 = () => {
    return (
        <>
            <br />
            
            <PhotoFetcher />
        </>
    );
};

export default Q4;

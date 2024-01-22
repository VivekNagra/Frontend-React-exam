const PackageJson = () => {
    return (
        <div>
            <h3>purposes and Differences between Package.json & Package-lock.json</h3>
            <p>Package.json: </p>
            <ul>
                <li>Beskriver du projektet (gemmer metadata)</li>
                <li>Hvilke versioner af dependencies du bruger</li> 
            </ul>
            <p>Package-lock.json: </p>
            <ul>
                <li>En slags log over hvilke versioner af dependencies du bruger</li>
                <li>Bruges til at sikre at alle udviklere bruger samme versioner af dependencies</li>
                <li>Gemmer/låser eksakte installationer af versioner af dependencies</li>
            </ul>
     </div>
    );
}




const Q3 = () => {
    return (
        <div>
            <PackageJson />    
        </div>
    )
}

export default Q3;
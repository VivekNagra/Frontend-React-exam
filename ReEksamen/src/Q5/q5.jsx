const SyncProgramming = () => {
    return (
        <div>
            <h1>Question 5</h1>
            <h3>What is synchronous & asynchronus programming?</h3>
            <p>Synchronous Programming: </p>
            <ul>
                <li>Sekvensiel udførelse af kode</li>
                <li>Progam udføres i rækkefølge</li>
                <li>Blocking manner</li>
                <li>dvs. En linje kode af gangen, næste linje kode læses først efter den forrige er udført</li>
            </ul>
            <p>Asynchronous Programming: </p>
            <ul>
                <li>Progam udføres ikke i rækkefølge</li>
                <li>Non-blocking manner</li>
                <li></li>
            </ul>
        </div>
    )
}




const Q5 = () => {
        return (
            <>
                <SyncProgramming />
            </>
        );
    }

export default Q5;
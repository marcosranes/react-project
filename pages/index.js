import { useState } from 'react';

function Home() {
    return (
        <div>
            <h3>Home: In Construction...</h3>
            <Contador/>        
        </div>
    )
}

function Contador() {
    let [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    
    return (
        <div> 
            <h3>Event: {contador}</h3> 
            <button onClick={adicionarContador}>Increment</button>
        </div>
    )
}

export default Home

import { useState } from 'react';

function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Contador/>        
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    
    return (
        <div>
            <div>{contador}</div>
            <button onclick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home
import { useState } from 'react';

function Home() {
    return (
        <div>
            <h3>Home: A single application...</h3>
            <JohnAndMary />        
        </div>
    )
}

function JohnAndMary() {
    const [john, setJohn] = useState(100);
    const [mary, setMary] = useState(60);

    const handleJohn = () => {
        setJohn(john + 10)
        setMary(mary - 10)
    }
    const handleMary = () => {
        setJohn(john - 10);
        setMary(mary + 10);
    }
    
    return (
        <header className='content'>
            <div> 
                <h1>Relation between Jonh and Mary</h1>
                <h3>John's Ca$h: {john}</h3> 
                <button 
                    onClick={handleJohn} 
                    style={{cursor: 'pointer'}}
                    disabled={!mary}
                >John borrows 10 from Mary</button>
            </div>
            <div> 
                <h3>Mary's Ca$h: {mary}</h3> 
                <button 
                    onClick={handleMary} 
                    style={{cursor: 'pointer'}}
                    disabled={!john}
                >Mary borrows 10 from John</button>
            </div>
        </header>
    )
}

export default Home

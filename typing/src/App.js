import React from 'react'

const App = () => {
    return (
        <div className="container">
            <div className="valid-keys">
                <span className="matched">WES</span>
                <span className="remainder">LEY</span>
            </div>
            <div className="typed-keys">qweqwqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqwee</div>
            <div className="completed-words">
                <ol>
                    <li>Cidade</li>
                    <li>Carro</li>
                    <li>Profissional</li>
                </ol>
            </div>
        </div>
    )
}

export default App;
import React from 'react';
import CardClima from './MyComponents/CardClima';
import bg from './assets/video/bg.mp4';
import bgImage from './assets/img/bgImage.jpg';

const App = () => {
    return (
        <>
            <video src={bg} autoPlay loop muted playsInline poster={bgImage}></video>
            <main className='card'>
                <CardClima />
            </main>
        </>
    );
};

export default App;
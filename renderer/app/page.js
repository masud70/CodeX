'use client';
import { useState, useEffect } from 'react';

const Home = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState(null);

    // useEffect(() => {
    //     const handleMessage = (event, message) => setMessage(message);
    //     window.electron.message.on(handleMessage);

    //     return () => {
    //         window.electron.message.off(handleMessage);
    //     };
    // }, []);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     window.electron.message.send(input);
    //     setMessage(null);
    // };

    return (
        <div className="w-screen h-screen flex items-center flex-col">
            <div className="flex h-full justify-center items-center font-bold text-3xl text-red-400">
                <div>Hello ElectronJS!</div>
            </div>
        </div>
    );
};

export default Home;

'use client';
import Link from 'next/link';
import { Logo } from '../../public/Logo';
import { Button, Input } from '@nextui-org/react';
const Home = () => {
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
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-1/5 min-w-[400px] p-4 rounded-md bg-slate-400 text-center overflow-hidden">
                <div className="font-extrabold text-4xl">Welcome To</div>
                <div className="w-full flex justify-center">
                    <Logo />
                </div>
                <div className="flex flex-col space-y-2">
                    <Input size="sm" type="text" label="Handle" />
                    <Input size="sm" type="password" label="Password" />
                    <Button
                        size="md"
                        color="secondary"
                        className="font-bold text-md"
                    >
                        <Link href={'/dashboard'}>Submit</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;

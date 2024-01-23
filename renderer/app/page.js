'use client';
import Link from 'next/link';
import { Logo } from '../../public/Logo';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
const Home = () => {
    const [handle, setHandle] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async () => {
        try {
            const result = await window.api.invoke('login', {
                handle: handle,
                name: 'Masud Mazumder',
                password: password,
            });

            if (result.status) toast.success(result.message);
            else throw new Error(result.message);
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-1/5 min-w-[400px] p-4 rounded-md bg-slate-400 text-center overflow-hidden">
                <div className="font-extrabold text-4xl">Welcome To</div>
                <div className="w-full flex justify-center">
                    <Logo />
                </div>
                <div className="flex flex-col space-y-2">
                    <Input
                        onChange={(h) => setHandle(h.target.value)}
                        value={handle}
                        size="sm"
                        type="text"
                        label="Handle"
                    />
                    <Input
                        onChange={(p) => setPassword(p.target.value)}
                        value={password}
                        size="sm"
                        type="password"
                        label="Password"
                    />
                    <Button
                        size="md"
                        color="secondary"
                        className="font-bold text-md"
                        onClick={handleLogin}
                    >
                        <Link href={'/'}>Submit</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;

'use client';
import Link from 'next/link';
import { Logo } from '../../../public/Logo';
import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LoginIcon from '../../components/icons/LoginIcon';
const SignUp = () => {
    const [handle, setHandle] = useState();
    const [institute, setInstitute] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCPassword] = useState();

    const handleSignUp = async () => {
        try {
            const result = await window.api.invoke('signup', {
                handle,
                name,
                institute,
                password,
            });

            if (result.status) {
                setHandle('');
                setName('');
                setPassword('');
                setCPassword('');
                setInstitute('');
                toast.success('Your account has been created! Please, login.');
            } else throw new Error(result.message);
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
    };

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <div className="w-1/5 min-w-[400px] relative p-4 rounded-md bg-slate-400 text-center overflow-hidden">
                <div className="absolute top-4 right-4">
                    <Button isIconOnly color="secondary">
                        <Link href={'/'}>
                            <LoginIcon />
                        </Link>
                    </Button>
                </div>
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
                        onChange={(h) => setName(h.target.value)}
                        value={name}
                        size="sm"
                        type="text"
                        label="Name"
                    />
                    <Input
                        onChange={(h) => setInstitute(h.target.value)}
                        value={institute}
                        size="sm"
                        type="text"
                        label="Institute"
                    />
                    <Input
                        onChange={(p) => setPassword(p.target.value)}
                        value={password}
                        size="sm"
                        type="password"
                        label="Password"
                    />
                    <Input
                        onChange={(p) => setCPassword(p.target.value)}
                        value={cpassword}
                        size="sm"
                        type="password"
                        label="Confirm Password"
                    />
                    <Button
                        size="md"
                        color="secondary"
                        className="font-bold text-md"
                        onClick={handleSignUp}
                    >
                        <Link href={'/'}>Sign Up</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Dropdown,
    DropdownTrigger,
    User,
    DropdownMenu,
    DropdownItem,
} from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/state/authSlice.js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CustomNavbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector((st) => st.auth);
    const router = useRouter();

    return (
        <Navbar
            classNames={{
                item: [
                    'flex',
                    'justify-between',
                    'relative',
                    'h-full',
                    'items-center',
                    "data-[active=true]:after:content-['']",
                    'data-[active=true]:after:absolute',
                    'data-[active=true]:after:bottom-0',
                    'data-[active=true]:after:left-0',
                    'data-[active=true]:after:right-0',
                    'data-[active=true]:after:h-[2px]',
                    'data-[active=true]:after:rounded-[2px]',
                    'data-[active=true]:after:bg-primary',
                ],
            }}
        >
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-xl text-inherit">CodeX</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/dashboard">
                        Contest
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/dashboard/problems" aria-current="page">
                        Problems
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/dashboard/ranklist">
                        Ranklist
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/dashboard/clarifications">
                        Clarifications
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Dropdown placement="bottom-start">
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: true,
                                    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
                                }}
                                className="transition-transform"
                                description={'@' + auth.user.handle}
                                name={'' + auth.user.name}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold">Signed in as</p>
                                <p className="font-bold">
                                    {'' + auth.user.name}
                                </p>
                            </DropdownItem>
                            <DropdownItem key="settings">
                                My Settings
                            </DropdownItem>
                            <DropdownItem key="team_settings">
                                <Link href="/dashboard/admin">
                                    Admin Dashboard
                                </Link>
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                color="danger"
                                onClick={() => {
                                    dispatch(logout());
                                    router.push('/');
                                }}
                            >
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
export default CustomNavbar;

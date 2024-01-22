import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';
import { AcmeLogo } from './AcmeLogo.jsx';

const CustomNavbar = () => {
    return (
        <Navbar
            classNames={{
                item: [
                    'flex',
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
                    <Button
                        as={Link}
                        color="primary"
                        href="/dashboard/admin"
                        variant="flat"
                    >
                        Admin
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};
export default CustomNavbar;

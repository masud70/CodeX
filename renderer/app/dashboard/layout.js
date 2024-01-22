'use client';
import CustomNavbar from '../../components/navbar/CustomNavbar';

export default function Layout({ children }) {
    return (
        <div className="w-screen min-h-screen flex flex-col">
            <CustomNavbar />
            <div className="px-20">{children}</div>
        </div>
    );
}

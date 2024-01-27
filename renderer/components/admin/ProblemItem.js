import Link from 'next/link';
import React from 'react';

const ProblemItem = () => {
    return (
        <Link href="/dashboard/admin/editProblem">
            <div className="w-full rounded-lg overflow-hidden border-3 mb-0 flex">
                <div className="w-2/12 bg-[#0a0320] text-white py-1 font-bold items-center justify-center flex text-3xl">
                    A
                </div>
                <div className="w-10/12 flex flex-col text-white bg-slate-800 py-1 text-left px-2">
                    <div className="text-lg">Problem Title Goes Here</div>
                    <div className="flex">
                        <div className="w-1/2 text-sm text-gray-500">
                            Time: 1s
                        </div>
                        <div className="w-1/2 text-sm text-gray-500">
                            Memory: 512 MB
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProblemItem;

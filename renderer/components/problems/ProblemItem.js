import React from 'react';

const ProblemItem = () => {
    return (
        <div className="w-full rounded-md border-3 mb-2 flex">
            <div className="w-1/12 bg-[#0a0320] text-white py-1 font-bold items-center justify-center flex text-3xl">
                A
            </div>
            <div className="w-9/12 flex flex-col text-white py-1">
                <div className="text-lg">Problem Title Goes Here</div>
                <div className="flex">
                    <div className="w-1/2 text-sm text-gray-500">Time: 1s</div>
                    <div className="w-1/2 text-sm text-gray-500">
                        Memory: 512 MB
                    </div>
                </div>
            </div>
            <div className="w-2/12 py-1 text-white items-center justify-center text-center bg-slate-700">
                <div>Tried: 12</div>
                <div>Solved: 8</div>
            </div>
        </div>
    );
};

export default ProblemItem;

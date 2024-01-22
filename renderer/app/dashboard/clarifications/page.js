import React from 'react';
import ClarificationItem from '../../../components/clarification/ClarificationItem';

const Clarification = () => {
    return (
        <div className="w-full flex flex-col items-center bg-slate-400 mt-1 pt-2 rounded">
            <div className="w-11/12 flex flex-col items-center justify-center">
                <ClarificationItem />
                <ClarificationItem />
                <ClarificationItem />
                <ClarificationItem />
            </div>
        </div>
    );
};

export default Clarification;

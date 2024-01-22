import { Button } from '@nextui-org/react';
import React from 'react';

const ContestItem = () => {
    return (
        <div className="w-full bg-[#15092e] text-white border-3 mb-2 px-2 divide-y-1 rounded overflow-hidden">
            <div className="">
                <div className="font-bold text-xl lg:text-2xl">
                    Intra Department Programming Contest - 2024
                </div>
                <div>Dept. of CSE, CU</div>
            </div>
            <div className="flex divide-x-1">
                <div className="w-1/2 p-1">
                    <div>Date: 22/02/2024</div>
                    <div>Time: 10:00 AM</div>
                    <div>Duration: 5 hours</div>
                    <div>Problems: 08</div>
                </div>
                <div className="w-1/2 px-2 py-1 flex flex-col justify-between">
                    <div>Total Teams: 25</div>
                    <div>Remaining: 1h 45m 56s</div>
                    {/* <div>
                        Upcomming{'  '}
                        <Button color="success" size="sm">
                            Register
                        </Button>
                    </div> */}
                    <div>
                        Running{'  '}
                        <Button color="danger" size="sm">
                            Enter
                        </Button>
                    </div>
                    {/* <div>Ended</div> */}
                </div>
            </div>
        </div>
    );
};

export default ContestItem;

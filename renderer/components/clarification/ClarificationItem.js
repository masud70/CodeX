import React from 'react';

const ClarificationItem = () => {
    return (
        <div className="mb-2 rounded overflow-hidden divide-y-2 divide-gray-500">
            <div className="w-full px-2 bg-yellow-100">
                <div className="w-full flex flex-col divide-y-1 divide-neutral-500">
                    <div className="w-full px-2 py-1 text-2xl font-bold">
                        Problem A
                    </div>
                    <div className="w-full px-2 py-1">
                        What should be the maximum value of the team members? It
                        is not clear in the problem statement. Please, reply as
                        fast as possible.
                    </div>
                    <div className="w-full px-2 py-1 flex justify-between">
                        <div className="text-sm">By: VitaminC</div>
                        <div className="text-sm">When: 2 minutes ago</div>
                        <div className="text-sm">Status: Replied</div>
                    </div>
                </div>
            </div>
            <div className="w-full px-2 bg-yellow-50 divide-y-1">
                <div className="w-full px-2 flex flex-row space-x-2 items-center">
                    <div className="font-bold text-xl text-green-600">
                        Reply
                    </div>
                    <div className="text-sm">(1 minute ago)</div>
                </div>
                <div className="px-2 py-1">
                    Ad mollit esse culpa laboris officia veniam enim id nostrud
                    qui reprehenderit irure cillum ex. Elit Lorem quis sit sint
                    laboris ex sint labore sit. Aliquip et cillum magna ut dolor
                    officia voluptate anim aliquip.
                </div>
            </div>
        </div>
    );
};

export default ClarificationItem;

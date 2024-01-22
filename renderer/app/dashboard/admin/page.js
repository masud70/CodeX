import React from 'react';
import CustomAvatar from '../../../components/admin/CustomAvatar';
import { Button } from '@nextui-org/react';
import ContestItem from '../../../components/admin/ContestItem';
import ProblemItem from '../../../components/admin/ProblemItem';

const Admin = () => {
    return (
        <div className="w-full mt-1 rounded border bg-slate-500 px-2">
            <div className="w-full flex divide-x-1 p-2">
                <div className="w-2/5 flex flex-col text-center items-center">
                    <CustomAvatar
                        name="Masud"
                        src={
                            'https://nextui-docs-v2.vercel.app/images/album-cover.png'
                        }
                    />
                    <div className="font-bold text-xl">Md. Masud Mazumder</div>
                    <div>4th Year, CSE CU</div>
                </div>
                <div className="w-3/5 flex pl-4 space-y-2 flex-col items-center">
                    <div className="flex w-full text-center">
                        <div className="w-1/2">
                            <Button color="danger">Create Contest</Button>
                        </div>
                        <div className="w-1/2">
                            <Button color="success">Create Problem</Button>
                        </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded text-center">
                        <div className="w-full text-white font-bold text-lg">
                            Contest
                        </div>
                        <div className="w-full bg-slate-300 max-h-[400px] overflow-auto">
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                        </div>
                    </div>
                    <div className="w-full bg-slate-700 rounded text-center">
                        <div className="w-full text-white font-bold text-lg">
                            Problems
                        </div>
                        <div className="w-full bg-slate-300 max-h-[400px] overflow-auto">
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                            <ProblemItem />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    );
};

export default Admin;

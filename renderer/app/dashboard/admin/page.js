'use client';
import React from 'react';
import CustomAvatar from '../../../components/admin/CustomAvatar';
import ContestItem from '../../../components/admin/ContestItem';
import ProblemItem from '../../../components/admin/ProblemItem';
import { useSelector } from 'react-redux';
import CreateContestModal from '../../../components/admin/CreateContestModal';
import CreateProblemModal from '../../../components/admin/CreateProblemModal';

const Admin = () => {
    const auth = useSelector((st) => st.auth);
    return (
        <div className="my-1 space-y-2">
            <div className="w-full rounded border bg-slate-500 p-2">
                <div className="w-full flex flex-row items-center divide-x-2">
                    <div className="w-[200px] justify-center flex">
                        <CustomAvatar
                            name={auth.user.name}
                            src={
                                'https://nextui-docs-v2.vercel.app/images/album-cover.png'
                            }
                        />
                    </div>
                    <div className="px-2">
                        <div className="font-bold text-xl">
                            {' ' + auth.user.name}
                        </div>
                        <div>{' ' + auth.user.institute}</div>
                        <div className="text-sm text-slate-700">
                            {'@' + auth.user.handle}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row rounded border bg-slate-500 p-2 space-y-2 lg:space-y-0 lg:space-x-2">
                <div className="w-full lg:w-1/2 flex flex-col py-1">
                    <div className="w-full rounded overflow-hidden">
                        <div className="w-full flex justify-between items-center p-2 bg-slate-700">
                            <div className="font-bold text-2xl text-white">
                                Contests
                            </div>
                            <CreateContestModal />
                        </div>
                        <div className="px-2 bg-slate-600 pb-2 pt-1 max-h-[500px] overflow-auto space-y-2">
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                            <ContestItem />
                        </div>
                    </div>
                    <div className="w-full">
                        <div></div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col py-1">
                    <div className="w-full rounded overflow-hidden">
                        <div className="w-full flex justify-between items-center p-2 bg-slate-700">
                            <div className="font-bold text-2xl text-white">
                                Problems
                            </div>
                            <CreateProblemModal />
                        </div>
                        <div className="px-2 bg-slate-600 pb-2 pt-1 max-h-[500px] overflow-auto space-y-2">
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
                    <div className="w-full">
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;

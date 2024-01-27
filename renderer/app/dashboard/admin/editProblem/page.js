'use client';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Input,
    Select,
    SelectItem,
    Textarea,
} from '@nextui-org/react';
import { Upload } from 'keep-react';
import React, { useState } from 'react';
import { animals } from './data';

const EditContest = () => {
    const [title, setTitle] = useState();
    const [time, setTime] = useState(1000);
    const [memory, setMemory] = useState(512);
    const [description, setDescription] = useState();
    const [values, setValues] = useState(new Set([]));
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleSelectionChange = (e) => {
        setValues(new Set(e.target.value.split(',')));
    };

    return (
        <div className="my-1 space-y-2 flex justify-center">
            <div className="w-full lg:w-10/12 rounded-md border bg-slate-500 overflow-hidden text-center pb-1">
                <div className="bg-slate-800 p-2 text-white font-bold text-xl text-center">
                    Problem title goes here
                </div>
                <div className="px-2 py-1 grid gap-2">
                    <Card>
                        <CardHeader>Problem title</CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                value={title}
                                size="sm"
                                type="text"
                                // label="Contest title"
                                placeholder="Problem title"
                                onChange={(t) => setTitle(t.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Problem statement</CardHeader>
                        <Divider />
                        <CardBody>
                            <Textarea
                                // label="Problem statement"
                                placeholder="Enter your problem statement..."
                                value={description}
                                onChange={(d) => setDescription(d.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Input format</CardHeader>
                        <Divider />
                        <CardBody>
                            <Textarea
                                // label="Problem statement"
                                placeholder="Input format"
                                value={description}
                                onChange={(d) => setDescription(d.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Output format</CardHeader>
                        <Divider />
                        <CardBody>
                            <Textarea
                                // label="Problem statement"
                                placeholder="Output format"
                                value={description}
                                onChange={(d) => setDescription(d.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="p-2 pt-1 grid lg:grid-cols-3 grid-cols-2 gap-2">
                    <Card>
                        <CardHeader>Time limit (miliseconds)</CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                size="sm"
                                type="number"
                                placeholder="Time limit (miliseconds)"
                                value={time}
                                onChange={(d) => setTime(d.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Memory limit (MB)</CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                size="sm"
                                type="number"
                                placeholder="Memory limit (MB)"
                                value={memory}
                                onChange={(p) => setMemory(p.target.value)}
                            />
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <div className="px-2 pb-1 grid gap-2">
                    <Card>
                        <CardHeader>Test Case(s)</CardHeader>
                        <Divider />
                        <CardBody className="">
                            <Card>
                                <CardBody className="w-full grid grid-cols-2 gap-2">
                                    <div>
                                        Input:
                                        <Upload
                                            onFileChange={handleFileChange}
                                            file={fileName}
                                            horizontal={true}
                                            id="testCase"
                                        />
                                    </div>
                                    <div>
                                        Output:
                                        <Upload
                                            onFileChange={handleFileChange}
                                            file={fileName}
                                            horizontal={true}
                                            id="testCase"
                                        />
                                    </div>
                                </CardBody>
                                <CardFooter className="flex justify-end bg-slate-100 py-1">
                                    <Button
                                        size="sm"
                                        color="success"
                                        variant="flat"
                                    >
                                        Upload
                                    </Button>
                                </CardFooter>
                            </Card>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
                                <div className="w-full bg-slate-200 p-1 rounded-md flex justify-between">
                                    <span>Test case 1</span>
                                    <span className="w-[30px] h-[30px] text-lg bg-slate-300 text-slate-600 text-center rounded-full">
                                        X
                                    </span>
                                </div>
                                <div className="w-full bg-slate-200 p-1 rounded-md">
                                    Test case 2
                                </div>
                                <div className="w-full bg-slate-200 p-1 rounded-md">
                                    Test case 3
                                </div>
                            </div>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Sample(s)</CardHeader>
                        <Divider />
                        <CardBody>
                            <Select
                                label="Select problems"
                                selectionMode="multiple"
                                placeholder="Select problems"
                                selectedKeys={values}
                                className="w-full"
                                onChange={handleSelectionChange}
                            >
                                {animals.map((animal) => (
                                    <SelectItem
                                        key={animal.value}
                                        value={animal.value}
                                    >
                                        {animal.label}
                                    </SelectItem>
                                ))}
                            </Select>
                            <p className="text-small text-default-500">
                                Selected: {Array.from(values).join(', ')}
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <Button size='sm' color='success'>Update All</Button>
            </div>
        </div>
    );
};

export default EditContest;

'use client';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
    Divider,
    Input,
    Select,
    SelectItem,
    Textarea,
} from '@nextui-org/react';
import { DatePicker } from 'keep-react';
import React, { useState } from 'react';
import { animals } from './data';

const EditContest = () => {
    const [title, setTitle] = useState();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [isPublic, setIsPublic] = useState(true);
    const [password, setPassword] = useState();
    const [duration, setDuration] = useState();
    const [description, setDescription] = useState();
    const [values, setValues] = useState(new Set([]));

    const handleSelectionChange = (e) => {
        setValues(new Set(e.target.value.split(',')));
    };

    return (
        <div className="my-1 space-y-2">
            <div className="w-full rounded-md border bg-slate-500 overflow-hidden">
                <div className="bg-slate-800 p-2 text-white font-bold text-xl text-center">
                    Contest title goes here
                </div>
                <div className="px-2 py-1 grid gap-2">
                    <Card>
                        <CardHeader>Contest title</CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                value={title}
                                size="sm"
                                type="text"
                                label="Contest title"
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
                        <CardHeader>Description</CardHeader>
                        <Divider />
                        <CardBody>
                            <Textarea
                                label="Description"
                                placeholder="Enter your description..."
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
                        <CardHeader>Start Date</CardHeader>
                        <Divider />
                        <CardBody>
                            <DatePicker
                                singleDate={setDate}
                                placeholder="Select date"
                            >
                                <DatePicker.SingleDate />
                            </DatePicker>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Start Time</CardHeader>
                        <Divider />
                        <CardBody>
                            <DatePicker
                                time={setTime}
                                placeholder="Select time"
                            >
                                <DatePicker.Time />
                            </DatePicker>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-end bg-slate-200 py-1">
                            <Button size="sm" color="success" variant="flat">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>Duration</CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                size="sm"
                                type="number"
                                label="Duration"
                                value={duration}
                                onChange={(d) => setDuration(d.target.value)}
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
                        <CardHeader>
                            <div className="w-full px-1 flex space-x-1 rounded-md overflow-hidden">
                                <div>Is the contest public?</div>
                                <Checkbox
                                    defaultSelected={isPublic}
                                    onValueChange={setIsPublic}
                                ></Checkbox>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <Input
                                size="sm"
                                type="text"
                                isDisabled={isPublic}
                                label="Password"
                                value={password}
                                onChange={(p) => setPassword(p.target.value)}
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
                        <CardHeader>Problems</CardHeader>
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
            </div>
        </div>
    );
};

export default EditContest;

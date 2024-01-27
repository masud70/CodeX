import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Textarea,
    Checkbox,
} from '@nextui-org/react';
import { DatePicker } from 'keep-react';
import { toast } from 'react-toastify';
import { getCookie } from 'cookies-next';

export default function CreateContestModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [title, setTitle] = useState();
    const [duration, setDuration] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [isPublic, setIsPublic] = useState(true);
    const [password, setPassword] = useState();

    const onSubmit = async () => {
        try {
            const ds = date.toString().slice(0, 16) + time;
            const mds = ds.slice(0, -2) + ' ' + ds.slice(-2);
            const timestamp = new Date(mds).getTime();

            const data = {
                title: title,
                start: timestamp,
                duration: duration,
                isPublic: isPublic,
                password: password,
                description: description,
                token: getCookie('codex@token'),
            };

            console.log(data);

            const result = await window.api.invoke('createContest', data);
            console.log(result);

            if (result.status) {
                toast.success(result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <>
            <Button onPress={onOpen}>Create Contest</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                isDismissable={false}
                className={{
                    body: 'overflow-y-auto',
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-2xl">
                                Create Contest
                            </ModalHeader>
                            <ModalBody className="overflow-y-auto">
                                <Input
                                    value={title}
                                    size="sm"
                                    type="text"
                                    label="Contest title"
                                    onChange={(t) => setTitle(t.target.value)}
                                />
                                <DatePicker
                                    singleDate={setDate}
                                    placeholder="Select date"
                                >
                                    <DatePicker.SingleDate />
                                </DatePicker>
                                <DatePicker
                                    time={setTime}
                                    placeholder="Select time"
                                >
                                    <DatePicker.Time />
                                </DatePicker>
                                <Input
                                    size="sm"
                                    type="number"
                                    label="Duration"
                                    value={duration}
                                    onChange={(d) =>
                                        setDuration(d.target.value)
                                    }
                                />
                                <Textarea
                                    label="Description"
                                    placeholder="Enter your description..."
                                    value={description}
                                    onChange={(d) =>
                                        setDescription(d.target.value)
                                    }
                                />
                                <div className="w-full p-3 bg-slate-100 rounded-md overflow-hidden">
                                    <Checkbox
                                        defaultSelected={isPublic}
                                        onValueChange={setIsPublic}
                                    >
                                        Is the contest public?
                                    </Checkbox>
                                </div>
                                <Input
                                    size="sm"
                                    type="text"
                                    isDisabled={isPublic}
                                    label="Password"
                                    value={password}
                                    onChange={(p) =>
                                        setPassword(p.target.value)
                                    }
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="light"
                                    onPress={onClose}
                                >
                                    Cancel
                                </Button>
                                <Button color="secondary" onPress={onSubmit}>
                                    Create Now
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

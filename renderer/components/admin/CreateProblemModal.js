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
} from '@nextui-org/react';
import { toast } from 'react-toastify';
import { getCookie } from 'cookies-next';

export default function CreateProblemModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [title, setTitle] = useState();
    const [memory, setMemory] = useState(512);
    const [time, setTime] = useState(1000);

    const onSubmit = async () => {
        try {
            const data = {
                title: title,
                time: time,
                memory: memory,
                token: getCookie('codex@token'),
            };

            console.log(data);

            const result = await window.api.invoke('createProblem', data);
            console.log(result);

            if (result.status) {
                toast.success(result.message);
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        <>
            <Button onPress={onOpen}>Create New Problem</Button>
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
                                Create New Problem
                            </ModalHeader>
                            <ModalBody className="overflow-y-auto">
                                <Input
                                    value={title}
                                    size="sm"
                                    type="text"
                                    label="Problem title"
                                    onChange={(t) => setTitle(t.target.value)}
                                />
                                <Input
                                    value={time}
                                    size="sm"
                                    type="number"
                                    label="Time limit (miliseconds)"
                                    onChange={(t) => setTime(t.target.value)}
                                />
                                <Input
                                    value={memory}
                                    size="sm"
                                    type="number"
                                    label="Memory limit (MB)"
                                    onChange={(t) => setMemory(t.target.value)}
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

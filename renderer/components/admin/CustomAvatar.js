import React from 'react';
import { Image } from '@nextui-org/react';

const CustomAvatar = ({ src, name }) => {
    return (
        <div className="w-[120px] h-[120px] border-3 rounded-full overflow-hidden flex items-center justify-center">
            {src ? (
                <Image
                    isBlurred
                    width={120}
                    src={src}
                    alt={name}
                    classNames="m-5"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center font-bold text-5xl bg-orange-400">
                    {name?.charAt(0)}
                </div>
            )}
        </div>
    );
};

export default CustomAvatar;

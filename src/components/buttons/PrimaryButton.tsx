import React from 'react';

type Props = {
    title: string;
    className?: string;
    textColor?: string;
    callback: () => void;
};

const PrimaryButton: React.FC<Props> = ({
    title,
    className,
    textColor = 'white',
    callback,
}) => {
    return (
        <div
            className={`flex items-center justify-center bg-customBlueButton h-12 text-${textColor} py-3 px-5 rounded-lg border-customBlueButton border-1 text-base font-semibold text-center ${className}`}
            onClick={callback}
        >
            <span>{title}</span>
        </div>
    );
};

export default PrimaryButton;

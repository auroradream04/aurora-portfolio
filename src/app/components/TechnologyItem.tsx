import { cloneElement, type JSX } from "react";

interface TechnologyItemProps {
    technology: {
        name: string;
        icon: JSX.Element;
        description?: string;
    };
    className?: string;
}

export default function TechnologyItem({ technology, className }: TechnologyItemProps) {
    const IconWithClasses = cloneElement(technology.icon, {
        className: `w-1/3 h-1/3 ${
            technology.icon.props.className || ""
        }`,
    });

    return (
        <div
            className={`bg-white bg-opacity-[0.04] hover:bg-opacity-[0.08] transition-all duration-300 rounded-sm aspect-square flex justify-center items-center ${className}`}
            title={technology.name}
        >
            {IconWithClasses}
        </div>
    );
}

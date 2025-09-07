import { cloneElement, type JSX } from 'react';

interface MainTechnologyProps {
    technology: {
        name: string;
        icon: JSX.Element;
        description: string;
    };
}

export default function MainTechnology({ technology }: MainTechnologyProps) {
    // Clone the icon element and add additional classes
    const IconWithClasses = cloneElement(technology.icon, {
        className: `text-3xl transition-all duration-300 group-hover:scale-125 ${technology.icon.props.className || ''}`
    });

    return (
        <div className="group flex flex-col items-center gap-2 text-center" title={technology.name}>
            {IconWithClasses}
            <div>
                <h3 className="text-xs font-bold">{technology.name}</h3>
                <p className="text-[11px] text-slate-350 leading-normal">{technology.description}</p>
            </div>
        </div>
    );
}

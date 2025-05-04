type TProps = {
    company: string;
    position: string;
    duration: string;
    description: string;
};

export default function ExperienceCard({
    company,
    position,
    duration,
    description,
}: TProps) {
    return (
        <div className="w-full mb-8 lg:mb-12 lg:grid grid-cols-4">
            <p className="text-slate-400 text-[11px] lg:text-xs !mb-1 leading-none">{duration}</p>
            <div className="col-span-3">
                <h2 className="text-slate-100 text-sm font-bold">{company}</h2>
                <h3 className="text-pink-400 text-sm font-medium">{position}</h3>
                <p className="text-slate-350 text-xs mt-2 lg:text-sm lg:mt-4">{description}</p>
            </div>
        </div>
    );
}

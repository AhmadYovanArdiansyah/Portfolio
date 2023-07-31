import { usePathname } from "next/navigation";

interface LineStyles {
    [key: string]: {
        styles: string;
    }[];
}

const pathStyles: LineStyles = {
    '/': [
        { styles: 'bottom-0 left-[55%] scale-y-[180]' },
        { styles: 'bottom-0 left-[57%] scale-y-[250]' },
        { styles: 'top-0 left-[25%] scale-y-[80]' },
        { styles: 'top-0 left-[27%] scale-y-[140]' },
    ],
    '/project': [
        { styles: 'bottom-0 left-[55%] scale-y-0' },
        { styles: 'bottom-0 left-[57%] scale-y-0' },
        { styles: 'top-0 left-[25%] scale-y-0' },
        { styles: 'top-0 left-[27%] scale-y-0' },
    ],
    '/about': [
        { styles: 'bottom-0 left-[55%] scale-y-0' },
        { styles: 'bottom-0 left-[57%] scale-y-0' },
        { styles: 'top-0 left-[25%] scale-y-0' },
        { styles: 'top-0 left-[27%] scale-y-0' },
    ],
};

export default function Background() {
    const path = usePathname();
    const activeLines = pathStyles[path] || pathStyles['/']; // Fallback to default styles

    return (
        <div className="h-fit w-full">
            {activeLines.map((line, index) => (
                <div key={index} className={`absolute h-1 w-2 bg-[#7E00BA] transform rotate-45 transition-all duration-700 ease-in ${line.styles}`}></div>
            ))}
        </div>
    );
}
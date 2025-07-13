import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: Number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{authorName}</div>
                <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="text-slate-400 text-sm font-thin pt-4">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>
        </div>
    </Link>;
}

function Circle() {
    return <div className="h1 w-1 rounded-full bg-state-500"></div>
}

export function Avatar({ name }: { name: string }) {
    return (
        <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-xs text-gray-600 dark:text-gray-300">{name[0]}</span>
        </div>
    );
}

// Create a new file: src/components/Skeleton.tsx
export const BlogSkeleton = () => {
    return (
        <div className="p-4 border-b border-slate-200 pb-4 animate-pulse">
            {/* Author info skeleton */}
            <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                <div className="ml-2 w-24 h-4 bg-slate-200 rounded"></div>
                <div className="ml-2 w-2 h-2 bg-slate-200 rounded-full"></div>
                <div className="ml-2 w-16 h-4 bg-slate-200 rounded"></div>
            </div>

            {/* Title skeleton */}
            <div className="w-3/4 h-6 bg-slate-200 rounded mb-2"></div>

            {/* Content skeleton */}
            <div className="space-y-2 mb-4">
                <div className="w-full h-4 bg-slate-200 rounded"></div>
                <div className="w-full h-4 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-4 bg-slate-200 rounded"></div>
            </div>

            {/* Reading time skeleton */}
            <div className="w-16 h-3 bg-slate-200 rounded"></div>
        </div>
    );
};
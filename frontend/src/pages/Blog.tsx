import { useParams, Link } from "react-router-dom"
import { Appbar } from "../components/Appbar"
import { useBlog } from "../hooks"

type Blog = {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
};

export const Blog = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, blog } = useBlog({ id: Number(id) }) as { loading: boolean, blog: Blog | null };
    
    if (loading) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div className="max-w-4xl w-full">
                        <div className="text-center mt-8">
                            <h1 className="text-2xl font-bold text-gray-700">Blog not found</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-4xl w-full p-6">
                    <Link 
                        to="/blogs" 
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-6 transition-colors duration-200"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Blogs
                    </Link>
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className="text-gray-600 mb-6">
                        By {blog.authorName || "Unknown Author"} • {blog.publishedDate}
                    </div>
                    <div className="text-lg leading-relaxed whitespace-pre-wrap">
                        {blog.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
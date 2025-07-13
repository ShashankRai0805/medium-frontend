import { Appbar } from "../components/Appbar"
import { BlogCard, BlogSkeleton } from "../components/BlogCard"
import { useBlogs } from "../hooks"

type Blog = {
    id: number;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
};

export const Blogs = () => {
    const {loading, blogs} = useBlogs() as { loading: boolean, blogs: Blog[] };
    
    if(loading){
        return (
            <div>
                <Appbar />
                <div className="flex justify-center">
                    <div className="max-w-xl">
                        {Array(5).fill(0).map((_, index) => (
                            <BlogSkeleton key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">
                <div className="max-w-xl">
                    {blogs.map(blog => (
                        <BlogCard
                            id={blog.id}
                            key={blog.id}
                            authorName={blog.authorName || "Unknown Author"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={blog.publishedDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

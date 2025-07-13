import { Appbar } from "../components/Appbar"
import { BlogCard, BlogSkeleton } from "../components/BlogCard"
import { useBlogs } from "../hooks"

type Blog = {
    id: string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
};

export const Blog = () => {
    const {loading, blogs} = useBlogs() as { loading: boolean, blogs: Blog[] };
    if(loading){
        return <BlogSkeleton />;
    }
    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="max-w-xl">
                {blogs.map(blog => (
                    <BlogCard
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
}
import { cacheLife } from "next/cache";
import { getBlogs } from "../service/getBlogs";
import LikeButton from "../ui/LikeButton";

const BlogsPage = async () => {
    "use cache";
    cacheLife("hours");
    const blogs = await getBlogs()

    return (
        <div>
            {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                blogs.map((blog: any) => (
                    <div key={blog.id}>
                        <h2>{blog.title}</h2>
                    </div>
                ))}
            <LikeButton />
        </div>
    );
};

export default BlogsPage;
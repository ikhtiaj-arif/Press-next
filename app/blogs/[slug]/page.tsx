
const BlogSlugPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>
}) => {
    const { slug } = await params
   
    return (
        <div>
            BlogSlugPage: {slug}
        </div>
    );
};

export default BlogSlugPage;
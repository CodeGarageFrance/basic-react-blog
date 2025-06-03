import { Thumbnail } from "@/components/Thumbnail";
import { CategoryFilter } from "@/components/CategoryFilter";

export function BlogList({ blogs, categories, selectedCategory, onCategoryChange, onBlogClick }) {
    return <>
        <p style={{textAlign: 'center', color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textShadow: '0 0 5px rgba(0, 0, 0, 0.3)'}}>
            { blogs.length } articles
        </p>
        <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange} 
        />
        <div style={style.blogList}>
            {blogs.map(blog => (
                <Thumbnail blog={blog} key={blog.id} onClick={()=>onBlogClick(blog)} />
            ))}
        </div>
    </>
}

const style = {
    blogList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: 'auto',
        maxWidth: '800px',
        width: '100%',
        alignItems: 'center',
    }
}
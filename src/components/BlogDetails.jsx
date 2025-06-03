export function BlogDetails({ blog, onClose }) {
    return (
        <>
            <button className="btn" onClick={onClose} style={{ margin: '1rem', alignSelf: 'center' }}>
                Back to blog
            </button>
            <div style={style.container}>
                <h1 style={style.title}>{blog.title}</h1>
                <p style={style.date}>{blog.subtitle}</p>
                <img src={blog.image} alt={blog.title} style={style.image} />
                <div style={style.content}>
                    {blog.content}
                </div>
            </div>
        </>
    );
}
const style = {
    container: {
        maxWidth: '800px',
        margin: 'auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        color: 'black',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    date: {
        fontSize: '0.875rem',
        color: '#666',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    content: {
        fontSize: '1rem',
        lineHeight: '1.6',
    }
};
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Thumbnail({ blog, onClick }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={{...style.thumbnail.base, ...style.thumbnail[theme]}}>
            <span style={style.category}>{blog.category}</span>
            <img style={style.image} src={blog.image} alt={blog.title} />
            <div style={style.content}>
                <h2 style={style.title}>{blog.title}</h2>
                <p style={style.subtitle}>{blog.subtitle}</p>
                <p style={style.description}>{blog.description}</p>
                <div style={style.actions}>
                    <button className="btn" onClick={onClick}>Lire l'article</button>
                </div>
            </div>
        </div>
    );
}

const style = {
    thumbnail: {
        base: {
            position: 'relative',
            display: 'flex',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '12px',
            overflow: 'hidden',
        },
        light: {
            backgroundColor: 'white',
            color: 'black',
        },
        dark: {
            backgroundColor: '#444',
            color: 'white',
        }
    },
    category: {
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: '#e67e22',
        color: 'white',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontSize: '0.875rem',
        fontWeight: 'bold',
        zIndex: 1,
    },
    image: {
        width: '100%',
        flex: 1,
    },
    content: {
        padding: '1.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    description: {
        fontSize: '1rem',
        opacity: 0.5,
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '0.875rem',
        opacity: 0.8,
        marginBottom: '1rem',
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '1rem',
    }
}
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
    const { theme } = useContext(ThemeContext);
    return (
        <div style={style.container}>
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    style={{...style.button.base, ...style.button[theme], ...(selectedCategory === category ? style.button.selected : null)}}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

const style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem',
        justifyContent: 'center'
    },
    button: {
        base: {
            padding: '0.5rem 1rem',
            borderRadius: '10rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
        },
        light: {
            backgroundColor: 'white',
            color: 'black',
        },
        dark: {
            backgroundColor: '#444',
            color: 'white',
        },
        selected: {
            backgroundColor: '#3498db',
            color: 'white',
        },
    }
}
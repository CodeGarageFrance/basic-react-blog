
import Logo from '@/assets/img/logo.svg';
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export function Navbar() {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <nav style={{...style.navbar.base, ...style.navbar[theme]}}>
            <div style={style.brand}>
                <img src={Logo} alt="Logo" style={style.logo} />
                <span style={{...style.title.base, ...style.title[theme]}}>Le Blog</span>
            </div>
            <button style={{ marginRight: '1rem'}} class="btn">Write</button>
            { 
                theme === 'light' ?
                <button onClick={()=>setTheme('dark')}>☀️</button> : 
                <button onClick={()=>setTheme('light')}>🌑</button>
            }
        </nav>
    );
}

const style = {
    navbar: {
        base: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
        },
        light: {
            backgroundColor: 'white',
        },
        dark: {
            backgroundColor: '#333',
        }
    }, 
    title: {
        base: {
            fontSize: '24px',
            fontWeight: 'bold',
        },
        light: {
            color: 'black',
        },
        dark: {
            color: 'white',
        }
    },
    brand: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        textDecoration: 'none',
        color: 'black',
        gap: '0.5rem',
        fontSize: '18px',
        fontWeight: 'bold',
    }, 
    logo: {
        height: '30px',
    },
}
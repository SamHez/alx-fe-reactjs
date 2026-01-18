import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{
            backgroundColor: '#282c34',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{ color: '#61dafb', fontSize: '1.5rem', fontWeight: 'bold' }}>Company Logo</div>
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                margin: 0,
                padding: 0
            }}>
                <li style={{ margin: '0 1rem' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>About</Link>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <Link to="/services" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Services</Link>
                </li>
                <li style={{ margin: '0 1rem' }}>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

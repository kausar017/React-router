import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (

        <div>
            
            <nav>
                <Link className='link' to="/"><li>Home</li></Link>
                <Link className='link' to="/about"><li>About</li></Link>
                <Link className='link' to="/contract"><li>Contact</li></Link>
                <Link className='link' to="/service"><li>service</li></Link>
            </nav>
        </div>
    );
};

export default Header;
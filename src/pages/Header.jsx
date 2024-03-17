import { useLocation, Link } from 'react-router-dom';

export default function Header() {
    let location = useLocation();

    const getLinkClass = (path) => location.pathname.toLocaleLowerCase() === path.toLocaleLowerCase() ? 'underline font-bold' : '';

    return (
        <header className="flex justify-between text-white font-semibold p-4">
            <div>
                <p>Andreas Glashauser</p>
            </div>
            <nav className="space-x-5">
                <Link to="/" className={getLinkClass('/')}>Home</Link>
                <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
                <Link to="/newsletter" className={getLinkClass('/newsletter')}>Newsletter</Link>
            </nav>
        </header>
    );
}

import { useLocation } from 'react-router-dom';

export default function Header() {
    let location = useLocation();

    function getLinkClass(path) {
        return location.pathname === path ? 'underline font-bold' : '';
    }

    return (
        <header className="flex justify-between  text-white p-4">
            <div className="">
                <p>Andreas Glashauser</p>
            </div>
            <div className="space-x-5 border-10">
                <a href="/blog" className={getLinkClass('/blog')}>Blog</a>
                <a href="/projects" className={getLinkClass('/projects')}>Projects</a>
                <a href="/personal" className={getLinkClass('/personal')}>About me</a>
                <a href="/newsletter" className={getLinkClass('/newsletter')}>Newsletter</a>
            </div>
        </header>
    )
}

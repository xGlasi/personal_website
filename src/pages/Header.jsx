import { useLocation } from 'react-router-dom';

export default function Header() {
    let location = useLocation();

    function getLinkClass(path) {
        console.log(location.pathname.toLocaleLowerCase())
        console.log(path.toLocaleLowerCase())
        return location.pathname.toLocaleLowerCase() === path.toLocaleLowerCase() ? 'underline font-bold' : '';
    }

    return (
        <header className="flex justify-between  text-white font-semibold p-4">
            <div className="">
                <p>Andreas Glashauser</p>
            </div>
            <div className="space-x-5 border-10">
                <a href="/" className={getLinkClass('/')}>Home</a>
                <a href="/blog" className={getLinkClass('/blog/')}>Blog</a>
                <a href="/newsletter" className={getLinkClass('/newsletter')}>Newsletter</a>
            </div>
        </header>
    )
}

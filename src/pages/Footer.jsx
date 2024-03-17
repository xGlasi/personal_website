import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="text-white p-4">
            <nav class="flex space-x-2">
                <p>© 2024</p>
                <a href="https://github.com/xGlasi">GitHub</a>
                <a href="https://www.linkedin.com/in/andreas-glashauser-008551252/">LinkedIn</a>
                <a href="https://www.xing.com/profile/Andreas_Glashauser/">Xing</a>
                <a href="https://twitter.com/andigls">X</a>
                <a href="mailto:a.andreasglashauser@gmail.com">Mail</a>
                <Link to="/imprint" >Imprint</Link>
                <Link to="/dataprotection">Data protection</Link>
            </nav>
        </footer>
    )
}

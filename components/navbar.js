import Link from 'next/link';

const Navbar = () => (
    <nav id="main_navbar">
        <ul className="test">
            <li><Link href="/"><a>About Me</a></Link></li>
            <li><Link href="/projects"><a>Projects</a></Link></li>
            <li><Link href="/skills"><a>Skills</a></Link></li>
        </ul>
    </nav>
);

export default Navbar;
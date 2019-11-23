import Link from 'next/link';
import StickyTitle from '../components/stickyTitle';

const Navbar = () => (
    <div className="stickyNav">
        <nav>
            <ul>
                <li><Link href="/"><a className="active">About Me</a></Link></li>
                <li><Link href="/skills"><a>Skills</a></Link></li>
                <li><Link href="/projects"><a>Projects</a></Link></li>
            </ul>
        </nav>
        <StickyTitle/>
        
        <style jsx>{`
                .stickyNav {
                    position: fixed;
                    z-index: 99;
                    width: 100%;
                    border-radius: 5px 0 0 0;
                }

                nav { 
                    background-color: #cce6ff;
                    background-color: #5b5d5c;
                    position: sticky;
                    top: 0;
                    z-index: 10;
                }

                nav ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }

                nav ul li {
                    float: right;
                    border-radius: 7px 7px 0px 0px;
                    margin-left: 2px;
                    width: 105px;
                }

                nav ul li a {
                    display: block;
                    text-align: center;
                    padding: 10px 12px;
                    text-decoration: none;
                    border-radius: 5px 5px 0px 0px;
                    margin-top: 4px;
                    color: inherit; 
                    background-color: #f1d592;
                }

                nav ul li a:hover {
                    margin-top: 0;
                    padding-bottom: 14px;
                    color: inherit;
                }

                nav ul li a.active {
                    background-color: #f3dca3;
                }
            `}
            </style>
    </div>
);

export default Navbar;
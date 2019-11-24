import Link from '../components/link';
import StickyTitle from '../components/stickyTitle';

const Navbar = () => (
    <div className="stickyNav">
        <nav>
            <ul>
                <li><Link activeClassName="active" href="/"><a>About Me</a></Link></li>
                <li><Link activeClassName="active" href="/skills"><a>Skills</a></Link></li>
                {/* <li><Link activeClassName="active" href="/projects"><a>Projects</a></Link></li> */}
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
                    background-color: #fd8469;
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
                    transition: margin, 0.2s;
                    margin-top: 4px;
                    color: inherit; 
                    background-color: #f1d592;
                }

                nav ul li a:hover {
                    transition: margin, 0.2s;
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
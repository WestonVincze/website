import Layout from '../components/layout';

const Skills = () => (
    <div>
        <Layout>
            <section className="content">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="paper">
                            <h1 className="written text-center">my mission statement.</h1>
                            <p>
                                To obtain a full-time or contract position where my specialization of front-end development will
                                turn visions into reality. 
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center">qualifications.</h2>
                            </div>
                        </div>
                        <div className="paper paper-even">
                            <h1 className="written">profile highlights.</h1>
                            <ul>
                                <li>2+ years experience as a junior web developer</li>
                                <li>Easily adaptable to changes in assignments with a willingness to learn new skills</li>
                                <li>Reliable team member who works well independently with little or no supervision</li>
                                <li>Able to work well under pressure in fast-paced environments</li>
                                <li>Detail-orientated with solid organizational and time management skills</li>
                                <li>Creative and passionate about the design and implementation of new ideas</li>
                                <li>3.7 GPA (out of 4.0)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="text-center">technical skills.</h2>
                            </div>
                        </div>
                        <div className="row paper">
                            <div className="col-6">
                                <h1 className="written">languages.</h1>
                                <p>
                                    C#, ASP.NET, Python, HTML, CSS, SCSS, PHP, JavaScript
                                </p>
                            </div>
                            <div className="col-6">
                                <h1 className="written">frameworks.</h1>
                                <p>
                                    React, Vue, Node, Isotope, JQuery, Bootstrap
                                </p>
                            </div>
                        </div>
                        <div className="paper paper-even row">
                            <div className="col-6">
                                <h1 className="written">database.</h1>
                                <p>
                                    Cosmos DB, SQL (MySql Sqlite)
                                </p>
                            </div>
                            <div className="col-6">
                                <h1 className="written">version control.</h1>
                                <p>
                                    git, github, sourcetree
                                </p>
                            </div>
                        </div>
                        <div className="paper row">
                            <div className="col-6">
                                <h1 className="written">planning.</h1>
                                <p>
                                    Jira, Confluence, Trello
                                </p>
                            </div>
                            <div className="col-6">
                                <h1 className="written">software.</h1>
                                <p>
                                    Visual Studio (Code), Vi(m), Adobe Suite (Illustrator, Photoshop)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">education.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="paper">
                            <h1 className="written">computer programming and analysis diploma.</h1>
                            <p>
                                <span className="font-weight-bold">Seneca College :</span> September 2015 – May 2018
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center">experience.</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="paper">
                            <h1 className="written">junior web developer.</h1>
                            <span className="font-weight-bold">LBC IT Solutions Inc, Toronto</span> <br></br>
                            <span className="font-italic">July 2018 – November 2019</span> <br></br>
                            <ul>
                                <li>Developed client websites (full stack) on my own and with a team using various technologies (primarily ASP.NET Core, Vue.js, React.js and WordPress)</li>
                                <li>Designed, developed and launched client website SierraManagementGroup.com using WordPress and custom tailored an isotope.js theme to meet client needs</li>
                                <li>Maintained and redesigned websites for various clients; implemented changes using a diverse number of technologies and website builders</li>
                                <li>Worked directly with clients to organize and manage tasks through project management services like Trello</li>
                                <li>Followed best practises for source control and documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="paper paper-even">
                            <h1 className="written">software engineer.</h1>
                            <span className="font-weight-bold">PWC Technologies, Scarborough</span> <br></br>
                            <span className="font-italic">January 2017 – July 2017</span> <br></br>
                            <ul>
                                <li>Completed weekly sprints and attended team meetings at Scotiabank on an agile oriented team for the Courier Bag project</li>
                                <li>Contributed to the design and development of the web app LLENA (a nutrition app) and developed a prototype (full stack) using HTML5, JS, JQuery, PHP, CSS and MySQL</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
        <style jsx>{`
            .fa-square {
                color: white;
            }
        `}</style>
    </div>
);

export default Skills;
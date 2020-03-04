import Layout from '../components/layout';

const Projects = () => (

    <div>
        <Layout>
            <section className="content">
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <div className="paper">
                            <h1 className="written text-center">my work.</h1>
                            <p>
                                Below are some of the projects that I've either fully developed or developed as part of a small team. 
                                This list only includes only the public, live websites.
                            </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                {/* DogDojo */}
                <div className="row dogdojo align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="description">
                            <h4><a href="https://dogdojo-dev-as.azurewebsites.net/" target="_blank">DogDojo</a></h4>
                            <h5>Personal Project</h5>
                            <br></br>
                            <p>
                                I designed and built a mock dog store web application using ASP.net core MVC, C#, Bootstrap, and SQL.
                                Source code available on my GitHub, where updates are automated through a DevOps pineline configuration with Azure DevOps.
                                I designed and animated the logo, created the layout, and developed the application as a learning project.
                                <br/><br/>
                                Using the MVC methodology this mock store allows the creation of users, management of user accounts, a virtual checkout system, and
                                form and field validation. Using an SQL database and Entity Framework Core this application stores and manages user data.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 no-padding order-1 order-lg-2">
                        <img src="assets/images/dogdojo.png" alt="DogDojo Screenshot" className="img-fluid"/>
                    </div>
                </div>
                {/* Enroute */}
                <div className="row enroute align-items-center">
                    <div className="col-lg-6 no-padding">
                        <img className="img-fluid" src="assets/images/enroute.png"></img>
                    </div>
                    <div className="col-lg-6">
                        <div className="description">
                            <h4><a href="https://enroute.aircanada.com/" target="_blank">Air Canada Enroute</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I worked as part of a team to develop the enroute air canada website using REACT, Bootstrap and Contentful.
                                The pages and layouts were created as per the design requirements which were explicitly defined through images.<br></br><br></br>
                                Trello was used for task management and communication with the client. Articles are pulled from contentful and dynamically
                                displayed through frontend REACT components.<br></br><br></br>
                                Tasks were delegated to team members in order to complete them quickly and effectively. I worked as a frontend developer to
                                ensure design requirements were met on various screen sizes. I worked with the client to deliver a product that was as close to
                                their initial design as possible.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Sierra Management Group */}
                <div className="row smg align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="description">
                            <h4><a href="https://sierramanagementgroup.com/" target="_blank">Sierra Management Group</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I fully developed this website using WordPress and a custom-tailored theme which used isotope.js to layout elements based 
                                on design concepts presented by the client. I customized the existing theme using the industry standard child-theme method 
                                in order to satisfy client requirements. <br></br><br></br>
                                Through this customization I:
                            </p>
                                <ul>
                                    <li>altered the layout options from 3 to 4</li>
                                    <li>modified the dynamic HTML of existing components</li>
                                    <li>created components for new use cases</li>
                                    <li>changed the JQuery animations</li>
                                </ul>
                            <p>
                                I worked with the client through Trello in order to manage tasks, receive feedback and discuss design options. When the site
                                was completed I created documentation which demonstrated the steps to add or alter the content and modify the layout of the website.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 no-padding order-1 order-lg-2">
                        <img className="img-fluid" src="assets/images/smg.png"></img>
                    </div>
                </div>
                {/* Lincoln Urgent Care */}
                <div className="row luc align-items-center">
                    <div className="col-lg-6 no-padding">
                        <img className="img-fluid" src="assets/images/luc.png"></img>
                    </div> 
                    <div className="col-lg-6">
                        <div className="description">
                            <h4><a href="https://lincolnurgentcare.com/" target="_blank">Lincoln Urgent Care</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I developed Lincoln Urgent Care website using modified templates for similar websites developed by LBC IT Solutions Inc. 
                                The templates were built using twig (PHP based template tool), SCSS and node. Using npm, the project was rendered into static HTML and
                                deployed. I modified and improved the templates and some of the modifications were introduced to the sister websites. Styles were also
                                customized to suit the branding of Lincoln Urgent Care.
                            </p>
                            <p>
                                I maintained updates for Lincoln Urgent Care and sister websites through the client using Trello. Tasks were completed in a development server and
                                approved by the client before applying the changes to live sites.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Phasenyne */}
                <div className="row p9 align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="description">
                            <h4><a href="https://phasenyne.com/" target="_blank">PhaseNyne</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I worked as part of a team to develop features for the PhaseNyne website using WordPress. I assisted in the development of the initial website
                                and after it was completed I developed the Irish version and maintained updates.
                            </p>
                            <p>
                                Once launched, I assisted the PhaseNyne team with a demonstration about how to implement smaller changes and updates. I handled many of the 
                                larger updates like new pages and style overhauls along with other team members. Communication was maintained with the client through Trello.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 no-padding order-1 order-lg-2">
                        <img className="img-fluid" src="assets/images/p9.png"></img>
                    </div> 
                </div>
                {/* Penticton Foundry */}
                <div className="row pf align-items-center">
                    <div className="col-lg-6 no-padding">
                        <img className="img-fluid" src="assets/images/pf.png"></img>
                    </div> 
                    <div className="col-lg-6">
                        <div className="description">
                            <h4><a href="https://www.pentictonfoundry.com/" target="_blank">Penticton Foundry</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I recreated Penticton Foundry's old website, which was made with a depreciated website builder, using WordPress. I also implemented additional
                                features and styles - including a more responsive design. 
                            </p>
                        </div>
                    </div>
                </div>
                {/* Brain Project */}
                <div className="row brain align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="description">
                            <h4><a href="http://www.brainproject.ca/" target="_blank">The Brain Project</a></h4>
                            <h5>LBC IT Solutions Inc.</h5>
                            <br></br>
                            <p>
                                I updated the site to include the 2018 and 2019 artists and projects. I also made other small updates, like adding new banners and changing
                                the content and layout of some existing pages. This site was built with WordPress and a custom theme which utilized loops to dynamically display
                                content once added to WordPress. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 no-padding order-1 order-lg-2">
                        <img className="img-fluid" src="assets/images/brain.png"></img>
                    </div> 
                </div>
            </section>
        </Layout>
        <style jsx>{`
            .enroute {
                background-color: #74a4c7;
                color: #fff;
            }

            .smg {
                background-color: #242423;
                color: #fff;
            }

            .luc {
                background-color: #f6fbff;
            }

            .brain, .pf, .p9, .dogdojo {
                background-color: #fff;
            }

            .description {
                padding: 20px;
            }

            .no-padding {
                padding: 0;
            }

            a {
                text-decoration: none;
                color: inherit;
            }

            a:hover {
                border-bottom: 1.5px solid;
            }

            .img-fluid {
                box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
            }

            @media screen and (max-width: 520px) {
                h3 {
                    font-size: 1.3em;
                }
                h4, h5 {
                    font-size: 1em;
                }
            }
        `}</style>
    </div>
);

export default Projects;
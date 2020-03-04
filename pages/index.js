import Layout from '../components/layout';

const Index = () => (
    <Layout>
        <section className="content">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="title">a web developer.</h2>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-sm-4">
                    <img className="photo" src="./assets/images/portrait-cutout.jpg" width="100%"></img>
                </div>
                <div className="col-sm-8">
                    <div className="row">
                        <div className="offset-md-1 col-md-11">
                            <div className="paper">
                                <h1 className="written text-center">hello there.</h1>
                                <p>
                                    I'm a Toronto based developer with a passion for web development and design. 
                                    I do freelance contracts, but I'm also available for full-time hire. 
                                    I have 2 years of experience in the field and I'm familiar with a plethora of modern technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <h2 className="subtitle">what I can do for you.</h2>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-9">
                    <div className="paper paper-even">
                        <h1 className="written text-center">visualize.</h1>
                        <p>
                            Your vision becomes your reality as I work with you to create the look and feel
                            you desire. Your website is an extension of your brand and, as a perfectionist,
                            I will ensure your website is exactly as you desire.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <img className="circle-graphic" src="assets/images/eye.png"></img>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-3 order-md-1 order-2 text-center">
                    <img className="circle-graphic" src="assets/images/design.png"></img>
                </div>
                <div className="col-md-9 order-md-2 order-1">
                    <div className="paper">
                        <h1 className="written text-center">design.</h1>
                        <p>
                            I will work from whatever step you're on; whether you have a precise design, a sketch, or just an idea. 
                            I am there every step of the way to make sure the design is right for you. 
                        </p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-9">
                    <div className="paper paper-even">
                        <h1 className="written text-center">adapt.</h1>
                        <p>
                            Responsiveness is a requirement and I ensure your website is stunning and consistent regardless of the 
                            device and browser on which it is presented.
                        </p>
                    </div>
                </div>
                <div className="col-md-3 text-center">
                    <img className="circle-graphic" src="assets/images/responsive.png"></img>
                </div>
            </div>

            <style jsx>{`
                .circle-graphic {
                    padding: 20px;
                }

                .photo {
                    border: 5px solid white;
                    border-radius: 3px;
                    margin-bottom: 30px;
                }

                .paper {
                    min-height: 190px;
                }
            `}</style>
        </section>
    </Layout>
);

export default Index;
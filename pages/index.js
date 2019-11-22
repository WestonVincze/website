import Layout from '../components/Layout';

const Index = () => (
    <Layout>
        <section className="content">
			<div className="row paper-row">
				<img className="paperclip paperclip-right" src="/assets/images/usedClipRight.png"></img>
				<div className="offset-md-4 col-md-8">
					<div className="paper">
                        <h1 className="written text-center">hello there.</h1>
						<p>
							I'm a Toronto based developer with a passion for web development and design. I work freelance
							but I am available for long-term employment as well. I create and modify websites using a multitude 
							of modern technologies.
						</p>
					</div>
				</div>
			</div>

            <div className="row">
                <div className="col-12 text-center">
                    <h2>what I do for you.</h2>
                </div>
            </div>

			<div className="row">
				<div className="offset-sm-2 col-sm-8">
					<div className="paper paper-even">
                        <h1 className="written text-center">design.</h1>
						<p>
							Your vision becomes your reality as I work with you to create the look and feel
							you desire. Your website is and extension of your brand and, as a perfectionist,
							I will ensure your website is exactly as you want it.
						</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="offset-sm-2 col-sm-8">
					<div className="paper">
                        <h1 className="written text-center">adapt.</h1>
						<p>
							Your website should adapt to any device your user requires. Thus, I ensure your website
							responds to different screen sizes accordingly. Your website cannot look exactly the same,
							but the theme will not change accross different devices.
						</p>
					</div>
				</div>
			</div>

			<div className="row">
				<div className="offset-sm-2 col-sm-8">
					<div className="paper paper-even">
							<h1 className="written text-center">create.</h1>
						<p>
							Your website should feel special and unique. That's why I offer custom designs, like illustrations,
							to keep your website fresh and stylish. I have a plethora of styles to keep things fresh without 
							compromising the integrity of your theme.
                        </p>
					</div>
				</div>
			</div>

			<div className="row">
                <div className="col-12 text-center">
                    <h2>let's get in touch.</h2>
                </div>
            </div>

            <style jsx>{`

            .paperclip {
                position: absolute;
            }

            .paperclip-right {
                right: 10px;
                top: 30px;
                z-index: 30;
            }

            .paper-row { 
                position: relative;
            }

            .row {
                padding: 1% 0.5%;
            }

            .paper { 
                background: url("/assets/images/linedpaper.png") repeat;
                line-height: 1.85em;
                padding: 2%;
                clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
            }

            .paper-even {
                clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
            }
            `}</style>
        </section>
    </Layout>
);

export default Index;
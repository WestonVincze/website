const Footer = () => (
    <div className="footer">
        <div className="row ">
            <div className="col-12 text-center">
                <h2 className="subtitle">let's get in touch.</h2>
            </div>
        </div>

        <div className="row">
            <div className="offset-lg-2 col-lg-8 col-12">
                <div className="row align-items-center">
                    <div className="text-lg-center text-right col-lg-3 col-6 order-lg-1 order-1">
                        <a href="tel:226-218-2481" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-phone fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-right col-lg-3 col-6 order-lg-2 order-3">
                        <a href="mailto:westonvincze@gmail.com" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-envelope fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-right col-lg-3 col-6 order-lg-3 order-5">
                        <a href="https://www.linkedin.com/in/weston-vincze/" target="_blank" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-linkedin fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-right col-lg-3 col-6 order-lg-4 order-7">
                        <a href="https://github.com/WestonVincze/" target="_blank" className="fa-stack fa-2x">
                            <i className="fa fa-circle fa-stack-2x icon-background"></i>
                            <i className="fa fa-github fa-stack-1x"></i>
                        </a>
                    </div>
                    <div className="text-lg-center text-left col-lg-3 col-6 order-lg-5 order-2">
                        <a href="tel:226-218-2481" className="text-link">call me.</a>
                    </div>
                    <div className="text-lg-center text-left col-lg-3 col-6 order-lg-6 order-4">
                        <a href="mailto:westonvincze@gmail.com" className="text-link">email me.</a>
                    </div>
                    <div className="text-lg-center text-left col-lg-3 col-6 order-lg-7 order-6">
                        <a href="https://www.linkedin.com/in/weston-vincze/" className="text-link" target="_blank">linkedIn.</a>
                    </div>
                    <div className="text-lg-center text-left col-lg-3 col-6 order-lg-8 order-8">
                        <a href="https://github.com/WestonVincze/" className="text-link" target="_blank">gitHub.</a>
                    </div>
                </div>
            </div>
        </div>
        
        <style jsx>{`
            .footer {
                padding-bottom: 30px;
            }
            .fa-stack-1x {
                transition: color 0.5s ease;
                color: #fff;
            }
            .fa-circle {
                transition: color 0.5s ease;
                color: #fd8469;
            }
            .fa-stack:hover .fa-stack-1x {
                transition: color 0.5s ease;
                color: #fd8469;
            }
            .fa-stack:hover .fa-circle{
                transition: color 0.5s ease;
                color: transparent;
            }
            .text-link {
                text-decoration: none;
                color: inherit;
            }
            .text-link:hover {
                border-bottom: 1.5px solid #fd8469;
            }
        `}</style>
    </div>
);

export default Footer;
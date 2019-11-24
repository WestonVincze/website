const stickyTitle = () => (
    <div className="title-container">
        <div className="row align-items-center">
            <div className="col-sm-3 d-none d-sm-block">
                <hr></hr>
            </div>
            <div className="col-sm-6 text-center">
                <h1 className="written">Weston Vincze.</h1>
            </div>
            <div className="col-sm-3 d-none d-sm-block">
                <hr className="right-hr"></hr>
            </div>
        </div>
        <div className="row">
            <div className="col-12 text-center">
                <h2>web developer</h2>
            </div>
        </div>

        <style jsx>{`
            .title-container {
                height: 210px;    
                background-image: linear-gradient(#f3dca3 95%, rgba(0,0,0,0));
                border-radius: 5px 0px 0px 0px;
            }

            h1 {
                font-family: 'Great Vibes', cursive;
                font-family: 'Zeyada', cursive;
                font-size: 5.8em;
                line-height: 1.5em;
                margin: 0;
            }

            h2 {
                margin: 5px 0;
            }

            hr {
                border: 0;
                height: 1px;
                background-image: linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
            }

            hr.right-hr {
                background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
            }

            @media screen and (max-width: 1080px) {
                .title-container {
                    height: 175px
                }
                
                h1 {
                    font-size: 4em;
                }
            }

            @media screen and (max-width: 768px) {
                .title-container {
                    height: 125px
                }

                h1 {
                    font-size: 3.1em;
                }
            }
        `}</style>
    </div>
);

export default stickyTitle;
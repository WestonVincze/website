import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = (props) => (
    <div className="main">
        <Head>
            <title>Weston Vincze</title>
            
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Great+Vibes|Zeyada" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
        </Head>
        <Navbar/>
        <div className="folder">
            {props.children}
            <Footer/>
        </div>
        
        <style jsx global>{`
            @font-face {
                font-family: 'typewriter';
                src: url('assets/fonts/fzm-Old.Typewriter.ttf') format('truetype');
            }

            body {
                background-color: #cce6ff;
                background-color: #fd8469;
                font-family: 'Roboto Slab', serif;
                font-family: 'typewriter', sans-serif;
            }

            .folder {
                padding-top: 275px;
                background-color: #f3dca3;
                border-radius: 0 0 5px 5px;
                margin-bottom: 4px;
            }

            .content {
                padding: 0 15px;
            }
            
            .row {
                margin: 0;
            }

            .paper { 
                background: url("assets/images/linedpaper.png") repeat;
                line-height: 1.62em;
                padding: 20px;
                padding-top: 30px;
                clip-path: polygon(0 2%, 100% 0, 100% 100%, 0 98%);
            }

            .paper-even {
                clip-path: polygon(0 0, 100% 2%, 100% 98%, 0 100%);
            }
            
            .written {
                color: #00407e;
                font-family: 'Zeyada', cursive;
            }

            h2.title {
                margin: 0 0 30px 0;
            }
            h2.subtitle {
                margin: 30px 0;
            }

            @media screen and (max-width: 1080px) {
                .folder {
                    padding-top: 160px;
                }
            }
            @media screen and (max-width: 768px) {
                .folder {
                    padding-top: 120px
                }
                h2 {
                    font-size: 1.5em;
                }
            }
        `}
        </style>
    </div>
);

export default Layout;
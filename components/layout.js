import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Layout = (props) => (
    <div className="main">
        <Head>
            <title>Weston Vincze</title>
            
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Great+Vibes|Zeyada" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </Head>
        <Navbar/>
        <div className="folder">
            {props.children}
            <Footer/>
        </div>
        
        <style jsx global>{`
            @font-face {
                font-family: 'typewriter';
                src: url('/assets/fonts/fzm-Old.Typewriter.ttf') format('truetype');
            }

            body {
                background-color: #cce6ff;
                background-color: #5b5d5c;
                font-family: 'Roboto Slab', serif;
                font-family: 'typewriter', sans-serif;
            }

            .folder {
                padding-top: 275px;
                background-color: #f3dca3;
                border-radius: 0 0 5px 5px;
                margin-bottom: 4px;
            }
            
            .row {
                margin: 0;
            }
            
            .written {
                color: #00407e;
                font-family: 'Zeyada', cursive;
            }

            h2.subtitle {
                margin: 30px 0;
            }

            @media screen and (max-width: 1080px) {
                .folder {
                    padding-top: 225px
                }
            }
            @media screen and (max-width: 768px) {
                .folder {
                    padding-top: 200px
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
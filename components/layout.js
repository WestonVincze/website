import Head from 'next/head';
import Navbar from '../components/navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Weston Vincze</title>
        </Head>
        <Navbar/>
        {props.children}
        <style jsx>{`
            
        `}
        </style>
    </div>
);

export default Layout;
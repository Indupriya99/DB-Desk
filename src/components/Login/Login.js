import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Login = ({ setLogin }) => {

    const handleLogin = (e) => {
        e.preventDefault();
        localStorage.setItem('login', true);
        setLogin(true);
    }
    
    useEffect(()=>{
        AOS.init({
            duration:2000
        })
    },[])

    return (
        // <div>
        //     <a href='./dashboard.html'><button>Click here to go to admin page</button></a>
        //     <button onClick={handleLogin}>Login Here</button>
        // </div>
        <div>
            <div id="page-wrapper">
                {/* <header id="header">
                    <h1 id="logo"><a href="index.html"></a></h1>
                    <nav id="nav">
                        <ul>
                            <li><a href="#five" className="button primary">Login</a></li>
                        </ul>
                    </nav>
                </header> */}
                <section id="banner">
                    <div data-aos={'zoom-in'} className="content">
                        <header>
                            <h2>Book My Desk
                                <br></br>
                            </h2>
                        </header>
                    </div>
                </section>
                <section data-aos={'fade-down'} id="five" className="wrapper style2 special fade">
                    <div  className="container">
                        <header>
                            <h2>Login</h2>
                        </header>
                        <form className="cta" onSubmit={handleLogin}>
                            <div className="row gtr-uniform gtr-50">
                                <div className="col-8 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Your Email Address" required /></div>
                                <div className="col-4 col-12-xsmall"><input type="submit" value="submit" className="fit primary" /></div>
                            </div>
                        </form>
                    </div>
                </section>
                <footer data-aos={'fade-up'} id="footer">
                    <ul className="copyright">
                        <li><h2>&copy; Batch 16</h2></li>
                    </ul>
                </footer>
            </div>
        </div>

    )
}

export default Login

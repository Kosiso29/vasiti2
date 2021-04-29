import React, { Component } from "react";
import { Link } from "react-router-dom";

import classes from "./Home.module.css";
import Hero from "../../assets/Hero.png";
import Logo from "../../assets/Logo.png";
import Group from "../../assets/Group.png";
import Customer1 from "../../assets/Customer1.png";
import Modal from "../../components/Modal/Modal";
import Backdrop from "../../components/Backdrop/Backdrop";
// import Container from "../../components/Container/Container";

class Home extends Component {
    state = {
        modalShow: false
    }

    openModal = () => {
        this.setState(prevState => ({ modalShow: !prevState.modalShow }));
    }
    
    closeModal = () => {
        this.setState({modalShow: false});
    }

    render() {
        return (
            <div>
                <Modal show={this.state.modalShow} clicked={this.closeModal} />
                <Backdrop show={this.state.modalShow} clicked={this.closeModal} />
                <section className={classes.section0}>
                    <header className={classes.header}>
                        <nav>
                            <img src={Logo} alt="Logo" />
                            <ul>
                                <li><Link to="#">ABOUT US</Link></li>
                                <li><Link to="#">STORES</Link></li>
                                <li><Link to="#">CONTACT</Link></li>
                                <li><Link to="#">LOG IN</Link></li>
                                <li><Link to="#">SIGN UP</Link></li>
                            </ul>
                        </nav>
                        <div>
                            <Link to="#">MARKETPLACE</Link>
                            <Link to="#">WHOLESALE CENTER</Link>
                            <Link to="#">SELLER CENTER</Link>
                            <Link to="#">SERVICES</Link>
                            <Link to="#">INTERNSHIPS</Link>
                            <Link to="#">EVENTS</Link>
                        </div>
                    </header>
                    <div className={classes.sectionDiv}>
                        <h1>Amazing Experiences from Our Wonderful Customers</h1>
                        <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
                    </div>
                    <div><img className={classes.sectionImage} src={Hero} alt="Hero" /></div>
                </section>
                <section className={classes.section1}>
                    <div>
                        <h2>Tolu & Joy’s Experience</h2>
                        <button>CUSTOMER</button>
                        <p>I had the best experience shopping with vasiti. 
                            Usability of the website was great, very good customer service, 
                            an all round great experience. I would definately be coming back! 
                            I had the best experience shopping with vasiti. 
                            Usability of the website was great, very good customer service, 
                            an all round great experience. I would definately be coming back!</p>
                        <button onClick={this.openModal} style={{color: 'white'}} className={classes.button}>Share your own story!</button>
                    </div>
                    <img src={Group} alt="Group" />
                </section>
                <section className={classes.section2}>
                    <div className={classes.sectionDiv}>
                        {/* <Container
                            image={Customer1}
                            name="Joseph Ike" 
                            location="In Ikeja"
                            button="CUSTOMER"
                            body="Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                            Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."
                         /> */}
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                    </div>
                </section>
                <section className={classes.section3}>
                    <div>
                        <h2>Josiah’s Experience</h2>
                        <button>VENDOR</button>
                        <p>I had the best experience shopping with vasiti. 
                            Usability of the website was great, very good customer service, 
                            an all round great experience. I would definately be coming back! 
                            I had the best experience shopping with vasiti. Usability of the website was great, 
                            very good customer service, an all round great experience. I would definately be coming back!</p>
                        <button className={classes.button}>Share your own story!</button>
                    </div>
                    <img src={require("../../assets/woman.svg").default} alt="Josiah" />
                </section>
                <section className={classes.section2}>
                    <div className={classes.sectionDiv}>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                        <div className={classes.containerDiv}>
                            <img src={Customer1} alt="" />
                            <h2>Joseph Ike</h2>
                            <p>In Ikeja</p>
                            <button>CUSTOMER</button>
                            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. 
                                Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. 
                                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
                                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p>
                        </div>
                    </div>
                </section>
                <footer className={classes.footer}>
                    <div className={classes.footerDiv1}>
                        <h2>Be a  member of our community 🎉</h2>
                        <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                        <input type="text" placeholder="Enter your email address" />
                        <button>SUBSCRIBE</button>
                    </div>
                    <img src={require("../../assets/Mask.png").default} alt="" />
                    <div className={classes.footerDiv2}>
                        <div>
                            <p>Company</p>
                            <a href="">About us</a>
                            <a href="">Term of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Press & Media</a>
                        </div>
                        <div>
                            <p>Company</p>
                            <a href="">About us</a>
                            <a href="">Term of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Press & Media</a>
                        </div>
                        <div>
                            <p>Company</p>
                            <a href="">About us</a>
                            <a href="">Term of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Press & Media</a>
                        </div>
                        <div>
                            <p>Company</p>
                            <a href="">About us</a>
                            <a href="">Term of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Press & Media</a>
                        </div>
                        <div>
                            <p>Company</p>
                            <a href="">About us</a>
                            <a href="">Term of Use</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Press & Media</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
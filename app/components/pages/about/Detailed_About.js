import React from 'react';
import './Detailed_About.scss';
import Heading_2 from '../../ui/headings/Heading_2';
import Heading_3 from '../../ui/headings/Heading_3';
import Heading_4 from '../../ui/headings/Heading_4';
import Paragraph from '../../ui/paragraphs/Paragraph';
import Route_Change from '../../ui/transitions/Route_Change';
import Button from '../../ui/buttons/Button';

const Detailed_About = () => {
    return (
        <section id='about_page'>
            <Heading_2
                h2Text='About Us'
                className='heading uppercase'
            />
            <Paragraph
                pText='Welcome to StarX Innovations and IT Solutions!'
                className='subheading uppercase'
            />

            {/* Existing Content */}
            <div className='div div_1'>
                <img
                    src='/images/IAF LOGO.png'
                    alt='LOGOS'
                    width={600}
                    height={700}
                />
                <br /><br />
                <Heading_3
                    h3Text='Who We Are'
                    className='heading'
                />
                <Paragraph
                    pText="At StarX Innovations and IT Solutions, we are dedicated to driving technological advancement and providing top-tier IT services. As an MSME registered and ISO IAF certified company, we pride ourselves on our commitment to excellence, quality, and innovation."
                    className='paragraph'
                />
            </div>
            <br /><br /><br />
            <div className='div div_2'>
                <br /><br /><br /><br />
                <Heading_3
                    h3Text='Our Services'
                    className='heading'
                />
                <Paragraph
                    pText="Innovative Projects: We pride ourselves on our ability to conceptualize and execute groundbreaking projects that push the limits of what's possible. Whether it's developing sophisticated software, creating state-of-the-art applications, or pioneering new tech solutions, we are your go-to partner for innovation."
                    className='paragraph'
                />
                <Paragraph
                    pText="Programming Training: Knowledge is power, and we are committed to equipping you with the skills you need to excel in the tech world. Our programming training programs are designed to cater to all levels, from beginners to advanced learners. Our hands-on approach ensures that you gain practical experience and a deep understanding of various programming languages and technologies."
                    className='paragraph'
                />
                <Paragraph
                    pText="Internships: At StarX, we provide valuable internship opportunities that allow you to apply your knowledge in real-world scenarios. Our internships are crafted to give you a taste of the professional world, providing you with the experience and insights needed to jumpstart your career."
                    className='paragraph'
                />
                <Paragraph
                    pText="Completion Certificates: We recognize and celebrate your achievements. Upon successful completion of our training programs and internships, you will receive a prestigious certificate that validates your skills and dedication. Our certificates are a testament to your hard work and are highly regarded in the industry."
                    className='paragraph'
                />
              
            </div>
            <br />
            <div className='div div_3'>
                <br />
                <Heading_4
                    h4Text='Why Choose StarX?'
                />
                <Paragraph
                    pText="Expert Team:  Our team consists of experienced professionals who are leaders in their respective fields. Their knowledge and expertise are the backbone of our success."
                    className='paragraph'
                />
                <br />
                <Paragraph
                    pText="Hands-On Learning: We believe in learning by doing. Our practical approach ensures that you not only learn the theory but also apply it effectively in real-world scenarios."
                    className='paragraph'
                />
                <br />
                <Paragraph
                    pText="Industry Recognition: Our completion certificates are recognized and respected in the industry, giving you a competitive edge in the job market."
                    className='paragraph'
                />
                <br />
                <Paragraph
                    pText="Commitment to Excellence: We are committed to delivering the highest quality in everything we do. From project development to training and internships, excellence is our standard."
                    className='paragraph'
                />
             
            </div>
            <div className='div div_4'>
                <Paragraph
                    pText="Join us at StarX Innovations and IT Solutions and be a part of a community that is shaping the future of technology. Let's innovate, learn, and grow together."
                    className='paragraph'
                />
            </div>
            <div className='div div_5'>
                <Heading_4
                    h4Text='Ready to Elevate Your Online Presence?'
                />
                <Paragraph
                    pText="Ready to start a project together? Reach out via mobile, Telegram, or email, and let's make digital waves!"
                />
                <Route_Change href='/contact'>
                    <Button
                        buttonText='Connect with me'
                        className='button'
                    />
                </Route_Change>
              
            </div>


                    
           
              
        </section>
    );
};

export default Detailed_About;

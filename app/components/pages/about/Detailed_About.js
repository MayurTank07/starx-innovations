import './Detailed_About.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_About = () => {
    return (
        <section id='about_page'>
            <Heading_2
                h2Text='About Us'
                className='heading uppercase'
            />

            <Paragraph
                pText='Crafting Digital Artistry'
                className='subheading uppercase'
            />

            <div className='div div_1'>
                <Heading_3
                    h3Text='Hello there!'
                    className='heading'
                />

                <Paragraph
                    pText="At StarX Innovations and IT Solutions, we pride ourselves on being at the forefront of technological advancements and providing top-notch IT services. Our core mission is to build innovative projects that push the boundaries of what is possible in the IT industry. Additionally, we are dedicated to empowering the next generation of developers by offering comprehensive training in multiple programming languages."
                    className='paragraph'
                />
            </div>

            <div className='div div_2'>
                <Paragraph
                    pText="At StarX Innovations and IT Solutions, our values are the foundation of everything we do. They guide our actions, shape our culture, and drive our success. We are committed to:

                    Innovation: We embrace creativity and strive to develop cutting-edge solutions that solve real-world problems.
                    Excellence: We pursue the highest standards in all aspects of our work, from project development to training programs. Maintain a commitment to quality and excellence in every task and project.
                    Continuous Learning: We believe in the power of education and the importance of staying current with technological advancements. Provide comprehensive training and learning opportunities for our team and clients.
                    Integrity: We conduct our business with honesty and transparency, building trust with our clients and within our team. Uphold ethical practices and accountability in all our endeavors.
                    Empowerment: We empower individuals to reach their full potential through mentorship, training, and hands-on experience. Support the professional growth and development of our trainees and interns.
                    Customer Focus: We prioritize the needs and success of our clients, tailoring our solutions to meet their specific challenges. Deliver exceptional service and innovative solutions that drive client success.
                    
                    These values are integral to our mission and vision, guiding us as we continue to grow and make a positive impact in the tech industry. At StarX, we are dedicated to creating a future where technology and innovation lead to limitless possibilities.
                    "
                    className='paragraph'
                />
            </div>

            <div className='div div_3'>
                <Paragraph
                    pText="I'm all about creating experiences that resonate, building interfaces that engage, and pushing the digital envelope. If you're looking for someone who can take your digital presence to the next dimension, let's connect!"
                    className='paragraph'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Technologies We Master:'
                />

                <Paragraph
                    pText="React.js, Next.js, React Three Fiber, Three.js, GLSL (OpenGL Shading Language), JavaScript, and a suite of design tools that keep my work sharp and your vision clearer."
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
    )
}

export default Detailed_About
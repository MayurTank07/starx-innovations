import './Detailed_teams.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_4 from '../../ui/headings/Heading_4'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_teams = () => {
    return (
        <section id='process_page'>
            <Heading_2
                h2Text='MEET OUR TEAM'
                className='heading uppercase'
            />

            <Paragraph
                pText='The minds behind your digital success'
                className='subheading uppercase'
            />

            {/* Let's Talk */}
            <div className='div div_1'>
                <img
                    src='/images/process/MAYUR.png'
                    alt='MAYUR'
                    width={500}
                    height={500}
                    
                /><br></br>

                <Heading_3
                    h3Text="Mayur Tank"
                />
            </div>

            <div className='div div_2'>
                <Heading_4
                    h4Text='Founder and CEO'
                />

                <Paragraph
                    pText="Mayur is the visionary driving our company forward, leading with a relentless passion for innovation and excellence. His strategic foresight and commitment to pioneering solutions have been instrumental in shaping our success and setting us apart in the industry."
                    className='lined_paragraph'
                />
            </div>

            {/* Designing Your Site */}
            <div className='div div_3'>
                <img
                    src='/images/process/NAVISH.png'
                    alt='Custom Design'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Navish Ansari'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Senior Developer'
                />

                <Paragraph
                    pText="Navish is our lead coder, bringing unparalleled expertise in web development and cyber security to ensure your projects are not only completed but are executed to perfection. His innovative approach and dedication have been pivotal to our success."
                    className='lined_paragraph'
                />
            </div>

            {/* Building It */}
            <div className='div div_5'>
                <img
                    src='/images/process/sara.png'
                    alt='Building'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Sara Thombare'
                />
            </div>

            <div className='div div_6'>
                <Heading_4
                    h4Text='Secretary and Graphic Designer'
                />

                <Paragraph
                    pText="Sara is the backbone of our operations, seamlessly managing administrative tasks while bringing a creative flair to our graphic design projects. Her meticulous attention to detail and artistic vision ensure that our work is not only well-organized but also visually captivating and professionally polished."
                    className='lined_paragraph'
                />
            </div>





            {/* Ready to start? */}
            <div className='div div_13'>
                <h4>Ready to Start?</h4>
                <p>Let's make something amazing. <br />If you're ready for a website that works for you, let's get started.</p>
                <Route_Change href='/contact'>
                    <Button
                        buttonText='Start Your Project'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_teams

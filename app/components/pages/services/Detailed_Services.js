import './Detailed_Services.scss'
import Heading_4 from '../../ui/headings/Heading_4'
import Heading_3 from '../../ui/headings/Heading_3'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Image from 'next/image'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'

const Detailed_Services = () => {
    return (
        <section id='services_page'>
            <Heading_2
                h2Text='SERVICES JUST CURATED FOR YOU'
                className='heading uppercase'
            />

            <Paragraph
                pText='Bringing Your Digital Vision to SKILLS with Precision and Passion'
                className='subheading uppercase'
            />

            <div className='div div_1'>
                <img
                    src='/images/services/hosting.webp'
                    alt='Innovative Project Development'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Innovative Project Development'
                />
            </div>

            <div className='div div_2'>
                <Heading_4
                    h4Text='We specialize in crafting groundbreaking projects that push the boundaries of technology'
                />

                <Paragraph
                    pText="Our team of experts collaborates closely with clients to understand their unique requirements and deliver customized solutions. Whether it's developing advanced software applications, creating robust systems, or implementing cutting-edge technologies, we ensure that each project is innovative, scalable, and future-proof."
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_3'>
                <img
                    src='/images/services/design.webp'
                    alt='Design & Development'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Programming Training'
                />
            </div>

            <div className='div div_4'>
                <Heading_4
                    h4Text='Our programming training programs are designed to transform beginners into proficient coders and help experienced developers refine their skills'
                />

                <Paragraph
                    pText="We offer a variety of courses tailored to different skill levels, from introductory coding classes to advanced programming workshops. Our curriculum covers a wide range of programming languages, tools, and methodologies, ensuring that our trainees are well-equipped to tackle real-world challenges"
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_5'>
                <img
                    src='/images/services/support.webp'
                    alt='Internships'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Internships'
                />
            </div>

            <div className='div div_6'>
                <Heading_4
                    h4Text='We offers comprehensive internship programs that provide invaluable hands-on experience in the IT industry'
                />

                <Paragraph
                    pText="Our internships are designed to bridge the gap between theoretical knowledge and practical application, giving interns the opportunity to work on real projects, collaborate with experienced professionals, and gain insights into the workings of the tech industry. We support our interns with mentorship, resources, and a conducive learning environment"
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_7'>
                <img
                    src='/images/services/analytics.webp'
                    alt='Why Choose Us'
                    width={500}
                    height={500}
                />

                <Heading_3
                    h3Text='Why Choose Us'
                />
            </div>

            <div className='div div_8'>
                <Heading_4
                    h4Text= ' Our team consists of highly skilled professionals with extensive experience in various domains of IT and innovation.'
                />

                <Paragraph
                    pText=" We understand that each client is unique, and we tailor our solutions to meet your specific requirements.

                     Innovation: We are committed to staying at the forefront of technology, continuously exploring new ideas and approaches to deliver the best possible outcomes.
                    - Education:We believe in the power of knowledge and are dedicated to providing top-notch training and internship programs that help individuals achieve their career goals.
                    "
                    className='lined_paragraph'
                />
            </div>

            <div className='div div_9'>
                <Heading_4
                    h4Text='Ready to Elevate Your Online Presence?'
                />

                <Paragraph
                    pText='Embark on a journey of digital transformation that sets your brand apart. Get in touch today to explore how my  web services can elevate your online presence.'
                />

                <Route_Change href='/contact'>
                    <Button
                        buttonText='Contact Me Today!'
                        className='button'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Detailed_Services
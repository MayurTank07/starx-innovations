import './Services_Overview.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Image from 'next/image'

const Services_Overview = () => {
    return (
        <section id='services_section'>
            <Heading_2
                className='heading uppercase'
                h2Text='Services Tailored for Impact'
            />

            <Paragraph
                className='subheading uppercase'
                pText='From Conception to Launch – Crafting Your Digital Legacy'
            />

            <div className='overlay div div_1'>
                <div className='text'>
                    <h4>Project Development(review)<abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='From conception to execution, we specialize in delivering innovative IT projects tailored to your specific needs. Our seasoned team ensures every project is meticulously crafted, leveraging cutting-edge technology to drive efficiency and success.'
                    />
                </div>
                <img
                    src='/images/services/hosting.webp'
                    alt='Premium Hosting'
                    width={500}
                    height={500}
                />
            </div>

            <div className='overlay div div_2'>
                <div className='text'>
                    <h4>Programming Training <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='Empower your team with our comprehensive programming training programs. Led by industry experts, our courses cover a wide array of programming languages and frameworks, equipping your workforce with the skills needed to thrive in todays competitive landscape.'
                    />
                </div>
                <img
                    src='/images/services/design.webp'
                    alt='Personalized Design & Development // edit mayur'
                    width={500}
                    height={500}
                />
            </div>

            <div className='overlay div div_3'>
                <div className='text'>
                    <h4>Internship Opportunities <abbr className='indigo'>⇀</abbr></h4>
                    <Paragraph
                        pText='Invest in the next generation of talent and foster growth within your organization through our internship programs. Partnering with leading companies, we offer hands-on learning experiences that allow interns to apply their skills in real-world scenarios, while providing invaluable support to your team.'
                    />
                </div>
                <img
                    src='/images/services/support.webp'
                    alt='Dedicated Support'
                    width={500}
                    height={500}
                />
            </div>

            <div className='div div_4'>
                <h4>Envision More - Browse My Solutions</h4>
                <Route_Change href='/services'>
                    <Button
                        buttonText='Explore My Services'
                    />
                </Route_Change>
            </div>
        </section>
    )
}

export default Services_Overview
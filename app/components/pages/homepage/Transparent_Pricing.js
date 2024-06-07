import './Transparent_Pricing.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'
import Route_Change from '../../ui/transitions/Route_Change'
import Button from '../../ui/buttons/Button'
import Image from 'next/image'

const Transparent_Pricing = () => {
    return (
        <section id='transparent_pricing'>
            <Heading_2
                className='heading uppercase'
                h2Text='COURSES'
            />

            <Paragraph
                className='subheading uppercase'
                pText="Let’s chat about what you need, with pricing to follow your Courses"
            />

            <div className='overlay div_1'>
                <img
                    src='/images/pricing/startup.webp'
                    alt='Startup Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>C, C++, Core Java Course<br /></h4>
                    <Paragraph
                        pText='Master the core languages of software development with our C, C++, and Core Java course. Designed for aspiring programmers, this course delves into the foundations of programming, object-oriented principles, data structures, algorithms, and more using C, C++, and Java'
                    />
                    <Route_Change href='/contact'>
                        <Button buttonText='ESTIMATE ' className='cta black' />
                    </Route_Change>
                </div>
            </div>

            <div className='overlay div_2'>
                <img
                    src='/images/pricing/business.webp'
                    alt='Business Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Advanced Web Development Course<br /></h4>
                    <Paragraph
                        pText='Elevate your web development expertise with our Advanced Web Development course. Whether youre a beginner or seasoned developer this course dives into advanced topics in HTML, CSS, JavaScript, modern frameworks (e.g., React, Angular), server-side scripting, databases, and more.'
                    />
                    <Route_Change href='/contact'>
                        <Button buttonText='ESTIMATE ' className='cta black' />
                    </Route_Change>
                </div>
            </div>

            <div className='overlay div_3'>
                <img
                    src='/images/pricing/enterprise.webp'
                    alt='Enterprise Plan'
                    width={500}
                    height={500}
                />
                <div className='text'>
                    <h4>Python Development Course<br /></h4>
                    <Paragraph
                        pText='Unlock the power of Python programming with our Python Development course. Ideal for beginners and experienced programmers alike, this course covers the fundamentals of Python syntax, data structures, algorithms, object-oriented programming, web development, automation, and more.'
                    />
                    <Route_Change href='/contact'>
                        <Button buttonText='ESTIMATE ' className='cta black' />
                    </Route_Change>
                </div>
            </div>

            <div className='div_4'>
                <h4>Extra Needs?</h4>
                <p>For specific requirements, I offer additional services at a set rate to ensure your package perfectly fits your vision.</p>
                <Route_Change href='/pricing'>
                    <Button buttonText='Learn more about my pricing' />
                </Route_Change>
            </div>
        </section>
    )
}

export default Transparent_Pricing

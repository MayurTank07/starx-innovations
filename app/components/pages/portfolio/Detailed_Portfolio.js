import './Detailed_Portfolio.scss'
import Heading_2 from '../../ui/headings/Heading_2'
import Paragraph from '../../ui/paragraphs/Paragraph'

const Detailed_Portfolio = () => {
    return (
        <section id='portfolio_page'>
            <Heading_2
                h2Text='Our Programs'
                className='heading uppercase'
            />

            <Paragraph
                pText=
                        'At StarX Innovations and IT Solutions we offer a diverse range of programs designed to cater to the needs of aspiring tech professionals Whether youre just starting out or looking to advance your skills our comprehensive courses are designed to help you achieve your '
                className='subheading uppercase'
            />

            <div className='courses'>
                <div className='course'>
                    <Heading_2 h2Text='Advanced Web Development (AWD) Course' />
                    <Paragraph pText='' />
                    <Paragraph pText="Course Overview: A comprehensive program in modern web development technologies and frameworks. Gain hands-on experience through industrial projects to build professional-grade web applications." />
                    <Heading_2 h2Text='What You Will Learn:' /><br></br>
                    <Paragraph pText='Frontend Development:' />
                    <ul>
                        <li>HTML & CSS: Create structured and visually appealing web pages.</li>
                        <li>JavaScript (JS): Add interactivity and dynamic functionality to websites.</li>
                        <li>Bootstrap: Create responsive and mobile-first web designs efficiently.</li>
                    </ul>
                    <Paragraph pText='Backend Development:' />
                    <ul>
                        <li>PHP: Build dynamic and database-driven web applications.</li>
                        <li>Angular: Build scalable single-page applications (SPAs).</li>
                        <li>ReactJS: Create reusable UI components for efficient web interfaces.</li>
                    </ul>
                    <Paragraph pText='Industrial Projects:' />
                    <ul>
                        <li>Apply your skills to real-world projects simulating industry scenarios.</li>
                        <li>Work on projects like e-commerce platforms and content management systems.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1FLoHjoS3NJXHEwKPosEq4AYaI7cQfYcv/view" target="_blank" rel="noopener noreferrer" className="drive-link-button">
                        View Course Material
                    </a>
                </div>

                <div className='course'>
                    <Heading_2 h2Text='CCPJ Course (C, CPP, Java Course)' />
                    <Paragraph pText='' />
                    <Paragraph pText="Course Overview: In-depth training in C, C++, and Java. Gain hands-on experience to tackle real-world programming challenges." />
                    <br></br><br></br><br></br><br></br><Heading_2 h2Text='What You Will Learn:' /><br></br>
                    <Paragraph pText='C Programming:' />
                    <ul>
                        <li>Fundamentals of C programming, including data types and control structures.</li>
                        <li>Advanced topics like memory management and file handling.</li>
                    </ul>
                    <Paragraph pText='C++ Programming:' />
                    <ul>
                        <li>Object-oriented programming concepts such as classes and objects.</li>
                        <li>Advanced features like templates and exception handling.</li>
                    </ul>
                    <Paragraph pText='Java Programming:' />
                    <ul>
                        <li>Syntax, data types, and control flow in Java.</li>
                        <li>Advanced concepts like multithreading and collections framework.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1efszvqK8IRWTcjNK2Ms0bj2j53c2TNXc/view?usp=drive_link " target="_blank" rel="noopener noreferrer" className="drive-link-button">
                        View Course Material
                    </a>
                </div>

                <div className='course'>
                    <Heading_2 h2Text='Android Development Course' />
                    <Paragraph pText='' />
                    <Paragraph pText="Course Overview: In-depth training in mobile app development for the Android platform. Gain hands-on experience to build professional-grade Android applications." />
                    <br></br><br></br><br></br><Heading_2 h2Text='What You Will Learn:' /><br></br>
                    <Paragraph pText='Java Programming:' />
                    <ul>
                        <li>Fundamentals of Java programming, including syntax and OOP.</li>
                        <li>Advanced Java concepts such as multithreading and collections framework.</li>
                    </ul>
                    <Paragraph pText='Android Development with Android Studio:' />
                    <ul>
                        <li>Explore the Android development environment and set up Android Studio.</li>
                        <li>Understand the structure of Android applications.</li>
                    </ul>
                    <Paragraph pText='User Interaction and Data Persistence:' />
                    <ul>
                        <li>Implement user interaction features like buttons and text fields.</li>
                        <li>Handle user input and gestures for interactive experiences.</li>
                    </ul>
                    <Paragraph pText='Networking and API Integration:' />
                    <ul>
                        <li>Integrate networking functionality into Android apps.</li>
                        <li>Make HTTP requests and handle network connectivity issues.</li>
                    </ul>
                    <Paragraph pText='Industrial Projects:' />
                    <ul>
                        <li>Apply your skills to real-world projects simulating industry scenarios.</li>
                        <li>Work on projects like social networking apps and e-commerce platforms.</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1mNMFcSDTsNtq3cnuBe4h8zjQauNCOOTG/view" target="_blank" rel="noopener noreferrer" className="drive-link-button">
                        View Course Material
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Detailed_Portfolio

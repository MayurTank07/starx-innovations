import './Detailed_Pricing.scss';
import Heading_2 from '../../ui/headings/Heading_2';
import Heading_3 from '../../ui/headings/Heading_3';
import Paragraph from '../../ui/paragraphs/Paragraph';
import Route_Change from '../../ui/transitions/Route_Change';
import Button from '../../ui/buttons/Button';

const Detailed_Services = () => {
    return (
        <section id='pricing_page'>
            <Heading_2
                h2Text='Pricing Plans Designed for Your Success'
                className='heading uppercase center'
            />

            <Paragraph
                pText='Find the perfect match for your digital ambitions'
                className='subheading uppercase center'
            />

            {/* Python Programming Course */}
            <div className='div div_1'>
                <Heading_3 h3Text="Python Programming Course" />
                <Paragraph pText=": KNOW MORE" />
                <Paragraph pText="Course Overview: Our Python Programming Course is meticulously designed to take you from a beginner to an advanced level in Python programming. Whether you are new to programming or looking to add Python to your skill set, this course provides the knowledge and practical experience you need to excel. Python is known for its simplicity and versatility, making it a popular choice for various applications including web development, data analysis, artificial intelligence, and more." />
            </div>

            {/* Core .NET Programming Course */}
            <div className='div div_2'>
                <Heading_3 h3Text="Core .NET Programming Course" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our Core .NET Programming Course is meticulously crafted to provide you with a solid foundation in the fundamental concepts and techniques of .NET development. Whether you're new to programming or looking to expand your skills, this course offers a comprehensive exploration of the core components of the .NET framework. By mastering essential programming principles and .NET technologies, you'll be well-equipped to build dynamic and scalable applications for a variety of platforms." />
            </div>

            {/* MySQL Course */}
            <div className='div div_3'>
                <Heading_3 h3Text="MySQL Course" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our MySQL Course offers comprehensive training in one of the world's most popular open-source relational database management systems. Whether you're a beginner or an experienced developer, this course will equip you with the knowledge and skills needed to design, build, and maintain efficient and scalable databases using MySQL. From database fundamentals to advanced query optimization techniques, you'll gain practical experience through hands-on exercises and real-world projects." />
            </div>

            {/* Web Development Course */}
            <div className='div div_4'>
                <Heading_3 h3Text="Web Development Course (HTML + CSS + JavaScript + Bootstrap)" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our Web Development Course offers comprehensive training in the essential technologies for building modern and interactive websites: HTML, CSS, and JavaScript. Whether you're a beginner or looking to enhance your skills, this course will provide you with the knowledge and hands-on experience needed to create dynamic and responsive web applications. From basic markup to advanced scripting, you'll learn industry-standard techniques and best practices for designing and developing professional-quality websites." />
            </div>

            {/* React Course */}
            <div className='div div_5'>
                <Heading_3 h3Text="React Course" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our React Course is designed to provide comprehensive training in one of the most popular JavaScript libraries for building user interfaces: React. Whether you're a beginner or an experienced developer, this course will equip you with the skills needed to develop dynamic and interactive web applications using React. From fundamental concepts to advanced techniques, you'll learn how to leverage React's powerful features to create efficient and scalable UI components." />
            </div>

            {/* ReactJS Course */}
            <div className='div div_6'>
                <Heading_3 h3Text="ReactJS Course" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our ReactJS Course is meticulously designed to provide comprehensive training in one of the most popular JavaScript libraries for building user interfaces: React. Whether you're a beginner or an experienced developer, this course will equip you with the skills needed to develop dynamic and scalable web applications using React. From fundamental concepts to advanced techniques, you'll learn how to leverage React's powerful features to create efficient and scalable UI components." />
            </div>

            {/* Angular Course */}
            <div className='div div_7'>
                <Heading_3 h3Text="Angular Course" />
                <Paragraph pText="" />
                <Paragraph pText="Course Overview: Our Angular Course is meticulously designed to provide comprehensive training in one of the most powerful and widely-used front-end frameworks: Angular. Whether you're a beginner or an experienced developer, this course will equip you with the skills needed to build dynamic and scalable web applications using Angular. From basic concepts to advanced techniques, you'll learn how to leverage Angular's features to create responsive and interactive user interfaces." />
            </div>

            {/* Ready to start? */}
            <div className='div div_10'>
                <h4>Still looking for the perfect fit?</h4>
                <p>STAR X Services for Unique Needs. <br />If your project has specific requirements or you have a vision that doesn't neatly fit into one of these plans, I'm here to tailor a solution just for you. Together, we'll align on a service package that caters exactly to what your brand and website require.</p>
                <Route_Change href='/contact'>
                    <Button buttonText='Tailor My Plan' className='button' />
                </Route_Change>
            </div>
        </section>
    );
};

export default Detailed_Services;

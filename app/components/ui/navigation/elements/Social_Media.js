import Link from 'next/link'

const Social_Media = () => {
    return (
        <div className='social_media'>
            <h4>Social Media</h4>
            <Link href='https://www.linkedin.com/company/starx-innovations-and-it-solutions/' target='blank'>
                <p className='uppercase light_grey'>LinkedIn</p>
            </Link>
            <Link href='https://www.facebook.com/people/' target='blank'>
                <p className='uppercase light_grey'>Facebook</p>
            </Link>
            <Link href='https://www.instagram.com/_i_am_mayur_tank_/' target='blank'>
                <p className='uppercase light_grey'>Instagram</p>
            </Link>
            <Link href='https://twitter.com/' target='blank'>
                <p className='uppercase light_grey'>Twitter</p>
            </Link>
            <Link href='#https://github.com/MayurTank07' target='blank'>
                <p className='uppercase light_grey'>GitHub</p>
            </Link>
        </div>
    )
}

export default Social_Media
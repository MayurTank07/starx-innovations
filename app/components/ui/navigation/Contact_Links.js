import React from 'react'
import Link from 'next/link'

const Contact_Links = () => {
    return (
        <div className='contact_links'>
            <div className='contact us'>
                <h4>CONTACT</h4>
                <Link href='' target='blank' className='link'>
                    +91 9167422024
                </Link>
            </div>

            <div className='email'>
                <h4>Email</h4>
                <Link href='starxinnovation@gmail.com' target='blank' className='link'>
                         starxinnovation@gmail.com
                </Link>
            </div>
        </div>
    )
}

export default Contact_Links
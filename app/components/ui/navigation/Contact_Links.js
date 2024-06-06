import React from 'react'
import Link from 'next/link'

const Contact_Links = () => {
    return (
        <div className='contact_links'>
            <div className='telegram'>
                <h4>Telegram</h4>
                <Link href='' target='blank' className='link'>
                    t.me/programming
                </Link>
            </div>

            <div className='email'>
                <h4>Email</h4>
                <Link href='starxinnovation@gmail.com' target='blank' className='link'>
                    contactstarxinnovation@.net
                </Link>
            </div>
        </div>
    )
}

export default Contact_Links
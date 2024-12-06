import React from 'react'

export default function ContactUs() {
    const CONTACT = {
        address: "207/14, Banso Gate, karnal, Haryana, 132001",
        PhoneNo: "+91-7015598669",
        email: "lakshaychauhan27142510@gmail.com",
    };
   return (
    <div className='border-b border-neutral-900 pb-20'>

        <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>

        <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.PhoneNo}</p>
        <a href="https://mail.google.com/mail/u/0/#inbox" className='my-4 border-b'>{CONTACT.email}</a>
        </div>
    </div>
   )
}

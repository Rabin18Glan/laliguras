"use client";
import React from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_1x5xq2b',    // Replace with your Service ID
            'template_ng01mvi',   // Replace with your Template ID
            e.currentTarget,      // Form element
            'wqqPcyn1hdatXvxlb'  // Replace with your User ID (or Public Key)
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            alert('Message sent successfully!');
        }, (error) => {
            console.log('Failed to send email:', error.text);
            alert('Failed to send message.');
        });

        e.currentTarget.reset();  // Optionally reset the form after submission
    };

    return (
        <form className="flex flex-col max-w-md w-full p-6 rounded-lg  space-y-4 " onSubmit={sendEmail}>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-800 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none transition-all"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="tel" className="text-gray-800 font-medium">Telephone Number</label>
                <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Enter your phone number"
                    className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none transition-all"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="mes" className="text-gray-800 font-medium">Message</label>
                <textarea
                    name="mes"
                    id="mes"
                    placeholder="Type your message here"
                    className="w-full mt-2 py-3 px-4 rounded-lg border border-gray-300 text-gray-800 focus:border-blue-500 focus:outline-none transition-all"
                />
            </div>

            <div>
                <button
                    type="submit"
                    className="w-40 py-3 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

export default ContactForm;

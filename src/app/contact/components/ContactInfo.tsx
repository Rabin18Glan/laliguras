import React from 'react';

function ContactInfo() {
  return (
    <div className="p-6 px-10 max-w-md bg-orange-100 dark:bg-gray-950 text-black rounded-xl shadow-md">
      <h1 className="text-3xl sm:text-4xl text-black font-extrabold tracking-tight">
        Contact Us
      </h1>
      <p className="text-lg sm:text-xl font-medium mt-2">
        You can directly call us or send us an email for any inquiries, and we'll get back to you promptly.
      </p>

      <div className="flex items-center mt-8">
        <span className="material-icons text-yellow-600 text-3xl">location_on</span>
        <div className="ml-4 text-md font-semibold">
          Hetauda, Nepal
        </div>
      </div>

      <div className="flex items-center mt-8">
        <span className="material-icons text-yellow-600 text-3xl">phone</span>
        <div className="ml-4 text-md font-semibold">
          +977 9840 469397
        </div>
      </div>

      <div className="flex items-center mt-8">
        <span className="material-icons text-yellow-600 text-3xl">email</span>
        <div className="ml-4 text-md font-semibold">
          robinjsl321@gmail.com
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

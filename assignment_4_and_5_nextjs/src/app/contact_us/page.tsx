import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Contact Card</title>
      </Head>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          We'll create high-quality linkable content and build at least 40 high-authority links to each asset, paving the way for you to grow your rankings, improve brand.
        </p>
        <div className="bg-sky-500 text-white p-4 rounded mb-6">
          <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
          <p className="mb-1">+923102648581</p>
          <p className="mb-1">asifkhadimalpha.com</p>
          <p>Karachi, PAKISTAN</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" placeholder="Asif" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" placeholder="asif@.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="subject">Your Subject</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="subject" placeholder="I want to hire you quickly" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg" id="message" placeholder="Write here your message"></textarea>
          </div>
          <button className="w-full bg-sky-500 text-white py-2 rounded-lg">Send Message</button>
        </form>
      </div>
    </div>
  );
}

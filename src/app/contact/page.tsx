import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Reach out to me for your web projects",
};

const Page = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="my-10 text-center">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <p className="mt-4 text-lg">
          I’d love to hear from you! Whether it’s about potential
          collaborations, job opportunities, or just a friendly hello, feel free
          to drop me a message.
        </p>
      </div>

      {/* Contact Form */}
      <form className="max-w-[600px] mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 h-32"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Page;


import { useState } from "react";
import { useEffect } from "react";
import { setDocumentHead } from "../utils/setDocumentHead";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    setDocumentHead({
      title: "The Echo Room",
      description:
        "Get in touch with The Echo Room team — collaborate, contribute, or share your voice with our growing community.",
    });
  }, []);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div id="contact" className="bg-[#f9fafb] min-h-screen flex flex-col justify-center items-center py-[50px] px-[20px] text-[#0a1a2f] relative">
      {/* Header */}
      <div className="text-center mb-[40px]">
        <h1 className="text-[2.5rem] font-bold mb-[10px]">Contact Us</h1>
        <p className="text-[gray] max-w-[36rem] mx-auto">
          Have a question, story, or partnership idea? We’d love to hear from you.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-[white] shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-[16px] p-[30px] w-full max-w-[32rem]"
      >
        <div className="mb-[16px]">
          <label htmlFor="name" className="block text-[gray/800] mb-[8px] font-medium">
            Name
          </label>
          <input
          name="name"
          id="name"
            type="text"
            placeholder="Enter your name"
            autocomplete="on"
            className="w-full p-[12px] border border-[gray/300] rounded-[8px] focus:ring-2 focus:ring-[#0a1a2f] outline-none"
          />
        </div>

        <div className="mb-[16px]">
          <label htmlFor="email" className="block text-[gray/800] mb-[8px] font-medium">
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            autocomplete="on"
            className="w-full p-[12px] border border-[gray/300] rounded-[8px] focus:ring-2 focus:ring-[#0a1a2f] outline-none"
          />
        </div>

        <div className="mb-[16px]">
          <label htmlFor="message" className="block text-[gray/800] mb-[8px] font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Type your message..."
            autocomplete="off"
            className="w-full p-[12px] border border-[gray/300] rounded-[8px] focus:ring-2 focus:ring-[#0a1a2f] outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#0a1a2f] text-[white] font-semibold py-[12px] rounded-[8px] hover:bg-[#132a4b] transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="fixed bottom-[30px] right-[30px] bg-[#0a1a2f] text-[white] px-[20px] py-[12px] rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.2)] animate-fadeIn">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Divider */}
      <div className="my-[40px] w-[80px] h-[3px] bg-[#0a1a2f] rounded-[2px]"></div>

      {/* Contact Details */}
      <div className="text-center">
        <p className="text-[gray/700] mb-[12px]">
          You can also reach us directly via email:
        </p>
        <a
          href="mailto:echoroom@mail.ch"
          className="text-[#0a1a2f] font-medium hover:underline text-[1.1rem]"
        >
          echoroom@mail.ch
        </a>

        {/* Social Media */}
        <div className="flex justify-center gap-[16px] mt-[24px]">
          <a
            href="https://www.facebook.com/share/19ihWwWyYW/" target="_blank" rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#0a1a2f] text-[white] hover:bg-[#132a4b] transition-all"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#0a1a2f] text-[white] hover:bg-[#132a4b] transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/the_echooroom?igsh=MXZjNnlvb2RyNjFzbw==" target="_blank" rel="noopener noreferrer"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#0a1a2f] text-[white] hover:bg-[#132a4b] transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#0a1a2f] text-[white] hover:bg-[#132a4b] transition-all"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

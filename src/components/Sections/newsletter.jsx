
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bcspyk8", // 🔹 Replace with your EmailJS service ID
        "template_mwfcuwa", // 🔹 Replace with your template ID
        form.current,
        "frt12M-A6OOdkXiV3" // 🔹 Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Thank you for subscribing! 🎉");
          form.current.reset();
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
     <section className="relative isolate overflow-hidden darkBg py-[5rem] sm:py-[6rem] lg:py-[8rem]">
      <div className="mx-auto max-w-[90rem] px-[1.5rem] lg:px-[2rem]">
        <div className="grid grid-cols-3 gap-x-[2rem] gap-y-[2rem]">
                  {/* LEFT SECTION */}
          <div>
            <h2 className="text-[2.25rem] font-bold text-[white] tracking-tight">
              Subscribe to our newsletter
            </h2>
            <p className="mt-[1rem] text-[1.125rem] text-[gray] leading-relaxed">
            Get exclusive updates, insights, and helpful tips delivered straight to your 
            inbox every week — no spam, just valuable content.
            </p>

          <form ref={form} onSubmit={sendEmail} className="mt-[2rem] flex max-w-[25rem] gap-x-[0.75rem]">
             <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              placeholder="Enter your email"
              required
              autocomplete="on"
              className="px-4 py-3 rounded-lg w-full text-gray-900 outline-none"
            />
            <button
              type="submit"
              className="bg-[#6366F1] hover:bg-[#4F46E5] text-white px-6 py-3 rounded-lg font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

          {/* RIGHT SECTION */}
          
            {/* Card 1 */}
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[rgb(30,40,60)] p-[0.75rem] ring-1 ring-[rgb(60,70,90)]">
                <CalendarDaysIcon className="w-[1.5rem] h-[1.5rem] text-[white]" />
              </div>
              <dt className="mt-[1rem] text-[1rem] font-semibold text-[white]">
                Weekly articles
              </dt>
              <dd className="mt-[0.5rem] text-[0.9rem] text-[gray] leading-relaxed">
                Discover practical guides, expert opinions, and the 
                latest trends to keep you informed and inspired every week.
              </dd>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-[rgb(30,40,60)] p-[0.75rem] ring-1 ring-[rgb(60,70,90)]">
                <HandRaisedIcon className="w-[1.5rem] h-[1.5rem] text-[white]" />
              </div>
              <dt className="mt-[1rem] text-[1rem] font-semibold text-[white]">
                No spam
              </dt>
              <dd className="mt-[0.5rem] text-[0.9rem] text-[gray] leading-relaxed">
                
              </dd>
            </div>
          </div>
        </div>
      

      {/* Soft Gradient Accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-[100px] opacity-[0.3]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72rem] bg-[linear-gradient(to_top_right,_#6366f1,_#9333ea)]"
        />
      </div>
    </section>
  );
};

export default Newsletter;

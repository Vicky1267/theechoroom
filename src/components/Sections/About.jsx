
import { useEffect } from "react";
import { setDocumentHead } from "../utils/setDocumentHead";
import AbelImg from '../../assets/img/team/1.jpg';
import TeskaImg from '../../assets/img/team/2.jpg';
import MathewImg from '../../assets/img/team/3.jpg';
import VickImg from '../../assets/img/team/4.jpg';


const teamData = [
  {
    id: 1,
    name: 'ABEL IGONO',
    img: AbelImg,
    bio: 'Through his work, he strives to create spaces where people are respected, their voices amplified, and their stories valued as instruments'
  },
  {
    id: 2,
    name: 'TESKA ANIBODI',
    img: TeskaImg,
    bio: 'Driven by curiosity, she connects people, and purpose. Her strength lies in turning complex realities into conversations that inspire change at The Echo Room.'
  },
  {
    id: 3,
    name: 'MATHEW WOBIN',
    img: MathewImg,
    bio: 'Devoted to a life of service and compassion. His passion lies in helping others grow, find hope, and rediscover strength in their journeys. '
  },
  {
    id: 4,
    name: 'ABIODUN VICTORIA',
    img: VickImg,
    bio: 'She brings creativity, precision, and problem-solving energy to The Echo Room, helping the team think smarter and work seamlessly.'
  }
];

export default function About ({ people = teamData }) {
  useEffect(() => {
    setDocumentHead({
      title: "The Echo Room",
      description:
        "Learn more about The Echo Room — a youth-driven movement dedicated to amplifying African voices and inspiring social impact.",
    });
  }, []);
  return (
    <section id='about' className="tailwind-scope bg-[rgb(249,250,251)] text-[rgb(31,41,55)] font-sans leading-relaxed py-[80px]">
      {/* Hero / Header Section */}
      <div className="bg-gradient-to-r from-[rgb(14,116,144)] to-[rgb(30,58,138)] text-white py-[80px] text-center px-[24px]">
        <h1 className="text-[white] text-[40px] md:text-[56px] font-extrabold mb-[16px]">
          About Echo Room
        </h1>
        <p className="text-[white] max-w-[600px] mx-auto text-[18px] opacity-[0.9]">
          A space where young Africans share their voices, connect, and create
          impact through open dialogue.
        </p>
      </div>

      {/* Our Story */}
      <div className="py-[64px] px-[24px] md:px-[80px] bg-white">
        <h2 className="text-[32px] font-bold text-center text-[rgb(17,24,39)] mb-[32px]">
          Our Story
        </h2>
        <div className="max-w-[900px] mx-auto text-center text-[18px] text-[rgb(75,85,99)]">
          <p className="mb-[16px]">
            Echo Room was born out of a simple truth — that every voice has
            power. Too often, the ideas and emotions of young people go unheard.
            We created this platform to change that — to provide a safe space
            for honest expression, thoughtful dialogue, and creative
            storytelling.
          </p>
          <p>
            Today, Echo Room connects youth across Africa, sparking
            conversations that challenge, inspire, and lead to change. We
            believe when one voice echoes, it inspires others to speak — and
            together, we create a chorus of transformation.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-[64px] px-[24px] md:px-[80px] bg-[rgb(243,244,246)]">
        <h2 className="text-[32px] font-bold text-center text-[rgb(17,24,39)] mb-[48px]">
          Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-[48px] max-w-[1000px] mx-auto text-center">
          <div className="bg-white p-[32px] rounded-[16px] shadow">
            <h3 className="text-[24px] font-semibold text-[rgb(8,145,178)] mb-[12px]">
              Our Mission
            </h3>
            <p>
              To amplify young voices through open dialogue and creative
              expression.
            </p>
          </div>
          <div className="bg-white p-[32px] rounded-[16px] shadow">
            <h3 className="text-[24px] font-semibold text-[rgb(8,145,178)] mb-[12px]">
              Our Vision
            </h3>
            <p>
              An Africa where every voice is heard, valued, and echoed.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-[64px] px-[24px] md:px-[80px] bg-white text-center">
        <h2 className="text-[32px] font-bold text-[rgb(17,24,39)] mb-[32px]">
          Our Values
        </h2>
        <div className="w-full flex flex-wrap justify-center gap-[12px]">
          {["Authenticity", "Courage", "Dialogue", "Inclusion", "Change"].map(
            (value) => (
              <span
                key={value}
                className="bg-[rgb(8,145,178)] text-[white] px-[20px] py-[8px] rounded-full text-[15px] md:text-[16px] font-semibold shadow"
              >
                {value}
              </span>
            )
          )}
        </div>
      </div>

<div className="py-16 px-4 sm:px-6 md:px-20 bg-gray-100">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
    Meet the Team
  </h2>

  <div className="max-w-7xl mx-auto">
    <div className="grid-container">
      {people.map((member) => (
        <article
          key={member.id}
          className="bg-[white] rounded-2xl p-6 shadow-md text-center w-full max-w-[220px]"
        >
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/20">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-3">
            <h3 className="text-base font-semibold text-cyan-600 p-2">{member.name}</h3>
            <p className="text-xs text-gray-500 mt-2">{member.bio}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
</div>

    </section>
  );
}

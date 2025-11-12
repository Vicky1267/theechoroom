import { useState } from "react";
import { useEffect } from "react";
import { setDocumentHead } from "../utils/setDocumentHead";
import Voice1 from '../../assets/img/voices/1.jpg';
import Voice2 from '../../assets/img/voices/2.jpg';
import Voice3 from '../../assets/img/voices/3.jpg';
import Voice4 from '../../assets/img/voices/4.jpg';

const Voices = () => {
   useEffect(() => {
    setDocumentHead({
      title: "Voices | The Echo Room",
      description:
        "Hear the stories, opinions, and creative expressions of young Africans who are shaping the future.",
    });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeStory, setActiveStory] = useState(null);

const voices = [
  {
    id: 1,
    name: "Amaka, Lagos",
    category: "Mental Health",
    quote: "Speaking up saved my life — silence almost broke me.",
    image: Voice1,
    fullStory:
      "I struggled in silence for years until I realized sharing my pain could help others heal too. Now, I volunteer with mental health advocates to give young people safe spaces to talk.",
  },
  {
    id: 2,
    name: "Tunde, Abuja",
    category: "Politics",
    quote: "We are not too young to lead, we are too ready to wait.",
    image: Voice2,
    fullStory:
      "My passion for governance started during student union debates. I realized young Nigerians can shape the future — if we stop waiting for permission. Today, I mentor youths on civic engagement.",
  },
  {
    id: 3,
    name: "Mary, Enugu",
    category: "Art",
    quote: "Through painting, I speak when words fail.",
    image: Voice3,
    fullStory:
      "My paintings are inspired by the struggles and beauty of growing up in Eastern Nigeria. Every brushstroke tells a story of resilience and hope that words alone cannot capture.",
  },
  {
    id: 4,
    name: "Chidi, Kano",
    category: "Education",
    quote: "Knowledge should be a right, not a privilege.",
    image: Voice4,
    fullStory:
      "I grew up in a rural area where learning was considered a luxury. My dream is to make education accessible for every child — regardless of background or income.",
  },
];

  const categories = ["All", "Mental Health", "Politics", "Art", "Education"];

  const filteredVoices =
    selectedCategory === "All"
      ? voices
      : voices.filter((v) => v.category === selectedCategory);
      console.log("Current activeStory:", activeStory);


  return (
    <div id="voices" className="bg-[white] text-[gray:800] min-h-screen pt-[7rem] pb-[5rem]">
      {/* Header */}
      <section className="text-center mb-[3rem] px-4">
        <h2 className="text-[2.5rem] font-bold text-[#0a1a2f] mb-[1rem]">
          Voices & Stories
        </h2>
        <p className="text-[gray/600] max-w-[38rem] mx-auto">
          Real stories from young Africans sharing their truth, their passion,
          and their journey.
        </p>
      </section>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-[1rem] mb-[3rem]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-[1.25rem] py-[0.5rem] rounded-full text-sm font-medium border transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-[#0a1a2f] text-[white] border-[#0a1a2f]"
                : "border-[gray/300] text-[gray/700] hover:bg-[gray/100]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Voice Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2rem] px-[1.5rem] md:px-[3rem]">
        {filteredVoices.map((voice) => (
          <div
            key={voice.id}
            className="bg-gray-50 rounded-[1.5rem] shadow-[0_2px_10px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <img
              src={voice.image}
              alt={voice.name}
              className="w-[45%] h-[80%] object-cover"
            />
            <div className="p-[1.25rem]">
              <p className="text-[#0a1a2f] text-sm font-semibold mb-[0.25rem]">
                {voice.category}
              </p>
              <h3 className="font-semibold text-lg mb-[0.5rem] text-gray-900">
                {voice.name}
              </h3>
              <p className="text-gray-700 italic mb-[1rem]">“{voice.quote}”</p>
             <button
  onClick={() => {
    console.log("Clicked story button");
    setActiveStory(voice);
    console.log("Active story is now:", voice.name);

  }}
  
  className="text-[#0a1a2f] font-medium hover:underline"
>
  Read More →
</button>

            </div>
          </div>
        ))}
      </section>

         {/* ✅ Modal for Full Story */}
 {activeStory && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
      padding: "1rem",
      overflowY: "auto",
    }}
  >
    <div
      style={{
        background: "#fff",
        borderRadius: "1.25rem",
        maxWidth: "600px",
        width: "100%",
        padding: "2rem",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        position: "relative",
        color: "#0a1a2f",
      }}
    >
      {/* Close button */}
      <button
        onClick={() => setActiveStory(null)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
          color: "#0a1a2f",
        }}
      >
        &times;
      </button>

      {/* Story content */}
      <h2 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>
        {activeStory.name}
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
        {activeStory.fullStory}
      </p>

      {/* Optional "Read More" or Close button */}
      <div style={{ textAlign: "right" }}>
        <button
          onClick={() => setActiveStory(null)}
          style={{
            padding: "0.5rem 1rem",
            background: "#0a1a2f",
            color: "#fff",
            border: "none",
            borderRadius: "0.75rem",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {/* Submit Your Voice Form */}
      <section id = "share" className="mt-[5rem] bg-[#f3f6fb] py-[4rem] px-[1.5rem] md:px-[3rem] text-center">
        <h3 className="text-[2rem] font-bold text-[#0a1a2f] mb-[1rem]">
          Share Your Echo
        </h3>
        <p className="text-[gray/600] max-w-[36rem] mx-auto mb-[2rem]">
          Your voice matters. Whether it’s a story, poem, or spoken message —
          share it with the world.
        </p>

        <form
          className="max-w-[36rem] mx-auto bg-white p-[2rem] rounded-[1.5rem] shadow-[0_2px_12px_rgba(0,0,0,0.08)] text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-[1rem]">
            <label htmlFor="name" className="block text-[gray/700] mb-[0.5rem]">
              Name (optional)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              autocomplete="first-name"
              className="w-full p-[0.75rem] border rounded-lg focus:ring-2 focus:ring-[#0a1a2f] outline-none"
            />
          </div>
          <div className="mb-[1rem]">
            <label htmlFor="location" className="block text-[gray/700] mb-[0.5rem]">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="City, State"
              autocomplete="on"
              className="w-full p-[0.75rem] border rounded-lg focus:ring-2 focus:ring-[#0a1a2f] outline-none"
            />
          </div>
          <div className="mb-[1rem]">
            <label htmlFor="story" className="block text-gray-700 mb-[0.5rem]">
              Your Story / Message
            </label>
            <textarea
              name="story"
              id="story"
              rows="5"
              placeholder="Write your message here..."
              autocomplete="off"
              className="w-full p-[0.75rem] border rounded-lg focus:ring-2 focus:ring-[#0a1a2f] outline-none"
            ></textarea>
          </div>
          <div className="mb-[1.5rem]">
            <label htmlFor="media" className="block text-[gray/700] mb-[0.5rem]">
              Media Upload (optional)
            </label>
            <input
              name="media"
              id="media"
              type="file"
              accept="audio/*,video/*,image/*"
              className="w-full text-[gray/600] border p-[0.5rem] rounded-lg cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#0a1a2f] text-[white] font-semibold py-[0.75rem] rounded-lg hover:bg-[#142f56] transition-all duration-300"
          >
            Share Your Echo
          </button>
        </form>
      </section>
    </div>

    
  );
  
};

export default Voices;

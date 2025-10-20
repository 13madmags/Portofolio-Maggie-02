import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-maroon flex flex-col items-center justify-center px-6 py-12">
      
      {/* FOTO */}
      <Image
        src="/evelyn.jpeg"
        alt="Profile"
        width={120}
        height={120}
        className="rounded-full mb-6 border-4 border-white shadow-lg"
      />

      {/* HERO */}
      <h1 className="text-4xl font-bold mb-2">Hi, I'm Maggie 🙌</h1>
      <p className="text-gray-300 text-center max-w-md mb-12">
        AI Developer & Criminology Student who builds modern web applications and conduct research on serial killers.
      </p>

      {/* ABOUT */}
      <h2 className="text-2xl font-semibold mb-2">About Me</h2>
      <p className="text-gray-400 text-center max-w-md mb-12">
      Passionate about criminology, UI/UX, and education. Currently learning Next.js and building an LMS platform. Preparing to pursue further studies in criminology and learning about cybercrime.
      </p>

      {/* SKILLS */}
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16">
          <SiHtml5 size={40} color="#fb8627ff" />
          <SiCss3 size={40} color="#043915" />         
          <SiJavascript size={40} color="#FFFD8F" />   
          <SiReact size={40} color="#B0CE88" />        
          <SiNextdotjs size={40} color="#FFFFFF" />
          <SiTailwindcss size={40} color="#4C763B" />  
        </div>


      {/* CONTACT */}
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-gray-400 mb-4">Let’s build something together!</p>
      <a
        href="mailto:example@email.com"
        className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
      >
        Email Me
      </a>
    </main>
  );
}

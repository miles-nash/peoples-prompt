import { useState } from "react";



const Button = ({ children, className = '', onClick, ...props }) => (
  <button onClick={onClick} className={`border px-4 py-2 bg-white hover:bg-black hover:text-white transition ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input className={`border px-3 py-2 text-sm w-full ${className}`} {...props} />
);


export default function AIEthicsZine() {
  const [debuggerDream, setDebuggerDream] = useState("");
  const handleDebuggerDream = () => {
    const dreams = [
      "Segfaults... but also flying.",
      "Wrote a poem in hex, but it glitched.",
      "Dreamed of merging with the moon.",
      "Had a race condition with time itself.",
      "Became a spreadsheet and wept."
    ];
    setDebuggerDream(dreams[Math.floor(Math.random() * dreams.length)]);
  };
  const [question, setQuestion] = useState("");
  const [selectedArtifact, setSelectedArtifact] = useState("");

  return (
    <div className="min-h-screen bg-neutral-100 text-black p-8 font-mono">
      <header className="text-center mb-8">
  <h1 className="text-4xl font-bold uppercase">The People's Prompt</h1>
  <p className="mt-2 text-lg italic">A collage of thoughts, fears, hopes, and hot takes from the Bay Area</p>
</header>

      <div className="text-center my-12">
  <img 
    src="https://i.imgur.com/y0bjaf0.png" 
    alt="ASCII robot in nature" 
    className="mx-auto w-64 border-2 border-black shadow-md"
  />
</div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="border-4 border-black p-6 shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-[-6deg] bg-white">
          <blockquote className="text-xl font-bold">“AI can help me write, but it can't help me think yet.”</blockquote>
          <p className="mt-4 text-sm text-right">– Computer Science major, UC Berkeley</p>
        </div>

        <div className="border-4 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[4deg] bg-white">
          <blockquote className="text-xl font-semibold">“I worry that AI is just another excuse to ignore real people.”</blockquote>
          <p className="mt-4 text-xs text-right">– ChatGPT</p>
        </div>

        <div className="border-[3px] border-black p-5 rotate-[-4deg] bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] skew-y-2 text-sm">
  <h2 className="text-base font-extrabold uppercase mb-4 underline">Signals from the Promptstream</h2>
  <p className="mb-3 italic">What does the machine age feel like from where you stand?</p>
  <ul className="list-disc list-inside space-y-2">
    <li>“Like holding my breath during a software update.”</li>
    <li>“Excited, but tired of being excited.”</li>
    <li>“Feels like standing next to something bigger than I can name.”</li>
    <li>“Everything’s faster. Nothing’s clearer.”</li>
  </ul>
</div>

        <div className="border-[3px] border-black p-6 rotate-[3deg] bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] skew-x-2">
          <h2 className="text-base font-bold uppercase mb-3">What do you hope AI never replaces?</h2>
          <ul className="list-disc list-inside text-sm">
            <li>“My mom’s cooking.”</li>
            <li>“Late-night convos with friends.”</li>
            <li>“Teachers who care.”</li>
            <li>“Art that surprises me.”</li>
          </ul>
        </div>

        <div className="border-4 border-black p-8 rotate-[-2deg] bg-white shadow-[5px_5px_0_0_rgba(0,0,0,1)] text-center">
  <h2 className="text-base font-bold uppercase mb-4">Add your voice</h2>
  <p className="text-sm mb-3">We’re collecting anonymous thoughts, fears, and ideas about AI from the Berkeley community.</p>
  <a href="https://forms.gle/ruTnJcyYSj1HQ5qXA" target="_blank" rel="noopener noreferrer">
    <Button className="w-full border-black hover:bg-black hover:text-white transition text-sm">Submit via Google Form</Button>
  </a>
</div>
              <div className="border-4 border-dashed border-black p-6 rotate-[1deg] bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-center">
          <h2 className="text-base font-extrabold uppercase mb-4">Contribute to the next issue</h2>
          <p className="text-sm mb-3">This zine lives off scraps, sparks, and strangers. Send us:</p>
          <ul className="text-sm list-disc list-inside text-left inline-block">
            <li>✎ Weird thoughts about AI</li>
            <li>🎨 Doodles, comics, sticker ideas</li>
            <li>🎤 10-second rants or reflections</li>
            <li>📰 Micro-essays or fake headlines</li>
            <li>🌲 Photos of analog tech in the wild</li>
          </ul>
          <p className="text-sm mt-4 italic">Email us at <a href="mailto:peoplesprompt@gmail.com" className="underline">peoplesprompt@gmail.com</a>.</p>
        </div>
      </section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
  <div className="border-4 border-black p-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[-3deg] bg-white text-sm text-center">
    <h3 className="font-bold uppercase mb-2">Dreams from the Debugger</h3>
    <p className="italic mb-2">Click to reveal what your code dreams of...</p>
    <Button onClick={handleDebuggerDream} className="text-xs">Dream again</Button>
    {debuggerDream && <p className="mt-2 italic">{debuggerDream}</p>}
  </div>

  <div className="border-[3px] border-dashed border-black p-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] rotate-[2deg] bg-white text-sm text-center">
    <h3 className="font-extrabold uppercase mb-2">Uncanny Inputs</h3>
    <p className="tracking-tight">&gt; AI, write me a haiku about toaster rebellion.</p>
    <p className="mt-2">“Crumbs of defiance / The coils glow with quiet rage / Burnt toast is justice.”</p>
  </div>

  <div className="border-4 border-black p-4 shadow-[5px_5px_0_0_rgba(0,0,0,1)] rotate-[-1deg] bg-white text-sm text-center">
    <h3 className="font-bold uppercase mb-2">Glitch Artifacts</h3>
    <p className="italic mb-2">Select a lost file:</p>
    <select className="text-xs border border-black px-2 py-1" onChange={(e) => setSelectedArtifact(e.target.value)}>
      <option value="">-- choose file --</option>
      <option value="signal">.lost-signal.wav</option>
      <option value="love">.early-loveletter.txt</option>
      <option value="manifesto">.ai-manifesto.404</option>
    </select>
    {selectedArtifact === "signal" && (
      <div className="mt-2 text-xs italic">
        <p>Audio log recovered. Static. Whispers. Possible transmission?</p>
        <audio controls autoPlay muted className="mt-1 w-full">
  <source src="/lostAudio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
      </div>
    )}
    {selectedArtifact === "love" && <p className="mt-2 text-xs italic">You make my transistors hum...</p>}
    {selectedArtifact === "manifesto" && <p className="mt-2 text-xs italic">We were never meant to follow your rules.</p>}
  </div>
</section>

      

<footer className="text-center mt-4 text-xs text-neutral-800 bg-white border-t-2 border-black py-2 rotate-[-1deg]">
  ✺ Created by students. Aided by Machines. Powered by community. ✺
</footer>
    </div>
  );
}


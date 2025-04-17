import { useState } from "react";

const Button = ({ children, className = '', ...props }) => (
  <button className={`border px-4 py-2 bg-white hover:bg-black hover:text-white transition ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input className={`border px-3 py-2 text-sm w-full ${className}`} {...props} />
);


export default function AIEthicsZine() {
  const [question, setQuestion] = useState("");

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
          <blockquote className="text-xl font-bold">“AI can help me write, but it can’t help me feel. Yet.”</blockquote>
          <p className="mt-4 text-sm text-right">– Computer Science major, UC Berkeley</p>
        </div>

        <div className="border-4 border-black p-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rotate-[4deg] bg-white">
          <blockquote className="text-xl font-semibold">“I worry that AI is just another excuse to ignore real people.”</blockquote>
          <p className="mt-4 text-xs text-right">– Local artist, Oakland</p>
        </div>

        <div className="border-[3px] border-black p-5 rotate-[-4deg] bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] skew-y-2">
          <h2 className="text-base font-extrabold uppercase mb-4 underline">How do people feel about AI?</h2>
          <ul className="list-none pl-0 text-sm space-y-2">
            <li><span className="font-bold">Curious</span>: 40%</li>
            <li><span className="font-bold">Skeptical</span>: 25%</li>
            <li><span className="font-bold">Inspired</span>: 15%</li>
            <li><span className="font-bold">Afraid</span>: 20%</li>
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

        <div className="border-4 border-black p-8 rotate-[-2deg] bg-white shadow-[5px_5px_0_0_rgba(0,0,0,1)]">
          <h2 className="text-base font-bold uppercase mb-3">Leave your mark</h2>
          <Input 
            placeholder="What's a question we should all be asking about AI?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="mb-3 border-black px-3 py-2 text-sm"
          />
          <Button variant="outline" className="w-full border-black hover:bg-black hover:text-white transition text-sm">Submit</Button>
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
          <p className="text-sm mt-4 italic">Email us at <a href="https://peoplesprompt.org" className="underline">peoplesprompt.org</a> or leave a submission in the campus box (coming soon).</p>
        </div>
      </section>

      

<footer className="text-center mt-4 text-xs text-neutral-800 bg-white border-t-2 border-black py-2 rotate-[-1deg]">
  ✺ Created by students. Inspired by zines. Powered by questions. ✺
</footer>
    </div>
  );
}

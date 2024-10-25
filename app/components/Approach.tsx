import { GlareCard } from "./ui/GlareCard";
import MagicButton from "./ui/MagicButton";

const Approach = () => {
 

  return (
    <section className="w-full py-10">
      <h1 className="font-bold text-2xl md:3xl lg:4xl text-center underline">
        My <span className="text-purple-600 underline decoration-purple-600">approach</span>
      </h1>
     
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
      <GlareCard className="flex flex-col items-center justify-center">
        <MagicButton title="Phase-1" otherClasses="max-w-[150px] mb-5"/>
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-semibold text-sm mt-4 p-4">We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.</p>
    </GlareCard>
    <GlareCard className="flex flex-col items-center justify-center">
    <MagicButton title="Phase-2" otherClasses="max-w-[150px] mb-5"/>
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-semibold text-sm mt-4 p-4">Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.</p>
    </GlareCard>
    <GlareCard className="flex flex-col items-center justify-center">
    <MagicButton title="Phase-3" otherClasses="max-w-[150px] mb-5"/>
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-semibold text-sm mt-4 p-4">Once we agree on the plan, I cue my lofi playlist and dive into I'll translate everything into functional code, building your website from the ground up.</p>
    </GlareCard>
   
    </div>
    </section>
  );
};

export default Approach;

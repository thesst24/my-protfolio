import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import Skill from "@/components/Skill";

export default function About() {
  return (
    <div className="">
    <section id="about" className="py-10 max-w-4xl mx-auto text-center">
     <div>
         <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        I’m a frontend developer with a passion for creating modern, responsive
        websites.can work well in a team, maintain good relationships with all colleagues, and am always ready to learn and adapt to new environments.
      </p>
     </div>
    </section>
    <div className="flex my-10 justify-center align-center">
        <Education />
      <WorkExperience />
      <Skill />
      </div>
    </div>
  );
}

import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import Skill from "@/components/Skill";
import StudyACourse from "./StudyACourse";

export default function About() {
  return (
    <div>
      <section id="about" className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-700 leading-relaxed">
          I’m a frontend developer with a passion for creating modern,
          responsive websites. I can work well in a team and always ready
          to learn new environments.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 my-10">
        <Education />
        <WorkExperience />
        <Skill />
        <StudyACourse />
      </div>
    </div>
  );
}

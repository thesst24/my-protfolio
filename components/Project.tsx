import React from 'react';

const projects = [
  {
    name: 'Portfolio',
    description: 'About Me',
    link: 'https://my-protfolio-omega-five.vercel.app',
  },
  {
    name: 'Shopping Addin manage Items',
    description: 'Create a website to sell various types of food ',
    link: 'https://my-website-ashen-seven.vercel.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 bg-gray-100">
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="p-6 bg-white rounded shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-600 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

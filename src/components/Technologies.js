import React from 'react'
import { Code, Server, Database, Globe, Cpu, Palette, GitFork, Github, Send } from 'lucide-react'

const technologies = [
  {
    category: "Frontend",
    icon: <Globe className="w-12 h-12 text-purple-500" />,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: <Server className="w-12 h-12 text-green-500" />,
    skills: ["Node.js", "Express", "Java", "Python"]
  },
  {
    category: "Bases de Datos",
    icon: <Database className="w-12 h-12 text-blue-500" />,
    skills: ["SQLite", "MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Herramientas",
    icon: <Code className="w-12 h-12 text-red-500" />,
    skills: ["Git", "GitHub", "Postman"]
  }
]

const skillIcons = {
  "HTML5": <Code className="w-6 h-6 text-orange-500" />,
  "CSS3": <Palette className="w-6 h-6 text-blue-500" />,
  "JavaScript": <Code className="w-6 h-6 text-yellow-500" />,
  "React": <Code className="w-6 h-6 text-cyan-500" />,
  "Tailwind CSS": <Palette className="w-6 h-6 text-teal-500" />,
  "Node.js": <Server className="w-6 h-6 text-green-600" />,
  "Express": <Server className="w-6 h-6 text-gray-600" />,
  "Java": <Cpu className="w-6 h-6 text-red-500" />,
  "Python": <Code className="w-6 h-6 text-blue-700" />,
  "SQLite": <Database className="w-6 h-6 text-blue-400" />,
  "MongoDB": <Database className="w-6 h-6 text-green-700" />,
  "MySQL": <Database className="w-6 h-6 text-orange-600" />,
  "PostgreSQL": <Database className="w-6 h-6 text-blue-800" />,
  "Git": <GitFork className="w-6 h-6 text-gray-600" />,
  "GitHub": <Github className="w-6 h-6 text-black" />,
  "Postman": <Send className="w-6 h-6 text-orange-500" />
}

const Technologies = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold text-gray-900 mb-16 animate-pulse">
          Mis Tecnologías de Desarrollo
        </h2>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.category} className="bg-gray-100 bg-opacity-90 backdrop-filter backdrop-blur-lg overflow-hidden rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white p-3 rounded-full mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{tech.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tech.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-900 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      {skillIcons[skill]}
                      <span className="ml-2">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies;

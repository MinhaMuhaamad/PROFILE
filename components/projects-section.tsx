import { Card, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
const projects = [
  {
    title: "IntelliFit",
    description:
      "Intellifit is an AI-powered fitness and nutrition platform built to help you achieve your health goals with science-backed personalization and a seamless user experience.",
    image: "/pro1.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/emaanfatima28/Intellifit/",
    
    featured: true,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, built using React and Firebase.",
    image: "/task-management-dashboard.png",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current conditions and forecasts using OpenWeather API.",
    image: "/weather-dashboard-interface.png",
    technologies: ["JavaScript", "CSS3", "API Integration"],
    github: "https://github.com/",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Latest Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From concept to reality—explore how I'm bringing innovative ideas to life through code
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden ${project.featured ? "border-accent" : "border-border"}`}
            >
              <div className={`grid ${index % 2 === 0 ? "md:grid-cols-2" : "md:grid-cols-2"} gap-0`}>
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="mb-4">
                    {project.featured && (
                      <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-3">
                        Featured Project
                      </span>
                    )}
                    <CardTitle className="text-2xl font-serif mb-3">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

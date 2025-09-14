import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "Java", level: 90, icon: "☕" },
  { name: "Python", level: 85, icon: "🐍" },
  { name: "JavaScript", level: 88, icon: "🟨" },
  { name: "React", level: 82, icon: "⚛️" },
  { name: "HTML/CSS", level: 95, icon: "🌐" },
  { name: "SQL", level: 80, icon: "🗄️" },
  { name: "Node.js", level: 78, icon: "🟢" },
  { name: "Git", level: 85, icon: "📝" },
]

const technologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Java",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "SQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Firebase",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skill) => (
            <Card key={skill.name} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-semibold text-card-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-card text-card-foreground rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

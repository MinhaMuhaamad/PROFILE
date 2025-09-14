import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-card-foreground mb-2">Bachelor of Software Engineering</h3>
                <p className="text-muted-foreground mb-3">Currently in 7th Semester</p>
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  Expected Graduation: 2025
                </div>
                <p className="text-card-foreground leading-relaxed">
                  Pursuing a comprehensive education in software engineering with focus on modern development practices,
                  system design, and emerging technologies. Coursework includes data structures, algorithms, software
                  architecture, database systems, and web development.
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-card-foreground mb-3">Key Coursework</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Software Architecture",
                      "Database Systems",
                      "Web Development",
                      "Object-Oriented Programming",
                      "System Design",
                    ].map((course) => (
                      <span key={course} className="text-sm text-muted-foreground">
                        • {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4 text-balance">
            Hey, I'm <span className="text-primary">Minha Muhammad</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">Software Engineer | 7th Semester Student</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Passionate about building scalable software solutions and exploring cutting-edge technologies. Currently
            pursuing my degree in Software Engineering with a focus on modern web development and system design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          >
            About Me
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open("#", "_blank")}>
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
        </div>
      </div>
    </section>
  )
}

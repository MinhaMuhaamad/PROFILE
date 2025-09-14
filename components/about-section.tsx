export function AboutSection() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mx-auto flex items-center justify-center">
              <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center">
                <span className="text-6xl font-serif font-bold text-primary">M</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated Software Engineering student in my 7th semester, passionate about creating innovative
              solutions that make a real impact. My journey in technology began with curiosity about how things work,
              and has evolved into a deep love for problem-solving and continuous learning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in full-stack web development, with experience in modern frameworks and technologies. I enjoy
              tackling complex challenges and am always eager to learn new technologies and methodologies that can
              improve my craft.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Interests</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Web Development</li>
                  <li>• System Design</li>
                  <li>• Open Source</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Goals</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Full-Stack Mastery</li>
                  <li>• Cloud Architecture</li>
                  <li>• Team Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

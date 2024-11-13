"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Menu,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const inter = Inter({ subsets: ["latin"] });

export function BlockPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("darkMode", newMode ? "dark" : "light");
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedMode === "dark" || (savedMode === null && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "dark" : ""} ${inter.className}`}
    >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-2" href="/">
              <span className="font-bold ml-8">Gaurav Rautela</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ">
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#experience">Experience</Link>
              <Link href="#contact">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
            <div className="hidden md:flex items-center space-x-2 ml-4">
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
              />
              <label
                htmlFor="dark-mode"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {isDarkMode ? "Dark" : "Light"}
              </label>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                Skills
              </Link>
              <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link
                href="#experience"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="flex items-center space-x-2">
                <Switch
                  id="dark-mode-mobile"
                  checked={isDarkMode}
                  onCheckedChange={toggleDarkMode}
                />
                <label
                  htmlFor="dark-mode-mobile"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {isDarkMode ? "Dark" : "Light"}
                </label>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h3 className="mt-6 text-3xl font-bold">Hello there, I"m</h3>

            <h1 className="mt-6 text-5xl font-bold">Gaurav Rautela</h1>
            <p className="mt-4 text-xl text-muted-foreground">
              I am a Full Stack Developer Passionate about creating efficient,
              scalable, and user-friendly web applications. Committed to
              continuous learning and innovation in the ever-evolving tech
              landscape.
            </p>
            <Button className="mt-8" asChild>
              <Link href="#projects">View My Projects</Link>
            </Button>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Technical Skills</h2>
          <Tabs defaultValue="frontend">
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="databases">Databases</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="React" level="Expert" isCore />
                <SkillCard name="TypeScript" level="Expert" isCore />
                <SkillCard name="Next.js" level="Advanced" isCore />
                <SkillCard name="CSS/Sass" level="Expert" />
                <SkillCard name="Tailwind CSS" level="Advanced" />
                <SkillCard name="Redux" level="Advanced" />
              </div>
            </TabsContent>
            <TabsContent value="backend">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="Node.js" level="Expert" isCore />
                <SkillCard name="Express.js" level="Advanced" />
                <SkillCard name="Python" level="Intermediate" />
                <SkillCard name="GraphQL" level="Advanced" />
                <SkillCard name="RESTful APIs" level="Expert" />
              </div>
            </TabsContent>
            <TabsContent value="databases">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="MongoDB" level="Advanced" />
                <SkillCard name="PostgreSQL" level="Intermediate" />
                <SkillCard name="Redis" level="Intermediate" />
              </div>
            </TabsContent>
            <TabsContent value="devops">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <SkillCard name="Docker" level="Advanced" />
                <SkillCard name="Kubernetes" level="Intermediate" />
                <SkillCard name="CI/CD" level="Advanced" />
                <SkillCard name="AWS" level="Intermediate" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="projects" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              name="E-commerce Platform"
              liveUrl="https://example-ecommerce.com"
              githubUrl="https://github.com/janedoe/ecommerce"
              technologies={["React", "Node.js", "MongoDB", "Redux"]}
              challenge="Developing a scalable and performant e-commerce solution"
              solution="Implemented server-side rendering and optimized database queries"
              preview="/placeholder.svg?height=200&width=300"
              role="Full Stack Developer"
              impact="Increased conversion rate by 25% and reduced page load time by 40%"
            />
            <ProjectCard
              name="Task Management App"
              liveUrl="https://example-taskapp.com"
              githubUrl="https://github.com/janedoe/taskapp"
              technologies={["React Native", "GraphQL", "PostgreSQL"]}
              challenge="Creating a cross-platform mobile app with real-time updates"
              solution="Utilized GraphQL subscriptions and optimistic UI updates"
              preview="/placeholder.svg?height=200&width=300"
              role="Mobile App Developer"
              impact="Achieved 100,000+ downloads and 4.8-star rating on app stores"
            />
            <ProjectCard
              name="AI-powered Analytics Dashboard"
              liveUrl="https://example-dashboard.com"
              githubUrl="https://github.com/janedoe/ai-dashboard"
              technologies={["Next.js", "Python", "TensorFlow", "D3.js"]}
              challenge="Integrating machine learning models with interactive visualizations"
              solution="Developed a microservices architecture with real-time data processing"
              preview="/placeholder.svg?height=200&width=300"
              role="Full Stack Developer & ML Engineer"
              impact="Reduced data analysis time by 60% for enterprise clients"
            />
          </div>
        </section>

        <section id="experience" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Professional Experience</h2>
          <div className="space-y-8">
            <ExperienceCard
              company="Tech Innovators Inc."
              duration="2020 - Present"
              title="Senior Full Stack Developer"
              achievements={[
                "Led a team of 5 developers in delivering a high-traffic web application, resulting in a 30% increase in user engagement",
                "Implemented microservices architecture, improving system scalability and reducing downtime by 50%",
                "Mentored junior developers and conducted code reviews, enhancing overall team productivity by 25%",
              ]}
              technologies={["React", "Node.js", "GraphQL", "AWS"]}
            />
            <ExperienceCard
              company="Digital Solutions Ltd."
              duration="2017 - 2020"
              title="Frontend Developer"
              achievements={[
                "Developed responsive and accessible user interfaces for 10+ client projects",
                "Reduced application bundle size by 40% through code splitting and lazy loading techniques",
                "Collaborated with UX designers to implement pixel-perfect designs and smooth animations",
              ]}
              technologies={["React", "Redux", "Sass", "Webpack"]}
            />
          </div>
        </section>

        <section id="about" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>
          <div className="space-y-4">
            <p>
              My journey in web development began over 7 years ago when I built
              my first HTML website. Since then, I've been on a continuous
              learning path, embracing new technologies and best practices to
              create efficient, scalable, and user-friendly web applications.
            </p>
            <p>
              My coding philosophy centers around writing clean, maintainable
              code that solves real-world problems. I believe in the power of
              collaboration and open-source contributions to drive innovation in
              our field.
            </p>
            <p>
              My areas of expertise include full-stack JavaScript development,
              responsive design, and cloud-based architectures. I'm particularly
              passionate about performance optimization and creating seamless
              user experiences.
            </p>
            <p>
              Currently, I'm focused on deepening my knowledge of machine
              learning and its applications in web development. I'm also
              exploring the potential of WebAssembly to push the boundaries of
              browser-based applications.
            </p>
          </div>
        </section>

        <section id="blog" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Technical Writing</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BlogPostCard
              title="Optimizing React Performance: A Deep Dive"
              excerpt="Explore advanced techniques to boost your React application's performance, including code splitting, memoization, and efficient state management."
              url="https://example-blog.com/react-performance"
            />
            <BlogPostCard
              title="Building Scalable Microservices with Node.js"
              excerpt="Learn how to design and implement a robust microservices architecture using Node.js, Docker, and Kubernetes for improved scalability and maintainability."
              url="https://example-blog.com/nodejs-microservices"
            />
            <BlogPostCard
              title="Mastering CSS Grid: Advanced Layout Techniques"
              excerpt="Discover powerful CSS Grid features and learn how to create complex, responsive layouts with ease using modern CSS techniques."
              url="https://example-blog.com/css-grid-mastery"
            />
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out if you'd like to discuss a project or just
                chat about web development!
              </p>
              <div className="space-y-2">
                <a
                  href="mailto:jane@example.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                  <span>jane@example.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/janedoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/janedoe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                >
                  <FileText className="h-5 w-5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              Built with React, Next.js, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ name, level, isCore = false }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{level}</CardDescription>
      </CardHeader>
      <CardFooter>{isCore && <Badge>Core Skill</Badge>}</CardFooter>
    </Card>
  );
}

function ProjectCard({
  name,
  liveUrl,
  githubUrl,
  technologies,
  challenge,
  solution,
  preview,
  role,
  impact,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={preview}
          alt={name}
          width={300}
          height={200}
          className="mb-4 rounded-lg"
        />
        <p className="mb-2">
          <strong>Challenge:</strong> {challenge}
        </p>
        <p className="mb-2">
          <strong>Solution:</strong> {solution}
        </p>
        <p className="mb-2">
          <strong>Impact:</strong> {impact}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button asChild>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            Live Demo <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

function ExperienceCard({
  company,
  duration,
  title,
  achievements,
  technologies,
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{company}</CardTitle>
        <CardDescription>{duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">{title}</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function BlogPostCard({ title, excerpt, url }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

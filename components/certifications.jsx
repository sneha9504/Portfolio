import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "December 2024",
    credential: "AWS-CP-2024",
    logo: "/aws-logo-orange.jpg",
    color: "from-orange-100 to-amber-50",
  },
  {
    title: "Google UX Design Professional",
    issuer: "Google",
    date: "September 2024",
    credential: "GUXD-2024",
    logo: "/colorful-google-logo.png",
    color: "from-blue-100 to-green-50",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "June 2024",
    credential: "META-FE-2024",
    logo: "/meta-logo-blue.jpg",
    color: "from-blue-100 to-indigo-50",
  },
  {
    title: "Figma UI/UX Masterclass",
    issuer: "Figma",
    date: "March 2024",
    credential: "FIG-UX-2024",
    logo: "/figma-logo-purple-orange.jpg",
    color: "from-purple-100 to-pink-50",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-secondary/30">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-primary/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Award size={18} />
            <span className="text-lg font-medium tracking-wide">Certifications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground text-balance">Professional Credentials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Committed to continuous learning and staying current with industry standards and best practices.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-50 group-hover:opacity-70 transition-opacity`}
              />

              <CardContent className="relative p-6">
                <div className="flex items-start gap-4">
                  {/* Logo */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-background shadow-md p-2 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={cert.issuer}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-1">ID: {cert.credential}</span>
                    </div>
                  </div>

                  {/* External Link */}
                  <a
                    href="#"
                    className="p-2 rounded-full bg-background/80 text-muted-foreground hover:text-primary hover:bg-background transition-colors opacity-0 group-hover:opacity-100"
                    aria-label={`View ${cert.title} credential`}
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

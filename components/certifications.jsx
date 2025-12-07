import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"

const certifications = [
  {
    title: "Front-End Development",
    issuer: "Felix-Its",
    date: "August 2025",
    credential: "158733580",
    logo: "/felix-its.png",
    color: "from-orange-100 to-amber-50",
    credentialURL: "https://www.credential.net/d88d4219-2f52-4e9e-b243-98711e9d1201#acc.oH2sLTZi"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "August 2025",
    credential: "6898c6464b9ed0285f8dd390",
    logo: "/postman.png",
    color: "from-blue-100 to-green-50",
    credentialURL: "https://badgr.com/public/assertions/e6OhrSj-TdmV9m_0c-LePg?identity__email=snehawani4321%40gmail.com"
  },
  {
    title: "WordPress Crash Course: Build any Website in Minutes",
    issuer: "Udemy",
    date: "September 2025",
    credential: "UC-dd5aefc0-014c-403f-88bd-6ea8ad536cd4",
    logo: "/udemy.png",
    color: "from-blue-100 to-indigo-50",
    credentialURL: "https://www.udemy.com/certificate/UC-dd5aefc0-014c-403f-88bd-6ea8ad536cd4/"
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL",
    date: "October 2024",
    credential: "NPTEL24CS96S457800114",
    logo: "/nptel.png",
    color: "from-purple-100 to-pink-50",
    credentialURL: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS96S45780011404320557"
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32 bg-secondary/10">
      {/* Background Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
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
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-50 group-hover:opacity-70 transition-opacity`}
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
                    href={cert.credentialURL || "#"}
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

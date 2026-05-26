import Navigation from "../components/navigation";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Certifications from "../components/certifications";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/footer";

export const metadata = {
  title: {
    absolute: "Sneha Wani — Frontend & Full-stack Developer Portfolio",
  },
  description:
    "Sneha Wani — Frontend & Full-stack Developer. Portfolio showcasing projects, experience and contact details for recruiters and teams.",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Sneha Wani — Portfolio",
    description:
      "Frontend & Full-stack Developer. Portfolio showcasing projects, experience and contact details for recruiters and teams.",
    url: "/",
    siteName: "Sneha Wani Portfolio",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Sneha Wani — Frontend & Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Wani — Frontend Developer",
    description:
      "Sneha Wani — Frontend & Full-stack Developer focused on accessible, high-performance web experiences using React and Next.js.",
    images: ["/profile.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://sneha-wani.netlify.app/#person",
      "name": "Sneha Wani",
      "url": "https://sneha-wani.netlify.app/",
      "sameAs": [
        "https://github.com/sneha9504",
        "https://www.linkedin.com/in/snehawani/"
      ],
      "jobTitle": "Frontend / Full-stack Developer",
      "image": "https://sneha-wani.netlify.app/profile.jpg",
      "knowsAbout": ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      "@type": "WebSite",
      "@id": "https://sneha-wani.netlify.app/#website",
      "url": "https://sneha-wani.netlify.app/",
      "name": "Sneha Wani Portfolio",
      "publisher": {
        "@type": "Person",
        "name": "Sneha Wani",
        "url": "https://sneha-wani.netlify.app/"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://sneha-wani.netlify.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://sneha-wani.netlify.app/#home",
      "url": "https://sneha-wani.netlify.app/",
      "name": "Sneha Wani — Frontend & Full-stack Developer Portfolio",
      "description": "Sneha Wani — Frontend & Full-stack Developer. Portfolio showcasing projects, experience and contact details for recruiters and teams.",
      "datePublished": "2025-12-02",
      "dateModified": "2025-12-06",
      "inLanguage": "en",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://sneha-wani.netlify.app/profile.jpg"
      },
      "author": {
        "@id": "https://sneha-wani.netlify.app/#person"
      },
      "publisher": {
        "@id": "https://sneha-wani.netlify.app/#organization"
      },
      "isPartOf": {
        "@id": "https://sneha-wani.netlify.app/#website"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://sneha-wani.netlify.app/#profile-page",
      "url": "https://sneha-wani.netlify.app/",
      "name": "Sneha Wani — Frontend & Full-stack Developer Portfolio",
      "about": {
        "@id": "https://sneha-wani.netlify.app/#person"
      },
      "mainEntity": {
        "@id": "https://sneha-wani.netlify.app/#person"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://sneha-wani.netlify.app/#organization",
      "name": "Sneha Wani",
      "url": "https://sneha-wani.netlify.app/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sneha-wani.netlify.app/profile.jpg"
      },
      "sameAs": [
        "https://github.com/sneha9504",
        "https://www.linkedin.com/in/snehawani/"
      ]
    },
  ]
};

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />

      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

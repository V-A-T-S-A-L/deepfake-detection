import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b border-border">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            DeepFake Detector
          </Link>
          <div className="space-x-4">
            
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-12 px-4">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            DeepFake Detector is at the forefront of combating digital misinformation. Our advanced AI technology is
            designed to identify and flag manipulated media, helping to maintain the integrity of digital content in an
            era where deepfakes are becoming increasingly sophisticated and prevalent.
          </p>
          <p className="text-lg mb-4">
            Founded by a team of AI experts and cybersecurity professionals, our mission is to empower individuals,
            organizations, and media outlets with the tools they need to verify the authenticity of digital content.
          </p>
          <p className="text-lg">
            We believe in a future where digital trust is the norm, not the exception. Join us in our fight against
            misinformation and help us build a more transparent digital world.
          </p>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">DeepFake Detector</h3>
              <p>Protecting truth in the digital age.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
               
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm mt-8">© 2023 DeepFake Detector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}


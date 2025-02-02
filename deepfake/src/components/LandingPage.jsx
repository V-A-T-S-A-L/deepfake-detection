"use client"; // Ensure this runs on the client side
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Zap, Eye } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { auth } from "@/firebaseConfig"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase auth state observer

const LandingPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  // Check if the user is logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 border-b border-border">
        <nav className="container mx-auto flex justify-between items-center">
          <button onClick={() => navigate('home')} className="text-2xl font-bold text-primary">DeepFake Detector</button>
          <div className="space-x-4">
            <button onClick={() => navigate('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => navigate('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            {/* Conditionally render Login and Sign Up buttons */}
            {!isLoggedIn && (
              <>
                <Button variant="outline">Login</Button>
                <Button>Sign Up</Button>
              </>
            )}
          </div>
        </nav>
      </header>

      <main className="container mx-auto mt-12 px-4">
        {currentPage === 'home' && (
          <>
            <section className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-4">Detect DeepFakes with Confidence</h1>
              <p className="text-xl mb-8">Our cutting-edge AI technology helps you identify manipulated media with unparalleled accuracy.</p>
              <Button size="lg" className="mr-4">Get Started</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </section>

            <Separator className="my-12" />

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                      Upload
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Upload your media file (image or video) to our secure platform.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="mr-2 h-6 w-6 text-primary" />
                      Analyze
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Our AI algorithms analyze the media for signs of manipulation.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="mr-2 h-6 w-6 text-primary" />
                      Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Receive a detailed report on the authenticity of your media.
                  </CardContent>
                </Card>
              </div>
            </section>
          </>
        )}

        {currentPage === 'about' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              DeepFake Detector is at the forefront of combating digital misinformation. Our advanced AI technology
              is designed to identify and flag manipulated media, helping to maintain the integrity of digital content
              in an era where deepfakes are becoming increasingly sophisticated and prevalent.
            </p>
          </section>
        )}

        {currentPage === 'contact' && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>We'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </section>
        )}
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
                <li><button onClick={() => navigate('home')} className="hover:text-primary transition-colors">Home</button></li>
                <li><button onClick={() => navigate('about')} className="hover:text-primary transition-colors">About</button></li>
                <li><button onClick={() => navigate('contact')} className="hover:text-primary transition-colors">Contact</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm">© 2023 DeepFake Detector. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { ShieldCheck, Zap, Eye } from "lucide-react"
 // Ensure this runs on the client side
import { useState, useEffect } from "react";

import { auth } from "@/firebaseConfig"; // Import Firebase auth
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null); // Track logged-in user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <video autoPlay loop muted className="absolute top-0 left-0 min-w-full min-h-full object-cover opacity-30 z-0">
        <source src="/deepfake-background.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10">
        <header className="p-4 border-b border-border bg-background/80 backdrop-blur-sm">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              DeepFake Detector
            </Link>
            <div className="flex space-x-4">
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Welcome, {user.displayName || "User"}!</span>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link href="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </header>


        <main className="container mx-auto mt-12 px-4">
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 animate-text-glow">Detect DeepFakes with Confidence</h1>
            <p className="text-xl mb-8">
              Our cutting-edge AI technology helps you identify manipulated media with unparalleled accuracy.
            </p>
            <Button size="lg" className="mr-4 animate-pulse-slow">
              Get Started
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-text-glow">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animate-float">
              <Link href="/upload" passHref>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="mr-2 h-6 w-6 text-primary" />
                    Upload
                  </CardTitle>
                </CardHeader>
                <CardContent>Upload your media file (image or video) to our secure platform.</CardContent>
                </Link>
              </Card>
              <Card className="animate-float animation-delay-200">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2 h-6 w-6 text-primary" />
                    Analyze
                  </CardTitle>
                </CardHeader>
                <CardContent>Our AI algorithms analyze the media for signs of manipulation.</CardContent>
              </Card>
              <Card className="animate-float animation-delay-400">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="mr-2 h-6 w-6 text-primary" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent>Receive a detailed report on the authenticity of your media.</CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-text-glow">Try It Now</h2>
            <Card className="max-w-md mx-auto animate-fade-in">
              <CardHeader>
                <CardTitle>Upload Media</CardTitle>
                <CardDescription>Supported formats: JPG, PNG, MP4</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="media">Media File</Label>
                  <Input id="media" type="file" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Analyze</Button>
              </CardFooter>
            </Card>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-text-glow">Pricing</h2>
            <Tabs defaultValue="monthly" className="max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <Card className="animate-float">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>For personal use</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$9.99/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li>100 analyses per month</li>
                        <li>Basic report</li>
                        <li>Email support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Choose Plan</Button>
                    </CardFooter>
                  </Card>
                  <Card className="animate-float animation-delay-200">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For professionals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$29.99/mo</p>
                      <ul className="mt-4 space-y-2">
                        <li>500 analyses per month</li>
                        <li>Detailed report</li>
                        <li>Priority support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Choose Plan</Button>
                    </CardFooter>
                  </Card>
                  <Card className="animate-float animation-delay-400">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Custom</p>
                      <ul className="mt-4 space-y-2">
                        <li>Unlimited analyses</li>
                        <li>Advanced API access</li>
                        <li>24/7 dedicated support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <Card className="animate-float">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>For personal use</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$99.99/yr</p>
                      <ul className="mt-4 space-y-2">
                        <li>100 analyses per month</li>
                        <li>Basic report</li>
                        <li>Email support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Choose Plan</Button>
                    </CardFooter>
                  </Card>
                  <Card className="animate-float animation-delay-200">
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For professionals</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">$299.99/yr</p>
                      <ul className="mt-4 space-y-2">
                        <li>500 analyses per month</li>
                        <li>Detailed report</li>
                        <li>Priority support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Choose Plan</Button>
                    </CardFooter>
                  </Card>
                  <Card className="animate-float animation-delay-400">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For large organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">Custom</p>
                      <ul className="mt-4 space-y-2">
                        <li>Unlimited analyses</li>
                        <li>Advanced API access</li>
                        <li>24/7 dedicated support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        </main>

        <footer className="bg-muted/80 backdrop-blur-sm py-8 mt-16">
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
                    <Link href="/about" className="hover:text-primary transition-colors">
                      About
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
            <Separator className="my-8" />
            <p className="text-center text-sm">© 2023 DeepFake Detector. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}


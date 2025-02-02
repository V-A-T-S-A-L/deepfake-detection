"use client"; // Ensure this runs on the client side
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig"; // Use absolute path

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize router

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      await signInWithEmailAndPassword(auth, email, password);
      

      // Navigate to LandingPage after successful login
      router.push("/"); // Ensure the correct route is used
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="shetty@gmail.com" required 
                  value={email} onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required 
                  value={password} onChange={(e) => setPassword(e.target.value)} 
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
            <CardFooter className="flex flex-col space-y-4 mt-4">
              <Button type="submit" className="w-full">Login</Button>
              <div className="text-sm text-muted-foreground text-center">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

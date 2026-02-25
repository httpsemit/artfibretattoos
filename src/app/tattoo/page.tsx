import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, Brush, Users, Star } from 'lucide-react';

export default function TattooStudioPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Brush className="h-12 w-12 text-accent mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Tattoo Studio
              </h1>
            </div>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Welcome to North Lakhimpur's premier tattoo studio. Specializing in 
              traditional Japanese, tribal, and custom freehand designs that tell your unique story.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">5.0</span>
                </div>
                <p className="text-sm text-muted">Google Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Brush className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">10+</span>
                </div>
                <p className="text-sm text-muted">Years Experience</p>
              </div>
            </div>
            
            <Button variant="glass" size="lg" asChild>
              <Link href="/tattoo/book">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Tattoo Services
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From traditional Japanese art to contemporary designs, we offer a wide range of styles 
              to bring your vision to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🐉</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Traditional Japanese
                </h3>
                <p className="text-muted text-sm mb-4">
                  Authentic Japanese motifs with bold lines and vibrant colors
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🔺</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Tribal Designs
                </h3>
                <p className="text-muted text-sm mb-4">
                  Bold geometric patterns inspired by indigenous traditions
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">✏️</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Freehand Art
                </h3>
                <p className="text-muted text-sm mb-4">
                  Unique designs created directly on your skin
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🎯</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Fine Line
                </h3>
                <p className="text-muted text-sm mb-4">
                  Delicate, precise lines for detailed artwork
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">⚫</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Black & Grey
                </h3>
                <p className="text-muted text-sm mb-4">
                  Timeless monochrome tattoos with depth and dimension
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl">🌈</div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  Color Work
                </h3>
                <p className="text-muted text-sm mb-4">
                  Vibrant, colorful designs that make a statement
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/tattoo/portfolio">
                    View Examples
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Tattoo Process
              </h2>
              <p className="text-lg text-muted">
                From consultation to aftercare, we ensure a smooth and professional experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h3 className="font-semibold text-foreground mb-2">Consultation</h3>
                <p className="text-sm text-muted">
                  Discuss your ideas and get a custom design proposal
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h3 className="font-semibold text-foreground mb-2">Design</h3>
                <p className="text-sm text-muted">
                  Create a unique design tailored to your vision
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h3 className="font-semibold text-foreground mb-2">Tattoo Session</h3>
                <p className="text-sm text-muted">
                  Professional application in a clean, comfortable environment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  4
                </div>
                <h3 className="font-semibold text-foreground mb-2">Aftercare</h3>
                <p className="text-sm text-muted">
                  Complete guidance for proper healing and maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Dream Tattoo?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join our 500+ happy clients who trust us with their tattoo journey. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/tattoo/portfolio">
                View Portfolio
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" asChild>
              <Link href="/tattoo/book">
                Book Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

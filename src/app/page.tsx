import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 wave-pattern opacity-5" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Tattoo Focus */}
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                <span>5.0 Google Rating - North Lakhimpur's Premier Studio</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Ink on Skin.
                <span className="block text-accent">Ink on Canvas.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted max-w-2xl">
                Experience the art of traditional Japanese tattoos and fine paintings. 
                Where ancient techniques meet modern expression in North Lakhimpur, Assam.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/tattoo/book">
                    Book a Tattoo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/art">
                    Explore the Art
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Right Side - Visual Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src="/images/tattoos/dhrba_body_art_14041205_170705993.jpg"
                    alt="Featured Japanese Tattoo Artwork"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-lg font-medium">Featured Artwork Gallery</p>
                    <p className="text-white/80 text-sm">Japanese Traditional Style</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Works
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A glimpse into our world of tattoos and traditional Japanese art
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tattoo Portfolio Preview */}
            <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/tattoos/artfibre_tattoos_14041205_170659106.jpg"
                    alt="Traditional Japanese Piece"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Traditional Japanese
                  </h3>
                  <p className="text-sm text-muted">Tattoo • Back Piece</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/tattoos/artfibre_tattoos_14041205_170659610.jpg"
                    alt="Tribal Design"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Tribal Design
                  </h3>
                  <p className="text-sm text-muted">Tattoo • Arm</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/tattoos/artfibre_tattoos_14041205_170700072.jpg"
                    alt="Japanese Dragon"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Japanese Dragon
                  </h3>
                  <p className="text-sm text-muted">Tattoo • Back</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/tattoos/artfibre_tattoos_14041205_170700582.jpg"
                    alt="Freehand Art"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    Freehand Art
                  </h3>
                  <p className="text-sm text-muted">Tattoo • Arm</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/tattoo/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Trusted by clients across Assam and Northeast India
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "Amazing work! The attention to detail and artistic vision exceeded my expectations. 
                  Worth traveling from Guwahati for this quality."
                </p>
                <p className="font-semibold text-foreground">- Rahul D.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "The Japanese traditional art pieces are breathtaking. 
                  I now have both a tattoo and a painting from the same artist!"
                </p>
                <p className="font-semibold text-foreground">- Priya S.</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-accent" />
                  ))}
                </div>
                <p className="text-muted mb-4">
                  "Professional, hygienic, and incredibly talented. 
                  The freehand tribal design was exactly what I wanted."
                </p>
                <p className="font-semibold text-foreground">- Arjun M.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're looking for your first tattoo or adding to your collection, 
            or interested in owning original Japanese art, we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/tattoo/book">
                Book Your Session
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

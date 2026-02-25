'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight, Brush, Award, Palette, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

      {/* Accessories Preview */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Artfibre Accessories
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover our curated collection of traditional Japanese jewelry, malas, chains, and accessories. 
              Each piece is handcrafted with artistic precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Featured Accessory 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-t-lg overflow-hidden">
                    <img
                      src="/images/tattoos/artfibre_tattoos_14041205_170659106.jpg"
                      alt="Traditional Japanese Mala"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-2 right-2 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-accent font-medium">Mala</span>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Traditional Japanese Mala
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted mb-3">
                    Handcrafted Buddhist prayer beads
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-foreground">
                        ₹2,999
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="glass"
                      onClick={() => {
                        const message = encodeURIComponent(
                          'Hi! I\'m interested in the Traditional Japanese Mala (₹2999) from Artfibre Accessories. Can you provide more details about this product?'
                        );
                        const whatsappUrl = `https://wa.me/919678449790?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Accessory 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-t-lg overflow-hidden">
                    <img
                      src="/images/tattoos/artfibre_tattoos_14041205_170659610.jpg"
                      alt="Silver Chain Necklace"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-accent font-medium">Chains</span>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Silver Chain Necklace
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted mb-3">
                    Sterling silver with Japanese pendant
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-foreground">
                        ₹4,999
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="glass"
                      onClick={() => {
                        const message = encodeURIComponent(
                          'Hi! I\'m interested in the Silver Chain Necklace (₹4999) from Artfibre Accessories. Can you provide more details about this product?'
                        );
                        const whatsappUrl = `https://wa.me/919678449790?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Accessory 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-t-lg overflow-hidden">
                    <img
                      src="/images/tattoos/artfibre_tattoos_14041205_170700072.jpg"
                      alt="Tribal Bracelet Set"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-accent font-medium">Bracelets</span>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      Tribal Bracelet Set
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted mb-3">
                    Set of 3 tribal-style bracelets
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-foreground">
                        ₹1,899
                      </span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="glass"
                      onClick={() => {
                        const message = encodeURIComponent(
                          'Hi! I\'m interested in the Tribal Bracelet Set (₹1899) from Artfibre Accessories. Can you provide more details about this product?'
                        );
                        const whatsappUrl = `https://wa.me/919678449790?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                    >
                      Inquire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* View All Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => window.location.href = '/accessories'}>
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-t-lg overflow-hidden flex items-center justify-center">
                  <div className="text-center space-y-4 p-6">
                    <div className="h-16 w-16 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-2xl">📿</span>
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      View All Accessories
                    </h3>
                    <p className="text-sm text-muted">
                      Explore our complete collection
                    </p>
                    <Button variant="outline" size="sm">
                      Browse Shop
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="glass" size="lg" asChild>
              <Link href="/accessories">
                Explore Full Accessories Collection
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

'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { TattooPortfolio, TattooStyle } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Filter, X } from 'lucide-react';

// Mock data - replace with CMS data later
const mockPortfolio: TattooPortfolio[] = [
  {
    _id: '1',
    title: 'Traditional Japanese Piece',
    style: 'Japanese',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/artfibre_tattoos_14041205_170659106.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170659106.jpg',
    description: 'Traditional Japanese artwork with bold lines and classic motifs',
    createdAt: '2024-01-15'
  },
  {
    _id: '2',
    title: 'Tribal Design',
    style: 'Tribal',
    placement: 'Arm',
    approximateSize: 'Medium',
    image: '/images/tattoos/artfibre_tattoos_14041205_170659610.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170659610.jpg',
    description: 'Bold tribal pattern with strong geometric elements',
    createdAt: '2024-01-20'
  },
  {
    _id: '3',
    title: 'Japanese Dragon',
    style: 'Japanese',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/artfibre_tattoos_14041205_170700072.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170700072.jpg',
    description: 'Detailed Japanese dragon with traditional styling',
    createdAt: '2024-02-01'
  },
  {
    _id: '4',
    title: 'Freehand Art',
    style: 'Freehand',
    placement: 'Arm',
    approximateSize: 'Small',
    image: '/images/tattoos/artfibre_tattoos_14041205_170700582.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170700582.jpg',
    description: 'Freehand design created directly on skin',
    createdAt: '2024-02-10'
  },
  {
    _id: '5',
    title: 'Geometric Pattern',
    style: 'Geometric',
    placement: 'Chest',
    approximateSize: 'Medium',
    image: '/images/tattoos/artfibre_tattoos_14041205_170701074.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170701074.jpg',
    description: 'Sacred geometry with precise lines and patterns',
    createdAt: '2024-02-15'
  },
  {
    _id: '6',
    title: 'Black & Grey Work',
    style: 'Black & Grey',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/artfibre_tattoos_14041205_170701588.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170701588.jpg',
    description: 'Monochrome artwork with detailed shading',
    createdAt: '2024-02-20'
  },
  {
    _id: '7',
    title: 'Color Tattoo',
    style: 'Color',
    placement: 'Arm',
    approximateSize: 'Medium',
    image: '/images/tattoos/artfibre_tattoos_14041205_170702078.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170702078.jpg',
    description: 'Vibrant color work with smooth gradients',
    createdAt: '2024-02-25'
  },
  {
    _id: '8',
    title: 'Fine Line Design',
    style: 'Fine Line',
    placement: 'Wrist',
    approximateSize: 'Small',
    image: '/images/tattoos/artfibre_tattoos_14041205_170702593.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170702593.jpg',
    description: 'Delicate fine line work with intricate details',
    createdAt: '2024-03-01'
  },
  {
    _id: '9',
    title: 'Japanese Back Piece',
    style: 'Japanese',
    placement: 'Full Back',
    approximateSize: 'Large',
    image: '/images/tattoos/artfibre_tattoos_14041205_170748265.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170748265.jpg',
    description: 'Large scale Japanese back piece with traditional elements',
    createdAt: '2024-03-05'
  },
  {
    _id: '10',
    title: 'Tribal Arm Band',
    style: 'Tribal',
    placement: 'Arm',
    approximateSize: 'Medium',
    image: '/images/tattoos/artfibre_tattoos_14041205_170803162.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170803162.jpg',
    description: 'Polynesian inspired tribal arm band',
    createdAt: '2024-03-10'
  },
  {
    _id: '11',
    title: 'Script Tattoo',
    style: 'Script',
    placement: 'Forearm',
    approximateSize: 'Small',
    image: '/images/tattoos/artfibre_tattoos_14041205_170803613.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170803613.jpg',
    description: 'Custom script with elegant lettering',
    createdAt: '2024-03-15'
  },
  {
    _id: '12',
    title: 'Portrait Work',
    style: 'Portrait',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/artfibre_tattoos_14041205_170804113.jpg',
    thumbnail: '/images/tattoos/artfibre_tattoos_14041205_170804113.jpg',
    description: 'Realistic portrait with detailed shading',
    createdAt: '2024-03-20'
  },
  {
    _id: '13',
    title: 'Body Art Piece',
    style: 'Freehand',
    placement: 'Chest',
    approximateSize: 'Medium',
    image: '/images/tattoos/dhrba_body_art_14041205_170653360.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170653360.jpg',
    description: 'Freehand body art with flowing lines',
    createdAt: '2024-03-25'
  },
  {
    _id: '14',
    title: 'Abstract Design',
    style: 'Geometric',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/dhrba_body_art_14041205_170653839.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170653839.jpg',
    description: 'Abstract geometric composition',
    createdAt: '2024-03-30'
  },
  {
    _id: '15',
    title: 'Traditional Pattern',
    style: 'Tribal',
    placement: 'Arm',
    approximateSize: 'Medium',
    image: '/images/tattoos/dhrba_body_art_14041205_170654362.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170654362.jpg',
    description: 'Traditional tribal pattern work',
    createdAt: '2024-04-05'
  },
  {
    _id: '16',
    title: 'Fine Line Art',
    style: 'Fine Line',
    placement: 'Wrist',
    approximateSize: 'Small',
    image: '/images/tattoos/dhrba_body_art_14041205_170654857.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170654857.jpg',
    description: 'Delicate fine line artwork',
    createdAt: '2024-04-10'
  },
  {
    _id: '17',
    title: 'Color Composition',
    style: 'Color',
    placement: 'Back',
    approximateSize: 'Large',
    image: '/images/tattoos/dhrba_body_art_14041205_170655340.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170655340.jpg',
    description: 'Vibrant color composition with multiple elements',
    createdAt: '2024-04-15'
  },
  {
    _id: '18',
    title: 'Japanese Inspired',
    style: 'Japanese',
    placement: 'Full Back',
    approximateSize: 'Large',
    image: '/images/tattoos/dhrba_body_art_14041205_170705993.jpg',
    thumbnail: '/images/tattoos/dhrba_body_art_14041205_170705993.jpg',
    description: 'Japanese inspired large scale work',
    createdAt: '2024-04-20'
  }
];

const tattooStyles: TattooStyle[] = [
  'Tribal',
  'Freehand', 
  'Japanese',
  'Fine Line',
  'Black & Grey',
  'Color',
  'Portrait',
  'Geometric',
  'Script'
];

export default function TattooPortfolio() {
  const [selectedStyle, setSelectedStyle] = useState<TattooStyle | 'all'>('all');
  const [selectedImage, setSelectedImage] = useState<TattooPortfolio | null>(null);

  const filteredPortfolio = selectedStyle === 'all' 
    ? mockPortfolio 
    : mockPortfolio.filter(item => item.style === selectedStyle);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tattoo Portfolio
            </h1>
            <p className="text-lg text-muted mb-8">
              Explore our diverse range of tattoo styles, from traditional Japanese to contemporary designs. 
              Each piece is custom-crafted to tell your unique story.
            </p>
            
            {/* Style Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedStyle === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedStyle('all')}
              >
                All Styles
              </Button>
              {tattooStyles.map((style) => (
                <Button
                  key={style}
                  variant={selectedStyle === style ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStyle(style)}
                >
                  {style}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((piece) => (
              <Card 
                key={piece._id} 
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(piece)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={piece.image}
                      alt={piece.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                      {piece.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted">
                      <span>{piece.style}</span>
                      <span>{piece.placement}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                No tattoos found for the selected style.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-card-bg rounded-lg overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-muted mb-4">
                  {selectedImage.description}
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Style:</span>
                    <p className="text-muted">{selectedImage.style}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Placement:</span>
                    <p className="text-muted">{selectedImage.placement}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Size:</span>
                    <p className="text-muted">{selectedImage.approximateSize}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button asChild>
                    <a href="/tattoo/book">
                      Get a Similar Tattoo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Own Tattoo?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Inspired by what you see? Let's create something unique together. 
            Book a consultation to discuss your ideas.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/tattoo/book">
              Book Your Session
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

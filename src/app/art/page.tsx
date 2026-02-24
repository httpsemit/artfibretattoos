'use client';

import { useState } from 'react';
import type { Artwork, ArtCategory, ArtMedium } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Filter, X, Palette } from 'lucide-react';

// Mock data - replace with CMS data later
const mockArtworks: Artwork[] = [
  {
    _id: '1',
    title: 'Dragon Rising',
    medium: 'ink',
    dimensions: '24" x 36"',
    category: 'Dragons',
    images: ['/images/art/dragon-rising.jpg'],
    thumbnail: '/images/art/dragon-rising-thumb.jpg',
    description: 'Traditional Japanese dragon ascending through clouds, rendered in sumi ink style',
    availability: 'available',
    price: 45000,
    createdAt: '2024-01-15'
  },
  {
    _id: '2',
    title: 'Koi Fish Pond',
    medium: 'watercolor',
    dimensions: '18" x 24"',
    category: 'Koi & Water',
    images: ['/images/art/koi-pond.jpg'],
    thumbnail: '/images/art/koi-pond-thumb.jpg',
    description: 'Vibrant koi fish swimming among lotus flowers',
    availability: 'available',
    price: 25000,
    createdAt: '2024-01-20'
  },
  {
    _id: '3',
    title: 'Tiger in Bamboo',
    medium: 'ink',
    dimensions: '30" x 40"',
    category: 'Tigers',
    images: ['/images/art/tiger-bamboo.jpg'],
    thumbnail: '/images/art/tiger-bamboo-thumb.jpg',
    description: 'Majestic tiger walking through bamboo forest',
    availability: 'sold',
    createdAt: '2024-02-01'
  },
  {
    _id: '4',
    title: 'Cherry Blossom',
    medium: 'watercolor',
    dimensions: '16" x 20"',
    category: 'Botanicals',
    images: ['/images/art/cherry-blossom.jpg'],
    thumbnail: '/images/art/cherry-blossom-thumb.jpg',
    description: 'Delicate cherry blossoms in spring bloom',
    availability: 'available',
    price: 15000,
    createdAt: '2024-02-10'
  },
  {
    _id: '5',
    title: 'Geisha with Fan',
    medium: 'mixed',
    dimensions: '20" x 30"',
    category: 'Geisha & Figures',
    images: ['/images/art/geisha-fan.jpg'],
    thumbnail: '/images/art/geisha-fan-thumb.jpg',
    description: 'Elegant geisha holding traditional fan',
    availability: 'available',
    price: 35000,
    createdAt: '2024-02-15'
  },
  {
    _id: '6',
    title: 'Wave Pattern',
    medium: 'ink',
    dimensions: '24" x 18"',
    category: 'Waves & Landscapes',
    images: ['/images/art/wave-pattern.jpg'],
    thumbnail: '/images/art/wave-pattern-thumb.jpg',
    description: 'Traditional Japanese wave pattern inspired by Hokusai',
    availability: 'available',
    price: 20000,
    createdAt: '2024-02-20'
  }
];

const artCategories: ArtCategory[] = [
  'Koi & Water',
  'Dragons',
  'Tigers',
  'Botanicals',
  'Geisha & Figures',
  'Waves & Landscapes'
];

export default function ArtGallery() {
  const [selectedCategory, setSelectedCategory] = useState<ArtCategory | 'all'>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = selectedCategory === 'all' 
    ? mockArtworks 
    : mockArtworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Palette className="h-12 w-12 text-accent mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Japanese Traditional Art
              </h1>
            </div>
            <p className="text-lg text-muted mb-8">
              Explore our collection of original Japanese traditional paintings. 
              Each piece is handcrafted using centuries-old techniques, 
              bringing the timeless beauty of Japanese art to your space.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                All Categories
              </Button>
              {artCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
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
            {filteredArtworks.map((artwork) => (
              <Card 
                key={artwork._id} 
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedArtwork(artwork)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-muted/20 to-accent/10 relative overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl opacity-20">🎨</div>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    {/* Availability Badge */}
                    <div className="absolute top-2 right-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        artwork.availability === 'available' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'
                      }`}>
                        {artwork.availability === 'available' ? 'Available' : 'Sold'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
                      {artwork.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-muted">
                      <span>{artwork.medium}</span>
                      <span>{artwork.dimensions}</span>
                    </div>
                    {artwork.price && (
                      <p className="text-accent font-semibold mt-2">
                        ₹{artwork.price.toLocaleString('en-IN')}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                No artworks found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Artwork Lightbox */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedArtwork(null)}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="bg-card-bg rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted/20 to-accent/10 flex items-center justify-center">
                {/* Placeholder for full-size image */}
                <div className="text-8xl opacity-20">🎨</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      {selectedArtwork.title}
                    </h2>
                    <p className="text-muted">
                      {selectedArtwork.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-2 ${
                      selectedArtwork.availability === 'available' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {selectedArtwork.availability === 'available' ? 'Available' : 'Sold'}
                    </span>
                    {selectedArtwork.price && (
                      <p className="text-xl font-bold text-accent">
                        ₹{selectedArtwork.price.toLocaleString('en-IN')}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-6">
                  <div>
                    <span className="font-medium text-foreground">Medium:</span>
                    <p className="text-muted capitalize">{selectedArtwork.medium}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Dimensions:</span>
                    <p className="text-muted">{selectedArtwork.dimensions}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Category:</span>
                    <p className="text-muted">{selectedArtwork.category}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  {selectedArtwork.availability === 'available' ? (
                    <Button asChild>
                      <a href="mailto:info@artfibre.in?subject=Inquiry about artwork">
                        Interested in This Piece
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      Sold
                    </Button>
                  )}
                  <Button variant="outline" asChild>
                    <a href="/contact">
                      Commission Similar Art
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Commission CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Commission a Custom Painting
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Don't see exactly what you're looking for? I'd be honored to create a custom 
            Japanese traditional painting tailored to your vision and space.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="/contact">
              Request a Commission
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

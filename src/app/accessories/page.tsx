'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Filter, Heart, Star, Search, MessageCircle } from 'lucide-react';

// Mock data for accessories
const mockAccessories = [
  {
    _id: '1',
    name: 'Traditional Japanese Mala',
    category: 'Mala',
    price: 2999,
    image: '/images/tattoos/artfibre_tattoos_14041205_170659106.jpg',
    description: 'Handcrafted Buddhist prayer beads with traditional Japanese design',
    inStock: true,
    rating: 4.8,
    reviews: 24
  },
  {
    _id: '2',
    name: 'Silver Chain Necklace',
    category: 'Chains',
    price: 4999,
    image: '/images/tattoos/artfibre_tattoos_14041205_170659610.jpg',
    description: 'Sterling silver chain with Japanese-inspired pendant',
    inStock: true,
    rating: 4.9,
    reviews: 18
  },
  {
    _id: '3',
    name: 'Tribal Bracelet Set',
    category: 'Bracelets',
    price: 1899,
    image: '/images/tattoos/artfibre_tattoos_14041205_170700072.jpg',
    description: 'Set of 3 tribal-style bracelets with adjustable sizing',
    inStock: true,
    rating: 4.7,
    reviews: 31
  },
  {
    _id: '4',
    name: 'Japanese Ring',
    category: 'Rings',
    price: 3499,
    image: '/images/tattoos/artfibre_tattoos_14041205_170700582.jpg',
    description: 'Handcrafted silver ring with traditional Japanese patterns',
    inStock: false,
    rating: 5.0,
    reviews: 12
  },
  {
    _id: '5',
    name: 'Buddha Pendant',
    category: 'Pendants',
    price: 2299,
    image: '/images/tattoos/artfibre_tattoos_14041205_170701074.jpg',
    description: 'Oxidized silver Buddha pendant with intricate details',
    inStock: true,
    rating: 4.6,
    reviews: 28
  },
  {
    _id: '6',
    name: 'Anklet Collection',
    category: 'Anklets',
    price: 1599,
    image: '/images/tattoos/artfibre_tattoos_14041205_170701588.jpg',
    description: 'Traditional Indian anklets with Japanese fusion design',
    inStock: true,
    rating: 4.8,
    reviews: 15
  },
  {
    _id: '7',
    name: 'Leather Bracelet',
    category: 'Bracelets',
    price: 1299,
    image: '/images/tattoos/artfibre_tattoos_14041205_170702078.jpg',
    description: 'Genuine leather bracelet with silver accents',
    inStock: true,
    rating: 4.5,
    reviews: 22
  },
  {
    _id: '8',
    name: 'Spiritual Mala',
    category: 'Mala',
    price: 3799,
    image: '/images/tattoos/artfibre_tattoos_14041205_170702593.jpg',
    description: '108-bead mala with natural stones and silver spacer beads',
    inStock: true,
    rating: 4.9,
    reviews: 36
  }
];

const categories = ['All', 'Mala', 'Chains', 'Bracelets', 'Rings', 'Pendants', 'Anklets'];

// WhatsApp redirect function
const handleWhatsAppInquiry = (productName: string, price: number) => {
  const message = encodeURIComponent(
    `Hi! I'm interested in the ${productName} (₹${price}) from Artfibre Accessories. Can you provide more details about this product?`
  );
  const whatsappUrl = `https://wa.me/919678449790?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

export default function AccessoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAccessories = mockAccessories.filter(accessory => {
    const matchesCategory = selectedCategory === 'All' || accessory.category === selectedCategory;
    const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         accessory.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Artfibre Accessories
            </h1>
            <p className="text-lg text-muted mb-8">
              Discover our curated collection of traditional Japanese and tribal-inspired jewelry, 
              malas, chains, and accessories. Each piece is handcrafted with artistic precision.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search accessories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-card-bg text-foreground"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/tattoo/portfolio">
                  View Tattoo Portfolio
                </Link>
              </Button>
              <Button variant="glass" size="lg" onClick={() => {
                const message = encodeURIComponent(
                  'Hi! I\'m interested in accessories from Artfibre. Can you show me your available collection?'
                );
                const whatsappUrl = `https://wa.me/919678449790?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}>
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button variant="glass" size="lg">
                Coming Soon - Online Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-foreground hover:text-accent transition-colors"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
              <span className="text-muted">
                {filteredAccessories.length} products found
              </span>
            </div>
            
            {showFilters && (
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      selectedCategory === category
                        ? 'bg-accent text-white'
                        : 'bg-muted text-foreground hover:bg-accent/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAccessories.map((accessory) => (
              <Card key={accessory._id} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-muted/20 to-accent/10 rounded-t-lg overflow-hidden">
                      <Image
                        src={accessory.image}
                        alt={accessory.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    {!accessory.inStock && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </div>
                    )}
                    <button className="absolute top-2 left-2 p-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-accent font-medium">
                        {accessory.category}
                      </span>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {accessory.name}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-muted mb-3 line-clamp-2">
                      {accessory.description}
                    </p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-foreground ml-1">
                          {accessory.rating}
                        </span>
                      </div>
                      <span className="text-xs text-muted ml-2">
                        ({accessory.reviews} reviews)
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">
                          ₹{accessory.price}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        variant="glass"
                        onClick={() => handleWhatsAppInquiry(accessory.name, accessory.price)}
                        className="min-w-[120px]"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Inquire on WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                No accessories found matching your criteria.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coming Soon: Online Store
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We're working on bringing our complete accessories collection online. 
            Sign up for notifications when our e-commerce store launches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Contact for Custom Orders
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent">
              Notify Me When Available
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

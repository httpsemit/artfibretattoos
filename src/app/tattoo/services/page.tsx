import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Download, Clock, Shield, Heart } from 'lucide-react';

interface TattooService {
  title: string;
  description: string;
  features: string[];
  startingPrice?: string;
}

const tattooServices: TattooService[] = [
  {
    title: "Traditional Japanese",
    description: "Authentic Japanese tattooing techniques featuring classic motifs like dragons, koi fish, tigers, and cherry blossoms. Bold lines and vibrant colors that honor centuries of tradition.",
    features: ["Hand-poked techniques", "Traditional motifs", "Bold outlines", "Vibrant colors"],
    startingPrice: "From ₹8,000"
  },
  {
    title: "Tribal Tattoos",
    description: "Bold, geometric patterns inspired by indigenous tattoo traditions from around the world. Clean lines and powerful symbolism that make a strong statement.",
    features: ["Black work", "Geometric patterns", "Cultural motifs", "Custom designs"],
    startingPrice: "From ₹5,000"
  },
  {
    title: "Freehand Tattoos",
    description: "Unique designs drawn directly on the skin without stencils. Each piece is one-of-a-kind, created spontaneously to flow with your body's natural contours.",
    features: ["No stencils", "Unique designs", "Organic flow", "Custom artwork"],
    startingPrice: "From ₹6,000"
  },
  {
    title: "Fine Line",
    description: "Delicate, intricate designs with precise thin lines. Perfect for detailed artwork, lettering, and subtle pieces that require precision and skill.",
    features: ["Thin precise lines", "Detailed work", "Lettering", "Subtle designs"],
    startingPrice: "From ₹4,000"
  },
  {
    title: "Black & Grey",
    description: "Timeless monochrome tattoos using various shades of black and grey. Creates depth, dimension, and sophisticated pieces that never go out of style.",
    features: ["Monochrome shading", "Realistic effects", "Timeless style", "Portrait work"],
    startingPrice: "From ₹5,000"
  },
  {
    title: "Color Tattoos",
    description: "Vibrant, colorful designs that pop with life. From subtle color accents to full-color pieces, using high-quality inks for lasting brilliance.",
    features: ["Vibrant colors", "Color theory", "High-quality inks", "Custom palettes"],
    startingPrice: "From ₹7,000"
  }
];

const aftercareTips = [
  "Keep the tattoo covered for 2-4 hours after your session",
  "Wash gently with mild soap and lukewarm water",
  "Apply a thin layer of recommended aftercare ointment",
  "Avoid direct sunlight and soaking in water for 2 weeks",
  "Don't pick or scratch healing skin",
  "Keep the tattoo moisturized during the healing process",
  "Wear loose, clean clothing over the healing tattoo"
];

export default function TattooServices() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tattoo Services
            </h1>
            <p className="text-lg text-muted mb-8">
              Explore our range of tattoo styles and services. Each style is crafted with 
              expertise and artistic vision to bring your ideas to life.
            </p>
            <Button size="lg" asChild>
              <a href="/tattoo/book">
                Book a Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tattooServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  {service.startingPrice && (
                    <p className="text-accent font-semibold">
                      {service.startingPrice}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-muted mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="/tattoo/book">
                      Get This Style
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground">
                  Pricing Information
                </h2>
                <p className="text-muted">
                  Custom quotes based on your specific design and requirements
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Factors Affecting Price
                    </h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li>• Size and complexity of the design</li>
                      <li>• Placement on the body</li>
                      <li>• Amount of detail and color work</li>
                      <li>• Time required for completion</li>
                      <li>• Number of sessions needed</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      What's Included
                    </h3>
                    <ul className="space-y-2 text-sm text-muted">
                      <li>• Custom design consultation</li>
                      <li>• Professional tattoo application</li>
                      <li>• High-quality tattoo inks</li>
                      <li>• Aftercare instructions</li>
                      <li>• One touch-up session (if needed)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> Prices shown are starting points and may vary based on your specific design. 
                    A final quote will be provided during your consultation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aftercare Instructions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Aftercare Instructions
              </h2>
              <p className="text-lg text-muted">
                Proper aftercare is essential for healing and maintaining your tattoo's beauty
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">
                      Healing Process
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted">
                    {aftercareTips.slice(0, 4).map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-1.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-accent" />
                    <h3 className="text-xl font-bold text-foreground">
                      Long-term Care
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted">
                    {aftercareTips.slice(4).map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-1.5 flex-shrink-0" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button variant="outline" asChild>
                <a href="/aftercare.pdf" download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Aftercare Guide (PDF)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    How long does a tattoo session take?
                  </h3>
                  <p className="text-muted text-sm">
                    Session length varies depending on the design size and complexity. Small tattoos may take 1-2 hours, 
                    while larger pieces can require multiple sessions of 3-6 hours each.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Does getting a tattoo hurt?
                  </h3>
                  <p className="text-muted text-sm">
                    Pain levels vary by individual and placement. Most people describe it as uncomfortable rather than 
                    extremely painful. We use techniques to minimize discomfort and can take breaks when needed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    What should I bring to my appointment?
                  </h3>
                  <p className="text-muted text-sm">
                    Bring a valid ID, reference images (if any), wear comfortable clothing that provides easy access 
                    to the tattoo area, and eat a good meal beforehand.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    How old do I need to be to get a tattoo?
                  </h3>
                  <p className="text-muted text-sm">
                    You must be at least 18 years old to get a tattoo. We require valid government-issued ID 
                    from all clients before beginning any tattoo work.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you offer touch-ups?
                  </h3>
                  <p className="text-muted text-sm">
                    Yes, one touch-up session is included within 3 months of your original tattoo if needed. 
                    Additional touch-ups may incur a small fee depending on the work required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Tattoo?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's create something amazing together. Book a consultation to discuss your ideas 
            and get a custom quote for your perfect tattoo.
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

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Instagram, Facebook, Mail, Phone, MapPin, Award, Palette, Brush } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About the Artist
            </h1>
            <p className="text-lg text-muted mb-8">
              A journey through ink and tradition, where every stroke tells a story of 
              ancient Japanese artistry meeting contemporary tattoo culture.
            </p>
          </div>
        </div>
      </section>

      {/* Artist Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Two Disciplines, One Vision
              </h2>
              <div className="space-y-4 text-muted">
                <p>
                  Welcome to Artfibre, where the ancient traditions of Japanese art come alive 
                  through both tattoo and canvas. As a dual creative practitioner, I've spent 
                  over a decade mastering the delicate balance between the bold, permanent nature 
                  of tattoo art and the subtle, expressive world of traditional Japanese painting.
                </p>
                <p>
                  My journey began in the studios of North Lakhimpur, where I discovered that 
                  the same principles that guide traditional Japanese sumi-e painting—precision, 
                  flow, and harmony—are the very foundations of exceptional tattoo work. 
                  This revelation led me to pursue both disciplines with equal passion and dedication.
                </p>
                <p>
                  Today, Artfibre stands as North Lakhimpur's premier destination for those 
                  seeking authentic Japanese artistry, whether on skin or canvas. Each piece I create 
                  is a conversation between centuries-old techniques and contemporary expression, 
                  bringing the timeless beauty of Japanese aesthetics to the modern world.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-32 w-32 bg-accent/20 rounded-full mx-auto flex items-center justify-center">
                    <Brush className="h-16 w-16 text-accent" />
                  </div>
                  <p className="text-muted">Artist at Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Artistic Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Tradition</h3>
                  <p className="text-sm text-muted">
                    Honoring centuries-old Japanese techniques while bringing them into contemporary context
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                  <p className="text-sm text-muted">
                    Every piece is crafted with meticulous attention to detail and artistic integrity
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brush className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Expression</h3>
                  <p className="text-sm text-muted">
                    Creating art that speaks to both the individual and universal human experience
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Artists */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Artists
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Three talented artists bringing diverse styles and expertise to Artfibre Studio
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Artist 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                    <img
                      src="/images/tattoos/artfibre_tattoos_14041205_170659106.jpg"
                      alt="Raj Sharma - Lead Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">Raj Sharma</h3>
                    <p className="text-white/90 text-sm">Lead Artist & Founder</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-accent">10+ Years Experience</span>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Japanese</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Tribal</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4">
                    Founder of Artfibre with over a decade of experience in Japanese traditional tattooing. 
                    Specializes in large-scale pieces and custom designs.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted">
                      <Award className="h-4 w-4 mr-2 text-accent" />
                      <span>500+ Custom Tattoos</span>
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      <span>Trained in Tokyo</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artist 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                    <img
                      src="/images/tattoos/artfibre_tattoos_14041205_170700072.jpg"
                      alt="Priya Dutta - Tattoo Artist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">Priya Dutta</h3>
                    <p className="text-white/90 text-sm">Tattoo Artist</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-accent">7 Years Experience</span>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Fine Line</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Color</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4">
                    Expert in fine line work and vibrant color tattoos. Brings precision and 
                    artistic flair to every piece with attention to detail.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted">
                      <Award className="h-4 w-4 mr-2 text-accent" />
                      <span>300+ Tattoos Completed</span>
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <Palette className="h-4 w-4 mr-2 text-accent" />
                      <span>Color Theory Expert</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artist 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-secondary/20">
                    <img
                      src="/images/tattoos/dhrba_body_art_14041205_170653360.jpg"
                      alt="Amit Singh - Freehand Specialist"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">Amit Singh</h3>
                    <p className="text-white/90 text-sm">Freehand Specialist</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-accent">5 Years Experience</span>
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Freehand</span>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">Geometric</span>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4">
                    Freehand specialist known for creating unique designs directly on skin. 
                    Excels in geometric patterns and abstract compositions.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted">
                      <Brush className="h-4 w-4 mr-2 text-accent" />
                      <span>200+ Freehand Pieces</span>
                    </div>
                    <div className="flex items-center text-sm text-muted">
                      <Award className="h-4 w-4 mr-2 text-accent" />
                      <span>Custom Design Expert</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Studio Space
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A creative sanctuary where art comes to life. Our studio combines 
              traditional Japanese aesthetics with modern hygiene and comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted/20 to-accent/10 flex items-center justify-center">
                <div className="text-4xl opacity-20">🏠</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Main Studio</h3>
                <p className="text-sm text-muted">Spacious, well-lit workspace for tattoo sessions</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted/20 to-accent/10 flex items-center justify-center">
                <div className="text-4xl opacity-20">🎨</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Art Gallery</h3>
                <p className="text-sm text-muted">Display space for original paintings and prints</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-muted/20 to-accent/10 flex items-center justify-center">
                <div className="text-4xl opacity-20">🪔</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground">Consultation Area</h3>
                <p className="text-sm text-muted">Comfortable space for design discussions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Recognition & Achievements
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5.0</div>
              <p className="text-sm text-muted">Google Rating</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <p className="text-sm text-muted">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-sm text-muted">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-sm text-muted">Original Artworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Artist Statement
                </h2>
                <blockquote className="text-lg text-muted italic leading-relaxed">
                  "Art is not just what I create—it's how I see the world. Through the delicate 
                  balance of ink and intention, I strive to capture the essence of Japanese 
                  aesthetics: the beauty in imperfection, the strength in simplicity, and the 
                  harmony between tradition and innovation. Whether tattooing skin or painting 
                  on canvas, my goal is to create pieces that resonate with the viewer's soul 
                  and stand the test of time."
                </blockquote>
                <p className="text-right text-accent font-semibold mt-4">
                  — The Artist behind Artfibre
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Connect & Follow
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Follow my artistic journey on social media for behind-the-scenes content, 
            new artwork releases, and tattoo inspiration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="secondary" asChild>
              <a href="https://instagram.com/artfibre" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 mr-2" />
                Follow on Instagram
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="https://facebook.com/artfibre" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 mr-2" />
                Like on Facebook
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@artfibre.in</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 96784 49790</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>North Lakhimpur, Assam</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

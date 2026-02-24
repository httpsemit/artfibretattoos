'use client';

import { useState } from 'react';
import type { BookingForm, TattooStyle } from '@/types';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Phone, Clock, Upload, CheckCircle } from 'lucide-react';

const tattooStyles: { value: TattooStyle; label: string }[] = [
  { value: 'Tribal', label: 'Tribal' },
  { value: 'Freehand', label: 'Freehand' },
  { value: 'Japanese', label: 'Japanese' },
  { value: 'Fine Line', label: 'Fine Line' },
  { value: 'Black & Grey', label: 'Black & Grey' },
  { value: 'Color', label: 'Color' },
  { value: 'Portrait', label: 'Portrait' },
  { value: 'Geometric', label: 'Geometric' },
  { value: 'Script', label: 'Script' }
];

export default function BookSession() {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    preferredDates: [],
    styleInterest: 'Tribal',
    placement: '',
    approximateSize: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Partial<BookingForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.placement.trim()) {
      newErrors.placement = 'Placement is required';
    }

    if (!formData.approximateSize.trim()) {
      newErrors.approximateSize = 'Size is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Booking Request Received!
            </h2>
            <p className="text-muted mb-6">
              Thank you for your booking request. We'll get back to you within 24 hours to confirm your appointment.
            </p>
            <div className="space-y-2 text-sm text-muted">
              <p><strong>Phone:</strong> +91 96784 49790</p>
              <p><strong>Hours:</strong> Mon–Sat 10 AM – 9:30 PM, Sun 11 AM – 6 PM</p>
            </div>
            <Button className="w-full mt-6" onClick={() => window.location.href = '/'}>
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Book a Tattoo Session
            </h1>
            <p className="text-lg text-muted mb-8">
              Ready to get your next tattoo? Fill out the form below and we'll get back to you within 24 hours 
              to schedule your consultation.
            </p>
            
            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 96784 49790</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Mon–Sat 10 AM – 9:30 PM, Sun 11 AM – 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground">
                  Tattoo Booking Form
                </h2>
                <p className="text-muted">
                  Please provide as much detail as possible about your tattoo idea.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      required
                    />
                    
                    <Input
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      error={errors.phone}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>

                  <Select
                    label="Tattoo Style Interest"
                    value={formData.styleInterest}
                    onChange={(e) => handleInputChange('styleInterest', e.target.value)}
                    options={tattooStyles}
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Placement on Body"
                      value={formData.placement}
                      onChange={(e) => handleInputChange('placement', e.target.value)}
                      error={errors.placement}
                      placeholder="e.g., Forearm, Back, Chest"
                      required
                    />
                    
                    <Input
                      label="Approximate Size"
                      value={formData.approximateSize}
                      onChange={(e) => handleInputChange('approximateSize', e.target.value)}
                      error={errors.approximateSize}
                      placeholder="e.g., 4x4 inches, Full sleeve"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Preferred Date(s)
                    </label>
                    <Input
                      type="date"
                      onChange={(e) => {
                        const dates = [...formData.preferredDates, e.target.value];
                        handleInputChange('preferredDates', dates.join(', '));
                      }}
                    />
                    <p className="text-xs text-muted mt-1">
                      You can select multiple dates
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Reference Image (Optional)
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-muted mx-auto mb-2" />
                      <p className="text-sm text-muted">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted mt-1">
                        PNG, JPG up to 10MB
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            console.log('File selected:', file.name);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <Textarea
                    label="Additional Notes"
                    value={formData.additionalNotes}
                    onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                    placeholder="Tell us about your tattoo idea, any specific elements you want, or questions you have..."
                    rows={4}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Fallback */}
      <section className="py-12 bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Prefer to book via WhatsApp?
            </h3>
            <p className="text-muted mb-6">
              You can also send us a message directly on WhatsApp for faster response.
            </p>
            <Button variant="outline" asChild>
              <a 
                href="https://wa.me/919678449790"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

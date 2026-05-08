"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, CheckCircle, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmall"
        background="grid"
        cardStyle="glass-depth"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Exterior Clean"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="EXTERIOR CLEANING\nDONE RIGHT."
      description="Professional results. Every time."
      testimonials={[
        {
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "Best service ever!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/country-music-interpret-singing-outdoors_23-2149498450.jpg",
        },
        {
          name: "Mike D.",
          handle: "@miked",
          testimonial: "Very professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/freelancer-mature-man-casual-clothes-with-laptop-near-brick-wall_259150-58370.jpg",
        },
        {
          name: "Anna P.",
          handle: "@annap",
          testimonial: "Quick and easy.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cleaning-his-home_23-2148112857.jpg",
        },
        {
          name: "David W.",
          handle: "@davidw",
          testimonial: "Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/collage-customer-experience-concept_23-2149367130.jpg",
        },
        {
          name: "Julie K.",
          handle: "@juliek",
          testimonial: "Top notch results.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-enjoying-cup-matcha-tea_23-2150215071.jpg",
        },
      ]}
      buttons={[
        {
          text: "Get a Quote",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358979.jpg"
      imageAlt="House exterior being cleaned"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-home-with-heater_23-2149339547.jpg",
          alt: "Happy client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/expressive-senior-female-posing-indoor_344912-360.jpg",
          alt: "Happy client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-living-room-smiles-holding-mug_23-2148385593.jpg",
          alt: "Happy client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/modern-woman-home-with-book_23-2147611420.jpg",
          alt: "Happy client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-watering-plants-full-shot_23-2149722642.jpg",
          alt: "Happy client 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Pressure Washing",
        },
        {
          type: "text",
          text: "Window Cleaning",
        },
        {
          type: "text",
          text: "Roof Restoration",
        },
        {
          type: "text",
          text: "Driveway Sealing",
        },
        {
          type: "text",
          text: "Gutter Cleaning",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={true}
      heading={[
        {
          type: "text",
          content: "Our Mission: Excellence in Clean",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/cleaning-concept-flat-lay-composition_23-2148118420.jpg",
          alt: "Cleaning equipment",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Window Cleaning",
          description: "Crystal clear results every time.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530688.jpg",
            imageAlt: "Window",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358973.jpg",
            imageAlt: "Window",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/man-doing-professional-home-cleaning-service_23-2150358979.jpg",
          imageAlt: "clean windows house facade",
        },
        {
          title: "Roof Washing",
          description: "Protect your roof integrity.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-roof-house-made-wooden-tiles_169016-24989.jpg",
            imageAlt: "Roof",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-sitting-roof_23-2149343640.jpg",
            imageAlt: "Roof",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/cleaning-concept-flat-lay-composition_23-2148118420.jpg",
          imageAlt: "clean windows house facade",
        },
        {
          title: "Driveway Cleaning",
          description: "Remove stubborn stains quickly.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/outdoors-abstract-shadow-daytime_23-2149080293.jpg",
            imageAlt: "Driveway",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/person-wearing-yellow-rubber-boots-with-high-pressure-water-nozzle-cleaning-dirt-tiles_181624-23652.jpg",
            imageAlt: "Driveway",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/country-music-interpret-singing-outdoors_23-2149498450.jpg",
          imageAlt: "clean windows house facade",
        },
      ]}
      showStepNumbers={false}
      title="Our Expert Services"
      description="Professional cleaning solutions tailored for your home."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Great Experience",
          quote: "Fantastic service!",
          name: "Sarah J.",
          role: "CEO",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cleaning-his-home_23-2148112375.jpg",
        },
        {
          id: "2",
          title: "Professional",
          quote: "They were quick and professional.",
          name: "Mike D.",
          role: "Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-phone_1163-3423.jpg",
        },
        {
          id: "3",
          title: "Amazing Results",
          quote: "My driveway looks brand new.",
          name: "Anna P.",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/wonderful-girl-denim-skirt-laughing-looking-away-outdoor-photo-good-looking-caucasian-lady-with-shiny-hair-fooling-around_197531-8808.jpg",
        },
        {
          id: "4",
          title: "Top Quality",
          quote: "High quality finish.",
          name: "David W.",
          role: "Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-holding-pencil_23-2148372127.jpg",
        },
        {
          id: "5",
          title: "Reliable",
          quote: "Showed up on time and delivered.",
          name: "Julie K.",
          role: "User",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-attractive-young-man-walking-street-with-backpack-his-shoulders_58466-16223.jpg",
        },
      ]}
      title="What Our Clients Say"
      description="Trusted by hundreds of homeowners."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",
          value: "500+",
          title: "Projects Completed",
          description: "Homes serviced",
          icon: CheckCircle,
        },
        {
          id: "2",
          value: "99%",
          title: "Satisfaction Rate",
          description: "Happy homeowners",
          icon: Star,
        },
        {
          id: "3",
          value: "10",
          title: "Years Experience",
          description: "Expert service",
          icon: Award,
        },
      ]}
      title="Our Track Record"
      description="Proven results for residential clients."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How often should I clean?",
          content: "Once every 12 months.",
        },
        {
          id: "2",
          title: "Is it safe?",
          content: "Yes, we use eco-friendly cleaners.",
        },
        {
          id: "3",
          title: "How long does it take?",
          content: "Usually a few hours.",
        },
      ]}
      title="Common Questions"
      description="Find answers to our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to get started? Contact us today for a free quote."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@example.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Exterior Clean"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Exterior Clean."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

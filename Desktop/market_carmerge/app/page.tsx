"use client";
import React from 'react';
import { Car, Shield, Globe, CheckCircle, Users, Building2, Search } from 'lucide-react';
import styled from 'styled-components';
import { premiumListings } from './data/carData';
import Link from 'next/link';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: white;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  color: white;
`;

const Section = styled.section`
  margin-bottom: 3rem;
  color: white;

  h2 {
    color: white;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #e5e5e5;
  }

  li {
    margin-bottom: 0.5rem;
  }

  p {
    color: #e5e5e5;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: #1f2937;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  svg {
    color: #60a5fa;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    margin-bottom: 0.5rem;
  }

  p {
    color: #e5e5e5;
  }
`;

const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CarCard = styled.div`
  padding: 1.5rem;
  border-radius: 8px;
  background: #1f2937;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    color: #60a5fa;
  }

  h4 {
    margin: 0.5rem 0;
    color: white;
  }

  .price {
    color: #60a5fa;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  .details {
    color: #e5e5e5;
    font-size: 0.9rem;
  }

  .location {
    color: #9ca3af;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

const SearchButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #60a5fa;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: background-color 0.2s;
  margin-top: 2rem;
  text-decoration: none;
  
  &:hover {
    background: #3b82f6;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  img {
    height: 40px;
  }

  span {
    font-size: 2rem;
    font-weight: bold;
    color: white;
  }
`;

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AboutContainer>
        <Hero>
          <Logo>
            <img src="/logo.svg" alt="CarMerge Logo" />
            <span>CARMERGE</span>
          </Logo>
          <h1>About CarMerge</h1>
          <p>Europe's Premier Car Listing Aggregator</p>
          <Link href="/listingSearch" passHref>
            <SearchButton>
              <Search size={20} />
              <span>Start Your Car Search</span>
            </SearchButton>
          </Link>
        </Hero>

        <Section>
          <h2>Our Mission</h2>
          <p>
            At CarMerge, we're revolutionizing the way Europeans shop for cars by bringing together listings
            from multiple regions across Europe into one seamless platform. Our mission is to provide
            transparency, convenience, and unparalleled access to the European car market.
          </p>
        </Section>

        <Section>
          <h2>Why Choose CarMerge?</h2>
          <FeatureGrid>
            <FeatureCard>
              <Globe size={24} />
              <h3>Pan-European Coverage</h3>
              <p>Access listings from multiple European countries, expanding your options beyond local markets.</p>
            </FeatureCard>

            <FeatureCard>
              <Shield size={24} />
              <h3>Verified Listings</h3>
              <p>All our listings undergo verification to ensure authenticity and accurate information.</p>
            </FeatureCard>

            <FeatureCard>
              <Building2 size={24} />
              <h3>Trusted Dealerships</h3>
              <p>Partner with reputable dealerships across Europe for quality assurance.</p>
            </FeatureCard>

            <FeatureCard>
              <CheckCircle size={24} />
              <h3>Quality Assurance</h3>
              <p>Detailed vehicle history reports and condition assessments available for informed decisions.</p>
            </FeatureCard>

            <FeatureCard>
              <Car size={24} />
              <h3>Diverse Selection</h3>
              <p>From nearly new to certified pre-owned vehicles from premium dealerships.</p>
            </FeatureCard>

            <FeatureCard>
              <Users size={24} />
              <h3>Expert Support</h3>
              <p>Multilingual support team to assist with your car buying journey across Europe.</p>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section>
          <h2>Our Commitment</h2>
          <p>
            We understand that purchasing a car is a significant decision, especially when buying from
            different European regions. That's why we're committed to providing:
          </p>
          <ul>
            <li>Transparent pricing with no hidden fees</li>
            <li>Detailed vehicle documentation and history</li>
            <li>Support with cross-border purchases and documentation</li>
            <li>Regular market analysis and price comparisons</li>
            <li>Verification of dealership credentials</li>
          </ul>
        </Section>

        <Section>
          <h2>Market Coverage</h2>
          <p>
            Our platform aggregates listings from major European markets including Germany, France,
            Netherlands, Belgium, Spain, Italy, and more. We specialize in:
          </p>
          <ul>
            <li>Premium and luxury vehicles</li>
            <li>Nearly new cars with full warranty</li>
            <li>Certified pre-owned vehicles</li>
            <li>Dealership-maintained used cars</li>
            <li>Limited edition and rare models</li>
          </ul>
        </Section>

        <Section>
          <h2>Featured Listings</h2>
          <p>
            Discover a sample of premium vehicles currently available across Europe through our platform.
            These listings represent the quality and variety you can expect to find on CarMerge.
          </p>
          <CarGrid>
            {premiumListings.map((car) => (
              <CarCard key={car.id}>
                <Car size={32} />
                <h4>{car.year} {car.make} {car.model}</h4>
                <div className="price">{car.price}</div>
                <div className="details">
                  {car.details}<br />
                  Mileage: {car.mileage}
                </div>
                <div className="location">
                  📍 {car.location}
                </div>
              </CarCard>
            ))}
          </CarGrid>
        </Section>
      </AboutContainer>
    </div>
  );
};

export default AboutPage;

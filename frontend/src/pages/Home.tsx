import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';

const mockEvents = [
  { id: 1, title: "Global AI Summit 2026", tags: ["tech-talk"], location: "San Francisco", attendees: "1.2k", icon: "🤖" },
  { id: 2, title: "NextGen Hackathon", tags: ["hackathon"], location: "London", attendees: "800", icon: "💻" },
  { id: 3, title: "World Diplomacy Forum", tags: ["MUN"], location: "New York", attendees: "2k", icon: "🌍" },
  { id: 4, title: "Creative Writing Workshop", tags: ["workshop"], location: "Paris", attendees: "150", icon: "✍️" },
  { id: 5, title: "Future of Robotics", tags: ["tech-talk"], location: "Tokyo", attendees: "3k", icon: "🦾" },
  { id: 6, title: "DeFi Builders Meetup", tags: ["hackathon"], location: "Berlin", attendees: "450", icon: "⛓️" },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowResults(true);
    loadEvents(categoryId, searchQuery);
  };

  const handleSearch = () => {
    if (searchQuery.trim() || selectedCategory) {
      setShowResults(true);
      loadEvents(selectedCategory, searchQuery);
    }
  };

  const loadEvents = (category?: string, query?: string) => {
    setTimeout(() => {
      let filtered = mockEvents;
      if (category) {
        filtered = filtered.filter(event => event.tags.includes(category));
      }
      if (query && query.trim()) {
        filtered = filtered.filter(event =>
          event.title.toLowerCase().includes(query.trim().toLowerCase())
        );
      }
    }, 800);
  };

  useEffect(() => {
    if (showResults) {
      loadEvents(selectedCategory, searchQuery);
    }
  }, [showResults, selectedCategory]);

  return (
    <div className="flex flex-col text-black">
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleCategorySelect={handleCategorySelect}
      />
    </div>
  );
}

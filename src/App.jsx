import { BlogList } from './components/BlogList'
import { BlogDetails } from './components/BlogDetails';
import { CategoryFilter } from './components/CategoryFilter';
import { Navbar } from './components/Navbar'
import { ThemeContext } from './components/ThemeContext';
import { useState } from 'react';

function App() {

  const categories = [
    "All",
    "Productivity",
    "Lifestyle",
    "Travel",
    "Finance",
    "Technology",
  ]

  const blogs = [
    {
      id: 1,
      category: 'Productivity',
      title: '5 Habits That Changed My Productivity Forever',
      subtitle: 'Discover the simple routines that helped me get more done with less stress.',
      description: 'After years of battling procrastination, I finally found a rhythm that works. In this post, I break down the five daily habits that have had the biggest impact on my focus, creativity, and energy levels.',
      image: 'https://picsum.photos/seed/productivity/800/400',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 2,
      category: 'Lifestyle',
      title: 'Why I Quit Social Media for 30 Days (And What I Learned)',
      subtitle: 'I deleted all my apps for a month. Here’s what happened.',
      description: 'Social media was eating away at my time and attention. So I took a bold step and went offline for 30 days. This article shares the surprising benefits, the hard parts, and whether I plan to go back.',
      image: 'https://picsum.photos/seed/socialmedia/800/400',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 3,
      category: 'Travel',
      title: 'A Weekend in Lisbon: What to See, Eat, and Do',
      subtitle: 'Planning a short trip to Portugal? Here’s your perfect weekend guide.',
      description: 'From cobbled streets to creamy pastéis de nata, Lisbon has charm at every turn. I put together my favorite spots, hidden gems, and must-try dishes after spending a magical weekend in this vibrant city.',
      image: 'https://picsum.photos/seed/lisbon/800/400',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 4,
      category: 'Finance',
      title: 'Beginner’s Guide to Investing Without Losing Your Mind',
      subtitle: 'Money management made simple for people who hate finance.',
      description: 'Investing doesn’t have to be overwhelming. In this guide, I share how I got started with just a few dollars and a lot of Googling—plus the mistakes I made and what I wish I knew sooner.',
      image: 'https://picsum.photos/seed/investing/800/400',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 5,
      category: 'Technology',
      title: 'How I Built a Personal Website in a Weekend (With No Coding)',
      subtitle: 'You don’t need to be a developer to launch your own site.',
      description: 'Using modern website builders, I created a professional-looking portfolio in under 48 hours. This post walks you through the tools I used, how I picked a theme, and what I’d do differently next time.',
      image: 'https://picsum.photos/seed/website/800/400',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const [theme, setTheme] = useState('light');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentBlog, setCurrentBlog] = useState(null);
  const filteredCategory = currentCategory === 'All' ? blogs : blogs.filter(blog => blog.category === currentCategory);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="app">
        <Navbar />
        { currentBlog ? 
          <BlogDetails 
            blog={currentBlog}
            onClose={() => { setCurrentBlog(null); }}
          /> :
          <BlogList 
            blogs={filteredCategory} 
            onBlogClick={(blog)=>{ setCurrentBlog(blog); }} 
            categories={categories} selectedCategory={currentCategory} onCategoryChange={(c) => {setCurrentCategory(c)}}
          />
        }
      </div>
    </ThemeContext.Provider>
  )
}

export default App

import React, { useState } from 'react';
import { 
//   FaCalendarAlt, 
//   FaUser, 
  FaClock, 
  FaTag, 
  FaArrowRight, 
  FaSearch, 
  FaBookOpen, 
  FaComments, 
  FaEye,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
//   FaShareAlt
} from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
  views: number;
  comments: number;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const sampleBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn advanced patterns and best practices for building maintainable and scalable React applications using TypeScript.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-02-15',
      category: 'Frontend',
      tags: ['React', 'TypeScript', 'Architecture', 'Best Practices'],
      readTime: 8,
      featured: true,
      views: 1245,
      comments: 42
    },
    {
      id: '2',
      title: 'Microservices Architecture: Patterns and Anti-patterns',
      excerpt: 'A comprehensive guide to designing robust microservices architectures while avoiding common pitfalls.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-02-10',
      category: 'Backend',
      tags: ['Microservices', 'Architecture', 'Node.js', 'Docker'],
      readTime: 12,
      featured: true,
      views: 1890,
      comments: 56
    },
    {
      id: '3',
      title: 'Machine Learning in Production: From Model to Deployment',
      excerpt: 'Practical guide to deploying machine learning models in production environments with monitoring and scaling.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-02-05',
      category: 'AI/ML',
      tags: ['Machine Learning', 'MLOps', 'Python', 'Deployment'],
      readTime: 10,
      featured: false,
      views: 980,
      comments: 31
    },
    {
      id: '4',
      title: 'Database Optimization Techniques for High-Traffic Applications',
      excerpt: 'Advanced database optimization strategies to handle millions of requests while maintaining performance.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-01-28',
      category: 'Database',
      tags: ['Database', 'Performance', 'SQL', 'NoSQL'],
      readTime: 9,
      featured: false,
      views: 1120,
      comments: 38
    },
    {
      id: '5',
      title: 'Modern CSS Grid & Flexbox: Advanced Layout Techniques',
      excerpt: 'Master complex layout challenges using CSS Grid and Flexbox with real-world examples and patterns.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-01-20',
      category: 'Frontend',
      tags: ['CSS', 'Grid', 'Flexbox', 'Layout'],
      readTime: 7,
      featured: true,
      views: 1560,
      comments: 47
    },
    {
      id: '6',
      title: 'Container Orchestration with Kubernetes: A Practical Guide',
      excerpt: 'Step-by-step guide to container orchestration, scaling, and management using Kubernetes in production.',
      content: '',
      author: 'Peter Githinji',
      publishedDate: '2024-01-15',
      category: 'DevOps',
      tags: ['Kubernetes', 'Docker', 'DevOps', 'Containers'],
      readTime: 11,
      featured: false,
      views: 1340,
      comments: 39
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'AI/ML', 'Database', 'DevOps', 'Full Stack'];
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const filteredPosts = sampleBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const featuredPosts = sampleBlogPosts.filter(post => post.featured);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      for (let i = 1; i <= maxVisible; i++) pages.push(i);
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) pages.push(i);
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) pages.push(i);
    }
    
    return pages;
  };

  return (
    <section id="blog" className="py-20 md:py-28 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Tech Insights & Tutorials
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent-blue rounded-full mx-auto mb-8"></div>
          <p className="text-text-muted text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge, experiences, and insights from my journey in software development, 
            architecture, and emerging technologies.
          </p>
        </div>

        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-accent flex items-center gap-3">
                <FaBookOpen className="text-accent" />
                Featured Articles
              </h3>
              <span className="text-text-muted text-sm font-medium px-3 py-1 bg-gray-900/50 rounded-full">
                {featuredPosts.length} Featured
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10"
                >
                  <div className="relative h-48 bg-gradient-to-r from-accent/20 to-accent-blue/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-blue rounded-2xl flex items-center justify-center text-white text-3xl shadow-2xl">
                        <FaBookOpen />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-accent text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-lg">
                        <FaBookOpen className="text-xs" />
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-gray-900 text-accent text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-text-muted text-sm font-medium">
                        {formatDate(post.publishedDate)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-muted text-lg leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-text-muted">
                          <FaClock className="text-accent" />
                          {post.readTime} min read
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <FaEye className="text-accent" />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-2 text-text-muted">
                          <FaComments className="text-accent" />
                          {post.comments}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1.5 bg-gray-900 text-text-muted text-sm font-medium rounded-full border border-gray-800 flex items-center gap-2"
                        >
                          <FaTag className="text-accent text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <button className="group/btn w-full py-3 px-6 bg-gradient-to-r from-accent to-accent-blue text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 flex items-center justify-center gap-3">
                      Read Article
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Search & Filter Controls */}
        <div className="mb-16">
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <FaSearch className="text-text-muted" />
            </div>
            <input
              type="text"
              placeholder="Search articles, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-gray-800 rounded-2xl text-text placeholder-gray-600 focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all duration-300"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="text-text-muted font-medium flex items-center gap-2">
              <FaFilter className="text-accent" />
              Filter by:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg shadow-accent/20'
                    : 'bg-gray-900/50 text-text-muted hover:bg-gray-800 border border-gray-800'
                }`}
              >
                {category}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                  selectedCategory === category
                    ? 'bg-white/20'
                    : 'bg-gray-800'
                }`}>
                  {sampleBlogPosts.filter(p => category === 'All' || p.category === category).length}
                </span>
              </button>
            ))}
          </div>
          
          <div className="text-center text-text-muted text-sm">
            Showing {filteredPosts.length} of {sampleBlogPosts.length} articles
          </div>
        </div>

        {/* Blog Grid */}
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1.5 bg-gray-900 text-accent text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                      <span className="text-text-muted text-sm">
                        {formatDate(post.publishedDate)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-text mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-muted text-base leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-8 text-sm">
                      <div className="flex items-center gap-2 text-text-muted">
                        <FaClock className="text-accent" />
                        {post.readTime} min
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <FaEye className="text-accent" />
                        {post.views.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2 text-text-muted">
                        <FaComments className="text-accent" />
                        {post.comments}
                      </div>
                    </div>
                    
                    <button className="w-full py-3 px-4 bg-gray-900 text-text font-medium rounded-xl hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Read Full Article
                      <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mb-20">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-3 rounded-xl bg-gray-900/50 text-text disabled:text-gray-600 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-all duration-300 disabled:hover:bg-gray-900/50"
                >
                  <FaChevronLeft />
                </button>
                
                {getPageNumbers().map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === pageNum
                        ? 'bg-gradient-to-r from-accent to-accent-blue text-white shadow-lg'
                        : 'bg-gray-900/50 text-text hover:bg-gray-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-3 rounded-xl bg-gray-900/50 text-text disabled:text-gray-600 disabled:cursor-not-allowed hover:bg-accent hover:text-white transition-all duration-300 disabled:hover:bg-gray-900/50"
                >
                  <FaChevronRight />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-text-muted text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">
              No articles found
            </h3>
            <p className="text-text-muted text-lg max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="relative bg-gradient-to-r from-accent/10 to-accent-blue/10 rounded-3xl p-12 border border-accent/20 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="relative text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Want to Collaborate or Discuss Tech?
            </h3>
            <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              I'm always open to interesting discussions, collaboration opportunities, 
              or sharing knowledge about software development, architecture, and emerging technologies.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-blue text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
            >
              <FaComments />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Add to index.css for grid pattern */}
      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f59e0b22 1px, transparent 1px),
                            linear-gradient(to bottom, #f59e0b22 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blog;
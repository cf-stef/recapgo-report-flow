import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: "1",
    title: "RecapGo x Slack: Your AI Meeting Assistant Just Got Better",
    description: "Discover how our new Slack integration streamlines your meeting workflow and keeps your team connected with AI-powered insights.",
    content: "Full blog content here...",
    category: "Product",
    author: "Sarah Johnson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    date: "2025-01-15",
    featured: true,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "AI-Powered Meeting Summaries: The Future of Productivity",
    description: "Learn how artificial intelligence is transforming the way we capture, analyze, and act on meeting insights.",
    content: "Full blog content here...",
    category: "AI and ML",
    author: "Michael Chen",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    date: "2025-01-10",
    featured: false,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    readTime: "7 min read"
  },
  {
    id: "3",
    title: "10 Best Practices for Remote Team Meetings",
    description: "Essential strategies for running effective virtual meetings that keep remote teams engaged and productive.",
    content: "Full blog content here...",
    category: "Productivity",
    author: "Emma Rodriguez",
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    date: "2025-01-05",
    featured: false,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=400&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Customer Success Story: How TechCorp Reduced Meeting Time by 40%",
    description: "A real-world case study showing how RecapGo helped a growing startup optimize their meeting culture.",
    content: "Full blog content here...",
    category: "Customer Story",
    author: "David Park",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-28",
    featured: false,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    readTime: "4 min read"
  },
  {
    id: "5",
    title: "The Future of Web Development: AI-Powered Coding",
    description: "Explore how artificial intelligence is revolutionizing web development, from code generation to automated testing.",
    content: "Full blog content here...",
    category: "AI and ML",
    author: "Alex Thompson",
    authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-20",
    featured: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    readTime: "8 min read"
  },
  {
    id: "6",
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn the best practices for creating robust and scalable APIs using Node.js and the Express framework.",
    content: "Full blog content here...",
    category: "Guides",
    author: "Jennifer Wilson",
    authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-15",
    featured: false,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
    readTime: "12 min read"
  },
  {
    id: "7",
    title: "Frontend Performance Optimization Techniques",
    description: "Discover essential techniques to boost your website's frontend performance including image optimization and code splitting.",
    content: "Full blog content here...",
    category: "Productivity",
    author: "Robert Kumar",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-12",
    featured: false,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
    readTime: "9 min read"
  },
  {
    id: "8",
    title: "The Rise of Serverless Computing",
    description: "Understand the benefits and challenges of serverless architecture with AWS Lambda and Google Cloud Functions.",
    content: "Full blog content here...",
    category: "Guides",
    author: "Lisa Chang",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-08",
    featured: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
    readTime: "10 min read"
  },
  {
    id: "9",
    title: "UI/UX Design Principles for Engaging Interfaces",
    description: "Learn the core principles of UI/UX design that lead to user-friendly and engaging digital products.",
    content: "Full blog content here...",
    category: "Productivity",
    author: "Maria Garcia",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    date: "2024-12-03",
    featured: false,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
    readTime: "6 min read"
  },
  {
    id: "10",
    title: "Getting Started with TypeScript for JavaScript Developers",
    description: "Transition smoothly from JavaScript to TypeScript with this comprehensive guide covering types and interfaces.",
    content: "Full blog content here...",
    category: "Guides",
    author: "James Miller",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    date: "2024-11-28",
    featured: false,
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=800&h=400&fit=crop",
    readTime: "11 min read"
  }
];

const categories = ["All", "Product", "Productivity", "AI and ML", "Customer Story", "Guides"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
    
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  // Pagination logic
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = regularPosts.slice(startIndex, endIndex);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      {/* Header */}
      <div className="bg-gradient-to-br from-sky-tint to-background border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              RecapGo Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and stories about transforming your meeting experience with AI
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center animate-fade-in-1">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className="mb-16 animate-fade-in-2">
            <Card className="overflow-hidden bg-gradient-to-r from-card to-sky-tint/20 border-0 shadow-soft">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <CardTitle className="text-3xl mb-4 text-foreground">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg mb-6">
                    {featuredPost.description}
                  </CardDescription>
                  <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <img 
                        src={featuredPost.authorImage} 
                        alt={featuredPost.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button className="w-fit group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-3">
          {currentPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-button transition-all duration-300 group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" className="w-full group/btn">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
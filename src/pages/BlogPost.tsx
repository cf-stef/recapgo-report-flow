import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock, Twitter, Facebook, Linkedin, Mail, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// This would normally come from an API or CMS
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "RecapGo x Slack: Your AI Meeting Assistant Just Got Better",
      description: "Discover how our new Slack integration streamlines your meeting workflow and keeps your team connected with AI-powered insights.",
      content: `
        <p>We're excited to announce our new Slack integration that brings RecapGo's AI-powered meeting insights directly into your team's communication hub. This integration represents a significant step forward in making meeting intelligence more accessible and actionable for teams everywhere.</p>
        
        <h1>Major Announcement: Revolutionary Features</h1>
        <p>This is how a main header (H1) looks in our blog posts. It's bold, prominent, and captures attention while maintaining excellent readability across all devices.</p>
        
        <h2>What's New with the Slack Integration</h2>
        <p>The RecapGo Slack app automatically shares meeting summaries, action items, and key insights in designated channels or as direct messages. This means your team can stay informed about important decisions and follow-ups without having to dig through meeting recordings or lengthy notes.</p>
        
        <h3>Key Features</h3>
        <p>Our integration comes packed with powerful features designed to streamline your workflow:</p>
        <ul>
          <li><strong>Automatic Summary Sharing:</strong> Meeting summaries are posted to your chosen Slack channels immediately after each meeting</li>
          <li><strong>Action Item Tracking:</strong> Important tasks and decisions are highlighted and can be converted into Slack reminders</li>
          <li><strong>Smart Notifications:</strong> Get notified about meetings you missed with personalized summaries</li>
          <li><strong>Searchable History:</strong> All meeting insights become searchable within Slack</li>
          <li><strong>Custom Integrations:</strong> Connect with your existing tools and workflows seamlessly</li>
        </ul>
        
        <h2>Implementation Steps</h2>
        <p>Getting started is easier than you might think. Follow these simple steps:</p>
        <ol>
          <li>Navigate to your RecapGo dashboard and find the integrations section</li>
          <li>Click on the Slack integration option and authorize the connection</li>
          <li>Select which channels should receive meeting summaries</li>
          <li>Configure your notification preferences and timing</li>
          <li>Test the integration with a sample meeting</li>
        </ol>
        
        <h2>Benefits for Your Team</h2>
        <p>This integration eliminates the communication gap that often exists between meetings and daily work. Team members who couldn't attend a meeting can quickly catch up on what they missed, while those who were present can easily reference key points and decisions.</p>
        
        <blockquote>
          "Since implementing RecapGo's Slack integration, our team alignment has improved dramatically. Everyone knows what was discussed and what needs to be done, without the usual back-and-forth about meeting outcomes. It's been a game-changer for our remote team collaboration." - Sarah Kim, Product Manager at TechStart
        </blockquote>
        
        <h3>Performance Metrics</h3>
        <p>Early adopters have reported significant improvements in their meeting effectiveness:</p>
        <ul>
          <li>40% reduction in follow-up emails</li>
          <li>60% faster action item completion</li>
          <li>85% improvement in meeting attendance awareness</li>
          <li>50% decrease in time spent searching for meeting information</li>
        </ul>
        
        <h2>Getting Started</h2>
        <p>Setting up the integration takes just a few minutes. Simply connect your RecapGo account with Slack through our integrations page, choose your preferred channels for different types of meetings, and you're ready to go.</p>
        
        <p>We're committed to making meeting intelligence more accessible and actionable. This Slack integration is just the beginning – stay tuned for more exciting updates that will further streamline your team's workflow and boost productivity across your organization.</p>
      `,
      category: "Product",
      author: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
      readTime: "5 min read",
      tags: ["Integration", "Slack", "Productivity", "AI"]
    },
    "2": {
      id: "2",
      title: "AI-Powered Meeting Summaries: The Future of Productivity",
      description: "Learn how artificial intelligence is transforming the way we capture, analyze, and act on meeting insights.",
      content: `
        <p>Artificial intelligence is revolutionizing how we approach meeting productivity. Gone are the days of frantically taking notes or trying to remember every detail discussed. AI-powered meeting summaries are changing the game.</p>
        
        <h2>The Problem with Traditional Meeting Notes</h2>
        <p>Traditional note-taking during meetings has several limitations: it's time-consuming, often incomplete, and can distract from active participation. Important details get missed, action items are forgotten, and valuable insights are lost.</p>
        
        <h2>How AI Changes Everything</h2>
        <p>AI-powered meeting summaries use natural language processing to automatically capture, analyze, and organize meeting content. This technology can identify key topics, extract action items, and highlight important decisions without human intervention.</p>
        
        <h3>Key Benefits:</h3>
        <ul>
          <li><strong>Complete Accuracy:</strong> AI captures every word and nuance</li>
          <li><strong>Automatic Organization:</strong> Content is structured into logical sections</li>
          <li><strong>Action Item Extraction:</strong> Tasks and deadlines are automatically identified</li>
          <li><strong>Sentiment Analysis:</strong> Understanding the tone and mood of discussions</li>
        </ul>
        
        <h2>The Future of Work</h2>
        <p>As AI technology continues to evolve, we can expect even more sophisticated features like real-time language translation, automated follow-up scheduling, and predictive insights based on meeting patterns.</p>
      `,
      category: "AI and ML",
      author: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-10",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
      readTime: "7 min read",
      tags: ["AI", "Machine Learning", "Productivity", "Automation"]
    },
    "3": {
      id: "3",
      title: "10 Best Practices for Remote Team Meetings",
      description: "Essential strategies for running effective virtual meetings that keep remote teams engaged and productive.",
      content: `
        <p>Remote work has become the new normal, and with it comes the challenge of running effective virtual meetings. Here are ten proven strategies to make your remote meetings more engaging and productive.</p>
        
        <h2>1. Set Clear Agendas</h2>
        <p>Always send a detailed agenda 24 hours before the meeting. This helps participants prepare and ensures everyone knows what to expect.</p>
        
        <h2>2. Use Video When Possible</h2>
        <p>Video calls create a more personal connection and help maintain engagement. Encourage participants to turn on their cameras.</p>
        
        <h2>3. Keep Meetings Short and Focused</h2>
        <p>Aim for 30-minute meetings maximum. If you need longer, build in breaks every 30 minutes.</p>
        
        <h2>4. Start with a Check-in</h2>
        <p>Begin each meeting with a quick personal check-in to build rapport and ensure everyone is present mentally.</p>
        
        <h2>5. Use Interactive Tools</h2>
        <p>Leverage polls, breakout rooms, and collaborative documents to keep everyone engaged.</p>
        
        <h2>Additional Tips</h2>
        <ul>
          <li>Mute when not speaking</li>
          <li>Use good lighting and audio equipment</li>
          <li>Record sessions for those who can't attend</li>
          <li>Follow up with clear action items</li>
          <li>Respect time zones when scheduling</li>
        </ul>
      `,
      category: "Productivity",
      author: "Emma Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-05",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop",
      readTime: "6 min read",
      tags: ["Remote Work", "Team Management", "Productivity", "Best Practices"]
    },
    "4": {
      id: "4",
      title: "Customer Success Story: How TechCorp Reduced Meeting Time by 40%",
      description: "A real-world case study showing how RecapGo helped a growing startup optimize their meeting culture.",
      content: `
        <p>TechCorp, a rapidly growing fintech startup, was struggling with meeting overload. With 50+ employees across three time zones, they were spending more time in meetings than actually building their product.</p>
        
        <h2>The Challenge</h2>
        <p>Before implementing RecapGo, TechCorp faced several challenges:</p>
        <ul>
          <li>Employees spent 60% of their time in meetings</li>
          <li>Important decisions were often revisited multiple times</li>
          <li>Remote team members felt disconnected</li>
          <li>Action items frequently fell through the cracks</li>
        </ul>
        
        <h2>The Solution</h2>
        <p>TechCorp implemented RecapGo's AI-powered meeting intelligence platform across all their recurring meetings. The results were immediate and significant.</p>
        
        <h2>Results After 3 Months</h2>
        <ul>
          <li><strong>40% reduction</strong> in overall meeting time</li>
          <li><strong>85% improvement</strong> in action item completion</li>
          <li><strong>90% increase</strong> in team satisfaction scores</li>
          <li><strong>25% boost</strong> in product development velocity</li>
        </ul>
        
        <blockquote>
          "RecapGo transformed how we work. Our meetings are now focused, actionable, and everyone stays aligned regardless of their location." - Alex Thompson, CTO at TechCorp
        </blockquote>
        
        <h2>Key Success Factors</h2>
        <p>The success at TechCorp can be attributed to:</p>
        <ul>
          <li>Leadership buy-in from day one</li>
          <li>Consistent use across all team meetings</li>
          <li>Integration with existing workflow tools</li>
          <li>Regular review of meeting effectiveness metrics</li>
        </ul>
      `,
      category: "Customer Story",
      author: "David Park",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-28",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=600&fit=crop",
      readTime: "4 min read",
      tags: ["Case Study", "Success Story", "ROI", "Efficiency"]
    },
    "5": {
      id: "5",
      title: "The Future of Web Development: AI-Powered Coding",
      description: "Explore how artificial intelligence is revolutionizing web development, from code generation to automated testing.",
      content: `
        <p>The landscape of web development is rapidly evolving with the integration of artificial intelligence. From code generation to automated testing, AI is reshaping how developers build and maintain web applications.</p>
        
        <h2>AI Code Generation</h2>
        <p>Modern AI tools can generate functional code from simple descriptions, dramatically speeding up development cycles and reducing routine coding tasks.</p>
        
        <h2>Automated Testing and QA</h2>
        <p>AI-powered testing tools can automatically generate test cases, identify bugs, and even suggest fixes, ensuring higher code quality with less manual effort.</p>
        
        <h2>Intelligent Code Review</h2>
        <p>AI systems can now perform sophisticated code reviews, checking for security vulnerabilities, performance issues, and adherence to best practices.</p>
        
        <h2>The Developer's Role</h2>
        <p>Rather than replacing developers, AI is augmenting their capabilities, allowing them to focus on higher-level architecture and creative problem-solving.</p>
      `,
      category: "AI and ML",
      author: "Alex Thompson",
      authorImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-20",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop",
      readTime: "8 min read",
      tags: ["AI", "Web Development", "Automation", "Future Tech"]
    },
    "6": {
      id: "6",
      title: "Building Scalable APIs with Node.js and Express",
      description: "Learn the best practices for creating robust and scalable APIs using Node.js and the Express framework.",
      content: `
        <p>Building scalable APIs is crucial for modern web applications. Node.js and Express provide a powerful foundation for creating high-performance, maintainable API services.</p>
        
        <h2>Architecture Principles</h2>
        <p>Start with a solid architectural foundation that separates concerns and promotes code reusability.</p>
        
        <h2>Performance Optimization</h2>
        <p>Implement caching strategies, database optimization, and efficient middleware to ensure your API can handle high traffic loads.</p>
        
        <h2>Security Best Practices</h2>
        <p>Protect your API with proper authentication, input validation, and security headers to prevent common vulnerabilities.</p>
        
        <h2>Testing and Documentation</h2>
        <p>Comprehensive testing and clear documentation are essential for maintaining and scaling your API over time.</p>
      `,
      category: "Guides",
      author: "Jennifer Wilson",
      authorImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-15",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop",
      readTime: "12 min read",
      tags: ["Node.js", "Express", "API", "Backend"]
    },
    "7": {
      id: "7",
      title: "Frontend Performance Optimization Techniques",
      description: "Discover essential techniques to boost your website's frontend performance including image optimization and code splitting.",
      content: `
        <p>Frontend performance is crucial for user experience and business success. Slow websites lead to higher bounce rates and lower conversion rates.</p>
        
        <h2>Image Optimization</h2>
        <p>Use modern image formats like WebP, implement lazy loading, and serve images at appropriate sizes for different devices.</p>
        
        <h2>Code Splitting</h2>
        <p>Break your JavaScript bundles into smaller chunks that load only when needed, reducing initial page load times.</p>
        
        <h2>Critical CSS</h2>
        <p>Inline critical CSS and defer non-critical stylesheets to improve perceived performance.</p>
        
        <h2>Measuring Performance</h2>
        <p>Use tools like Lighthouse, WebPageTest, and Core Web Vitals to continuously monitor and improve your site's performance.</p>
      `,
      category: "Productivity",
      author: "Robert Kumar",
      authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-12",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
      readTime: "9 min read",
      tags: ["Performance", "Frontend", "Optimization", "Web Vitals"]
    },
    "8": {
      id: "8",
      title: "The Rise of Serverless Computing",
      description: "Understand the benefits and challenges of serverless architecture with AWS Lambda and Google Cloud Functions.",
      content: `
        <p>Serverless computing is transforming how we build and deploy applications. By abstracting away server management, developers can focus purely on code and business logic.</p>
        
        <h2>What is Serverless?</h2>
        <p>Serverless doesn't mean no servers - it means you don't have to manage them. Cloud providers handle all the infrastructure, scaling, and maintenance.</p>
        
        <h2>Benefits of Serverless</h2>
        <ul>
          <li><strong>Cost Efficiency:</strong> Pay only for what you use</li>
          <li><strong>Automatic Scaling:</strong> Handle traffic spikes without configuration</li>
          <li><strong>Reduced Maintenance:</strong> No servers to patch or update</li>
          <li><strong>Faster Time to Market:</strong> Focus on features, not infrastructure</li>
        </ul>
        
        <h2>Popular Serverless Platforms</h2>
        <p>AWS Lambda, Google Cloud Functions, and Azure Functions are leading the serverless revolution with robust feature sets and global availability.</p>
        
        <h2>Challenges to Consider</h2>
        <p>While serverless offers many benefits, consider factors like cold starts, vendor lock-in, and debugging complexity when planning your architecture.</p>
      `,
      category: "Guides",
      author: "Lisa Chang",
      authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-08",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop",
      readTime: "10 min read",
      tags: ["Serverless", "Cloud Computing", "AWS Lambda", "Architecture"]
    },
    "9": {
      id: "9",
      title: "UI/UX Design Principles for Engaging Interfaces",
      description: "Learn the core principles of UI/UX design that lead to user-friendly and engaging digital products.",
      content: `
        <p>Great UI/UX design is the foundation of successful digital products. Understanding core design principles helps create interfaces that users love to interact with.</p>
        
        <h2>User-Centered Design</h2>
        <p>Always start with understanding your users' needs, goals, and pain points. Design solutions that solve real problems.</p>
        
        <h2>Visual Hierarchy</h2>
        <p>Use size, color, spacing, and typography to guide users' attention to the most important elements first.</p>
        
        <h2>Consistency is Key</h2>
        <p>Maintain consistent patterns, terminology, and interactions throughout your interface to reduce cognitive load.</p>
        
        <h2>Accessibility Matters</h2>
        <p>Design for all users, including those with disabilities. Use proper contrast, alt text, and keyboard navigation.</p>
        
        <h2>Test and Iterate</h2>
        <p>Continuously test your designs with real users and iterate based on feedback and behavior data.</p>
      `,
      category: "Productivity",
      author: "Maria Garcia",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "2024-12-03",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
      readTime: "6 min read",
      tags: ["UI Design", "UX Design", "User Experience", "Interface"]
    },
    "10": {
      id: "10",
      title: "Getting Started with TypeScript for JavaScript Developers",
      description: "Transition smoothly from JavaScript to TypeScript with this comprehensive guide covering types and interfaces.",
      content: `
        <p>TypeScript is JavaScript with type safety. It catches errors at compile time and provides better IDE support, making your code more reliable and maintainable.</p>
        
        <h2>Why TypeScript?</h2>
        <p>TypeScript adds static type checking to JavaScript, helping you catch bugs early and write more robust applications.</p>
        
        <h2>Basic Types</h2>
        <p>Start with primitive types like string, number, and boolean, then move on to arrays, objects, and custom types.</p>
        
        <h2>Interfaces and Type Definitions</h2>
        <p>Define the shape of your objects with interfaces, creating contracts that ensure consistency across your codebase.</p>
        
        <h2>Gradual Adoption</h2>
        <p>You can adopt TypeScript gradually - start by renaming .js files to .ts and add types incrementally.</p>
        
        <h2>Best Practices</h2>
        <ul>
          <li>Enable strict mode for better type safety</li>
          <li>Use interfaces for object shapes</li>
          <li>Leverage union types for flexible APIs</li>
          <li>Take advantage of type inference</li>
        </ul>
      `,
      category: "Guides",
      author: "James Miller",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "2024-11-28",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&h=600&fit=crop",
      readTime: "11 min read",
      tags: ["TypeScript", "JavaScript", "Programming", "Development"]
    }
  };
  
  return posts[id as keyof typeof posts];
};

export default function BlogPost() {
  const { id } = useParams();
  const post = getBlogPost(id || "");
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || "");
    
    const socialUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      email: `mailto:?subject=${title}&body=${url}`
    };
    
    window.open(socialUrls[platform as keyof typeof socialUrls], '_blank');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-hero">
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      {/* Header Navigation */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/blog">
            <Button variant="ghost" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="aspect-[21/9] max-h-96 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-8 animate-fade-in">
                <Badge variant="secondary" className="mb-4">
                  {post.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  {post.description}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-6 pb-8 border-b">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-foreground">{post.author}</div>
                      <div className="text-sm text-muted-foreground">Author</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

              </header>

              {/* Key Takeaways - inspired by Fireflies */}
              <Card className="mb-8 bg-gradient-to-r from-sky-tint/20 to-card border-sky-tint/30">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Key Takeaways
                  </h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{post.description}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Essential strategies and best practices for modern teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Actionable insights you can implement immediately</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Article Body */}
              <div className="bg-card rounded-lg p-8 shadow-sm border">
                <div 
                  className="prose prose-lg max-w-none
                    prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                    prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight prose-h1:border-b prose-h1:border-border prose-h1:pb-4
                    prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:leading-tight prose-h2:text-primary
                    prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:leading-tight prose-h3:text-foreground
                    prose-p:text-foreground prose-p:mb-6 prose-p:leading-relaxed prose-p:text-base
                    prose-strong:text-foreground prose-strong:font-semibold prose-strong:text-primary
                    prose-li:text-foreground prose-li:mb-3 prose-li:leading-relaxed prose-li:pl-2
                    prose-ul:mb-8 prose-ul:space-y-3 prose-ul:pl-6
                    prose-ol:mb-8 prose-ol:space-y-3 prose-ol:pl-6
                    prose-ul>li:marker:text-primary prose-ol>li:marker:text-primary prose-ol>li:marker:font-semibold
                    prose-blockquote:text-muted-foreground prose-blockquote:not-italic
                    prose-blockquote:border-l-4 prose-blockquote:border-l-primary
                    prose-blockquote:bg-gradient-to-r prose-blockquote:from-sky-tint/30 prose-blockquote:to-transparent
                    prose-blockquote:p-8 prose-blockquote:my-8 prose-blockquote:rounded-r-lg 
                    prose-blockquote:text-lg prose-blockquote:font-medium prose-blockquote:leading-relaxed
                    prose-blockquote:shadow-sm"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-medium text-muted-foreground mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share this post
                    </h3>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={copyToClipboard}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy Link
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => shareOnSocial('twitter')}
                      >
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => shareOnSocial('linkedin')}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => shareOnSocial('facebook')}
                      >
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full justify-start" 
                        onClick={() => shareOnSocial('email')}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </aside>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
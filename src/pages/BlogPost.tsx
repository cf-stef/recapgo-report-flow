import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// This would normally come from an API or CMS
const getBlogPost = (id: string) => {
  const posts = {
    "1": {
      id: "1",
      title: "RecapGo x Slack: Your AI Meeting Assistant Just Got Better",
      description: "Discover how our new Slack integration streamlines your meeting workflow and keeps your team connected with AI-powered insights.",
      content: `
        <p>We're excited to announce our new Slack integration that brings RecapGo's AI-powered meeting insights directly into your team's communication hub. This integration represents a significant step forward in making meeting intelligence more accessible and actionable for teams everywhere.</p>
        
        <h2>What's New with the Slack Integration</h2>
        <p>The RecapGo Slack app automatically shares meeting summaries, action items, and key insights in designated channels or as direct messages. This means your team can stay informed about important decisions and follow-ups without having to dig through meeting recordings or lengthy notes.</p>
        
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Automatic Summary Sharing:</strong> Meeting summaries are posted to your chosen Slack channels immediately after each meeting</li>
          <li><strong>Action Item Tracking:</strong> Important tasks and decisions are highlighted and can be converted into Slack reminders</li>
          <li><strong>Smart Notifications:</strong> Get notified about meetings you missed with personalized summaries</li>
          <li><strong>Searchable History:</strong> All meeting insights become searchable within Slack</li>
        </ul>
        
        <h2>Benefits for Your Team</h2>
        <p>This integration eliminates the communication gap that often exists between meetings and daily work. Team members who couldn't attend a meeting can quickly catch up on what they missed, while those who were present can easily reference key points and decisions.</p>
        
        <blockquote>
          "Since implementing RecapGo's Slack integration, our team alignment has improved dramatically. Everyone knows what was discussed and what needs to be done, without the usual back-and-forth about meeting outcomes." - Sarah Kim, Product Manager at TechStart
        </blockquote>
        
        <h2>Getting Started</h2>
        <p>Setting up the integration takes just a few minutes. Simply connect your RecapGo account with Slack through our integrations page, choose your preferred channels for different types of meetings, and you're ready to go.</p>
        
        <p>We're committed to making meeting intelligence more accessible and actionable. This Slack integration is just the beginning – stay tuned for more exciting updates that will further streamline your team's workflow.</p>
      `,
      category: "Product",
      author: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      date: "2025-01-15",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
      readTime: "5 min read",
      tags: ["Integration", "Slack", "Productivity", "AI"]
    }
  };
  
  return posts[id as keyof typeof posts];
};

export default function BlogPost() {
  const { id } = useParams();
  const post = getBlogPost(id || "");

  if (!post) {
    return (
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
    );
  }

  return (
    <div className="min-h-screen bg-background">
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

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none animate-fade-in-1
                  prose-headings:text-foreground 
                  prose-p:text-foreground 
                  prose-strong:text-foreground
                  prose-li:text-foreground
                  prose-blockquote:text-muted-foreground
                  prose-blockquote:border-l-primary
                  prose-blockquote:bg-sky-tint/20
                  prose-blockquote:p-4
                  prose-blockquote:rounded-r-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

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
                {/* Share */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share this post
                    </h3>
                    <Button variant="outline" className="w-full">
                      Copy Link
                    </Button>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">In this article</h3>
                    <nav className="space-y-2 text-sm">
                      <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                        What's New with the Slack Integration
                      </a>
                      <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                        Benefits for Your Team
                      </a>
                      <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                        Getting Started
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
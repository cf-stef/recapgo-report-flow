import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2, Clock, Twitter, Facebook, Linkedin, Mail, Copy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { getBlogPost } from "@/data/blogs";

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
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-2xl bg-muted shadow-soft">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-2xl"></div>
        </div>
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
              {post.tags && post.tags.length > 0 && (
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
              )}
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
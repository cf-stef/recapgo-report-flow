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
        <p>Artificial intelligence is revolutionizing how we approach meeting productivity. Gone are the days of frantically taking notes or trying to remember every detail discussed. AI-powered meeting summaries are changing the game for modern teams.</p>
        
        <h1>The AI Revolution in Meeting Management</h1>
        <p>We're living through a transformative period where artificial intelligence is reshaping fundamental business processes. Meeting management, once a manual and error-prone task, is now being revolutionized by intelligent systems.</p>
        
        <h2>The Problem with Traditional Meeting Notes</h2>
        <p>Traditional note-taking during meetings has several critical limitations that impact team productivity:</p>
        <ul>
          <li><strong>Incomplete Capture:</strong> Important details get missed when focusing on active participation</li>
          <li><strong>Time Consuming:</strong> Note-taking distracts from meaningful engagement</li>
          <li><strong>Inconsistent Quality:</strong> Different note-takers produce varying levels of detail</li>
          <li><strong>Lost Context:</strong> Nuances and tone are often missing from written notes</li>
          <li><strong>Poor Distribution:</strong> Notes rarely reach all stakeholders effectively</li>
        </ul>
        
        <h2>How AI Changes Everything</h2>
        <p>AI-powered meeting summaries use advanced natural language processing to automatically capture, analyze, and organize meeting content. This technology can identify key topics, extract action items, and highlight important decisions without human intervention.</p>
        
        <h3>Core AI Technologies</h3>
        <p>Several cutting-edge technologies work together to create intelligent meeting summaries:</p>
        <ol>
          <li>Speech-to-text transcription with high accuracy rates</li>
          <li>Natural language understanding for context extraction</li>
          <li>Named entity recognition for identifying people and topics</li>
          <li>Sentiment analysis for understanding meeting dynamics</li>
          <li>Action item detection through pattern recognition</li>
        </ol>
        
        <h3>Key Benefits</h3>
        <ul>
          <li><strong>Complete Accuracy:</strong> AI captures every word and nuance without bias</li>
          <li><strong>Automatic Organization:</strong> Content is structured into logical sections intelligently</li>
          <li><strong>Action Item Extraction:</strong> Tasks and deadlines are automatically identified and highlighted</li>
          <li><strong>Sentiment Analysis:</strong> Understanding the tone and mood of discussions provides valuable context</li>
          <li><strong>Multi-language Support:</strong> AI can process meetings in various languages seamlessly</li>
        </ul>
        
        <blockquote>
          "AI-powered meeting summaries have transformed our team's productivity. We've seen a 60% reduction in post-meeting confusion and a 40% improvement in action item completion rates. It's like having a super-efficient assistant in every meeting." - Jennifer Walsh, VP of Operations at InnovateTech
        </blockquote>
        
        <h2>The Future of Work</h2>
        <p>As AI technology continues to evolve, we can expect even more sophisticated features that will further revolutionize how teams collaborate and make decisions.</p>
        
        <h3>Emerging Capabilities</h3>
        <p>The next generation of AI meeting tools will include:</p>
        <ul>
          <li>Real-time language translation for global teams</li>
          <li>Automated follow-up scheduling based on discussion outcomes</li>
          <li>Predictive insights based on historical meeting patterns</li>
          <li>Integration with project management tools for seamless workflow</li>
        </ul>
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
        <p>Remote work has become the new normal, and with it comes the challenge of running effective virtual meetings. Here are ten proven strategies to make your remote meetings more engaging and productive for teams across the globe.</p>
        
        <h1>The Remote Meeting Revolution</h1>
        <p>The shift to remote work has fundamentally changed how teams collaborate. Virtual meetings are no longer a convenience—they're the primary way distributed teams stay connected, make decisions, and drive projects forward.</p>
        
        <h2>Essential Pre-Meeting Preparation</h2>
        
        <h3>1. Set Clear Agendas</h3>
        <p>Always send a detailed agenda 24 hours before the meeting. This helps participants prepare mentally and ensures everyone knows what to expect. Include:</p>
        <ul>
          <li><strong>Meeting objectives:</strong> What you want to accomplish</li>
          <li><strong>Discussion topics:</strong> Key points to cover</li>
          <li><strong>Time allocations:</strong> How long each topic should take</li>
          <li><strong>Required materials:</strong> Documents or data participants should review</li>
          <li><strong>Decision points:</strong> What needs to be decided by the end</li>
        </ul>
        
        <h3>2. Choose the Right Technology</h3>
        <p>Select video conferencing tools that match your team's needs and technical capabilities. Consider factors like:</p>
        <ol>
          <li>Maximum participant capacity</li>
          <li>Screen sharing and collaboration features</li>
          <li>Recording capabilities for absent team members</li>
          <li>Integration with your existing workflow tools</li>
          <li>Reliability and connection quality across different regions</li>
        </ol>
        
        <h2>During the Meeting: Engagement Strategies</h2>
        
        <h3>3. Use Video When Possible</h3>
        <p>Video calls create a more personal connection and help maintain engagement. Encourage participants to turn on their cameras to foster better communication and build team rapport.</p>
        
        <h3>4. Keep Meetings Short and Focused</h3>
        <p>Aim for 30-minute meetings maximum. If you need longer sessions, build in 5-10 minute breaks every 30 minutes to prevent video fatigue and maintain attention.</p>
        
        <h3>5. Start with a Check-in</h3>
        <p>Begin each meeting with a quick personal check-in to build rapport and ensure everyone is present mentally. This helps create psychological safety and connection.</p>
        
        <blockquote>
          "The most successful remote teams I work with always start meetings with a brief personal connection moment. It might seem like a small thing, but it dramatically improves collaboration and team cohesion throughout the session." - Dr. Rachel Martinez, Remote Work Consultant
        </blockquote>
        
        <h2>Interactive Techniques for Engagement</h2>
        
        <h3>6. Use Interactive Tools</h3>
        <p>Leverage various digital tools to keep everyone engaged:</p>
        <ul>
          <li>Live polls for quick decision-making</li>
          <li>Breakout rooms for small group discussions</li>
          <li>Collaborative documents for real-time note-taking</li>
          <li>Digital whiteboards for brainstorming sessions</li>
          <li>Screen annotation tools for visual collaboration</li>
        </ul>
        
        <h3>7. Implement the "Popcorn" Method</h3>
        <p>Instead of going around the room in order, use the popcorn method where each speaker chooses the next person to speak. This keeps everyone alert and engaged.</p>
        
        <h2>Technical and Etiquette Best Practices</h2>
        
        <h3>8. Master the Mute Button</h3>
        <p>Establish clear muting protocols:</p>
        <ul>
          <li>Mute when not speaking to eliminate background noise</li>
          <li>Use push-to-talk features for quick interjections</li>
          <li>Have a backup communication channel for technical issues</li>
        </ul>
        
        <h3>9. Optimize Your Environment</h3>
        <p>Create a professional and distraction-free meeting environment:</p>
        <ol>
          <li>Use good lighting (natural light facing you works best)</li>
          <li>Invest in quality audio equipment (headphones with microphones)</li>
          <li>Choose a clean, non-distracting background</li>
          <li>Ensure stable internet connection</li>
          <li>Have a backup connection plan (mobile hotspot)</li>
        </ol>
        
        <h2>Post-Meeting Excellence</h2>
        
        <h3>10. Follow Up Effectively</h3>
        <p>The meeting doesn't end when you hang up. Effective follow-up includes:</p>
        <ul>
          <li>Send meeting recordings to absent team members</li>
          <li>Distribute clear action items with owners and deadlines</li>
          <li>Schedule follow-up meetings when necessary</li>
          <li>Create shared documents for ongoing collaboration</li>
          <li>Collect feedback to improve future meetings</li>
        </ul>
        
        <h2>Respecting Global Teams</h2>
        <p>When working with international teams, always respect time zones when scheduling. Use scheduling tools that show multiple time zones and consider rotating meeting times to share the burden of inconvenient hours.</p>
        
        <blockquote>
          "Time zone respect is not just about logistics—it's about showing your global team members that their time and participation are valued equally, regardless of their location." - Ahmed Hassan, Director of Global Operations
        </blockquote>
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
        <p>TechCorp, a rapidly growing fintech startup, was struggling with meeting overload. With 50+ employees across three time zones, they were spending more time in meetings than actually building their product. This is their transformation story.</p>
        
        <h1>The Meeting Crisis: A Growing Problem</h1>
        <p>What started as a nimble 15-person startup had evolved into a 50+ person distributed team. With growth came complexity, and with complexity came an explosion of meetings that was threatening their productivity and team morale.</p>
        
        <h2>The Challenge: When Meetings Become the Enemy</h2>
        <p>Before implementing RecapGo, TechCorp faced several critical challenges that were impacting their bottom line:</p>
        
        <h3>Time Allocation Issues</h3>
        <ul>
          <li><strong>60% of work time</strong> was spent in meetings rather than productive work</li>
          <li><strong>Daily standups</strong> were taking 45+ minutes with little value</li>
          <li><strong>Back-to-back meetings</strong> left no time for deep work</li>
          <li><strong>Meeting preparation</strong> was consuming additional hours weekly</li>
          <li><strong>Context switching</strong> between meetings reduced overall efficiency</li>
        </ul>
        
        <h3>Communication Breakdowns</h3>
        <p>The distributed team was facing significant communication challenges:</p>
        <ol>
          <li>Important decisions were often revisited multiple times</li>
          <li>Remote team members felt disconnected from in-person discussions</li>
          <li>Action items frequently fell through the cracks</li>
          <li>Meeting notes were inconsistent and often incomplete</li>
          <li>Follow-up communication was scattered across multiple channels</li>
        </ol>
        
        <h3>Cultural and Morale Impact</h3>
        <blockquote>
          "We reached a breaking point where developers were joking about needing to schedule meetings to discuss meetings. The irony wasn't lost on us - we were a tech company that had lost control of our own productivity tools." - Sarah Chen, Head of Engineering at TechCorp
        </blockquote>
        
        <h2>The Solution: Implementing RecapGo</h2>
        <p>TechCorp implemented RecapGo's AI-powered meeting intelligence platform across all their recurring meetings. The implementation was rolled out in three phases over six weeks.</p>
        
        <h3>Phase 1: Core Team Adoption</h3>
        <p>The leadership team started with their weekly executive meetings:</p>
        <ul>
          <li>Enabled automatic recording and transcription</li>
          <li>Set up AI-powered summary generation</li>
          <li>Configured action item extraction and tracking</li>
          <li>Integrated with their existing Slack workflows</li>
        </ul>
        
        <h3>Phase 2: Department-Wide Rollout</h3>
        <p>After seeing immediate benefits, TechCorp expanded to departmental meetings:</p>
        <ul>
          <li>Engineering team standups and planning meetings</li>
          <li>Product review and strategy sessions</li>
          <li>Customer success team retrospectives</li>
          <li>Marketing campaign planning meetings</li>
        </ul>
        
        <h3>Phase 3: Company-Wide Implementation</h3>
        <p>The final phase included all recurring meetings and one-off strategic sessions, creating a comprehensive meeting intelligence system.</p>
        
        <h2>Results After 3 Months: Transformation by the Numbers</h2>
        <p>The results exceeded TechCorp's expectations across every metric they tracked:</p>
        
        <h3>Productivity Improvements</h3>
        <ul>
          <li><strong>40% reduction</strong> in overall meeting time</li>
          <li><strong>85% improvement</strong> in action item completion rates</li>
          <li><strong>60% decrease</strong> in meeting preparation time</li>
          <li><strong>25% boost</strong> in product development velocity</li>
          <li><strong>50% reduction</strong> in follow-up emails and messages</li>
        </ul>
        
        <h3>Team Satisfaction and Engagement</h3>
        <ul>
          <li><strong>90% increase</strong> in team satisfaction scores</li>
          <li><strong>75% improvement</strong> in remote team member engagement</li>
          <li><strong>45% reduction</strong> in meeting-related stress levels</li>
          <li><strong>80% of team members</strong> reported feeling more connected to decisions</li>
        </ul>
        
        <blockquote>
          "RecapGo transformed how we work. Our meetings are now focused, actionable, and everyone stays aligned regardless of their location. It's like having a super-efficient assistant in every meeting who never misses a detail." - Alex Thompson, CTO at TechCorp
        </blockquote>
        
        <h2>Key Success Factors: What Made the Difference</h2>
        <p>The success at TechCorp wasn't just about the technology - it was about how they approached the implementation and culture change.</p>
        
        <h3>Leadership Commitment</h3>
        <p>Success factors that contributed to their transformation:</p>
        <ol>
          <li><strong>Leadership buy-in from day one:</strong> C-suite executives were the first adopters</li>
          <li><strong>Consistent use across all team meetings:</strong> No exceptions or special cases</li>
          <li><strong>Integration with existing workflow tools:</strong> Seamless connection to Slack, Asana, and GitHub</li>
          <li><strong>Regular review of meeting effectiveness metrics:</strong> Monthly assessment of meeting quality</li>
          <li><strong>Training and support:</strong> Comprehensive onboarding for all team members</li>
        </ol>
        
        <h3>Cultural Transformation</h3>
        <p>Beyond the technical implementation, TechCorp underwent a cultural shift in how they viewed meetings:</p>
        <ul>
          <li>Meetings became outcome-focused rather than time-focused</li>
          <li>Asynchronous participation became the norm for non-essential attendees</li>
          <li>Meeting quality became a key performance indicator</li>
          <li>Team members felt empowered to decline unnecessary meetings</li>
        </ul>
        
        <h2>Looking Forward: Sustainable Growth</h2>
        <p>Six months after implementation, TechCorp continues to see benefits as they scale. The meeting intelligence platform has become integral to their operations, enabling them to maintain productivity and culture as they grow.</p>
        
        <h3>Scaling Benefits</h3>
        <p>As TechCorp continues to grow, RecapGo scales with them:</p>
        <ul>
          <li>New hires onboard faster with access to meeting history</li>
          <li>Cross-team collaboration improves with shared meeting insights</li>
          <li>Decision-making speed increases with better documentation</li>
          <li>Remote team integration becomes seamless</li>
        </ul>
        
        <blockquote>
          "What started as a solution to our meeting problem has become a competitive advantage. We can onboard new team members faster, make decisions quicker, and maintain our culture even as we scale globally." - Maria Rodriguez, CEO at TechCorp
        </blockquote>
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
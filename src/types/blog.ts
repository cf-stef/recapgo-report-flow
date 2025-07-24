export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  authorImage: string;
  date: string;
  featured?: boolean;
  image: string;
  readTime: string;
  tags?: string[];
}
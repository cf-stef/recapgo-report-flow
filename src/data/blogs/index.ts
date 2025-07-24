import { BlogPost } from "@/types/blog";
import { blog1 } from "./blog-1";
import { blog2 } from "./blog-2";
import { blog3 } from "./blog-3";
import { blog4 } from "./blog-4";
import { blog5 } from "./blog-5";
import { blog6 } from "./blog-6";
import { blog7 } from "./blog-7";
import { blog8 } from "./blog-8";
import { blog9 } from "./blog-9";
import { blog10 } from "./blog-10";

export const blogPosts: BlogPost[] = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
  blog10
];

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const categories = ["All", "Product", "Productivity", "AI and ML", "Customer Story", "Guides"];

export * from "./blog-1";
export * from "./blog-2";
export * from "./blog-3";
export * from "./blog-4";
export * from "./blog-5";
export * from "./blog-6";
export * from "./blog-7";
export * from "./blog-8";
export * from "./blog-9";
export * from "./blog-10";
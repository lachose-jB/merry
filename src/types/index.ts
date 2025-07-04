export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'supplement' | 'ebook' | 'program'
  inStock: boolean
  rating?: number
  reviews?: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  readTime: string
  tags: string[]
}
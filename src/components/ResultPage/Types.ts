export type ResultItemTypes = {
  [index: string]: any;
  oid: string;
  title: string;
  description?: string;
  language: string;
  brand?: string;
  categories: string[];
  availability?: string;
  sku: string;
  score?: number;
  images: string[];
};

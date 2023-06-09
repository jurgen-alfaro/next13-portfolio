import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  name: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};

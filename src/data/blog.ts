export const blogCategories = [
  {
    id: 'tech',
    label: 'Tech',
    icon: 'lucide:terminal',
    blurb: 'Notes on ML, agents, systems and the tools I use.',
  },
  {
    id: 'me',
    label: 'Me blogs',
    icon: 'lucide:notebook-pen',
    blurb: 'Personal writing: college, life, and things I think about.',
  },
] as const;

export type BlogCategory = (typeof blogCategories)[number]['id'];

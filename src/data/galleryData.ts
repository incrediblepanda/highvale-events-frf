// Gallery Data - Easy to manage and add new images
// Simply add new images to the arrays below to update the gallery

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
}

export interface GalleryCategory {
  id: string;
  label: string;
  icon?: string;
}

// Gallery Categories - Add new categories here
export const galleryCategories: GalleryCategory[] = [
  { id: 'weddings', label: 'Weddings' },
  { id: 'parties', label: 'Parties' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'details', label: 'Design Details' },
];

// Gallery Images - Add new images here
// Featured images will show a badge, aspectRatio controls layout (square, portrait, landscape, wide)
export const galleryImages: GalleryImage[] = [
  // Wedding Images
  {
    id: 1,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F5bb27648143e488ab6f639b3640931c2',
    alt: 'Mountain wedding ceremony with stunning Colorado backdrop',
    category: 'weddings',
    featured: true,
    aspectRatio: 'portrait'
  },
  {
    id: 2,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F28c9d97713d44c8baea1a1aaa5b1bcb7',
    alt: 'Romantic first dance under twinkling lights',
    category: 'weddings',
    aspectRatio: 'wide'
  },
  {
    id: 3,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F83bc7803e09d4a28bf82c368522bf9ff',
    alt: 'Garden wedding reception with elegant table settings',
    category: 'weddings',
    aspectRatio: 'landscape'
  },
  {
    id: 4,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fb60f674fe85c445bb0654dbd9a2591c4',
    alt: 'Intimate ceremony under the stars',
    category: 'weddings'
  },
  {
    id: 5,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F1d75e495f4d149ec926832ab0eea47a5',
    alt: 'Golden hour wedding portraits in Colorado mountains',
    category: 'weddings',
    featured: true,
    aspectRatio: 'wide'
  },
  {
    id: 6,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fb7bbaf124c2b49d8aa2bbe3596e5ba15',
    alt: 'Luxury wedding ceremony with floral arch',
    category: 'weddings',
    aspectRatio: 'portrait'
  },

  // Party Images
  {
    id: 7,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fce46c1d73c4a4641a7fe6b6a6d63670d',
    alt: 'Bachelorette party celebration with elegant decor',
    category: 'parties',
    featured: true
  },
  {
    id: 8,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F39ff8520416a4d7eabd3d346d3edd505',
    alt: 'Milestone birthday party with custom styling',
    category: 'parties',
    aspectRatio: 'landscape'
  },
  {
    id: 9,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe137fdb8669345f6a848efc534ada837',
    alt: 'Elegant anniversary celebration',
    category: 'parties'
  },

  // Corporate Images
  {
    id: 10,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fc382e1a13da64c9ea4d004cbcd28e09d',
    alt: 'Corporate gala dinner with sophisticated ambiance',
    category: 'corporate',
    aspectRatio: 'wide'
  },
  {
    id: 11,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F53d48eef1ac94145ada5d3a60c8a3dd0',
    alt: 'Product launch event with branded elements',
    category: 'corporate'
  },

  // Design Details
  {
    id: 12,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F6950a24124e6431b9f79bb7c8ef9950d',
    alt: 'Exquisite floral centerpiece with candles',
    category: 'details',
    aspectRatio: 'portrait'
  },
  {
    id: 13,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F5bb27648143e488ab6f639b3640931c2',
    alt: 'Elegant table setting with gold accents',
    category: 'details'
  },
  {
    id: 14,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F97cd57db5b10407a914c07b7f4feb877',
    alt: 'Custom wedding signage and stationery',
    category: 'details',
    aspectRatio: 'landscape'
  },

  // Additional gallery images
  {
    id: 15,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F569b29cf2b9e4c6a93dc7ff32c33fdde',
    alt: 'Custom wedding signage and stationery',
    category: 'details'
  },
  {
    id: 16,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F21c81db5f20f417b8c8f9aaecea161a5',
    alt: 'Custom wedding signage and stationery',
    category: 'details'
  },
  {
    id: 17,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F0556bbbfacb94d81a89db6e4d0ae7dc8',
    alt: 'Exquisite floral centerpiece with candles',
    category: 'details',
    aspectRatio: 'portrait'
  },
  {
    id: 18,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F5146ee267a6d4f2cbee3fe2cfc5ad7eb',
    alt: 'Corporate gala dinner with sophisticated ambiance',
    category: 'corporate',
    aspectRatio: 'wide'
  },
  {
    id: 19,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fe246870217c644a5931b5467bf1b3842',
    alt: 'Custom wedding signage and stationery',
    category: 'details'
  },
  {
    id: 20,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F79fc0883271f460e8a646399a2d6bb05',
    alt: 'Exquisite floral centerpiece with candles',
    category: 'details',
    aspectRatio: 'portrait'
  },
  {
    id: 21,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2F73589cc22f2d4158a6122629fba4d610',
    alt: 'Custom wedding signage and stationery',
    category: 'details'
  },
  {
    id: 22,
    src: 'https://cdn.builder.io/api/v1/image/assets%2F52185cbc63e544f6abfcb901069ce1f1%2Fac0086452ac84cd0850dbeb491177976',
    alt: 'Custom wedding signage and stationery',
    category: 'details'
  }
];

// Helper function to get images by category
export const getImagesByCategory = (category: string): GalleryImage[] => {
  if (category === 'all') {
    return galleryImages;
  }
  return galleryImages.filter(image => image.category === category);
};

// Helper function to get featured images
export const getFeaturedImages = (): GalleryImage[] => {
  return galleryImages.filter(image => image.featured);
};

// Helper function to get category counts
export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = { all: galleryImages.length };
  
  galleryCategories.forEach(category => {
    counts[category.id] = galleryImages.filter(img => img.category === category.id).length;
  });
  
  return counts;
};

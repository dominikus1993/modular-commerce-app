export interface ProductListResponse {
  products: Product[]
  metadata: FilterMetadata | null
  count: number
  total: number
}

export interface ProductImage {
  link: string
  alt: string
}

export interface Product {
  productId: string
  name: string
  description: string
  promotionalPrice: number
  price: number
  availableQuantity: number
  images: ProductImage[]
}

export interface FilterMetadata {
  tagFiltersMetaData: TagFiltersMetaData
  prices: Prices
}

export interface TagFiltersMetaData {
  filters: Filter[]
}

export interface Filter {
  tag: string
  count: number
}

export interface Prices {
  minPrice: number
  maxPrice: number
}

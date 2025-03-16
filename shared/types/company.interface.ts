export interface Company {
  id: number
  name: string
  image: string
  info: {
    isApproved: boolean
    avgReview: number
    reviewCount: number
  }
  agentsCount: number

  about: {
    title: string
    description: string
  }

  hours: {
    title: string
    description: string
  }

  location: {
    title: string
    description: string
  }
}

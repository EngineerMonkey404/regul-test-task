import type { Company } from '~/shared/types/company.interface'

const COMPANY_LIST: Company[] = [
  {
    id: 1,
    name: 'Наследие',
    info: {
      isApproved: true,
      reviewCount: 19,
      avgReview: 4.7,
    },
    image: '/companies/1.svg',
    agentsCount: 7,
    about: {
      title: 'О компании',
      description:
        'Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу. Работаем с профессиональной техникой. ',
    },
    hours: {
      title: 'Режим работы',
      description: 'Сегодня с 8:00 до 23:00',
    },
    location: {
      title: 'Местоположение',
      description: 'Ростов на Дону, Воронежская ул., 42А корп. 1',
    },
  },
]

export const COMPANY_MAP = new Map(COMPANY_LIST.map(company => [company.id, company]))

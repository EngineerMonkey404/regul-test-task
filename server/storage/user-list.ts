import type { User } from '~/shared/types/user.interface'

const USER_LIST: User[] = [
  {
    id: 1,
    firstName: 'Дмитрий',
    secondName: 'Хитрый',
    image: '/user-images/1.png',
    login: 'admin',
    password: 'secret',
    isApproved: true,
    avgReview: 4.3,
    reviewCount: 19,
    description:
      'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    companyId: 1,
  },
  {
    id: 2,
    firstName: 'Апполинарий',
    secondName: 'Землеперекопский',
    image: '/user-images/2.png',
    login: 'admin1',
    password: 'secret1',
    isApproved: true,
    description: 'Помог справиться с потерей и организовать похороны для 126 семей.',
    companyId: 1,
  },
  {
    id: 3,
    firstName: 'Фёдор',
    secondName: 'Сумкин',
    image: '/user-images/3.png',
    login: 'admin2',
    password: 'secret2',
    avgReview: 4.3,
    reviewCount: 19,
    description:
      'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    companyId: 1,
  },
  {
    id: 4,
    firstName: 'Василий',
    secondName: 'Копушин',
    image: '/user-images/4.png',
    login: 'admin3',
    password: 'secret3',
    isApproved: true,
    avgReview: 4.3,
    reviewCount: 19,
    description:
      'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    companyId: 1,
  },

  {
    id: 5,
    firstName: 'Феофан',
    secondName: 'Кусакин',
    image: '/user-images/5.png',
    login: 'admin4',
    password: 'secret4',
    avgReview: 4.3,
    reviewCount: 19,
    description:
      'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    companyId: 1,
  },
  {
    id: 6,
    firstName: 'Василиса ',
    secondName: 'Землеперекопская',
    image: '/user-images/6.png',
    login: 'admin5',
    password: 'secret5',
    isApproved: true,
    avgReview: 4.3,
    reviewCount: 19,
    description:
      'Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться',
    companyId: 1,
  },
]

USER_LIST.forEach(agent => (agent.fullName = agent.firstName + ' ' + agent.secondName))

export const userLoginMap = new Map(USER_LIST.map(user => [user.login, user]))

export const userIdMap = new Map(USER_LIST.map(user => [user.id, user]))

export { USER_LIST }

import type { User } from '~/shared/types/user.interface'

export interface UserDto {
  id: User['id']
  login: User['login']
  fullName: User['fullName']
  image: User['image']
}

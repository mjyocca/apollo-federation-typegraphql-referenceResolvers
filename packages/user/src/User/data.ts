import { User } from './User';

const userData: User[] = [
  {
    id: '1',
    username: 'test123',
    name: 'John Smith',
    birthDate: JSON.stringify(new Date())
  },
  {
    id: '2',
    username: 'j123',
    name: 'Jason Smith',
    birthDate: JSON.stringify(new Date())
  },
  {
    id: '3',
    username: 'markymark',
    name: 'Mark Smith',
    birthDate: JSON.stringify(new Date())
  }
]


export { userData };
const data = [
  {
    name: ' JingLv',
    office: '武汉',
    title: 'HR',
    photo: 'http://nobackend.website/_ng/images/avatar.jpg',
    created_at: '2016-03-04 15:38:48',
    id: 151,
    project: 'Wuhan HR',
    avatar: 'http://nobackend.website/_ng/images/avatar.jpg',
    onboard: '2014-12-04',
    email: 'jinglv@gmail.com'
  },
  {
    name: 'JimmyLv',
    office: '成都',
    title: 'Dev',
    photo: 'http://nobackend.website/_ng/images/avatar.jpg',
    created_at: '2016-03-04 15:57:00',
    id: 152,
    project: 'Nobackend',
    avatar: 'http://nobackend.website/_ng/images/avatar.jpg',
    onboard: '2015-07-20',
    email: 'jimmy.jinglv@gmail.com'
  }
]

export const FETCH_USER = 'FETCH_USER'

export function userListAction() {
  return {
    type: FETCH_USER,
    payload: data
  }
}
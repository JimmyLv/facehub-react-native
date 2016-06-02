export const FETCH_USER = 'FETCH_USER'

export function userListAction() {
  return fetch('http://facehub.net/api/users', { headers: { Cookie: 'token=KssYGK1SwjRuX26AMQAubJ' } })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw res.error()
    })
    .then(json => ({
      type: FETCH_USER,
      payload: json.users
    }))
    .catch(error => console.info('request error: ', error))
}
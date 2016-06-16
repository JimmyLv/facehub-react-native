export const FILTER_USER = 'FILTER_USER'

export function userFilterAction(filter) {
  return {
    type: FILTER_USER,
    payload: filter
  }
}
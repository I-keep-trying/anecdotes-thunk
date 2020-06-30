export const addVote = (payload) => {
  return {
    type: 'VOTE',
    payload,
  }
}

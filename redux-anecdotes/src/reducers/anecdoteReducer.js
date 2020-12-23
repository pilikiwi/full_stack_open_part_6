const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
  case 'VOTE':
    const id = action.data.id
    const anecdoteToChange = state.find(n => n.id === id)
    const changedAnecdote = {...anecdoteToChange, votes: anecdoteToChange.votes + 1}
    return state.map(anecdote => anecdote.id !== id?anecdote: changedAnecdote)
  case 'NEW_ANECDOTE':
    return [...state, action.data]
  case 'INIT_ANECDOTE':
    return action.data
  default:
    return state
  }
}

export const castVote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

const generatedID = () => Number((Math.random() * 100000).toFixed(0))

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: generatedID(),
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTE',
    data: anecdotes,
  }
}

export default anecdoteReducer
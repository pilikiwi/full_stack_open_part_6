import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) =>{
    return (
       <div onClick={handleClick}>
           {anecdote.content} has {anecdote.votes} votes.
           <button>Vote</button>
       </div> 
    )
}


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    
  const byVotes = (a, b) => b.votes - a.votes

  return (
    <ul>
    {anecdotes.sort(byVotes).map(anecdote =>
        <Anecdote 
            key = {anecdote.id}
            anecdote = {anecdote}
            handleClick = {()=> dispatch(castVote(anecdote.id))}
        />
      )}
    </ul>
  )
}

export default AnecdoteList
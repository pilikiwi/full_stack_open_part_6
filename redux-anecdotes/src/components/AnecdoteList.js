import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { castVote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) =>{
  const dispatch = useDispatch()
    return (
       <div onClick={handleClick}>
           {anecdote.content} has {anecdote.votes} votes.
           <button onClick={()=>dispatch(setNotification('You voted for...' + anecdote.content))}>Vote</button>
       </div> 
    )
}


const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const byVotes = (a, b) => b.votes - a.votes

  return (
    <ul>
    {anecdotes.sort(byVotes).map(anecdote =>
        <Anecdote 
            key = {anecdote.id}
            anecdote = {anecdote}
            handleClick = {()=> dispatch(castVote(anecdote.id))
              }
        />
      )}
    </ul>
  )
}

export default AnecdoteList
//()=>dispatch(setNotification('You voted for...'))
//()=>dispatch(setNotification('You voted for...' + anecdote.content))
import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        const votes = 0
        event.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content, votes)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification(newAnecdote.content + ' created'))
        setTimeout(() => {
           dispatch(removeNotification()) 
        }, 5000)
        
      }

      return (
          <form onSubmit={addAnecdote}>
              <h2>create new</h2>
              <div><input name="anecdote" /></div>
              <button type="submit">create</button>
          </form>
      )
  }

  export default AnecdoteForm

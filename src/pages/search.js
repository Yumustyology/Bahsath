import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import {Button} from '@material-ui/core'
import '../styles/search.css'
import { useNavigate } from 'react-router-dom'
import {useStateValue} from '../stateProvider'
import { actionTypes } from '../reducer'
function Search({hideButton = false}) {

    const [{}, dispatch] = useStateValue()
    const history = useNavigate()
    const [input, setInput] = useState('')
    const search = (e)=>{
        e.preventDefault()
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history('/search')
    }

    return (
        <form className='search' onSubmit={search}>
            <div className='search__input' >
                <SearchIcon className='search__inputIcon' onClick={search} />
                <input type='search' value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {!hideButton ? (
                <div className='search__buttons'>
                <Button onClick={search} variant='outlined'>Bahsath Search</Button>
                <Button variant='outlined'>Feeling Nice!</Button>
                <Button variant='outlined'>Yumustyung Dev</Button>
            </div>
            ) : (
                <div className='search__buttons'>
                    <Button className='search__buttonHidden' onClick={search} variant='outlined'>Bahsath Search</Button>
                    <Button className='search__buttonHidden' variant='outlined'>Feeling Nice!</Button>
                    <Button variant='outlined'>Yumustyung Dev</Button>
                </div>
            )}

        <input type='submit' className='hide__btn'/>
                
        </form>
    )
}

export default Search

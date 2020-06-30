import React, { useReducer, useState, useEffect } from 'react'
import { initialState, reducer } from './Store'
import { Header } from './Header'
import { Content } from './Content'

export const App = () => {
    const [inputValue, changeInputValue] = useState('')
    const [items, showMore] = useState(10)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => showMore(10), [state])

    return (
        <>
            <Header
                inputValue={inputValue}
                changeInputValue={changeInputValue}
                dispatch={dispatch}
            />
            <Content
                state={state}
                items={items}
                showMore={showMore}
            />
        </>
    )
}



import React, { createContext, useReducer } from 'react'

export const StoreContext = createContext()

export const SEARCH = 'SEARCH'
export const FETCHED = 'FETCH'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'

export const Store = ({children}) => {
    const initialState = {
        data: [],
        loading: true
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    const load = async () => {
        dispatch({type: LOADING})

        await fetch('https://run.mocky.io/v3/470b2de3-dc42-49c4-a71a-e779dfecc1d6')//3aa9553e-956c-4f96-8e55-1eb3579a3fd0 -выкенет ошибку
        .then(response => {
            if(response.status !== 200) {
                return Promise.reject(new Error(response.statusText))
            }
            return Promise.resolve(response)
        })
        .then(response => response.json())
        .then(data => dispatch({type: FETCHED, data}))
        .catch((erorr) => dispatch({type: ERROR, data: [`${erorr}`]}))
    }

    const search = async (value) => {
        await load();
        if(value.length > 1) {
            const regexp = new RegExp(`${value}`, 'i')
            dispatch({
                type: SEARCH,
                data: regexp
            })
        }
    }

    return (
        <StoreContext.Provider value={{
            state, load, search
        }}>
            {children}
        </StoreContext.Provider>
    )
}

const reducer = (state, action) => {
    switch (action.type) {
        case FETCHED:
            return { data: action.data, loading: false }
        case ERROR:
            return { data: action.data, loading: false }
        case LOADING:
            return { ...state, loading: true }
        case SEARCH:
            return  {...state, data: state.data.filter(i => i.match(action.data))}
        default:
            return state
    }
}
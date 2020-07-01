import React, { useContext, useEffect } from 'react'
import { StoreContext } from "./Store"
import { Header } from './Header'
import { Content } from './Content'

export const App = () => {
    const { state, load } = useContext(StoreContext)
    useEffect( () => {
        load()
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Header/>
            {
                state.loading ?
                    <div className='d-flex justify-content-center'>
                        <div className='spinner-border text-info mx-auto m-1' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </div>
                    </div>
                    :
                    <Content/>
            }
        </>
    )
}



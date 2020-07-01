import React, { useContext, useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { StoreContext } from "./Store"

export const Content = () => {
    const [items, showMore] = useState(10)
    const { state } = useContext(StoreContext)

    useEffect(() => showMore(10), [state])

    const number = state.data.length > items ? items : state.data.length

    const showMoreHandle = () => {
        const newItems = state.data.length > items ? items + 10 : state.data.length
        showMore(newItems)
    }

    const lists = state.data.length ?
        <>{
            [...new Array(number).keys()].map(i => (
                <Card key={i} bg='info' className='mx-auto m-1' style={{ width: '40rem', height: '3rem' }}>
                    < Card.Body className='font-weight-bold p-2 mx-auto'>{state.data[i]}</ Card.Body>
                </Card>
            ))
        }
        </>
        :
        <h1 className='text-center'>No results</h1>

    const button = state.data.length > items ?
        <Button
            variant='outline-info'
            className='col-lg-2 mx-auto d-block'
            onClick={showMoreHandle}
        >SHOW MORE</Button>
        : null

    return (
        <>
            { lists }
            { button }
        </>
    )
}
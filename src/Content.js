import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Content = ({ state, items, showMore }) => {
    const number = state.length > items ? items : state.length

    const showMoreHandle = () => {
        const newItems = state.length > items ? items + 10 : state.length
        showMore(newItems)
    }

    const lists = state.length ?
        <>{
            [...new Array(number).keys()].map(i => (
                <Card key={i} bg='info' className='mx-auto m-1' style={{ width: '40rem', height: '3rem' }}>
                    < Card.Body className='font-weight-bold p-2 mx-auto'>{state[i]}</ Card.Body>
                </Card>
            ))
        }
        </>
        :
        <h1 className='text-center'>No results</h1>

    const button = state.length > items ?
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
import React, { useContext, useState } from 'react'
import { Navbar, Button, Nav, FormControl, Form } from 'react-bootstrap'
import { StoreContext } from './Store'

export const Header = () => {
    const [inputValue, changeInputValue] = useState('')
    const { search } = useContext(StoreContext)
    const enter = (e) => {
        e.preventDefault()
        search(inputValue)
    }

    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>MOVIES</Navbar.Brand>
            <Nav className='mr-auto'>
            </Nav>
            <Form inline onSubmit={e => enter(e)} >
                <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                    value={inputValue}
                    onChange={(e) => changeInputValue(e.target.value.replace(/[^a-zA-Z0-9]+/g, ''))}
                />
                <Button variant='outline-info' type='submit' >Search</Button>
            </Form>
        </Navbar>
    )
}

import React from 'react'
import { Navbar, Button, Nav, FormControl, Form } from 'react-bootstrap'
import { SEARCH, RESTORE } from './Store'

export const Header = ({ inputValue, changeInputValue, dispatch }) => {
    const search = (e) => {
        e.preventDefault()

        if(inputValue.length > 1) {
            const regexp = new RegExp(`${inputValue}`, 'i')
            dispatch({
                type: SEARCH,
                regexp
            })
        } else if(inputValue.length < 2) {
            dispatch({
                type: RESTORE,
                regexp: null
            })
        }
    }
    return (
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>MOVIES</Navbar.Brand>
            <Nav className='mr-auto'>
            </Nav>
            <Form inline onSubmit={e => search(e)} >
                <FormControl
                    type='text'
                    placeholder='Search'
                    className='mr-sm-2'
                    value={inputValue}
                    onChange={(e) => changeInputValue(e.target.value)}
                />
                <Button variant='outline-info' type='submit' >Search</Button>
            </Form>
        </Navbar>
    )
}
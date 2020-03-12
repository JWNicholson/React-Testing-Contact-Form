import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />);
});


// test("make sure form inputs and submit button are working", () => {
//     const { getByText, findByText, getByPlaceholderText} = render(<ContactForm/>);
test("check firstName, lastName, message - input and change", () => {
    const {getByLabelText,findByText} = render(<ContactForm />);
    
    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)
    

    fireEvent.change(firstName, {target: {name: 'firstName', value: 'Ismell'}})
    findByText(/holy/i)

    fireEvent.change(lastName, {target: {name: 'lastName', value: 'Smoke'}})
    findByText(/smoke/i)

    fireEvent.change(email, {target: {name: 'email', value: 'malfunction@junction.com'}})
    findByText(/email/i)

    fireEvent.change(message, {target: {name: 'message', value: 'you must be burning me behind my back'}})
    findByText(/message/i)

});

test('testing submit button', () => {
    const{getByTestId, findByDisplayValue} = render(<ContactForm />);
    const submitbutton = getByTestId(/submit/i)
    fireEvent.submit(submitbutton)
    findByDisplayValue(/submit/i)
});


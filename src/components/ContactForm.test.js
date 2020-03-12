import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />);
});


// test("make sure form inputs and submit button are working", () => {
//     const { getByText, findByText, getByPlaceholderText} = render(<ContactForm/>);
test("check firstName input and change", () => {
    const {getByLabelText,findByText} = render(<ContactForm />);
    const firstName = getByLabelText(/first name/i)
    fireEvent.change(firstName, {target: {name: 'firstName', value: 'Holy'}})
    findByText(/holy/i)
})

    // const firstName = getByPlaceholderText(/bill/i);
    // const lastName = getByText(/last name/i);
    // const email = getByText(/email/i);
    // const message = getByText(/message/i);

    // fireEvent.change(firstName, {target:{name: 'firstName', value: 'Harry'}});
    // fireEvent.change(lastName, {target: {name: 'lastName', value: 'Norseman'}});
    // fireEvent.change(email, {target: {name: 'email', value: 'pillageandburn@thorshammer.no'}});
    // fireEvent.change(message, {targert: {name: 'message', value: 'Hello England'}});

    // const button = getByText(/submit/i);

    // //button clicked
    // fireEvent.click(button);

    // //assertions
    // findByText(/harry/i);
    // findByText(/Norseman/i);
    // findByText(/pillageandburn@thorshammer.no/i);
    // findByText(/hello england/i);

// });
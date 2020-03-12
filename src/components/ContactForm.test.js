import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />);
});


test("make sure form inputs and submit button are working", () => {
    const {getByLabelText, getByText, findByText} = render(<ContactForm/>);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const email = getByLabelText(/email/i);
    const message = getByLabelText(/message/i);

    fireEvent.change(firstName, {target:{name: 'firstName', value: 'Harry'}});
    fireEvent.change(lastName, {target: {name: 'lastName', value: 'Norseman'}});
    fireEvent.change(email, {target: {name: 'email', value: 'pillageandburn@thorshammer.no'}});
    fireEvent.change(message, {targert: {name: 'message', value: 'Hello England'}});

    const button = getByText(/submit/i);

    //button clicked
    fireEvent.click(button);

    //assertions
    findByText(/harry/i);
    findByText(/Norseman/i);
    findByText(/pillageandburn@thorshammer.no/i);
    findByText(/hello england/i);

});
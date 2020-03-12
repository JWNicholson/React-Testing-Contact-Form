import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test("renders correctly", () => {
    render(<ContactForm />);
});


test("make sure form inputs are working", () => {
    const {getByLabelText} = render(<ContactForm/>);

    const firstName = getByLabelText(/first name/i)
    const lastName = getByLabelText(/last name/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)
});
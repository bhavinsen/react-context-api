import React, { useState, useContext } from 'react';
import { Segment, Form, Input, Button } from 'semantic-ui-react';
import _ from 'lodash';
import { ContactContext } from '../context/contact-context';

export default function ContactForm() {
    const name = UserFormInput("");
    const email = UserFormInput("");

    const [state, dispatch] = useContext(ContactContext);

    const onSubmit = () => {
        dispatch({
            type: "ADD_CONTACT",
            payload: {id: _.uniqueId(10), name: name.value, email: email.value}
        });
        name.onReset();
        email.onReset();
    };

    return (
        <Segment>
            <Form onSubmit={onSubmit}>
                <Form.Group widths="3">
                    <Form.Field width={6}>
                        <Input placeholder="Enter Name" {...name} required />
                    </Form.Field>
                    <Form.Field width={6}>
                        <Input placeholder="Enter Email" {...email} required />
                    </Form.Field>
                    <Form.Field width={4}>
                        <Button fluid primary>
                            New Contact
                        </Button>
                    </Form.Field>
                </Form.Group>
            </Form> 
        </Segment>
    );
};

function UserFormInput(intialValue) {
    const [value, setValue] = useState(intialValue);

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleReset = () => {
        setValue("");
    }

    return {
        value,
        onChange: handleChange,
        onReset: handleReset
    }
}
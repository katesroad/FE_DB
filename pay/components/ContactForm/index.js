import styled from 'styled-components/macro';
import * as mediaQueries from 'styles/media-queries';
import { Formik, Form } from 'formik';
import { BtnSecondary } from 'components/lib';
import * as React from 'react';
import Checkbox from './Checkbox';
import Field from './Field';
import { ContactSchema, initialValues } from './contact.helper';

function ContactForm() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={ContactSchema} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form
          css={`
            display: flex;
            flex-direction: column;
            label {
              width: 100%;
            }
            button {
              height: 3rem;
              max-width: 9.5rem;
            }
          `}>
          <Field name="name" placeholder="Name" />
          <Field name="email" placeholder="Email" />
          <Field name="title" placeholder="Title" />
          <Field name="message" placeholder="Message" type="textarea" />
          <Checkbox name="subscribe" value={values.subscribe}>
            Stay up-to-date with company announcements and updates to our API Submit
          </Checkbox>
          <BtnSecondary>Submit</BtnSecondary>
        </Form>
      )}
    </Formik>
  );
}

export default function RequestForm(props) {
  return (
    <div {...props}>
      <h3
        css={`
          margin-bottom: 2.5rem;
          font-size: 2rem;
          line-height: 1.125;
          color: var(--c10);
          ${mediaQueries.medium} {
            font-size: 3rem;
          }
        `}>
        Submit a help request and we’ll get in touch shortly.
      </h3>
      <ContactForm />
    </div>
  );
}

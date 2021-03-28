import * as React from 'react';
import { BtnPrimary } from 'components/lib';
import { Formik, Field } from 'formik';
import { FillForm } from './styles';

export default function ScheduleDemo(props) {
  return (
    <Formik initialValues={{ contactEmail: '' }}>
      {() => (
        <FillForm {...props}>
          <Field name="contactEmail" id="contactEmail" placeholder="Enter email address" />
          <BtnPrimary>Schedule a demo</BtnPrimary>
        </FillForm>
      )}
    </Formik>
  );
}

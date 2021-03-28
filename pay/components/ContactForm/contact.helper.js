import * as Yup from 'yup';

export const ContactSchema = Yup.object().shape({
  name: Yup.string().required(`Name can't be empty`),
  email: Yup.string().required(`Email can't be empty`),
  company: Yup.string().required(`Company jcan't be empty`),
  title: Yup.string().required(`Title field can't be empty`)
});

export const initialValues = {
  name: '',
  email: '',
  company: '',
  title: '',
  message: '',
  subscribe: false
};

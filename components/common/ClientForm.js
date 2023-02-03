import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ClientForm = () => {
  const initialValues = {
    name: '',
    company: '',
    email: '',
    // phone: '',
    place: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    company: Yup.string().required('Company is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),

    // phone: Yup.string()
    //   .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    //   .required('Phone number is required'),
    place: Yup.string().required('Place is required'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onSubmit}
    >
      <Form className='flex-1  my-10 md:my-0 grid gap-12'>
        <div className='w-full '>
          <Field
            type='text'
            name='name'
            placeholder='What’s your name?'
            className='py-2 pb-4 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
          />
          <ErrorMessage name='name'>
            {msg => <p className='text-red-500 py-3'>{msg}*</p>}
          </ErrorMessage>
        </div>
        <div className='w-full '>
          <Field
            type='text'
            name='company'
            placeholder='Your company name?'
            className='py-2 pb-4 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
          />
          <ErrorMessage name='company'>
            {msg => <p className='text-red-500 py-3'>{msg}*</p>}
          </ErrorMessage>
        </div>

        <div>
          <Field
            type='email'
            name='email'
            placeholder='Your Email?'
            className='py-2 pb-4 placeholder:text-xl text-lg md:text-xl  outline-none border-b-2 w-full'
          />
          <ErrorMessage name='email'>
            {msg => <p className='text-red-500 py-3'>{msg}*</p>}
          </ErrorMessage>
        </div>
        <div>
          <Field
            type='text'
            name='place'
            placeholder='Your city, country?'
            className='py-2 pb-4 placeholder:text-xl text-lg md:text-xl  outline-none border-b-2 w-full'
          />
          <ErrorMessage name='place'>
            {msg => <p className='text-red-500 py-3'>{msg}*</p>}
          </ErrorMessage>
        </div>

        <div className='flex justify-end '>
          <button
            className='bg-black h-[64px] text-white max-w-[135px] w-full text-2xl  rounded-[4px]'
            type='submit'
          >
            Send
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ClientForm;

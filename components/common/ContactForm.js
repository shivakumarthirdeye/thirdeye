import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const initialValues = {
    name: '',
    email: '',
    // phone: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),

    // phone: Yup.string()
    //   .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    //   .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });
  return (
    <div className=' md:flex  justify-between'>
      <div className='flex-1'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl md:!leading-[64.8px]'>
          Let’s create <br /> something great
        </h1>
        <div className='text-xl text-black text-opacity-80 font-light my-5 leading-[30px]'>
          <p>hello@thirdeye.com </p>
          <p>+91 98392 18293</p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onSubmit}
      >
        <Form className='flex-1 max-w-[545px] my-10 md:my-0 grid gap-12'>
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

          <div>
            <Field
              type='email'
              name='email'
              placeholder='Your Email?'
              className='py-2 pb-4 placeholder:text-xl text-xl  outline-none border-b-2 w-full'
            />
            <ErrorMessage name='email'>
              {msg => <p className='text-red-500 py-3'>{msg}*</p>}
            </ErrorMessage>
          </div>
          <div>
            <Field
              as='textarea'
              name='message'
              placeholder='Tell us about your project :)'
              className='py-2 pb-4 placeholder:text-xl text-xl  outline-none border-b-2 w-full h-[150px] resize-none'
            />
            <ErrorMessage name='message'>
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
    </div>
  );
};

export default ContactForm;

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useRef } from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import ImgSwiper from './ImgSwiper';
import * as Yup from 'yup';
import { useMediaQuery } from 'react-responsive';
import { FaTimes } from 'react-icons/fa';

const FreebieDownloadModal = ({ open, toggleModal, item }) => {
  const ref = useRef();
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });

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
    <Modal
      ref={ref}
      onClose={toggleModal}
      open={open}
      styles={{
        modal: {
          maxWidth: '964px',
          width: isMobile ? '100%' : '90%',
          margin: isMobile ? '0' : '1.2rem',
          padding: 'unset',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.8)',
        },
        closeButton: {},
      }}
      center
      onAnimationEnd={() => {
        if (!open) {
          if (ref.current) {
            ref.current.style.opacity = '0%';
          }
          if (ref.current?.parentElement?.parentElement) {
            ref.current.parentElement.parentElement.style.opacity = '0%';
          }
        }
      }}
    >
      <div className='bg-white md:max-w-[964px] relative max-h-[90vh] h-full  w-full'>
        <button onClick={toggleModal} className='absolute top-5 right-5 z-50'>
          <FaTimes className='text-2xl text-red-600' />
        </button>
        <div>
          <ImgSwiper images={item?.img} />
        </div>
        <div className='px-4'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            <Form className='flex-1 max-w-[545px] mx-auto md:my-10  py-5 grid gap-5'>
              <div className='w-full '>
                <Field
                  type='text'
                  name='name'
                  placeholder='Enter your name'
                  className='py-1.5 pb-4 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
                />
                <ErrorMessage name='name'>
                  {msg => <p className='text-red-500 py-1'>{msg}*</p>}
                </ErrorMessage>
              </div>

              <div>
                <Field
                  type='email'
                  name='email'
                  placeholder='Enter your email'
                  className='py-1.5 pb-4 placeholder:text-xl text-xl  outline-none border-b-2 w-full'
                />
                <ErrorMessage name='email'>
                  {msg => <p className='text-red-500 py-1'>{msg}*</p>}
                </ErrorMessage>
              </div>

              <div className='flex justify-center '>
                <button
                  className='bg-black h-[44px] text-white max-w-[135px] w-full   rounded-[4px]'
                  type='submit'
                >
                  Download
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default FreebieDownloadModal;

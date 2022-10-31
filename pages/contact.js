import ContactForm from '@/components/common/ContactForm';
import Layout from '@/components/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const contact = () => {
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
    <Layout showHeaderBtn={false}>
      <section className='my-14'>
        <div className='container px-4 max-w-7xl mx-auto'>
          <ContactForm />
        </div>
        <div className='container max-w-7xl mx-auto flex justify-between my-12 mt-32'>
          <h3 className='text-xl text-black text-opacity-60 '>
            224, Bannerghatta Main Rd, near Arekere <br /> Main Road, Omkar
            Nagar, Bilekahalli, <br /> Bengaluru, Karnataka 560076
          </h3>
        </div>
      </section>
    </Layout>
  );
};

export default contact;

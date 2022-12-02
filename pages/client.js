import ClientForm from '@/components/common/ClientForm';
import ContactForm from '@/components/common/ContactForm';
import { LeftCircle, VioletLeft } from '@/components/common/ShadeSVGs';
import Layout from '@/components/Layout';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Client = () => {
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
      <section className='my-14 relative'>
        <div className='container px-4 max-w-7xl mx-auto'>
          <div className=' md:flex  justify-between'>
            <div className='flex-1'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl md:!leading-[64.8px]'>
                Become a <br /> Client
              </h1>
              <div className='text-xl text-black text-opacity-80 font-light my-5 leading-[30px]'>
                <p>hello@thirdeye.com </p>
                <p>+91 98392 18293</p>
              </div>
            </div>
            <ClientForm />
          </div>
        </div>
        <div className='container max-w-7xl px-4 mx-auto flex justify-between my-12 mt-32'>
          <h3 className='text-xl text-black text-opacity-60 '>
            224, Bannerghatta Main Rd, near Arekere <br /> Main Road, Omkar
            Nagar, Bilekahalli, <br /> Bengaluru, Karnataka 560076
          </h3>
        </div>
        <div className='absolute hidden md:block top-[100px] left-0 z-[-10]  overflow-hidden'>
          <svg
            className=' w-[100px] h-[450px] lg:w-[176px] lg:h-[585px]'
            viewBox='0 0 176 585'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='-116.5'
              cy='292.5'
              r='290.5'
              stroke='#B1C7FF'
              strokeWidth='4'
            />
          </svg>
        </div>
      </section>
    </Layout>
  );
};

export default Client;

import content from '@/utils/careers.json';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';
import { HiLocationMarker } from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FileInput } from 'formik-file-and-image-input/lib';
import { GreenRight, VioletLeft } from '@/components/common/ShadeSVGs';

const Projects = ({ page }) => {
  const [applying, setApplying] = useState(false);
  const fileFormats = ['application/pdf'];
  const initialValues = {
    name: '',
    phone: '',
    email: '',
    message: '',
    cv: null,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    cv: Yup.mixed().required('CV is required'),
  });

  const handleSubmit = values => {
    console.log(
      '🚀 ~ file: [...slug].js ~ line 34 ~ handleSubmit ~ values',
      values
    );
  };

  return (
    <Layout noFooter>
      <section className='sm:px-4 my-0 py-10 lg:py-20 overflow-hidden  relative'>
        <div className=' container mx-auto'>
          <div className=' lg:flex'>
            <div className='flex-1'>
              <div className='p-4 py-7  sm:py-10'>
                <h1 className='text-3xl  md:text-4xl lg:text-[38px] font-bold'>
                  {page?.title}
                </h1>
                <div className='flex items-center text-lg pt-1  space-x-1.5 text-opacity-80 text-black'>
                  <div>
                    <HiLocationMarker className='text-opacity-60 text-black' />
                  </div>{' '}
                  <p>{page?.location}</p>
                </div>
                <div>
                  <div>
                    <div className='pt-4'>
                      <h2 className=' text-xl md:text-[22px] font-semibold'>
                        Description
                      </h2>
                    </div>
                    <div className='py-5'>
                      <p className=' md:text-lg text-black text-opacity-80'>
                        {page?.description}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className='pt-4'>
                      <h2 className='text-xl md:text-[22px] font-semibold'>
                        Qualification
                      </h2>
                    </div>
                    <div className='py-5'>
                      <ul className='list-disc ml-4 qualification-list '>
                        {page?.qualification?.map(item => {
                          const { id, point } = item;
                          return (
                            <li
                              key={id}
                              className='md:text-lg text-opacity-80 py-0.5 md:py-1'
                            >
                              {point}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex-1 p-4 py-7  sm:py-10'>
              <div>
                <div className='bg-[#BAE7E4] p-9 py-2.5 border-y rounded-t-xl border-black border-opacity-30'>
                  <h2 className='text-[22px] font-semibold'>Personal</h2>
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {formik => {
                  const { setFieldValue } = formik;
                  return (
                    <Form className='flex-1 px-4 max-w-[867px] mx-auto my-10 lg:my-16 grid gap-5'>
                      <div className='w-full '>
                        <Field
                          type='text'
                          name='name'
                          placeholder='Full Name*'
                          className='py-2 pb-3.5 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='name'>
                          {msg => <p className='text-red-500 py-2'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                      <div className='w-full'>
                        <Field
                          type='email'
                          name='email'
                          placeholder='Email address *'
                          className='py-2 pb-3.5 placeholder:text-xl text-xl  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='email'>
                          {msg => <p className='text-red-500 py-2'>{msg}*</p>}
                        </ErrorMessage>
                      </div>

                      <div className='w-full '>
                        <Field
                          type='text'
                          name='phone'
                          placeholder='Phone number *'
                          className='py-2 pb-3.5 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='phone'>
                          {msg => <p className='text-red-500 py-2'>{msg}*</p>}
                        </ErrorMessage>
                      </div>

                      <div>
                        <Field
                          as='textarea'
                          name='message'
                          placeholder='Tell us about your project :)'
                          className='py-2 pb-3.5 placeholder:text-xl text-xl  outline-none border-b-2 w-full h-[150px] resize-none'
                        />
                        <ErrorMessage name='message'>
                          {msg => <p className='text-red-500 py-2'>{msg}*</p>}
                        </ErrorMessage>
                      </div>

                      <div className='py-5 md:flex justify-between items-center '>
                        <div className='flex-1'>
                          <div className='form-group'>
                            <div>
                              <label
                                for='cv'
                                className='text-xl text-black text-opacity-40'
                              >
                                CV / Resume *
                              </label>
                            </div>
                            <div className='mt-2'>
                              <input
                                id='cv'
                                name='cv'
                                type='file'
                                accept='application/pdf'
                                onChange={event => {
                                  setFieldValue(
                                    'cv',
                                    event.currentTarget.files[0]
                                  );
                                }}
                                className='form-control'
                              />
                            </div>
                            <ErrorMessage name='cv'>
                              {msg => (
                                <p className='text-red-500 py-2'>{msg}*</p>
                              )}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>
                      <div className='flex-1 flex justify-center mt-16 md:mt-0 md:justify-end space-x-2 sm:space-x-4 md:space-x-6'>
                        <button
                          type='submit'
                          className='h-[45px] max-w-[219px] text-white w-full bg-black  rounded'
                        >
                          Apply for this position
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <div className='absolute z-[-1] overflow-hidden  right-[-200px] top-[-200px]'>
          <GreenRight />
        </div>
        <div className='absolute z-[-1] overflow-hidden  left-0 bottom-[-500px]'>
          <VioletLeft />
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

export async function getStaticPaths() {
  const paths = content.careerOptions.map(page => {
    const slug = [page.slug];
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentPath = params.slug[0];

  const page = content.careerOptions.find(
    project => project.slug === currentPath
  ) || {
    notfound: true,
  };

  return { props: { page } };
}

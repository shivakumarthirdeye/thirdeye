import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import Select from 'react-select';
import * as Yup from 'yup';

const countiesList = [
  {
    label: 'Afghanistan',
    value: 'afghanistan',
  },
  {
    label: 'Albania',
    value: 'albania',
  },
  {
    label: 'Algeria',
    value: 'algeria',
  },
  {
    label: 'Andorra',
    value: 'andorra',
  },
  {
    label: 'Angola',
    value: 'angola',
  },
  {
    label: 'Anguilla',
    value: 'anguilla',
  },
  {
    label: 'Antigua &amp; Barbuda',
    value: 'antigua &amp; barbuda',
  },
  {
    label: 'Argentina',
    value: 'argentina',
  },
  {
    label: 'Armenia',
    value: 'armenia',
  },
  {
    label: 'Aruba',
    value: 'aruba',
  },
  {
    label: 'Australia',
    value: 'australia',
  },
  {
    label: 'Austria',
    value: 'austria',
  },
  {
    label: 'Azerbaijan',
    value: 'azerbaijan',
  },
  {
    label: 'Bahamas',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bermuda',
    value: 'bermuda',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia &amp; Herzegovina',
    value: 'bosnia &amp; herzegovina',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'British Virgin Islands',
    value: 'british virgin islands',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina faso',
  },
  {
    label: 'Burundi',
    value: 'burundi',
  },
  {
    label: 'Cambodia',
    value: 'cambodia',
  },
  {
    label: 'Cameroon',
    value: 'cameroon',
  },
  {
    label: 'Cape Verde',
    value: 'cape verde',
  },
  {
    label: 'Cayman Islands',
    value: 'cayman islands',
  },
  {
    label: 'Chad',
    value: 'chad',
  },
  {
    label: 'Chile',
    value: 'chile',
  },
  {
    label: 'China',
    value: 'china',
  },
  {
    label: 'Colombia',
    value: 'colombia',
  },
  {
    label: 'Congo',
    value: 'congo',
  },
  {
    label: 'Cook Islands',
    value: 'cook islands',
  },
  {
    label: 'Costa Rica',
    value: 'costa rica',
  },
  {
    label: 'Cote D Ivoire',
    value: 'cote d ivoire',
  },
  {
    label: 'Croatia',
    value: 'croatia',
  },
  {
    label: 'Cruise Ship',
    value: 'cruise ship',
  },
  {
    label: 'Cuba',
    value: 'cuba',
  },
  {
    label: 'Cyprus',
    value: 'cyprus',
  },
  {
    label: 'Czech Republic',
    value: 'czech republic',
  },
  {
    label: 'Denmark',
    value: 'denmark',
  },
  {
    label: 'Djibouti',
    value: 'djibouti',
  },
  {
    label: 'Dominica',
    value: 'dominica',
  },
  {
    label: 'Dominican Republic',
    value: 'dominican republic',
  },
  {
    label: 'Ecuador',
    value: 'ecuador',
  },
  {
    label: 'Egypt',
    value: 'egypt',
  },
  {
    label: 'El Salvador',
    value: 'el salvador',
  },
  {
    label: 'Equatorial Guinea',
    value: 'equatorial guinea',
  },
  {
    label: 'Estonia',
    value: 'estonia',
  },
  {
    label: 'Ethiopia',
    value: 'ethiopia',
  },
  {
    label: 'Falkland Islands',
    value: 'falkland islands',
  },
  {
    label: 'Faroe Islands',
    value: 'faroe islands',
  },
  {
    label: 'Fiji',
    value: 'fiji',
  },
  {
    label: 'Finland',
    value: 'finland',
  },
  {
    label: 'France',
    value: 'france',
  },
  {
    label: 'French Polynesia',
    value: 'french polynesia',
  },
  {
    label: 'French West Indies',
    value: 'french west indies',
  },
  {
    label: 'Gabon',
    value: 'gabon',
  },
  {
    label: 'Gambia',
    value: 'gambia',
  },
  {
    label: 'Georgia',
    value: 'georgia',
  },
  {
    label: 'Germany',
    value: 'germany',
  },
  {
    label: 'Ghana',
    value: 'ghana',
  },
  {
    label: 'Gibraltar',
    value: 'gibraltar',
  },
  {
    label: 'Greece',
    value: 'greece',
  },
  {
    label: 'Greenland',
    value: 'greenland',
  },
  {
    label: 'Grenada',
    value: 'grenada',
  },
  {
    label: 'Guam',
    value: 'guam',
  },
  {
    label: 'Guatemala',
    value: 'guatemala',
  },
  {
    label: 'Guernsey',
    value: 'guernsey',
  },
  {
    label: 'Guinea',
    value: 'guinea',
  },
  {
    label: 'Guinea Bissau',
    value: 'guinea bissau',
  },
  {
    label: 'Guyana',
    value: 'guyana',
  },
  {
    label: 'Haiti',
    value: 'haiti',
  },
  {
    label: 'Honduras',
    value: 'honduras',
  },
  {
    label: 'Hong Kong',
    value: 'hong kong',
  },
  {
    label: 'Hungary',
    value: 'hungary',
  },
  {
    label: 'Iceland',
    value: 'iceland',
  },
  {
    label: 'India',
    value: 'india',
  },
  {
    label: 'Indonesia',
    value: 'indonesia',
  },
  {
    label: 'Iran',
    value: 'iran',
  },
  {
    label: 'Iraq',
    value: 'iraq',
  },
  {
    label: 'Ireland',
    value: 'ireland',
  },
  {
    label: 'Isle of Man',
    value: 'isle of man',
  },
  {
    label: 'Israel',
    value: 'israel',
  },
  {
    label: 'Italy',
    value: 'italy',
  },
  {
    label: 'Jamaica',
    value: 'jamaica',
  },
  {
    label: 'Japan',
    value: 'japan',
  },
  {
    label: 'Jersey',
    value: 'jersey',
  },
  {
    label: 'Jordan',
    value: 'jordan',
  },
  {
    label: 'Kazakhstan',
    value: 'kazakhstan',
  },
  {
    label: 'Kenya',
    value: 'kenya',
  },
  {
    label: 'Kuwait',
    value: 'kuwait',
  },
  {
    label: 'Kyrgyz Republic',
    value: 'kyrgyz republic',
  },
  {
    label: 'Laos',
    value: 'laos',
  },
  {
    label: 'Latvia',
    value: 'latvia',
  },
  {
    label: 'Lebanon',
    value: 'lebanon',
  },
  {
    label: 'Lesotho',
    value: 'lesotho',
  },
  {
    label: 'Liberia',
    value: 'liberia',
  },
  {
    label: 'Libya',
    value: 'libya',
  },
  {
    label: 'Liechtenstein',
    value: 'liechtenstein',
  },
  {
    label: 'Lithuania',
    value: 'lithuania',
  },
  {
    label: 'Luxembourg',
    value: 'luxembourg',
  },
  {
    label: 'Macau',
    value: 'macau',
  },
  {
    label: 'Macedonia',
    value: 'macedonia',
  },
  {
    label: 'Madagascar',
    value: 'madagascar',
  },
  {
    label: 'Malawi',
    value: 'malawi',
  },
  {
    label: 'Malaysia',
    value: 'malaysia',
  },
  {
    label: 'Maldives',
    value: 'maldives',
  },
  {
    label: 'Mali',
    value: 'mali',
  },
  {
    label: 'Malta',
    value: 'malta',
  },
  {
    label: 'Mauritania',
    value: 'mauritania',
  },
  {
    label: 'Mauritius',
    value: 'mauritius',
  },
  {
    label: 'Mexico',
    value: 'mexico',
  },
  {
    label: 'Moldova',
    value: 'moldova',
  },
  {
    label: 'Monaco',
    value: 'monaco',
  },
  {
    label: 'Mongolia',
    value: 'mongolia',
  },
  {
    label: 'Montenegro',
    value: 'montenegro',
  },
  {
    label: 'Montserrat',
    value: 'montserrat',
  },
  {
    label: 'Morocco',
    value: 'morocco',
  },
  {
    label: 'Mozambique',
    value: 'mozambique',
  },
  {
    label: 'Namibia',
    value: 'namibia',
  },
  {
    label: 'Nepal',
    value: 'nepal',
  },
  {
    label: 'Netherlands',
    value: 'netherlands',
  },
  {
    label: 'Netherlands Antilles',
    value: 'netherlands antilles',
  },
  {
    label: 'New Caledonia',
    value: 'new caledonia',
  },
  {
    label: 'New Zealand',
    value: 'new zealand',
  },
  {
    label: 'Nicaragua',
    value: 'nicaragua',
  },
  {
    label: 'Niger',
    value: 'niger',
  },
  {
    label: 'Nigeria',
    value: 'nigeria',
  },
  {
    label: 'Norway',
    value: 'norway',
  },
  {
    label: 'Oman',
    value: 'oman',
  },
  {
    label: 'Pakistan',
    value: 'pakistan',
  },
  {
    label: 'Palestine',
    value: 'palestine',
  },
  {
    label: 'Panama',
    value: 'panama',
  },
  {
    label: 'Papua New Guinea',
    value: 'papua new guinea',
  },
  {
    label: 'Paraguay',
    value: 'paraguay',
  },
  {
    label: 'Peru',
    value: 'peru',
  },
  {
    label: 'Philippines',
    value: 'philippines',
  },
  {
    label: 'Poland',
    value: 'poland',
  },
  {
    label: 'Portugal',
    value: 'portugal',
  },
  {
    label: 'Puerto Rico',
    value: 'puerto rico',
  },
  {
    label: 'Qatar',
    value: 'qatar',
  },
  {
    label: 'Reunion',
    value: 'reunion',
  },
  {
    label: 'Romania',
    value: 'romania',
  },
  {
    label: 'Russia',
    value: 'russia',
  },
  {
    label: 'Rwanda',
    value: 'rwanda',
  },
  {
    label: 'Saint Pierre &amp; Miquelon',
    value: 'saint pierre &amp; miquelon',
  },
  {
    label: 'Samoa',
    value: 'samoa',
  },
  {
    label: 'San Marino',
    value: 'san marino',
  },
  {
    label: 'Satellite',
    value: 'satellite',
  },
  {
    label: 'Saudi Arabia',
    value: 'saudi arabia',
  },
  {
    label: 'Senegal',
    value: 'senegal',
  },
  {
    label: 'Serbia',
    value: 'serbia',
  },
  {
    label: 'Seychelles',
    value: 'seychelles',
  },
  {
    label: 'Sierra Leone',
    value: 'sierra leone',
  },
  {
    label: 'Singapore',
    value: 'singapore',
  },
  {
    label: 'Slovakia',
    value: 'slovakia',
  },
  {
    label: 'Slovenia',
    value: 'slovenia',
  },
  {
    label: 'South Africa',
    value: 'south africa',
  },
  {
    label: 'South Korea',
    value: 'south korea',
  },
  {
    label: 'Spain',
    value: 'spain',
  },
  {
    label: 'Sri Lanka',
    value: 'sri lanka',
  },
  {
    label: 'St Kitts &amp; Nevis',
    value: 'st kitts &amp; nevis',
  },
  {
    label: 'St Lucia',
    value: 'st lucia',
  },
  {
    label: 'St Vincent',
    value: 'st vincent',
  },
  {
    label: 'St. Lucia',
    value: 'st. lucia',
  },
  {
    label: 'Sudan',
    value: 'sudan',
  },
  {
    label: 'Suriname',
    value: 'suriname',
  },
  {
    label: 'Swaziland',
    value: 'swaziland',
  },
  {
    label: 'Sweden',
    value: 'sweden',
  },
  {
    label: 'Switzerland',
    value: 'switzerland',
  },
  {
    label: 'Syria',
    value: 'syria',
  },
  {
    label: 'Taiwan',
    value: 'taiwan',
  },
  {
    label: 'Tajikistan',
    value: 'tajikistan',
  },
  {
    label: 'Tanzania',
    value: 'tanzania',
  },
  {
    label: 'Thailand',
    value: 'thailand',
  },
  {
    label: "Timor L'Este",
    value: "timor l'este",
  },
  {
    label: 'Togo',
    value: 'togo',
  },
  {
    label: 'Tonga',
    value: 'tonga',
  },
  {
    label: 'Trinidad &amp; Tobago',
    value: 'trinidad &amp; tobago',
  },
  {
    label: 'Tunisia',
    value: 'tunisia',
  },
  {
    label: 'Turkey',
    value: 'turkey',
  },
  {
    label: 'Turkmenistan',
    value: 'turkmenistan',
  },
  {
    label: 'Turks &amp; Caicos',
    value: 'turks &amp; caicos',
  },
  {
    label: 'Uganda',
    value: 'uganda',
  },
  {
    label: 'Ukraine',
    value: 'ukraine',
  },
  {
    label: 'United Arab Emirates',
    value: 'united arab emirates',
  },
  {
    label: 'United Kingdom',
    value: 'united kingdom',
  },
  {
    label: 'Uruguay',
    value: 'uruguay',
  },
  {
    label: 'Uzbekistan',
    value: 'uzbekistan',
  },
  {
    label: 'Venezuela',
    value: 'venezuela',
  },
  {
    label: 'Vietnam',
    value: 'vietnam',
  },
  {
    label: 'Virgin Islands (US)',
    value: 'virgin islands (us)',
  },
  {
    label: 'Yemen',
    value: 'yemen',
  },
  {
    label: 'Zambia',
    value: 'zambia',
  },
  {
    label: 'Zimbabwe',
    value: 'zimbabwe',
  },
];

const services = [
  {
    label: 'Design',
    value: 'design',
  },
  {
    label: 'Development',
    value: 'development',
  },
  {
    label: 'Marketing',
    value: 'marketing',
  },
];

const HomeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    country: '',
    company: '',
    message: '',
    service: '',
    updates: '',
    phone: '',
    website: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
    company: Yup.string().required('Company is required'),
    service: Yup.string().required('Service is required'),
    country: Yup.string().required('Country is required'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      ),
    website: Yup.string()
      .required('Website is required')
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        'Website Url is not valid!'
      ),
  });

  return (
    <section className='py-5 lg:py-10 px-4 '>
      <div className='container   mx-auto border border-[#309FC9]  rounded-lg '>
        <div className=' lg:flex  justify-between p-4 sm:p-8 md:p-10 lg:p-16 '>
          <div className='flex-1'>
            <h1 className='heading'>
              Let’s create <br /> something great
            </h1>
            <div className='text-sm sm:text-base lg:text-xl text-black text-opacity-80 font-light my-5 md:leading-[30px]'>
              <p>hello@thirdeye.com </p>
              <p>+91 98392 18293</p>
            </div>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              // onSubmit={onSubmit}
            >
              {formik => {
                const { values, setFieldValue } = formik;

                return (
                  <Form className='flex-1 max-w-[570px] mx-auto md:max-w-max  my-10 md:my-0 grid gap-8 lg:gap-14'>
                    <div className='md:flex  md:space-x-5'>
                      <div className='w-full pb-6 lg:pb-0'>
                        <Field
                          type='text'
                          name='name'
                          placeholder='What’s your name?'
                          className='py-2 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='name'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>

                      <div className='w-full'>
                        <Field
                          type='email'
                          name='email'
                          placeholder='Your Email?'
                          className='py-2 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='email'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className='md:flex  md:space-x-5'>
                      <div className='w-full  pb-6 lg:pb-0'>
                        <Field
                          type='text'
                          name='phone'
                          placeholder='Phone number*'
                          className='py-1 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='phone'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                      <div className='relative w-full '>
                        <div className='absolute z-10 top-2 right-0'>
                          <HiChevronDown className='text-2xl text-black text-opacity-60' />
                        </div>

                        <Select
                          className='basic-single'
                          classNamePrefix='select'
                          options={countiesList}
                          onChange={value => {
                            setFieldValue('country', value.value);
                          }}
                          placeholder='Country'
                          components={{ DropdownIndicator: null }}
                          styles={{
                            control: styles => ({
                              ...styles,
                              borderRadius: 0,
                              border: 'none',
                              borderBottom: '2px solid #e5e7eb',
                              boxShadow: 'none',
                              fontSize: '18px',
                              paddingBottom: '13px',
                              '&:hover': {
                                borderRadius: 0,
                                borderColor: '#e5e7eb',
                              },
                            }),
                            placeholder: style => ({
                              ...style,
                              fontSize: '18px',
                              color: '#9ca3af',
                            }),
                          }}
                        />
                        <ErrorMessage name='country'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className='md:flex  md:space-x-5'>
                      <div className='w-full  pb-6 lg:pb-0'>
                        <Field
                          type='text'
                          name='company'
                          placeholder='Company Name'
                          className='py-1 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='company'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                      <div className='w-full'>
                        <Field
                          type='text'
                          name='website'
                          placeholder='Website Url'
                          className='py-1 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='website'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                    </div>

                    <div className='relative'>
                      <div className='absolute z-10 top-2 right-0'>
                        <HiChevronDown className='text-2xl text-black text-opacity-60' />
                      </div>

                      <Select
                        className='basic-single'
                        classNamePrefix='select'
                        options={services}
                        onChange={value => {
                          setFieldValue('service', value.value);
                        }}
                        placeholder='What Services are You Looking For?'
                        components={{ DropdownIndicator: null }}
                        styles={{
                          control: styles => ({
                            ...styles,
                            borderRadius: 0,
                            border: 'none',
                            borderBottom: '2px solid #e5e7eb',
                            boxShadow: 'none',
                            fontSize: '18px',
                            paddingBottom: '6px',
                            '&:hover': {
                              borderRadius: 0,
                              borderColor: '#e5e7eb',
                            },
                          }),
                          placeholder: style => ({
                            ...style,
                            paddingBottom: '13px',
                            color: '#9ca3af',
                          }),
                        }}
                      />
                      <ErrorMessage name='service'>
                        {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                      </ErrorMessage>
                    </div>

                    <div>
                      <Field
                        as='textarea'
                        name='message'
                        placeholder='Tell us about your project :)'
                        className='py-2 pb-4 md:placeholder:text-xl  text-lg  outline-none border-b-2 w-full h-[150px] resize-none'
                      />
                      <ErrorMessage name='message'>
                        {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                      </ErrorMessage>

                      <div className='mt-5'>
                        <label className='flex space-x-2 items-center'>
                          <Field
                            type='checkbox'
                            name='updates'
                            className='h-4 w-4'
                          />
                          <span className='text-black text-opacity-80'>
                            Stay up to date with trends in Design
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className='w-full flex justify-end '>
                      <button
                        className='bg-black max-w-[135px] w-full h-12 text-sm md:text-base md:h-14 text-white lg:text-xl  rounded-[4px]'
                        type='submit'
                      >
                        Send
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeForm;

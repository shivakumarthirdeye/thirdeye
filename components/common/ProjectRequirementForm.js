import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { HiChevronDown } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';
import Select, { components } from 'react-select';
import * as Yup from 'yup';
import CalendlyModal from '../CalendlyModal';
import meetingImg from '/public/assets/meeting.png';

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
const ProjectRequirementForm = () => {
  const isMd = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const initialValues = {
    name: '',
    email: '',
    country: '',
    company: '',
    requirementDoc: '',
    message: '',
    service: '',
    updates: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
    company: Yup.string().required('Company is required'),
    service: Yup.string().required('Service is required'),
    country: Yup.string().required('Country is required'),
  });
  const [book, setBook] = useState(false);

  return (
    <section className='py-5 lg:py-10'>
      <CalendlyModal open={book} toggleModal={() => setBook(prev => !prev)} />
      <div className='container px-4  mx-auto'>
        <div className=' lg:flex  justify-between'>
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
                  <Form className='flex-1 max-w-[570px] mx-auto md:max-w-max  my-10 md:my-0 grid gap-8 lg:gap-12'>
                    <div className='md:flex  md:space-x-5'>
                      <div className='w-full mb-8'>
                        <Field
                          type='text'
                          name='name'
                          placeholder='What’s your name?'
                          className='py-2 pb-4 md:placeholder:text-xl  md:text-xl  outline-none border-b-2 w-full'
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
                          className='py-2 pb-4 md:placeholder:text-xl  md:text-xl  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='email'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className='md:flex  md:space-x-5'>
                      <div className='relative w-full mb-8'>
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
                              fontSize: isMd ? '20px' : '16px',
                              paddingBottom: '10px',
                              '&:hover': {
                                borderRadius: 0,
                                borderColor: '#e5e7eb',
                              },
                            }),
                            placeholder: style => ({
                              ...style,
                              fontSize: isMd ? '20px' : '16px',
                              color: '#9ca3af',
                            }),
                          }}
                        />
                        <ErrorMessage name='country'>
                          {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                        </ErrorMessage>
                      </div>

                      <div className='w-full'>
                        <Field
                          type='text'
                          name='company'
                          placeholder='Company Name'
                          className='py-1 pb-4 md:placeholder:text-xl  md:text-xl  outline-none border-b-2 w-full'
                        />
                        <ErrorMessage name='company'>
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
                            fontSize: isMd ? '20px' : '16px',
                            paddingBottom: '6px',
                            '&:hover': {
                              borderRadius: 0,
                              borderColor: '#e5e7eb',
                            },
                          }),
                          placeholder: style => ({
                            ...style,
                            fontSize: isMd ? '20px' : '16px',
                            color: '#9ca3af',
                          }),
                        }}
                      />
                      <ErrorMessage name='service'>
                        {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                      </ErrorMessage>
                    </div>

                    <UploadComponent
                      setFieldValue={setFieldValue}
                      value={values.requirementDoc}
                    />

                    <div>
                      <Field
                        as='textarea'
                        name='message'
                        placeholder='Tell us about your project :)'
                        className='py-2 pb-4 md:placeholder:text-xl  md:text-xl  outline-none border-b-2 w-full h-[150px] resize-none'
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

                    <div className='w-full '>
                      <button
                        className='bg-black h-12 text-sm md:text-base md:h-14 text-white  w-full lg:text-xl  rounded-[4px]'
                        type='submit'
                      >
                        Send message
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <div>
              <div className='flex items-center space-x-1 md:space-x-2 my-8'>
                <div className='bg-black h-[0.5px] md:h-[1px] flex-1'></div>
                <p className='text-xs md:text-xl'>or</p>
                <div className='bg-black h-[0.5px] md:h-[1px] flex-1'></div>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-5 items-center'>
                  <img
                    src={meetingImg.src}
                    alt=''
                    className='w-12 h-12 md:w-auto md:h-auto rounded-md  md:rounded-3xl'
                  />
                  <div>
                    <p className='text-xs sm:text-sm md:text-base font-medium'>
                      Arrange a chat with marin,
                      <br /> our head of marketing
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setBook(prev => !prev);
                    }}
                    className='p-2 md:py-4 md:px-7 border text-xs sm:text-sm md:text-base border-blue text-blue rounded'
                  >
                    Book a time
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectRequirementForm;

const UploadComponent = ({ setFieldValue, value }) => {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      multiple: false,
      accept: {
        'application/pdf': [],
        '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document':
          [],
      },
      maxSize: 25000000,

      onDrop: acceptedFiles => {
        setFieldValue('requirementDoc', acceptedFiles);
      },

      // accept:{[".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values"]}
    });

  return (
    <div className=' gap-5 '>
      <div
        {...getRootProps({ className: 'dropzone' })}
        className={` flex   justify-center items-center relative flex-1 rounded-lg bg-white dark:bg-dark-600 h-[156px] cursor-pointer border-dashed border-2 `}
      >
        <input {...getInputProps()} />
        <div className='max-w-xs flex justify-center flex-col items-center '>
          {/* <MdOutlineCloudUpload className='text-4xl' /> */}
          <div>
            <svg
              width='44'
              height='39'
              viewBox='0 0 44 39'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.85964 0C1.32322 0.075528 0.808107 0.283502 0.45337 0.705521C0.0986599 1.12755 0.0187924 1.61687 0.000310004 1.98842C-0.000387505 13.5519 0.000310004 25.8018 0.000310004 37.9738C0.000310004 38.5111 0.476737 39 1.00023 39H42.9999C43.5234 39 43.9998 38.511 43.9998 37.9738C44.0002 28.2256 43.9998 18.4618 43.9998 8.72365C43.9981 8.67532 43.9929 8.627 43.9842 8.57939C43.8963 7.95083 43.7979 7.23565 43.3748 6.55874C42.9514 5.88185 42.183 5.35886 41.203 5.14773C41.1361 5.1352 41.0681 5.12983 41 5.13162H16.9533L12.7502 0.336873C12.5611 0.123178 12.2814 -0.0024632 12.0003 3.84519e-05H1.86L1.85964 0ZM2.0002 2.05246C11.3146 1.85594 8.3751 2.05246 11.5628 2.05246L15.7502 6.83108C15.9361 7.0505 16.2169 7.18258 16.5001 7.18402H40.8906C41.3918 7.30931 41.5595 7.46072 41.6875 7.66511C41.8183 7.87415 41.9223 8.28007 42.0001 8.80377V10.2632H1.9995C2.03752 8.52392 1.9981 4.87453 1.9995 2.05242L2.0002 2.05246ZM2.0002 12.3157H42.0007V36.9473H2.0002V12.3157ZM14.9066 17.4473C14.4152 17.4949 13.9984 17.967 14.0005 18.4735V22.0655C13.9932 22.6078 14.4721 23.1064 15.0005 23.1064C15.5289 23.1064 16.0081 22.6078 16.0004 22.0655V19.4997H28.0006V22.0655C27.9932 22.6078 28.4721 23.1064 29.0005 23.1064C29.5289 23.1064 30.0081 22.6078 30.0004 22.0655V18.4735C30.0004 17.9362 29.524 17.4473 29.0005 17.4473H14.9065H14.9066ZM21.8909 21.0393C21.6834 21.0618 21.4835 21.1531 21.3283 21.2959L16.8285 25.4013C16.4371 25.7618 16.4023 26.4555 16.7549 26.8557C17.1075 27.2555 17.7841 27.2888 18.1723 26.9247L21.0005 24.3267V34.3819C20.9932 34.9242 21.4721 35.4228 22.0005 35.4228C22.5289 35.4228 23.0081 34.9241 23.0004 34.3819V24.5356L25.2975 26.8931C25.6672 27.2833 26.3529 27.2862 26.7257 26.8992C27.0986 26.5123 27.0881 25.8086 26.7037 25.4338L22.7036 21.3284C22.4926 21.1151 22.1857 21.0059 21.8909 21.0399L21.8909 21.0393Z'
                fill='black'
                fillOpacity='0.6'
              />
            </svg>
          </div>

          <h2 className='text-center my-2 text-base'>
            {value && value.length ? (
              <span className=' text-blue'>{value[0].name}</span>
            ) : (
              <span className=' text-black text-opacity-60'>
                Project Requirement doc if any (pdf / doc)
              </span>
            )}
          </h2>
        </div>
      </div>
      <div className='flex items-center justify-between mt-3'>
        <p className=' text-black text-opacity-60'>that its not compulsary</p>
        {value && value.length && (
          <button
            onClick={() => {
              setFieldValue('requirementDoc', '');
            }}
            className='capitalize underline   text-red-400 '
          >
            clear file
          </button>
        )}
      </div>
    </div>
  );
};

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDropzone } from 'react-dropzone';
import * as Yup from 'yup';

var country_list = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
const ProjectRequirementForm = () => {
  const initialValues = {
    name: '',
    email: '',
    country: '',
    company: '',
    services: '',
    requirementDoc: '',
    message: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <section className='my-14 relative'>
      <div className='container px-4 max-w-7xl mx-auto'>
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
            {formik => {
              const { values, setFieldValue } = formik;
              console.log(
                '🚀 ~ file: ProjectRequirementForm.js:248 ~ ProjectRequirementForm ~ values',
                values
              );

              return (
                <Form className='flex-1  my-10 md:my-0 grid gap-12'>
                  <div className='flex  space-x-5'>
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

                    <div className='w-full'>
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
                  </div>
                  <div className='flex  space-x-5'>
                    <div className='w-full '>
                      {/* <Field
                    type='text'
                    name='country'
                    placeholder='Country'
                    className='py-2 pb-4 placeholder:text-xl  text-xl  outline-none border-b-2 w-full'
                  /> */}
                      <Field
                        as='select'
                        name='country'
                        placeholder='Country'
                        className={`${
                          values.country ? '' : 'text-[#9ca3af]'
                        } py-2 pb-4 placeholder:text-xl  text-xl  outline-none border-b-2 w-full`}
                      >
                        <option value='' disabled selected hidden>
                          Country
                        </option>
                        {country_list.map(item => {
                          return (
                            <option
                              key={item}
                              value={item}
                              className='text-black'
                            >
                              {item}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage name='name'>
                        {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                      </ErrorMessage>
                    </div>

                    <div className='w-full'>
                      <Field
                        type='text'
                        name='company'
                        placeholder='Company Name'
                        className='py-2 pb-4 placeholder:text-xl text-xl  outline-none border-b-2 w-full'
                      />
                      <ErrorMessage name='email'>
                        {msg => <p className='text-red-500 py-3'>{msg}*</p>}
                      </ErrorMessage>
                    </div>
                  </div>
                  <UploadComponent setFieldValue={setFieldValue} />

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
              );
            }}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default ProjectRequirementForm;

const UploadComponent = ({ setFieldValue }) => {
  const { acceptedFiles, getRootProps, getInputProps, fileRejections } =
    useDropzone({
      multiple: false,
      accept: {
        'application/pdf': [],
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
        className={` flex   justify-center items-center relative flex-1 rounded-lg bg-white dark:bg-dark-600 h-[156px] cursor-pointer border-dashed border-2`}
      >
        <input {...getInputProps()} />
        <div className='max-w-xs flex justify-center flex-col items-center'>
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
                fill-opacity='0.6'
              />
            </svg>
          </div>

          <h2 className='text-center my-2 text-base'>
            <span className=' text-black text-opacity-60'>
              Project Requirement doc if any
            </span>
          </h2>
        </div>
      </div>
      <p className='mt-4 text-black text-opacity-60'>that its not compulsary</p>
    </div>
  );
};

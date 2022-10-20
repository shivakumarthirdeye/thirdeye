import Layout from '@/components/Layout';

const terms = [
  {
    id: 1,
    description: `An Intellectual Property clause will inform users that the contents, logo and other visual media you created is your property and is protected by copyright laws.`,
  },
  {
    id: 2,
    description: `A Termination clause will inform users that any accounts on your website and mobile app, or users' access to your website and app, can be terminated in case of abuses or at your sole discretion.`,
  },
  {
    id: 3,
    description: `A Governing Law clause will inform users which laws govern the agreement. These laws should come from the country in which your company is headquartered or the country from which you operate your website and mobile app.`,
  },
  {
    id: 4,
    description: `
A Links to Other Websites clause will inform users that you are not responsible for any third party websites that you link to. This kind of clause will generally inform users that they are responsible for reading and agreeing (or disagreeing) with the Terms and Conditions or Privacy Policies of these third parties.`,
  },
  {
    id: 5,
    description: `A Limit What Users Can Do clause can inform users that by agreeing to use your service, they're also agreeing to not do certain things. This can be part of a very long and thorough list in your Terms and Conditions agreement so as to encompass the most amount of negative uses.'`,
  },
  {
    id: 6,
    description: `
Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.
`,
  },
  {
    id: 7,
    description: `Because the content created by users is public to other users, a DMCA notice clause (or Copyright Infringement ) section is helpful to inform users and copyright authors that, if any content is found to be a copyright infringement, you will respond to any DMCA takedown notices received and you will take down the content.
`,
  },
];

const TermsAndServices = () => {
  return (
    <Layout>
      <div className='container mx-auto my-8 mb-40 px-4'>
        <h1 className='heading'>Terms & Services</h1>
        <div>
          <ul className='list-disc ml-8 grid gap-5 my-8'>
            {terms.map(item => {
              const { id, description } = item;
              return (
                <li className='md:text-xl text-black text-opacity-80' key={id}>
                  {description}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default TermsAndServices;

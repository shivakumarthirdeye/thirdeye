import { GreenRight } from '@/components/common/ShadeSVGs';
import Layout from '@/components/Layout';
import content from '@/utils/ui-works.json';
import { useState } from 'react';

const UiWorks = ({ page }) => {
  const { id, name, slug, description, images, thumbnail } = page;

  const [currentImg, setCurrentImg] = useState(0);

  const [bigImg, setBigImg] = useState(images[currentImg]?.bigImg);

  return (
    <Layout>
      <section className=' relative'>
        <div className='absolute right-0 top-[-200px] sm:top-[-500px] z-[-10] '>
          <GreenRight />
        </div>
        <div className='container'>
          <div className='flex flex-wrap xl:flex-nowrap items-center lg:space-x-10'>
            <div>
              <h1 className='text-black text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium  '>
                {name}
              </h1>
              <p className='text-black my-5 text-opacity-80 md:text-lg lg:text-xl max-w-[514px]'>
                {description}
              </p>
            </div>
            <div className='flex justify-center w-full xl:w-auto  space-x-4 lg:space-x-6 xl:space-x-8 items-center'>
              {images &&
                images.map((img, idx) => {
                  return (
                    <>
                      {img.smallImg && (
                        <button
                          key={img.id}
                          onClick={() => {
                            setCurrentImg(idx);
                          }}
                          className={`${
                            currentImg === idx
                              ? 'border-4 rounded-sm border-[#9cd0e2]'
                              : ''
                          } `}
                        >
                          <img src={img.smallImg} />
                        </button>
                      )}
                    </>
                  );
                })}
            </div>
          </div>

          <section>
            <img src={images[currentImg]?.bigImg} alt='' />
          </section>
        </div>
      </section>
    </Layout>
  );
};

export default UiWorks;

export async function getStaticPaths() {
  const paths = content.uiworks.map(page => {
    const slug = [page.slug];
    return { params: { slug } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const currentPath = params.slug[0];

  const page = content.uiworks.find(
    project => project.slug === currentPath
  ) || {
    notfound: true,
  };

  return { props: { page } };
}

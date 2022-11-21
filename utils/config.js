export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith('/') ? `http://localhost:1337${url}` : url;
  return imageUrl;
}

export const getStrapiInfo = (object, name) => {
  return object.data.attributes[name];
};

export const categoryColor = {
  design: ['#DBDAFF', '#3532C9'],
  development: ['#FAF0FD', '#B02E8C'],
  marketing: ['#e9fff6', '#32C9AE'],
};

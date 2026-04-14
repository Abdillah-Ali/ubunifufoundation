const projectId = 'kbbqk3r8';
const dataset = 'production';
const query = encodeURIComponent('*[_type == "post"]{_id, title, "slug": slug.current}');
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

try {
  const response = await fetch(url);
  const data = await response.json();
  if (data.result) {
    console.log(`\nTOTAL BLOGS IN SANITY: ${data.result.length}\n`);
    data.result.forEach((post, index) => {
      console.log(`${index + 1}. ${post.title} (Slug: ${post.slug || 'NO SLUG'}, ID: ${post._id})`);
    });
  } else {
    console.log('No blogs found.');
  }
} catch (error) {
  console.error('Error fetching blogs:', error);
}

const projectId = 'kbbqk3r8';
const dataset = 'production';
const query = encodeURIComponent('*[_type == "post"]{_id, title, "slug": slug.current}');
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
} catch (error) {
  console.error('Error:', error);
}

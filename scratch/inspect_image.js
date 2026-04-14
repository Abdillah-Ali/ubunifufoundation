const projectId = 'kbbqk3r8';
const dataset = 'production';
const query = encodeURIComponent('*[_type == "post" && title == "TEST1"]{coverImage}');
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(JSON.stringify(data.result[0], null, 2));
} catch (error) {
  console.error('Error fetching image data:', error);
}

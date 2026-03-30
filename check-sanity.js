const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'g2g7wect',
  dataset: 'production',
  apiVersion: '2024-01-27',
  useCdn: false,
});

async function checkPosts() {
  try {
    const posts = await client.fetch('*[_type == "post"][0]');
    console.log(JSON.stringify(posts, null, 2));
  } catch (error) {
    console.error(error);
  }
}

checkPosts();

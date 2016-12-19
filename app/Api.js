const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists';
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

console.log(ENDPOINT)

export const BookRes = ENDPOINT;

import qs from 'query-string';

const YOUTUBE_API_KEY = 'AIzaSyDl9ikjfO2MJ9f30LItSyLunfh-T9-RuJk';

export async function search(query, pageToken) {
  const searchStr = qs.stringify({
    key: YOUTUBE_API_KEY,
    part: 'snippet',
    q: query,
    pageToken
  });

  const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?${searchStr}`);
  return resp.json();
}

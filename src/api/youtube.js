import qs from 'query-string';

const YOUTUBE_API_KEY = 'AIzaSyDl9ikjfO2MJ9f30LItSyLunfh-T9-RuJk';

export async function search(query) {
  const searchStr = qs.stringify({
    q: query,
    part: 'snippet',
    key: YOUTUBE_API_KEY
  });

  const resp = await fetch(`https://www.googleapis.com/youtube/v3/search?${searchStr}`);
  return resp.json();
}

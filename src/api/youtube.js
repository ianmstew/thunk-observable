import qs from 'query-string';

const YOUTUBE_API_KEY = 'AIzaSyDl9ikjfO2MJ9f30LItSyLunfh-T9-RuJk';

export async function search(query = {}) {
  const { queryTerm = '', maxResults = 8, pageToken, videoDuration } = query;
  const searchStr = qs.stringify({
    key: YOUTUBE_API_KEY,
    part: 'snippet',
    type: 'video',
    q: queryTerm,
    videoDuration,
    maxResults,
    pageToken
  });

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${searchStr}`
  );
  if (response.status !== 200) {
    throw new Error('Non-200 response');
  }

  const json = await response.json();
  if (json.error) {
    throw new Error('Google API error');
  }

  return json;
}

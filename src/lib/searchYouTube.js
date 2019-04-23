var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { 
      part: 'snippet',
      type: 'video',
      key: options.key,
      maxResults: options.max,
      q: options.query,
      videoEmbeddable: 'true'
    },
    success: (data) => { callback(data.items); },
  });
};

export default searchYouTube;
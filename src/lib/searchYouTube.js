
var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: { part: 'dogs', type: 'video'},
    headers: {HeaderName: options.key},
  });
  console.log('successfully sent!');
  callback();
};

export default searchYouTube;

// var testOptions = {
//   query: 'cats',
//   max: '10',
//   key: AIzaSyAf4KPfsgp4jKYVuzBgnVKWUf52MucPubE
// }
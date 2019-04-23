import {exampleVideoData} from 'src/components/exampleVideoData.jsx';

var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em>{props.videos[0]}</h5></div>
    <div><h5><em>videoListEntry</em>{props.videos[1]}</h5></div>
    <div><h5><em>videoListEntry</em>{props.videos[2]}</h5></div>
    <div><h5><em>videoListEntry</em>{props.videos[3]}</h5></div>
    <div><h5><em>videoListEntry</em>{props.videos[4]}</h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// ReactDOM.render(<VideoList videos={[exampleVideoData[0], exampleVideoData[1], exampleVideoData[2], exampleVideoData[3], exampleVideoData[4]]}/>, document.getElementById("app"));

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

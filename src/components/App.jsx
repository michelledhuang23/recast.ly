import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
class App extends React.Component { 
  constructor() {
    super();
    this.state = {currentVideo: exampleVideoData[0], videos: exampleVideoData};
  }

  onClick(videoIndex) {
    return this.setState({currentVideo: exampleVideoData[videoIndex]});
  }
  
  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em>search</em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClick={this.onClick.bind(this)}/>
        </div>
      </div>
    </div>);
  }
}


ReactDOM.render(<App />, document.getElementById("app"));
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

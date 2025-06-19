import axios from 'axios'
import Latestpodcast from '../../src/components/podcastcomponent/latestpodcast';
import Otherpodcast from '../../src/components/podcastcomponent/otherpodcast';

export default function index(){
  return(
    <div className="container pt-4 pt-md-0 px-md-3 px-0">
        <Latestpodcast/>
        <Otherpodcast/>
    </div>
  );
 
}

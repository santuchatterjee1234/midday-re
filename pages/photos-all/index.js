import Latestphotos from "../../src/components/photoscomponent/latestphotos";
import Highlightsoftheday from "../../src/components/photoscomponent/highlightsoftheday";
import Entertainmentphotonews from "../../src/components/photoscomponent/entertainmentphotonews";
import Sportsphotonews from "../../src/components/photoscomponent/sportsphotonews";
import Newsphoto from "../../src/components/photoscomponent/newsphotos";
import Lifestylephotonews from "../../src/components/photoscomponent/lifestylephotonews";
import Mumbaiphotonews from "../../src/components/photoscomponent/mumbaiphotonews";

export default function index(){
    return(
        <div className="container pt-4 pt-md-0">
            <Latestphotos/>
            <Highlightsoftheday/>
            <Entertainmentphotonews/>
            <Sportsphotonews/>
            <Newsphoto/>
            <Lifestylephotonews/>
            <Mumbaiphotonews/>
        </div>
    );
}

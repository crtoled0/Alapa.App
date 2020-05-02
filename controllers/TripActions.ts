/**
 * @author: crtoledo
 */
import Backbone from './Backbone';
import MainActions from './MainActions';

export default class TripActions extends MainActions{

    public static loadTripDetails(tripId) {
          let backbone = Backbone.getInstance();
          let {currLocation} =  backbone.state;
          let backTo = currLocation;
          let options = [];
          if(/(driver\-dash)/ig.test(backTo)){
                options = ["check-trip-req","start-trip","cancel-trip"];
          }
          else{
                if(backbone.state.findMeActive)
                  options = ["send-driver-message","check-driver"];
                else
                  options = ["request-seat","check-driver"];
          }
                

         console.log("options",options, backTo);

          let trp = {options: options};
          backbone.setState({tripDetails:trp});
          MainActions.goTo("/trip-details/"+tripId);
    }

    public static toogleTripRequesters(){
       let backbone = Backbone.getInstance();
       let tripDet = backbone.state.tripDetails;
       tripDet.seeRequestersList = tripDet.seeRequestersList || false;
       tripDet.seeRequestersList = !tripDet.seeRequestersList;
       backbone.setState({tripDetails:tripDet});
    }
}
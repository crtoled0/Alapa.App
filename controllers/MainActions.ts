/**
 * @author: crtoledo
 */
import Backbone from './Backbone';
import * as ImagePicker from 'expo-image-picker';
import RestAdminObj from '../classes/common/RestAdminObj';

export default class MainActions {
    private static animDelay = 100;
    protected static rest = new RestAdminObj();
    public static displayToast(msgObj) {
       let {msg, type, duration} = msgObj;
       duration = duration || 3000;
       let color;
       if(type === "success")
            color = "green";
       else if(type === "warning")
            color = "yellow";
       else if(type === "danger")
            color = "red";
       let backbone = Backbone.getInstance();
       backbone.setState({message:{open:true,msg:msg,color:color, duration:duration}});
       setTimeout(()=>{
            backbone.setState({ 
                message: {open: false, msg:"", duration: 3000, color:'#484848'} 
            });
       },duration);
    }

    public static goTo(path, props={} ) {
          let {skipAnimation} = props;
          //this.refs.view.fadeOutRight(300);
          let backbone = Backbone.getInstance();
          let {pathHistory, currLocation, openedWinRef} = backbone.state;          
          if(openedWinRef && !skipAnimation){
               let {animation} = openedWinRef.props;
               if(animation === "bounceInUp")
                     openedWinRef.bounceOutDown(MainActions.animDelay);
               else
                     openedWinRef.fadeOutRight(MainActions.animDelay);
          }
               
          pathHistory.push(currLocation);
          setTimeout(()=>{
               backbone.setState({currLocation:path, pathHistory:pathHistory});
          },MainActions.animDelay);
          
    }

    public static goBack(props={}) {
     let {skipAnimation} = props;
     let backbone = Backbone.getInstance();
     let {pathHistory, openedWinRef} = backbone.state;
     if(openedWinRef && !skipAnimation){
          let {animation} = openedWinRef.props;
          if(animation === "bounceInUp")
                openedWinRef.bounceOutDown(MainActions.animDelay);
          else{
                openedWinRef.fadeOutRight(MainActions.animDelay);
          }
     }
     let backTo = "/dsh";
     if(pathHistory.length > 0){
          backTo = pathHistory.splice(pathHistory.length-1, 1);
          backTo = backTo[0];
     }
     setTimeout(()=>{
          backbone.setState({currLocation:backTo, pathHistory:pathHistory});
     },MainActions.animDelay);
  
    }

    public static valueLink(props) : void {
          let backbone = Backbone.getInstance();
          let {key, target, formName} = props;
          let formToSet = backbone.state[formName];
          if(!formToSet){
               backbone.state[formName] = {};
               backbone.setState(backbone.state);
               formToSet = backbone.state[formName];
          }
          if(!key || !target)
          return ;
          formToSet[key] = target.value;
     }

     public static handleRef(ref){
          let backbone = Backbone.getInstance();
          backbone.setState({openedWinRef: ref});
     }

     public static async getPictureFromFs(callback: Function){
          let result = await ImagePicker.launchImageLibraryAsync({
               allowsEditing: true,
               aspect: [4, 3]
             })
            // console.log(result)
             if (!result.cancelled) {
                   callback(result.uri)
             }
     }
}
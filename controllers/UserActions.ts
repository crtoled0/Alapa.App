/**
 * @author: crtoledo
 */
import Backbone from './Backbone';
import MainActions from './MainActions';
import * as _ from 'lodash';
import Tools from '../classes/common/Tools';

export default class UserActions extends MainActions{

    public static loadUserProfile(userId) :void {
          let backbone = Backbone.getInstance();
          backbone.setState({userProfileModalVisible:true});
    }

    public static closeUserProfileModal() :void {
          let backbone = Backbone.getInstance();
          backbone.setState({userProfileModalVisible:false});
    }

    public static editUserImage() : void{ 
      let backbone = Backbone.getInstance();
      let {loggedUser} = backbone.state;
      let tools = new Tools();
      
      MainActions.getPictureFromFs(ImageURL => {
          //  console.log("Ready to Load ", _imgUrl);

          //  let form = document.getElementById("myProfileForm");
            //console.log(form);
           // let ImageURL = _imgUrl;
            // Split the base64 string in data and contentType
            let block = ImageURL.split(";");
            // Get the content type of the image
            let contentType = block[0].split(":")[1];// In this case "image/gif"
            // get the real base64 content of the file
            let realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
            // Convert it to a blob to upload
           // console.log(realData, contentType);
            let blob = tools.b64toBlob(realData, contentType);
           // console.log(blob);
            // Create a FormData and append the file with "image" as parameter name
            console.log(contentType);
            let formDataToUpload = new FormData();
            formDataToUpload.append("_id", loggedUser._id);
            formDataToUpload.append("image", blob);
           //loggedUser.image = blob;
            //loggedUser.avatarImg = _imgUrl;
            //backbone.setState({loggedUser: loggedUser});
            console.log(formDataToUpload.get('_id'), formDataToUpload.get('image'));
            MainActions.rest.call("/api/adm/user/updateImg",{method:'POST', output:'multipart/form-data',token:loggedUser.token ,data: formDataToUpload}, _res => {
                  console.log(_res);
            });
      });
    }
}
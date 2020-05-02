/**
 * @author: crtoledo
 */
import Backbone from './Backbone';
import * as _ from 'lodash';
import MainActions from './MainActions';

class LoginActions extends MainActions{
  
  public static goToLogin() : void {
    let backbone = Backbone.getInstance();
    backbone.setState({currLocation:"/login", userToRegister:{}});
  }

  public static toogleKeepLogged() : void{    
    let backbone = Backbone.getInstance();
    let keepLogged = backbone.state.keepLogged||false;
    backbone.setState({keepLogged: !keepLogged});
  }

  //Register Section 
  public static goToRegister() : void {
    let backbone = Backbone.getInstance();
    backbone.setState({currLocation:"/register", userToRegister:{}});
  }

  private static validateRegisterForm(callback: Function): void{
    let backbone = Backbone.getInstance();
    let {userToRegister} = backbone.state;
    let mailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!userToRegister.userid)
        return callback({ok:false, msg: 'User Id is Mandatory'});
    if(!userToRegister.email)
        return callback({ok:false, msg: 'Email is Mandatory'});
    if(!mailregex.test(String(userToRegister.email).toLowerCase()))
        return callback({ok:false, msg: 'Email is Not Valid'});
    if(!userToRegister.password)
        return callback({ok:false, msg: 'Password is Mandatory'});
    if(userToRegister.password !== userToRegister.password2)
        return callback({ok:false, msg: 'Passwords must match'});

    return callback({ok:true, item: userToRegister});
        
  }

  public static sendRegisterForm() : void {
      LoginActions.validateRegisterForm(_validation => {
        if(_validation.ok){
          let newUserToReg = _validation.item;
          LoginActions.rest.call("/api/user/register",{method:'POST', body:newUserToReg}, _res => {
            console.log(_res);
            if(_res.ok){
              MainActions.displayToast({msg:`User $(newUserToReg.userid) created successfully`,type:'success'});
            }
            else{
              MainActions.displayToast({msg:`Not able to create user `+newUserToReg.userid,type:'danger'});
            }
          })
        }
        else{
          MainActions.displayToast({msg:_validation.msg,type:"danger"});
      //    MainActions.displayToast({msg:'this is a second message solo pa weiar',type:"success"});
          console.log(_validation.msg);
        }
      });    
  }

  public static sendLoginForm(): void {
      let backbone = Backbone.getInstance();
      let {loggedUser} = backbone.state;
      LoginActions.rest.call("/api/session/login",{method:'POST', body:loggedUser}, _res => {
        if(_res.ok){
            MainActions.displayToast({msg:'Welcome '+_res.user.fullName+' !!',type:'success'});
            backbone.setState({isLogged:true, currLocation:"/dsh", loggedUser: _res.user});
        }
        else{
            MainActions.displayToast({msg:'Not able to login, please check email and password and try again',type:'danger'});
        }
      });
  }

  public static logout(): void {
      let backbone = Backbone.getInstance();
      MainActions.goTo("/login");
      backbone.setState({isLogged:false, currLocation:"/login", loggedUser: {}, pathHistory:[]});
  }

  public static registerValueLink(props) : void {
    let backbone = Backbone.getInstance();
    let {key, target} = props;
    let {userToRegister} = backbone.state;
    if(!key || !target)
        return ;
    userToRegister[key] = target.value
  }

  public static loginValueLink(props) : void {
    let backbone = Backbone.getInstance();
    let {key, target} = props;
    let {loggedUser} = backbone.state;
    loggedUser = loggedUser||{};
    if(!key || !target)
        return ;
    loggedUser[key] = target.value
    //console.log(loggedUser);
  }

  public static async loadThumbImage(props): void {
      let backbone = Backbone.getInstance();
      let {userToRegister} = backbone.state;
      MainActions.getPictureFromFs(_imgUrl => {
        console.log("Ready to Load ", _imgUrl);
        userToRegister.avatarImg = _imgUrl; 
        backbone.setState({userToRegister: userToRegister});       
      });
  }
  //
}

export default LoginActions;
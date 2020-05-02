//import conf from '../config/conf.json';
import NavTools from './NavTools';

class RestAdmin {
    private envVar: any;
    private hosturl: string;
    private isLocal: Boolean;
    public constructor(props = null) {
        let navTool = new NavTools();
        this.envVar = navTool.getEnvironment();
        this.hosturl = this.envVar.url;
        this.isLocal = this.envVar.isLocal;
    }    
    public call(service: string,par: any,callback: Function) : void{   
        console.log("init callService");  
        par = par||{}; 
        if(typeof par === "function"){
            callback = par;
            par = {};
        }
        par.output = par.output||"application/json";
        let servParm = {
          method: par.method||"GET",
          headers: {
            'Content-Type': par.output,
            'origin': this.hosturl              
          },
          body: par.body?JSON.stringify(par.body):null,
          data: par.data,
          processData: false
        };

        if(par.token)
            servParm.headers['Authorization'] = 'Token '+par.token;
        
        fetch(this.hosturl+service, servParm)
          .then((response) => {
              try{
                let _ret = par.output==="application/json"?response.json():response.text();
                return _ret;
              }
              catch(err){
                  return response.text();
              }
          })
          .then((responseData) => {    
            console.log("We are back");        
            return callback(responseData);
          })
          .catch(error => {
              return callback({error:true,stack:error});
              //console.warn(error);
          });
    }
  }
  export default (RestAdmin);
//import conf from '../config/conf.json';
import RestAdminObj from './RestAdminObj';
import _ from 'lodash';

let staticLocaleLoaded = {};
class Locale {
    private rest;
    private lang;
    private component;
    private parentComp;
    private missedAttr: any;
    private localeReady : Boolean; 
    constructor(props) {
        const {compState, component, lang} = props;        
        this.rest = new RestAdminObj();
        this.lang = lang||"en";
        this.component = component||"Global";
        this.parentComp = compState;
        this.missedAttr = {};
        this.load();
        this.localeReady = false; 
    }

    load(){
        let me = this;
        if(staticLocaleLoaded[this.component+"::"+this.lang]){
            this.parentComp.setState({locAttrs:staticLocaleLoaded[this.component+"::"+this.lang]});
            return ;
        }
        me.rest.call("/midtier/i18n/"+this.component+"/"+this.lang+".json",{output: "application/json"}, _res => {
            console.log(_res);
            if(!_res.error){
                this.parentComp.setState({locAttrs:_res});   
                if(!staticLocaleLoaded[this.component+"::"+this.lang]){
                    staticLocaleLoaded[this.component+"::"+this.lang] = _res;
                }
                this.localeReady = true;
                return ;
            }
            this.parentComp.setState({locAttrs:null});
        });
    }

    get(props){
        if(typeof props === "string")
            props = {attName:props, attDefault:props};        
        let {attName, attDefault, attReplace} = props;
        if(!this.localeReady){
            return attDefault||attName;
        }
        if(!this.parentComp.state.locAttrs || !this.parentComp.state.locAttrs[attName]){
            if(!this.missedAttr[attName]){
                this.missedAttr[attName] = attDefault||attName;
                //this.setAllFoundAttributes();
                this.showMissedAttributes();
            }
           // console.log("Missed Attributes for ",this.component, " ", this.missedAttr);
            return attDefault||attName;
        }
        if(this.missedAttr[attName])
            delete this.missedAttr[attName];
        let attVal = this.parentComp.state.locAttrs[attName];
        if(attReplace){
            for(let idx in attReplace){
                let repgx = new RegExp(idx,"ig");
                attVal = attVal.replace(repgx, attReplace[idx]);
            }
        }
        return attVal;   
    }
    setAllFoundAttributes(){
        let allAttrs = _.assign(this.parentComp.state.locAttrs, this.missedAttr);
        this.parentComp.setState({localeCached:allAttrs});
        //return this.missedAttr;
    }
    showMissedAttributes(){
        console.log("Missed Attributes => ", this.missedAttr);
        //this.parentComp.setState({localeMissed:this.missedAttr});
        //return this.missedAttr;
    }
  }

  export default (Locale);
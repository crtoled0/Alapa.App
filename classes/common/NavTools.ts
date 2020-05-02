import Config from '../../config/Config';


class NavTools {
    private attrs: any;
    constructor(props = null) {
        this.attrs = {};
    }

    getParameterByName(name) {
        console.log("Getting Parameter "+name);
        name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
        if(this.attrs[name]){
            return this.attrs[name];
        }
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(window.location.search);
            this.attrs[name] = results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
        console.log(this.attrs[name]);
        return this.attrs[name];
    }

    getEnvironment() {
        let _res = {
            url: Config.isLocal?Config.localRestUrl:Config.prodRestUrl,
            origin: window.location.origin,
            isLocal:Config.isLocal
        };
        return _res;
    }
  }
  export default (NavTools);
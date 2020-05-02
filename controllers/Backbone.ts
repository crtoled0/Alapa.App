/**
 * @author: crtoledo
 * 
 */

class Backbone {
    private static appComponent: any = null;
    private pubActions = {};
    constructor() {
    }

    public static getInstance() : any{
            return Backbone.appComponent;
    } 

    public static initComponent(comp: any): void{
        Backbone.appComponent = comp;
    }
}

export default Backbone;
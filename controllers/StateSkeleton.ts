class StateSkeleton {
    public static skel() {
        return {
            "isReady": false,
            "isLogged": false,
            "message":{open: false, msg:""},
            "pages": {"login": false, "register": false},
            "loggedUser":{},
            "tripDetails":{},
            "pathHistory":[],
            "currLocation" :"/dsh/passenger-dash",
            "openedWinRef":null
        }
    }


    public static loggedSkel() {
        return {
            "isReady": true,
            "isLogged": true,
            "pages": {
              "login": false,
              "register": false
            },
            "message":{open: false, msg:""},
            "loggedUser": {
              "_id": "5d7fe82694f7335a08cb202c",
              "userid": "frtestss",
              "fullName": "Juan Ramon Serrat",
              "email": "juan@sdfdf.com",
              "avatarImg":"",
              "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDdmZTgyNjk0ZjczMzVhMDhjYjIwMmMiLCJlbWFpbCI6Imp1YW5Ac2RmZGYuY29tIiwiaWF0IjoxNTc2Mjk3NDUzfQ.WpaARUoohwh8d04BvA_CSprU-t-syIPp6Z9wiPW6DBg"
            },
            "keepLogged": true,
            "tripDetails":{},
            "pathHistory":[],
            "currLocation" :"/dsh/passenger-dash",
            "openedWinRef":null
          }
    }
}

export default StateSkeleton.loggedSkel();
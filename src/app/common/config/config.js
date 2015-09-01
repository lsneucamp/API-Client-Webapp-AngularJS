/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("app.common.config",[])
    .constant("errors",{'notFound':404,'forbidden':403,'badRequest':400,'unauthorized':401,'serviceNotAvailable':0})
    .constant("api",
        {
            "url": "http://localhost:3000/api/v1"           
        });

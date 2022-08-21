
function findMatching(drivers,names){
    const samedriver = drivers.filter(function(name){
        return name.toLowerCase()  === names.toLowerCase()
     })
     return samedriver
         /* if(name.includes('obby')){
              return true
        }
        return samedriver*/

    }

function fuzzyMatch(drivers,names){
    const samed = drivers.filter(function(name){
        return name.slice(0,2) == names.slice(0,2)
     } )
     return samed
       /*  if(name.includes("Sa")){
            return true
        }
        return samed
    })*/
}

function matchName(drivers,names){
    const matching = drivers.filter(function(name){
        return name.name === names
    })
    return matching
}


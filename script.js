


function areaa(){
var x
    do{
        var coss =true
        var numb = prompt ('what is the value of your circle raduis ')
        if(numb===null)
                    {
                        return
                    }
                    var cond33 =/^[0-9]*$/.test(numb)
                    if(cond33 == false ||!numb.replace(/\s/g, '').length||parseInt(numb)==0){
                        alert('enter valid number')
                        coss = false
                    }
                    else{
                       x= Math.PI*(numb**2)
                    }
    }
        while(coss==false)
            alert('total area of circle = ' +x)
}
areaa()


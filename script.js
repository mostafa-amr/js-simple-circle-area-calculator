// function calc(){
// var x=0
// var y =1
// var z =1
// var i =0
// var arr=[]
// do{
//     var coss =true
//     var numb = prompt ('enter number ' +(i+1))
//     if(numb===null)
//                 {
//                     return
//                 }
//                 var cond33 =/^[0-9]{1}$/.test(numb)
//                 if(cond33 == false ||!numb.replace(/\s/g, '').length||parseInt(numb)==0){
//                     alert('enter valid number, number must be 1 number not more or less and not zero')
//                     coss = false
//                 }
//                 else{
//                     arr[i]=parseInt(numb)
//                     x=x+arr[i]
//                     y=y*arr[i]
//                     z=arr[i]/z
//                     i++
//                 }
// }
//     while(i<3 || coss==false)
//     console.log('%c sum of the 3 values ' +'%c' +x ,'color:red', 'color:green')
//     console.log('%c multi of the 3 values ' +'%c' +y ,'color:red', 'color:green')
//     console.log('%c devision of the 3 values ' +'%c' +z ,'color:red', 'color:green')
// }
// calc()



//2

// function sorto(){
// var x=0
// var i =0
// var numboo=[]
// do{
//     var coss =true
//     var numb = prompt ('enter number ' +(i+1))
//     if(numb===null)
//                 {
//                     return
//                 }
//                 var cond33 =/^[0-9]{1}$/.test(numb)
//                 if(cond33 == false ||!numb.replace(/\s/g, '').length){
//                     alert('enter valid number, number must be 1 number not more or less and not zero')
//                     coss = false
//                 }
//                 else{
//                     numboo[i]=parseInt(numb)
//                     i++
//                 }
// }
//     while(i<5 || coss==false)
    
// console.log('%c u have entered ther values ' +'%c' +numboo ,'color:red', 'color:green')
// console.log('%c values after sorted ascending ' +'%c' +numboo.sort() ,'color:red', 'color:green')
// console.log('%c values after sorted descending ' +'%c' +numboo.reverse() ,'color:red', 'color:green')
    
// }

// sorto()


//3


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


// function sqro(){
//     var y
//     do{
//         var cost =true
//         var numbe = prompt ('type ur value here ')
//         if(numbe===null)
//                     {
//                         return
//                     }
//                     var cond34 =/^[0-9]*$/.test(numbe)
//                     if(cond34 == false ||!numbe.replace(/\s/g, '').length||parseInt(numbe)==0){
//                         alert('enter valid number')
//                         cost = false
//                     }
//                     else{
//                        y= Math.sqrt(numbe)
//                     }
//     }
//         while(cost==false)
//             alert('square root of  '+numbe +'  is  '  +y)


// }
// sqro()
// function angl(){
//     var z
//     var yy
//     do{
//         var cosr =true
//         var numbee = prompt ('type ur value here ')
//         if(numbee===null)
//                     {
//                         return
//                     }
//                     var cond35 =/^[0-9]*$/.test(numbee)
//                     if(cond35 == false ||!numbee.replace(/\s/g, '').length){
//                         alert('enter valid number')
//                         cosr = false
//                     }
//                     else{
//                        z= (Math.PI / 180) *numbee
//                        yy=Math.cos(z)
//                     }
//     }
//         while(cosr==false)
//             alert('cos  '+numbee +'  is  '  +yy)


// }
// angl()
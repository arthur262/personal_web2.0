export default function threadhold(callback: Function, delay:number):Function{
    let timber: number=0;

    return function(){
        clearTimeout(timber);
        
        timber = window.setTimeout(()=>{
            callback();
        }, delay);

    } 
}
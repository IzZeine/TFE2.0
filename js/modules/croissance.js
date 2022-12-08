console.log("module : croissance")

let egg1 = document.querySelector('.egg1');
let egg2 = document.querySelector('.egg2');
let egg3 = document.querySelector('.egg3');
let egg4 = document.querySelector('.egg4');
let click = document.querySelector('.click');
let growthShark = document.querySelector('.shark-growth');
let rip = document.querySelector('.rip');

let growthSteps = [egg1,egg2,egg3,egg4,growthShark,rip];

let target = document.querySelector('.click-growth');

let count = 0;
let step = 0;

let changeStep=()=>{
    step++
    gsap.to(growthSteps[step],{
        duration : 1,
        opacity : 1,
    })
}

let sharkCome = () =>{
    gsap.fromTo(growthSteps[4],{width:0,},{duration:0.5,width:200,})
}
let deathCome = () =>{
    gsap.fromTo(growthSteps[5],{width:0,},{duration:0.5,width:200,})
}

let growth = () =>{
    target.addEventListener('click',evt=>{
        count++;
        console.log(count);
        gsap.fromTo(target,
            {
                duration:0.2,
                scaleX : 0.95,
            },
            {
                duration:0.2,
                scaleX : 1,
            }
        )
        if (count==5){
            click.style.display='none';
            changeStep();
        }
        if (count==10){
            changeStep();
        }
        if (count==15){
            changeStep();
        }
        // morphing sur le requin ? transition à changer? en svg ?
        if (count==20){
            growthSteps.slice(0,3).forEach((elem)=>{
                elem.style.display='none'
            })
            gsap.to(growthSteps[3],{
                duration : 0.5,
                width : 0,
                onComplete : sharkCome
            })
        }
        // bug apparition requin
        if(count>20 && count <50){
            gsap.to(growthSteps[4],{
                duration:0.5,
                width:count*10
            })
        }
        if(count==50){
            gsap.to(growthSteps[4],{
                duration : 0.5,
                width : 0,
                onComplete : deathCome
            })
        }
        // reset à la fin du compte ?
        if(count == 55){
            count=0;
        }
    })
}

export {growth}
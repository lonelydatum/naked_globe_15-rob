import {size} from '../../_common/js/common'

function start(){
    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
    tl.from('#t1', .3, {opacity:0})
    tl.from('#line', .5, {width:0}, "+=1.2")
    tl.from('#t2', .3, {opacity:0})

    
    tl.to('.frame1', .5, {opacity:0}, '+=2')
    

    tl.add('f2', '-=.2')
    tl.set(".frame2", {opacity:1})
    tl.from('.frame2 #logo', .5, {opacity: 0}, 'f2')
    tl.from('#t3', .5, {opacity: 0}, 'f2')
    tl.to('.frame2', .5, {opacity:0}, '+=4')

    tl.add('f3', '+=4')
    tl.set(".frame3", {opacity:1})    
    tl.from('#medium', .5, {y:size.h})
    tl.from('.frame3 #logo', .5, {opacity:0}, '-=.3')
    tl.from('#t4', .3, {opacity:0})

    tl.from('#cta', .5, {opacity:0}, '+=.3')
    

    // tl.gotoAndPlay("f3")
}

start()

module.exports = {};


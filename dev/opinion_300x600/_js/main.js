import {size} from '../../_common/js/common'

function start(){
    const tl = new TimelineMax()
    tl.set(".frame1", {opacity:1})
    tl.from('#t1', .3, {opacity:0})
    tl.to('#t1', .3, {y:68}, '+=2')

    tl.add('f1b')
    tl.from('#line', .5, {width:0}, 'f1b')
    tl.from('#t2', .3, {opacity:0}, 'f1b')

    tl.add('f2', '+=2')
    tl.to('#t1', .5, {x:size.w}, 'f2')
    tl.to('#t2', .6, {x:size.w}, 'f2')

    tl.add('f2b', '-=.2')
    tl.from('#logo', .5, {x:-size.w}, 'f2b')
    tl.from('#t3', .6, {x:-size.w}, 'f2b')


    tl.add('f3', '+=4')
    tl.set('#line',{transformOrigin:"100% 0%"}, 'f3')
    tl.to('#line', .6, {scale:0}, 'f3')
    tl.to('#t3', .6, {x:size.w}, 'f3')

    tl.add('f3b', '-=.2')
    tl.from('#t4', .6, {x:-size.w}, 'f3b')
    tl.from('#cta', .5, {opacity:0}, '+=.3')
    tl.from('#medium', .5, {opacity:0}, '+=.3')

    // tl.gotoAndPlay("f3")
}

start()

module.exports = {};


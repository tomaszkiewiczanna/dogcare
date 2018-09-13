$(() => {
    const $darkElems= $('.colorDark');
    const $lightElems= $('.colorLight');
    const $gradElems=$('.colorGrad');
    const $tailElem=$('.dog-tail');

    const $brickGrey=$('.choice-grey');
    const $brickBW=$('.choice-bw');
    const $brickGolden=$('.choice-golden');
    const $brickBrown=$('.choice-brown');

    $brickGrey.on('click', ()=> {
        $darkElems.css('background', '#767572');
        $lightElems.css('background', '#a09a98');
        $gradElems.css('background','linear-gradient(0deg, #767572 10%, #a09a98 20%)');
        $tailElem.css({'border-left':'5px solid #767572', 'border-bottom':'5px solid #767572'});
    });

    $brickBW.on('click', ()=> {
        $darkElems.css('background', '#42413e');
        $lightElems.css('background', '#eaecee');
        $gradElems.css('background','linear-gradient(0deg, #42413e 10%, #eaecee 20%)');
        $tailElem.css({'border-left':'5px solid #42413e', 'border-bottom':'5px solid #42413e'});
    });

    $brickGolden.on('click', ()=> {
        $darkElems.css('background', '#91886f');
        $lightElems.css('background', '#bfb494');
        $gradElems.css('background','linear-gradient(0deg, #91886f 10%, #bfb494 20%)');
        $tailElem.css({'border-left':'5px solid #65644b','border-bottom':'5px solid #65644b'});
    });
    $brickBrown.on('click', ()=> {
        $darkElems.css('background', '#5e4c44');
        $lightElems.css('background', '#6b5f55');
        $gradElems.css('background','linear-gradient(0deg, #5e4c44 10%, #6b5f55 20%)');
        $tailElem.css({'border-left':'5px solid #5e4c44', 'border-bottom':'5px solid #5e4c44'});
    });
});
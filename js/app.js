$(() => {
    //variables
    const $darkElems = $('.colorDark');
    const $lightElems = $('.colorLight');
    const $gradElems = $('.colorGrad');
    const $tailElem = $('.dog-tail');

    const $brickGrey = $('.choice-grey');
    const $brickBW = $('.choice-bw');
    const $brickGolden = $('.choice-golden');
    const $brickBrown = $('.choice-brown');

    const $nameInput = $('#name-input');
    const $goBtn = $('#info-frame-go');
    const $nameSpans = $('.dog-name');
    const $startBox= $('.startBox');
    const $startDog= $('.startDog');
    const $backBtn=$('.button-back');

    //color change
    $brickGrey.on('click', () => {
        $darkElems.css('background', '#767572');
        $lightElems.css('background', '#a09a98');
        $gradElems.css('background', 'linear-gradient(0deg, #767572 10%, #a09a98 20%)');
        $tailElem.css({'border-left': '5px solid #767572', 'border-bottom': '5px solid #767572'});
    });

    $brickBW.on('click', () => {
        $darkElems.css('background', '#42413e');
        $lightElems.css('background', '#eaecee');
        $gradElems.css('background', 'linear-gradient(0deg, #42413e 10%, #eaecee 20%)');
        $tailElem.css({'border-left': '5px solid #42413e', 'border-bottom': '5px solid #42413e'});
    });

    $brickGolden.on('click', () => {
        $darkElems.css('background', '#91886f');
        $lightElems.css('background', '#bfb494');
        $gradElems.css('background', 'linear-gradient(0deg, #91886f 10%, #bfb494 20%)');
        $tailElem.css({'border-left': '5px solid #65644b', 'border-bottom': '5px solid #65644b'});
    });
    $brickBrown.on('click', () => {
        $darkElems.css('background', '#5e4c44');
        $lightElems.css('background', '#6b5f55');
        $gradElems.css('background', 'linear-gradient(0deg, #5e4c44 10%, #6b5f55 20%)');
        $tailElem.css({'border-left': '5px solid #5e4c44', 'border-bottom': '5px solid #5e4c44'});
    });

    //switchers
    $goBtn.on('click', function () {
        $name = $nameInput.val();
        if ($name.length > 0 && $name.length <= 12) {
                $nameSpans.text($name);
               $startBox.css('top', '-1000px');
               $startDog.css('opacity', '1');
        } else {
            alert('Name must be between 1-12 letters!');

        }
    })
    $backBtn.on('click', function () {
        $startBox.css('top', '0');
        $startDog.css('opacity', '0');
    })
});
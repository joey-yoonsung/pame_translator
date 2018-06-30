var Hangul = require('hangul-js');
function hangulTest(arg){
    console.log(Hangul.disassemble(arg));
}

hangulTest("한글");
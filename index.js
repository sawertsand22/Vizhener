function encrypt() {
    let decrypt = document.getElementById('decr').value;
    let key = document.getElementById('key').value;
    console.log(key);
   
    document.getElementById('res').value =  encrypting(String(key), String(decrypt));
}
function Decrypt()
{
    let decrypt = document.getElementById('decrD').value;
    let key = document.getElementById('keyD').value;
    console.log(key);
   
    document.getElementById('resD').value =  Decrypting(String(key), String(decrypt));
}
function Decrypting(key, decrypt)
{
    let keyStr = '';
    var k = 0;
    let encrypted ='';
    decrypt.replace(/\s/g, '');
    let str = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    for (let i = 0; i < decrypt.length ; i++)
    {
       
        if (decrypt[i] === ' ') {
            keyStr += " ";
            continue;
        }
        for (let j = 0; j < key.length; j++) {
            if (k % key.length == j) {
                console.log(key[j]);
                //decrypt[i] += key[j];
                keyStr += key[j];
                
            }
        }
    
    k++;
        //console.log(`i- ${i}`)
        //console.log(`i- ${k}`)
    }
    console.log(decrypt);
    console.log(keyStr);
    var calc1 = 0;
    var calc2 = 0;
    for (let i = 0; i < decrypt.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (decrypt[i] == str[j])
                calc1 = j+1;
            if (keyStr[i] == str[j])
                calc2 = j+1;

        }
        var calc = Math.abs(calc1 - calc2);
        if (calc === 0) {
            calc = 32;
            encrypted += str[calc];
            continue;
        }
        console.log(`calc1 - ${calc1}   calc2 ${calc2}`);
        calc = calc % 33;
        calc -= 1;
        calc = Math.abs(calc);
        console.log(`calc - ${calc}`);
        encrypted+= str[calc];
        console.log(`Добавили в декрипт - ${str[calc]}`);
    }
    console.log(decrypt);
    console.log(keyStr);
    console.log(encrypted);

    return encrypted;
}
function encrypting(key,decrypt)
{
    let keyStr = '';
    var k = 0;
    let encrypted ='';
    decrypt.replace(/\s/g, '');
    let str = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    for (let i = 0; i < decrypt.length ; i++)
    {
       
        if (decrypt[i] === ' ') {
            keyStr += " ";
            continue;
        }
        for (let j = 0; j < key.length; j++) {
            if (k % key.length == j) {
                console.log(key[j]);
                //decrypt[i] += key[j];
                keyStr += key[j];
                
            }
        }
    
    k++;
        //console.log(`i- ${i}`)
        //console.log(`i- ${k}`)
    }
    console.log(decrypt);
    console.log(keyStr);
    var calc1 = 0;
    var calc2 = 0;
    for (let i = 0; i < decrypt.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (decrypt[i] == str[j])
                calc1 = j+1;
            if (keyStr[i] == str[j])
                calc2 = j+1;

        }
        var calc = calc1 + calc2;
        calc -= 1;
        calc = Math.abs(calc);
        console.log(`calc1 - ${calc1}   calc2 ${calc2}`);
        calc = calc % 33;
        console.log(`calc - ${calc}`);
        encrypted+= str[calc];
        console.log(`decr[i] - ${decrypt[i]}`);
    }
    console.log(decrypt);
    console.log(keyStr);
    console.log(encrypted);

    return encrypted;
}
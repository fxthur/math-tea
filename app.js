import { tambah, kurang, kali, bagi } from './src/index.js';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Masukkan angka pertama: ', (a) => {
    rl.question('Masukkan angka kedua: ', (b) => {
        console.log(`Hasil penjumlahan: ${tambah(a, b)}`);
        console.log(`Hasil pengurangan: ${kurang(a, b)}`);
        console.log(`Hasil perkalian: ${kali(a, b)}`);
        console.log(`Hasil pembagian: ${bagi(a, b)}`);
        rl.close();
    });
});


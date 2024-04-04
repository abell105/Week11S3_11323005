/* 
   Nama : Abeloisa Chelsea Pardosi 
   NIM : 11323005 
   Kelas : TI1
*/

import React, { useState } from 'react';
import './App.css'; // Import CSS yang telah dibuat

const App = () => {
    const [angka1, setAngka1] = useState('');
    const [angka2, setAngka2] = useState('');
    const [hasil, setHasil] = useState(0);

    const hitung = (operator) => {
        const num1 = parseFloat(angka1);
        const num2 = parseFloat(angka2);
        let result = 0;

        switch (operator) {
            case 'tambah':
                result = num1 + num2;
                break;
            case 'kurang':
                result = num1 - num2;
                break;
            case 'kali':
                result = num1 * num2;
                break;
            case 'bagi':
                result = num1 / num2;
                break;
            default:
                break;
        }

        setHasil(result);
    };

    return (
        <div id="app">
            <h1>Selamat Datang di Kalkulator pintar</h1>

            <div>
                <input 
                    type="number" 
                    placeholder="Masukkan angka pertama"
                    value={angka1}
                    onChange={(e) => setAngka1(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Masukkan angka kedua"
                    value={angka2}
                    onChange={(e) => setAngka2(e.target.value)}
                />
            </div>

            <div>
                <button onClick={() => hitung('tambah')}>+</button>
                <button onClick={() => hitung('kurang')}>-</button>
                <button onClick={() => hitung('kali')}>*</button>
                <button onClick={() => hitung('bagi')}>/</button>
            </div>

            <h2>Hasil: <span>{hasil}</span></h2>
        </div>
    );
};

export default App;

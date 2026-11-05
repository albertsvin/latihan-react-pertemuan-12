import React, { useState } from 'react';

function App() {
    const [teks, setTeks] = useState('');

    return (
        <div>
            <h2>Penambahan dan Pengurangan</h2>
            <div>
                <p> Nama: </p> 
                <input type="text"
                value={teks}
                onChange={(e) => setTeks(e.target.value)}
                placeholder="Ketik sesuatu di sini..."/>
                <p> Email: </p> <input type="text"
                value={teks}
                onChange={(e) => setTeks(e.target.value)}
                placeholder="Ketik sesuatu di sini..."/>
                <p> Alamat: </p> <input type="text"
                value={teks}
                onChange={(e) => setTeks(e.target.value)}
                placeholder="Ketik sesuatu di sini..."/>
                <p> Hasil Inputan: {teks}</p>
            </div>
        </div>
    );
}

export default App;
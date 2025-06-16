import { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('GİRİŞ');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mesaj, setMesaj] = useState('');

  const onSubmitHandler = async (e) => {
  e.preventDefault();

  const endpoint = currentState === 'GİRİŞ' ? '/login' : '/register';

  try {
    const response = await fetch(`http://localhost:5000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      setMesaj(data.message);
      if (endpoint === '/login') {
        localStorage.setItem('token', data.token);
      }
    } else {
      setMesaj(data.message);
    }
  } catch (error) {
    setMesaj('Sunucu hatası');
  }
};


  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl"> {currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>

      <div className="w-full px-3 py-2 flex flex-col gap-4">
        {currentState === 'KAYIT OL' ? (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Ad"
            required
          />
        ) : null}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Şifre"
          required
        />

        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Şifremi Unuttum</p>
          {currentState === 'GİRİŞ' ? (
            <p
              onClick={() => setCurrentState('KAYIT OL')}
              className="cursor-pointer"
            >
              Hesap Oluştur
            </p>
          ) : (
            <p
              onClick={() => setCurrentState('GİRİŞ')}
              className="cursor-pointer"
            >
              Giriş Yap
            </p>
          )}
        </div>

        <button className="w-1/2 m-auto bg-black text-white px-8 py-2 mt-4">
          {currentState === 'GİRİŞ' ? 'GİRİŞ YAP' : 'KAYIT OL'}
        </button>

        {mesaj && <p className="text-center text-red-500">{mesaj}</p>}
      </div>
    </form>
  );
};

export default Login;

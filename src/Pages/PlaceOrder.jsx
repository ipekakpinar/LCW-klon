import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* --------------- Left Side ----------------------- */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={'ADRES'} text2={'BİLGİLERİ'} />
        </div>
        <div className="flex flex-col sm:flex-row  gap-3">
          <input
            type="text"
            placeholder="Ad"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Soyad"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Sokak Adı"
          className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex flex-col sm:flex-row  gap-3">
          <input
            type="text"
            placeholder="İlçe"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Şehir"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row  gap-3">
          <input
            type="text"
            placeholder="Posta Kodu"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Adres Açıklaması"
            className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Telefon Numarası"
          className="border  border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* --------------- Right Side ----------------------- */}

      <div className="mt-8">
        <div className="mt8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={'ÖDEME'} text2={'YÖNTEMİ'} />

  
          <div className="flex items-center gap-3 border p-2 px-3 cursor-default bg-gray-100">
            <p className="min-w-3.5 h-3.5 border rounded-full bg-green-400"></p>
            <p className="text-gray-500 text-sm font-medium mx-4">Kapıda Ödeme</p>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate('/orders')}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              SİPARİŞİ TAMAMLA
            </button>
          </div>
        </div>

        </div>
      </div>
  );
};

export default PlaceOrder;

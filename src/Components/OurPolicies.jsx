import { assets } from '../assets/assets';

const OurPolicies = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div className="">
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Kolay İade ve Değişim</p>
        <p className="text-gray-400">30 gün içinde ücretsiz değişim imkanı</p>
      </div>
      <div className="">
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">İade İmkanı</p>
        <p className="text-gray-400"> 7 gün içerisinde beğenmezseniz iade</p>
      </div>
      <div className="">
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5 " />
        <p className="font-semibold">7/24 Müşteri Temsilcisi</p>
        <p className="text-gray-400">Günün her saati bize ulaşabilirsiniz </p>
      </div>
    </div>
  );
};

export default OurPolicies;

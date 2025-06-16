import { assets } from '../assets/assets';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="f">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32 " />
          
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">KURUMSAL</p>

          <ul className="flex flex-col flex-1 text-gray-600 cursor-pointer">
            <li onClick={scrollToTop} className="mb-2">
              Ana Sayfa
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Hakkımızda
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Gönderim
            </li>
            <li onClick={scrollToTop} className="mb-2">
              Gizlilik Politikası
            </li>
          </ul>
        </div>

        <div className="">
          <p className="text-xl font-medium mb-5">İLETİŞİM</p>
          <ul className="flex flex-col flex-1 text-gray-600">
            <li className="mb-2">444 9 924</li>
            <li className="mb-2">musteri@lcwaikiki.com </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2015 LC WAIKIKI. Her Hakkı Saklıdır.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="to-current text-2xl pt-10 border-t">
        <Title text1={'BİZE'} text2={'ULAŞIN'} />
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-semibold text-altext-gray-600">Adres</p>
          <p className="text-gray-500">
            15 Temmuz Mahallesi Gülbahar Cad. No:41 
            <br />
            Bağcılar, 34212 İstanbul / TÜRKİYE
          </p>

          <p className="text-gray-800">
            Tel: <span className="text-gray-500">+90 212 657 55 55</span>
          </p>
          <p className=" text-gray-800">
            Email: <span className="text-gray-500">musteri@lcwaikiki.com</span>
          </p>

        

          
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default Contact;

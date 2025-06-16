import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 p-6 border border-gray-300 rounded-lg">
      

      <img src={assets.main_img} alt="" className="w-full" />
    </div>
  );
};

export default Hero;

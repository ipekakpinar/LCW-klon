import { assets } from '../assets/assets';
import NewsLetterBox from '../Components/NewsLetterBox';
import Title from '../Components/Title';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title  text2={'HAKKIMIZDA'} />
      </div>

      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px] "
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            1988 yılında Fransız asıllı üç ortak tarafından kurulan LC Waikiki,
             toptan satış amaçlı bir marka olarak ticari hayatına başlamıştır. 
             Paris’te kurulup tescil edilen LC Waikiki, ilk etapta t-shirt ve sweatshirt tasarımları ile dikkat çekmiştir. 
             Zaman içerisinde markanın kurucu iki ortağının ayrılmasıyla birlikte LC Waikiki, 
             tek hissedar olarak George Amouyal’a geçmiştir. LC Waikiki’nin üreticisi ve aynı zamanda 
             Türkiye lisansörü olan Taha grubuna bağlı Tema Tekstil ise 1997 yılında LC Waikiki markasının tüm dünyadaki haklarını satın almıştır.
          </p>
          <p>
            Markanın tüm haklarının satın alınmasının ardından Taha Grubuna ait Tema Tekstil’in ismi 
            "LC Waikiki Mağazacılık Hizmetleri" olarak değiştirilmiştir. Gruba ait yüzde 
            7 hisse ise LC Waikiki’nin tüm isim haklarının satın alındığı George Amouyal’a devredilmiştir. 
            Marka ismi devrinden sonra Fransız asıllı George Amouyal, her ne kadar LC Waikiki yönetiminde aktif olarak 
            görev almasa da halen şirketimizin yaklaşık yüzde 7 hissesini elinde bulundurmaktadır.
          </p>
          <b className="text-gray-800">Misyonumuz</b>
          <p>
            {' '}
            LC Waikiki olarak Avrupa'nın en başarılı üç giyim markasından biri olma vizyonumuz 
            doğrultusunda hareket ediyoruz. "İyi Giyinmek Herkesin Hakkı" misyonumuz 
            ile yurt içinde ve yurt dışında kendi mağazalarımız, yasal mecburiyetlerin olduğu ülkelerde 
            ise franchise ortaklarımız ile büyümeyi sürdürüyoruz. 2024 yıl sonu itibariyle 144.7 milyar TL net satış, 
            yaklaşık 55 bin istihdam, 1.2 milyar USD ihracat ve 1300'den fazla mağaza sayısına ulaşmanın gururunu yaşıyoruz.
          </p>
        </div>
      </div>

      <div className="py-4 text-2xl">
        <Title text1={'NEDEN'} text2={'LC WAİKİKİ'} />
      </div>

      <div className="flex flex-row md:flex-col mb-20 text-sm gap-4">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>LC Waikiki Kalite Politikası</b>
          <p className="text-gray-600">
            “İyi Giyinmek Herkesin Hakkı” felsefesiyle müşterinin tarzına ve bütçesine uygun, müşteri ihtiyaç ve beklentileri doğrultusunda ürünler tasarlayan, mevzuata ve ürün şartlarına uygun üretim yaptıran ve ürünleri müşterilerinin beğenisine sunarak satan, müşteri memnuniyetini her zaman odağında tutarak kendini ve paydaşlarını sürekli geliştiren, süreçlerini belirlediği hedefler ve prensipler doğrultusunda veri bilimi ve robotik proses otomasyon araçlarını kullanarak dijitalleştirerek iyileştiren, risk bakış açısıyla hep daha iyisini ve doğrusunu yapmayı hedefleyen, sektöründe lider ve örnek bir firma olmak.{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>LC Waikiki Ekoloji Politikası</b>
          <p className="text-gray-600">
            
            LC Waikiki olarak, dünya kaynaklarının bir sonraki kuşaklara doğal olarak aktarımını sağlayacak şekilde üretim yapmayı ve ürünlerin sağlıklı koşullarda ve tüketicilerin insan sağlığına uygun bir şekilde üretilmesi için veriye dayalı, bilgi aktarımını esas alan, seviyeli şeffaflığı sağlamayı teyit ediyoruz.

            Bu kapsamda taahhütlerimiz;

            LC Waikiki Çevre ve Ekolojik ürün politikamızı tüm tedarikçilerimiz, alt tedarikçilerimiz, çalışanlarımız ve müşterilerimizle paylaşmak, yaptığımız çalışma ve bilgilendirmeler ile toplum farkındalığına katkı sağlamak,
            LC Waikiki değerlerini benimsemiş, şeffaf, ekolojik, çevre ve insan sağlığı kriterlerimize uyan tedarikçi ve üreticilerimizle yeni değer zinciri oluşturmak,
            Yasalara uyarken aynı zamanda kendi çalışmalarımız ve standartlarımızca da ekolojiyi ve ürünlerimizi olumsuz etkileyeceğini belirlediğimiz konularda tedarikçilerimizin geliştirilebilir alanlarını tespit etmek ve sürekli iyileştirmenin sağlanmasına teşvik etmek,
            Tüketicilerimize sunduğumuz ürünlerin insan sağlığına uygunluğu için gerekli testleri bilimsel risk analizleri çerçevesinde belirlenmiş örnekleme test sıklıkları ile yapmak ve uygunsuz (insan sağlığı için risk içeren) ürünleri tüketicilere sunmamak
            Kullandığımız kaynakların azaltılması yönünde iyileştirmeler yapmak, kullanılan kaynakların yerine yenisini katmak üzere tasarlanmış yeni iş modelleri oluşturmak..{' '}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Sosyal Yardımlar Politikası</b>
          <p className="text-gray-600">
            Şirketimiz sosyal sorumluluk politikası gereği başta yetimler olmak üzere ihtiyaç sahiplerini giydirmeyi ve onların eğitim hayatlarına katkı sağlamayı ana hedeflerinden bir olarak belirlemiştir. Bu hedef doğrultusunda her yıl net karının yüzde 15'ini sosyal yardımlara ayırmaya ve bu yardımları da başta Valilik ve Kaymakamlıklara bağlı Sosyal Yardımlaşma Vakıfları ve Kızılay olmak üzere resmi ve bakanlıkça onaylı vakıflar aracılığı ile yapmaya karar vermiştir.

            Yardımlarımızın detayı:

            2008’de 4.129 öğrenciye eğitim yardım desteği, 911.867 adet giyim yardımı
            2009’da 6.162 öğrenciye eğitim yardım desteği, 2.244.231 adet giyim yardımı
            2010’da 9.155 öğrenciye eğitim yardım desteği, 2.622.252 adet giyim yardımı
            2011’de 8.123 öğrenciye eğitim yardım desteği, 3.796.466 adet giyim yardımı
            2012’de 7.224 öğrenciye eğitim yardım desteği, 2.787.931 adet giyim yardımı
            2013’te 8.180 öğrenciye eğitim yardım desteği, 4.528.870 adet giyim yardımı
            2014’te 9.335 öğrenciye eğitim yardım desteği, 5.411.042 adet giyim yardımı
            2015’te 10.177 öğrenciye eğitim yardım desteği, 5.709.948 adet giyim yardımı
            2016’da 11.701 öğrenciye eğitim yardım desteği, 5.882.431 adet giyim yardımı
            2017’de 13.691 öğrenciye eğitim yardım desteği, 8.783.732 adet giyim yardımı
            2018’de 16.992 öğrenciye eğitim yardım desteği, 13.857.576 adet giyim yardımı
            2019’da 15.867 öğrenciye eğitim yardım desteği, 4.290.180 adet giyim yardımı
            2020’de 13.639 öğrenciye eğitim yardım desteği, 12.332.946 adet giyim yardımı
            2021’de 14.196 öğrenciye eğitim yardım desteği, 12.282.549 adet giyim yardımı
            2022’de 15.020 öğrenciye eğitim yardım desteği, 16.079.724 adet giyim yardımı
            2023’de 14.433 öğrenciye eğitim yardım desteği, 18.774.055 adet giyim yardımı yapılmıştır.{' '}
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;

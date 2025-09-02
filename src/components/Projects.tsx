import React, { useState } from "react";

type ProjectItem = {
  title: string;
  link: string | null;
  description: string;
  status?: string;
  approach?: string;
  platforms?: string[];
  image?: string; // Yeni alan eklendi
};

type ProjectSection = {
  category: string;
  items: ProjectItem[];
};

const projects: ProjectSection[] = [
  {
    category: "Web Uygulamaları",
    items: [
      {
        title: "Truth or Dare | Vibe Coding",
        link: "https://truth-or-dare-delta.vercel.app/",
        description:
          "Eğlenceyi ve anlık kodlama ilhamını (vibe coding) seven biri olarak tasarladığım, modern ve interaktif bir Truth or Dare oyunu. Mükemmel bir kullanıcı deneyimi ve eğlenceli anlar için tasarlandı.",
      },
      {
        title: "Pure Glowy | Landing Page",
        link: "https://pureglowy.app",
        description:
          "Tutkulu bir girişimim olan Pure Glowy'nin resmi ana sayfası. Sürdürülebilir ve etik güzellik anlayışını temiz, estetik ve kullanıcı dostu bir arayüzle dünyaya duyuruyor.",
      },
      {
        title: "Star Wars Quiz | Vibe Coding",
        link: "https://darkside-sw.netlify.app/",
        description:
          "Karanlık Taraf'ın gücüne inananlar için yapılmış eğlenceli bir Star Wars bilgi yarışması. Yine bir vibe coding projesi olarak, keyifle kodlanmış interaktif bir quiz deneyimi.",
      },
      {
        title: "LOTR Quiz | Vibe Coding",
        link: "https://lotrmiddleearth.vercel.app/",
        description:
          "Orta Dünya'nın sadık bir hayranı olarak, diğer Tolkien severleri test etmek için tasarladığım bir başka eğlenceli quiz uygulaması. Tema ve kullanıcı deneyimiyle sizi Shire'a götürecek.",
      },
      {
        title: "Tune Rush (90's Version) | Forked Project",
        link: "https://tune-rush-90-s-version.vercel.app/",
        description:
          "Orijinal Tune Rush projesinden ilham alarak, 90'ların unutulmaz şarkılarını içerecek şekilde uyarladığım bir müzik tahmin oyunu.",
      },
    ],
  },
  {
    category: "Mobil Uygulamalar",
    items: [
      {
        title: "Armony App (Android)",
        link: null,
        description:
          "Müzisyenler, söz yazarları, prodüktörler ve müzik tutkunları için tasarlanmış bir iş birliği platformu.",
        status: "⌛ Geliştirme Aşamasında",
      },
      {
        title: "Pure Glowy App (Android & iOS)",
        link: null,
        description:
          "Sürdürülebilir ve bilinçli güzellik topluluğunu bir araya getirmeyi amaçlayan, etik güzellik platformum Pure Glowy'nin mobil uygulaması. Tutkumun bir ürünü.",
        status: "⌛ Geliştirme Aşamasında",
      },
    ],
  },
  {
    category: "YouTube & Topluluk Katkıları",
    items: [
      {
        title: "Code Review Serisi",
        link: "https://www.youtube.com/results?search_query=kod+review+serisi",
        description:
          "Junior yazılımcıların gerçek dünyadaki projelerini ve kodlarını, sektörden senior yazılımcılarla birlikte incelediğimiz bir yayın serisi. Amaç, hem kodun iyileştirilebileceği noktaları göstermek hem de junior'lar ile senior'lar arasında değerli bir diyalog köprüsü kurmak.",
        approach:
          "Kod review'larını yaparken sadece syntax hatalarına değil, clean code principles, architecture, scalability ve best practices konularına da odaklanıyoruz.",
        image: "../src/assets/code-review.jpg", // require yerine public yoluyla erişim
      },
    ],
  },
  {
    category: "Podcast & İçerik Üretimi",
    items: [
      {
        title: "Yapay Zeka ve...",
        link: "https://www.youtube.com/results?search_query=Yapay+Zeka+ve",
        description:
          "Yapay zekanın sadece kod ve algoritmalardan ibaret olmadığını, insanlığın geleceğini şekillendiren bir güç olduğunu araştırdığım bir podcast serisi. Yapay zekanın eğitim, sağlık, kimlik, ölümsüzlük, hukuk, spiritualite ve çocuklarımızın geleceği gibi derin konularla kesişimini inceliyor, etik sınırlarını ve olası etkilerini sorguluyorum.",
        approach:
          "Her bölümde, bu devrimsel teknolojinin hayatımızın farklı bir alanına nasıl nüfuz ettiğini ve bizi nasıl dönüştüreceğini anlamaya çalışıyorum.",
        platforms: ["Spotify", "Apple Podcasts", "YouTube"],
      },
    ],
  },
  {
    category: "Blog Yazıları",
    items: [
      {
        title: "⏰gitFlow Saati👌🏻",
        link: "https://medium.com/bursa-bili%C5%9Fim-toplulu%C4%9Fu/gitflow-saati-05981e3f422e",
        description:
          "GitFlow, yazılım geliştirme süreçlerini düzenlemek için kullanılan, ana (master/develop) ve destekleyici (feature/release/hotfix) dallarıyla yapılandırılmış bir iş akışı modelidir.",
        approach:
          "GitFlow yaklaşımı, yazılım geliştirme süreçlerini düzenli, kontrollü ve takip edilebilir kılmak için yapılandırılmış bir dallanma stratejisi sunar.",
        platforms: ["Bursa Bilişim Topluluğu | Medium"],
      },
      {
        title: "Kapışma: FetchApi ⚔️ useSWR",
        link: "https://medium.com/bursa-bili%C5%9Fim-toplulu%C4%9Fu/kap%C4%B1%C5%9Fma-fetchapi-%EF%B8%8F-useswr-c063b092ab34",
        description:
          "Next.js'te veri çekme işlemlerinde useSWR ile Fetch API karşılaştırması: hangisi daha temiz, esnek ve sürdürülebilir?",
        approach:
          "Kod karmaşıklığını azaltan, otomatik önbellekleme ve hata yönetimi sunan useSWR yaklaşımı, modern React uygulamalarında veri getirme süreçlerini optimize eder.",
        platforms: ["Bursa Bilişim Topluluğu | Medium"],
      },
      {
        title: "🫣 React Hook Form ile Form Validasyonu Nasıl Yapılır🧞‍♀️",
        link: "https://medium.com/bursa-bili%C5%9Fim-toplulu%C4%9Fu/react-hook-form-ile-form-validasyonu-nas%C4%B1l-yap%C4%B1l%C4%B1r-%EF%B8%8F-dc1d43ee2e31",
        description:
          "React-Hook Form ile telefon ve e-posta validasyonu: Next.js'te nasıl daha az kodla daha etkili form doğrulama yapılır?",
        approach:
          "React-Hook Form'un useForm yapısı, minimum render ve basit validasyon kurallarıyla kullanıcı deneyimini optimize ederken geliştiriciye sürdürülebilir bir kod sunar.",
        platforms: ["Bursa Bilişim Topluluğu | Medium"],
      },
    ],
  },
];

const categoryTabs = [
  { key: "Web Uygulamaları", label: "Web Uygulamaları" },
  { key: "Mobil Uygulamalar", label: "Mobil Uygulamalar" },
  { key: "YouTube & Topluluk Katkıları", label: "YouTube & Topluluk" },
  { key: "Podcast & İçerik Üretimi", label: "Podcast" },
  {
    key: "Blog Yazıları",
    label: (
      <span className="block text-xs md:text-sm leading-tight text-center">
        Blog Yazıları
      </span>
    ),
  },
];

const mainColor = "#a98abbff"; // eski mor (pastel/earth ton)
const accentPink = "#ffe1ec76"; // eski pembe (pastel/earth ton)
const accentBlue = "#c7e5ff96"; // eski mavi (pastel/earth ton)
const lightBlue = "#c6aed49b"; // eski lightBlue (pastel/earth ton)
const bgColor = "#fff"; // beyaz arka plan

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState(categoryTabs[0].key);
  const activeSection = projects.find(
    (section) => section.category === activeTab
  );

  return (
    <section
      className="py-2 px-4 max-w-4xl mx-auto"
      style={{ background: bgColor }}
    >
      <div
        className="rounded-2xl p-10"
        style={{
          background: bgColor,
          boxShadow: `0 4px 32px 0 ${lightBlue}22`,
        }}
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-2 tracking-tight"
          style={{ color: mainColor }}
        >
          <span role="img" aria-label="rocket">
            🚀
          </span>{" "}
          Projelerim
        </h2>
        <p
          className="mb-5 text-base md:text-md font-base leading-relaxed"
          style={{ color: mainColor }}
        >
          Yolculuğum boyunca, hem eğlenmek hem de öğrenmek için bir dizi proje
          üzerinde çalıştım. İşte beni ve becerilerimi yansıtan bazı
          çalışmalarım:
        </p>
        <div
          className="flex flex-nowrap gap-2 mb-10 justify-center overflow-x-auto scrollbar-thin"
          style={{ scrollbarColor: `${lightBlue} ${bgColor}` }}
        >
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold transition-colors duration-200 border-2 text-sm md:text-sm flex-shrink-0`}
              style={
                activeTab === tab.key
                  ? {
                      background: mainColor,
                      borderColor: mainColor,
                      color: "#fff",
                    }
                  : {
                      background: accentPink,
                      borderColor: mainColor,
                      color: mainColor,
                    }
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeSection && (
          <div className="mb-4 animate-fade-in">
            {/* Kategori başlığı ve ikonları kaldırıldı */}
            {activeSection.category === "Web Uygulamaları" ||
            activeSection.category === "Mobil Uygulamalar" ||
            activeSection.category === "Makale & Blog Yazıları" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeSection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl shadow p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border border-transparent"
                    style={{
                      background: accentPink,
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                  >
                    <h4
                      className="text-lg md:text-xl font-bold mb-1 leading-snug"
                      style={{ color: mainColor }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: mainColor }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                      {item.status && (
                        <span
                          className="ml-2 text-xs font-medium"
                          style={{ color: mainColor }}
                        >
                          {item.status}
                        </span>
                      )}
                    </h4>
                    <p
                      className="text-sm md:text-base font-light mb-1 leading-relaxed"
                      style={{ color: mainColor }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : activeSection.category === "YouTube & Topluluk Katkıları" ? (
              <div className="w-full">
                {activeSection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl shadow p-6 flex flex-row h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border border-transparent items-start mb-6"
                    style={{
                      background: accentPink,
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                  >
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-48 h-48 object-cover rounded-md mr-4 mt-1 flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-lg md:text-xl font-bold mb-1 leading-snug"
                        style={{ color: mainColor }}
                      >
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                            style={{ color: mainColor }}
                          >
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                        {item.status && (
                          <span
                            className="ml-2 text-xs font-medium"
                            style={{ color: accentPink }}
                          >
                            {item.status}
                          </span>
                        )}
                      </h4>
                      <p
                        className="text-sm md:text-base font-light mb-1 leading-relaxed"
                        style={{ color: mainColor }}
                      >
                        {item.description}
                      </p>
                      {item.approach && (
                        <p
                          className="text-xs md:text-sm mt-1 font-normal"
                          style={{ color: mainColor }}
                        >
                          Yaklaşım: {item.approach}
                        </p>
                      )}
                      {item.platforms && (
                        <p
                          className="text-xs md:text-sm mt-1 font-normal"
                          style={{ color: mainColor }}
                        >
                          Platformlar: {item.platforms.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : activeSection.category === "Podcast & İçerik Üretimi" ? (
              <div className="w-full">
                {activeSection.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl shadow p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border border-transparent mb-6"
                    style={{
                      background: accentPink,
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                  >
                    <h4
                      className="text-lg md:text-xl font-bold mb-1 leading-snug"
                      style={{ color: mainColor }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: mainColor }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                      {item.status && (
                        <span
                          className="ml-2 text-xs font-medium"
                          style={{ color: accentPink }}
                        >
                          {item.status}
                        </span>
                      )}
                    </h4>
                    <p
                      className="text-sm md:text-base font-light mb-1 leading-relaxed"
                      style={{ color: mainColor }}
                    >
                      {item.description}
                    </p>
                    {item.approach && (
                      <p
                        className="text-xs md:text-sm mt-1 font-normal"
                        style={{ color: mainColor }}
                      >
                        Yaklaşım: {item.approach}
                      </p>
                    )}
                    {item.platforms && (
                      <p
                        className="text-xs md:text-sm mt-1 font-normal"
                        style={{ color: mainColor }}
                      >
                        Platformlar: {item.platforms.join(", ")}
                      </p>
                    )}
                    {/* Spotify embed ve CTA */}
                    <div className="mt-4">
                      <iframe
                        style={{ borderRadius: "12px" }}
                        src="https://open.spotify.com/embed/episode/5N7CA9ULervQCfOXueBl7h?utm_source=generator"
                        width="100%"
                        height="200"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Podcast Bölümü"
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-6">
                {activeSection.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl shadow p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer border border-transparent"
                    style={{
                      background: accentPink,
                      color: mainColor,
                      borderColor: mainColor,
                    }}
                  >
                    <h4
                      className="text-lg md:text-xl font-bold mb-1 leading-snug"
                      style={{ color: mainColor }}
                    >
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: mainColor }}
                        >
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </h4>
                    <p
                      className="text-sm md:text-base font-light mb-1 leading-relaxed"
                      style={{ color: mainColor }}
                    >
                      {item.description}
                    </p>
                    {item.approach && (
                      <p
                        className="text-xs md:text-sm mt-1 font-normal"
                        style={{ color: mainColor }}
                      >
                        Yaklaşım: {item.approach}
                      </p>
                    )}
                    {item.platforms && (
                      <p
                        className="text-xs md:text-sm mt-1 font-normal"
                        style={{ color: mainColor }}
                      >
                        Platformlar: {item.platforms.join(", ")}
                      </p>
                    )}
                    {item.image && ( // Görselin gösterileceği yer
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg shadow-md w-full"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

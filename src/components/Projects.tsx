import React, { useState } from "react";
import { earthPastel } from "../theme/palette";
import codeReviewImg from "../assets/code-review.jpg";

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
        link: "https://www.youtube.com/playlist?list=PLvsZABeEsC5AWRrJzgHRIa-Chs75gni56",
        description:
          "Junior yazılımcıların gerçek dünyadaki projelerini ve kodlarını, sektörden senior yazılımcılarla birlikte incelediğimiz bir yayın serisi. Amaç, hem kodun iyileştirilebileceği noktaları göstermek hem de junior'lar ile senior'lar arasında değerli bir diyalog köprüsü kurmak.",
        approach:
          "Kod review'larını yaparken sadece syntax hatalarına değil, clean code principles, architecture, scalability ve best practices konularına da odaklanıyoruz.",
        image: codeReviewImg,
      },
    ],
  },
  {
    category: "Podcast & İçerik Üretimi",
    items: [
      {
        title: "Yapay Zeka ve...",
        link: "https://www.youtube.com/watch?v=m_7p3eLbnWY&list=PLvsZABeEsC5B8CdisgryovtTomSWlKC2X",
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

// palette imported from ../theme/palette

const Projects: React.FC<{ onBack?: () => void }> = ({}) => {
  const [activeTab, setActiveTab] = useState(categoryTabs[0].key);
  const [modalImg, setModalImg] = useState<string | null>(null);
  const activeSection = projects.find(
    (section) => section.category === activeTab
  );

  return (
    <section className="py-2 px-4 max-w-4xl mx-auto">
      <div
        style={{
          borderTop: `2px solid ${earthPastel.border}`,
          width: "100%",
          color: earthPastel.text,
        }}
      >
        <h2
          className="text-3xl font-extrabold mt-6 mb-6 flex items-center justify-center gap-2 tracking-tight"
          style={{ color: earthPastel.text2 }}
        >
          🚀 Projelerim
        </h2>
        <p
          className="mb-5 text-base md:text-md font-base leading-relaxed"
          style={{ color: earthPastel.text2 }}
        >
          Yolculuğum boyunca, hem eğlenmek hem de öğrenmek için bir dizi proje
          üzerinde çalıştım. İşte beni ve becerilerimi yansıtan bazı
          çalışmalarım:
        </p>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-semibold transition-colors duration-200 border-2 text-sm md:text-sm`}
              style={
                activeTab === tab.key
                  ? {
                      background: earthPastel.pink,
                      borderColor: earthPastel.pink,
                      color: "#fff",
                    }
                  : {
                      borderColor: earthPastel.pink,
                      color: earthPastel.text2,
                    }
              }
              onMouseEnter={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.background = earthPastel.pink;
                  e.currentTarget.style.borderColor = earthPastel.pink;
                  e.currentTarget.style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== tab.key) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = earthPastel.pink;
                  e.currentTarget.style.color =
                    earthPastel.text2 as unknown as string;
                }
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {activeSection && (
          <div
            className="mb-4 animate-fade-in gap-6"
            style={{
              animation: "fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <style>{`
              @keyframes fadeInUp {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <div className="w-full grid gap-4">
              {activeSection.items.map((item, idx) => {
                // Code Review Serisi için özel layout
                if (item.title === "Code Review Serisi" && item.image) {
                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-6 flex md:flex-row w-full transition-all duration-300 hover:-translate-y-1 cursor-pointer border hover:shadow-lg"
                      style={{
                        background: earthPastel.bg,
                        color: earthPastel.text,
                        borderColor: earthPastel.border,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = earthPastel.hover;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "";
                      }}
                      onClick={() => {
                        if (item.link) {
                          window.open(
                            item.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      role={item.link ? "link" : undefined}
                      tabIndex={item.link ? 0 : -1}
                      onKeyDown={(e) => {
                        if (item.link && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          window.open(
                            item.link!,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <div className="md:w-1/3 w-full flex-shrink-0 flex items-center justify-center mb-4 md:mb-0 md:mr-6 hidden md:flex">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg w-full max-w-[180px] md:max-w-[400px] h-auto object-cover cursor-zoom-in border"
                          style={{ border: `1.5px solid ${earthPastel.pink}` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImg(item.image!);
                          }}
                        />
                      </div>
                      <div className="md:w-2/3 w-full flex flex-col justify-center">
                        <h4
                          className="text-lg md:text-xl font-bold mb-1 leading-snug"
                          style={{ color: earthPastel.text2 }}
                        >
                          {item.title}
                          {item.status && (
                            <span
                              className="ml-2 text-md font-bold px-2 py-1 rounded-full"
                              style={{
                                color: earthPastel.pink,
                                background: `${earthPastel.pink}20`, // %20 opacity
                              }}
                            >
                              {item.status}
                            </span>
                          )}
                        </h4>
                        <p
                          className="text-sm md:text-base font-light mb-1 leading-relaxed"
                          style={{ color: earthPastel.text2 }}
                        >
                          {item.description}
                        </p>
                        {item.approach && (
                          <p
                            className="text-xs md:text-sm mt-1 font-bold"
                            style={{ color: earthPastel.text2 }}
                          >
                            Yaklaşım: {item.approach}
                          </p>
                        )}
                        {item.platforms && (
                          <p
                            className="text-xs md:text-sm mt-1 font-bold"
                            style={{ color: earthPastel.text2 }}
                          >
                            Platformlar: {item.platforms.join(", ")}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                }
                // Podcast kartı için embed
                if (item.title === "Yapay Zeka ve...") {
                  return (
                    <div
                      key={idx}
                      className="rounded-xl p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer border"
                      style={{
                        color: earthPastel.text,
                        borderColor: earthPastel.border,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = earthPastel.hover)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "")
                      }
                      onClick={() => {
                        if (item.link) {
                          window.open(
                            item.link,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                      role={item.link ? "link" : undefined}
                      tabIndex={item.link ? 0 : -1}
                      onKeyDown={(e) => {
                        if (item.link && (e.key === "Enter" || e.key === " ")) {
                          e.preventDefault();
                          window.open(
                            item.link!,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      }}
                    >
                      <h4
                        className="text-lg md:text-xl font-bold mb-1 leading-snug"
                        style={{ color: earthPastel.text2 }}
                      >
                        {item.title}
                        {item.status && (
                          <span
                            className="ml-2 text-md font-bold"
                            style={{ color: earthPastel.pink }}
                          >
                            {item.status}
                          </span>
                        )}
                      </h4>
                      <p
                        className="text-sm md:text-base font-light mb-1 leading-relaxed"
                        style={{ color: earthPastel.text2 }}
                      >
                        {item.description}
                      </p>
                      {item.approach && (
                        <p
                          className="text-xs md:text-sm mt-1 font-bold"
                          style={{ color: earthPastel.text2 }}
                        >
                          Yaklaşım: {item.approach}
                        </p>
                      )}
                      {item.platforms && (
                        <p
                          className="text-xs md:text-sm mt-1 font-bold"
                          style={{ color: earthPastel.text2 }}
                        >
                          Platformlar: {item.platforms.join(", ")}
                        </p>
                      )}
                      {/* Spotify embed - hide on sm/md/mobile */}
                      <div className="mt-4 hidden lg:block">
                        <iframe
                          data-testid="embed-iframe"
                          style={{ borderRadius: "12px" }}
                          src="https://open.spotify.com/embed/episode/5N7CA9ULervQCfOXueBl7h?utm_source=generator&theme=0"
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen={true}
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                        ></iframe>
                      </div>
                    </div>
                  );
                }
                // Diğer kartlar
                return (
                  <div
                    key={idx}
                    className="rounded-xl p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer border"
                    style={{
                      color: earthPastel.text,
                      borderColor: earthPastel.border,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = earthPastel.hover;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "";
                    }}
                    onClick={() => {
                      if (item.link) {
                        window.open(item.link, "_blank", "noopener,noreferrer");
                      }
                    }}
                    role={item.link ? "link" : undefined}
                    tabIndex={item.link ? 0 : -1}
                    onKeyDown={(e) => {
                      if (item.link && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        window.open(
                          item.link!,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    <h4
                      className="text-lg md:text-xl font-bold mb-1 leading-snug"
                      style={{ color: earthPastel.text2 }}
                    >
                      {item.title}
                      {item.status && (
                        <span
                          className="ml-2 text-xs font-medium"
                          style={{ color: earthPastel.text2 }}
                        >
                          {item.status}
                        </span>
                      )}
                    </h4>
                    <p
                      className="text-sm md:text-base font-light mb-1 leading-relaxed"
                      style={{ color: earthPastel.text2 }}
                    >
                      {item.description}
                    </p>
                    {item.approach && (
                      <p
                        className="text-xs md:text-sm mt-1 font-bold"
                        style={{ color: earthPastel.text2 }}
                      >
                        Yaklaşım: {item.approach}
                      </p>
                    )}
                    {item.platforms && (
                      <p
                        className="text-xs md:text-sm mt-1 font-bold"
                        style={{ color: earthPastel.text2 }}
                      >
                        Platformlar: {item.platforms.join(", ")}
                      </p>
                    )}
                    {item.image && (
                      <div className="mt-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-lg w-full h-full object-cover"
                          style={{ border: `1.5px solid ${earthPastel.pink}` }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalImg(item.image!);
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Modal for image zoom */}
            {modalImg && (
              <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                onClick={() => setModalImg(null)}
                style={{ cursor: "zoom-out" }}
              >
                <img
                  src={modalImg}
                  alt="Büyük Fotoğraf"
                  className="max-w-full max-h-[90vh] rounded-2xl border-4 border-white"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

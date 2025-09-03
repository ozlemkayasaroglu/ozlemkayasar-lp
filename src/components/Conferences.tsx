import React, { useState } from "react";
import { getPalette } from "../theme/palette";
import nitelik1 from "../assets/nitelik-noktasi-1.jpeg";
import nitelik2 from "../assets/nitelik-noktasi-2.jpeg";
import react1 from "../assets/react-konf-1.jpeg";
import react2 from "../assets/react-konf-2.jpeg";

// palette imported from ../theme/palette

// Konferans verisi eklendi
const conferences = [
  {
    title: "Nitelik Noktası: Dijital Girişimcilik ve Yazılım Ekosistemi",
    type: "Panelist",
    link: "https://www.youtube.com/watch?v=G2An1Y9PcuI&t=1s",
    role: "Yapay Zeka İçerik Üreticisi",
    topic:
      "Yapay zekanın içerik üretimi ve medya sektörüne etkileri üzerine konuştuk. Özellikle AI ile çalışmanın etik sınırları, orijinallik ve telif hakları konularında görüşlerimi paylaşarakdinleyicilerle tartıştım.",
    date: "2025",
    location: "Bilkent Teknokent, Ankara",
    images: [nitelik1, nitelik2],
  },
  {
    title: "React Konf (Bursa Bilişim Topluluğu)",
    type: "Konuşmacı",
    link: "https://www.instagram.com/reel/C9sHogStHhc/",
    role: "Konuşmacı",
    topic:
      '"State Machine" başlıklı bir sunum gerçekleştirdim. Karmaşık bileşen durumlarını yönetmek için state machine konseptinin nasıl kullanılabileceğini, pratik örneklerle anlattım.',
    date: "2024",
    location: "Bursa",
    images: [react1, react2],
  },
];

const Conferences: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const earthPastel = getPalette();
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section
      className="py-2 px-4 max-w-4xl mx-auto"
   
    >
      <div style={{ borderTop: `2px solid ${earthPastel.border}`, width: "100%", color: earthPastel.text }}>
        <h2
          className="text-3xl font-extrabold mt-6 mb-6 flex items-center justify-center gap-2 tracking-tight"
          style={{ color: earthPastel.text2 }}
        >
          
            🚀 Konferans & Paneller
          
        </h2>
        <p
          className="mb-5 text-base md:text-md font-base leading-relaxed"
          style={{ color: earthPastel.text2 }}
        >
          Teknoloji ve girişimcilik ekosistemine olan tutkum, beni sadece kod
          yazmanın ötesine, bu alanlarda deneyimlerimi paylaşmaya itiyor.
        </p>
        <style>{`
          .conf-card:hover { background: ${earthPastel.pink}; }
        `}</style>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((event, idx) => (
            <div
              key={idx}
              className="conf-card rounded-xl p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer border"
              style={{
                color: earthPastel.text,
                borderColor: earthPastel.border,
              }}
            >
              <h4
                className="text-lg md:text-xl font-bold mb-1 leading-snug"
                style={{ color: earthPastel.text2 }}
              >
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: earthPastel.text2 }}
                  >
                    {event.title}
                  </a>
                ) : (
                  event.title
                )}
              </h4>
              <p
                className="text-sm md:text-base font-light mb-1 leading-relaxed"
                style={{ color: earthPastel.text2 }}
              >
                <span className="font-semibold">Rol:</span> {event.type} /{" "}
                {event.role}
              </p>
              <p
                className="text-sm md:text-base font-light mb-1 leading-relaxed"
                style={{ color: earthPastel.text2 }}
              >
                <span className="font-semibold">Konu:</span> {event.topic}
              </p>
              <p
                className="text-sm md:text-base font-light mb-1 leading-relaxed"
                style={{ color: earthPastel.text2 }}
              >
                <span className="font-semibold">Tarih:</span> {event.date}
              </p>
              <p
                className="text-sm md:text-base font-light leading-relaxed"
                style={{ color: earthPastel.text2 }}
              >
                <span className="font-semibold">Yer:</span> {event.location}
              </p>
              {event.images && (
                <div className="flex gap-4 mt-4 items-center justify-center">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Konferans görseli"
                      className="w-32 h-32 object-cover rounded-lg border cursor-zoom-in transition-transform duration-200 hover:scale-105"
                      style={{ borderColor: earthPastel.pink }}
                      onClick={() => setModalImg(img)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
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
    </section>
  );
};

export default Conferences;

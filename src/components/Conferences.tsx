import React, { useState } from "react";
import nitelik1 from "../assets/nitelik-noktasi-1.jpeg";
import nitelik2 from "../assets/nitelik-noktasi-2.jpeg";
import react1 from "../assets/react-konf-1.jpeg";
import react2 from "../assets/react-konf-2.jpeg";

const earthPastel = {
  bg: "#ffffff51", // pastel açık toprak
  border: "#918377ff", // pastel toprak
  text: "#7d6e57",
  text2: "#5b5449ff", // açık pastel koyu toprak
  accent: "#8cc887ff", // pastel yeşil
  highlight: "#e7cba9", // pastel sarımsı toprak
  leaf: "#a3c9a8", // pastel yaprak yeşili
  hover: "#98d1a052",
};

// Konferans verisi eklendi
const conferences = [
  {
    title: "Nitelik Noktası: Dijital Girişimcilik ve Yazılım Ekosistemi",
    type: "Panelist",
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
    role: "Konuşmacı",
    topic:
      '"State Machine" başlıklı bir sunum gerçekleştirdim. Karmaşık bileşen durumlarını yönetmek için state machine konseptinin nasıl kullanılabileceğini, pratik örneklerle anlattım.',
    date: "2024",
    location: "Bursa",
    images: [react1, react2],
  },
];

const Conferences: React.FC<{ onBack?: () => void }> = ({ onBack }) => {
  const [modalImg, setModalImg] = useState<string | null>(null);

  return (
    <section
      className="py-2 px-4 max-w-4xl mx-auto"
      style={{ background: earthPastel.bg }}
    >
      <div
        className="rounded-sm p-10"
        style={{
          background: earthPastel.bg,
          borderTop: `1.5px solid ${earthPastel.border}`,
        }}
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-2 tracking-tight"
          style={{ color: earthPastel.text2 }}
        >
          <span role="img" aria-label="mic">
            🎤
          </span>{" "}
          Konferans & Paneller
        </h2>
        <p
          className="mb-10 text-base md:text-lg font-light leading-relaxed text-center"
          style={{ color: earthPastel.text2 }}
        >
          Teknoloji ve girişimcilik ekosistemine olan tutkum, beni sadece kod
          yazmanın ötesine, bu alanlarda deneyimlerimi paylaşmaya itiyor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {conferences.map((event, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 cursor-pointer border"
              style={{
                background: earthPastel.bg,
                color: earthPastel.text,
                borderColor: earthPastel.border,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = earthPastel.hover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = earthPastel.bg)
              }
            >
              <h4
                className="text-lg md:text-xl font-bold mb-1 leading-snug"
                style={{ color: earthPastel.text2 }}
              >
                {event.title}
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
                <div className="flex gap-4 mt-4">
                  {event.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Konferans görseli"
                      className="w-32 h-32 object-cover rounded-lg border cursor-zoom-in transition-transform duration-200 hover:scale-105"
                      style={{ borderColor: earthPastel.leaf }}
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

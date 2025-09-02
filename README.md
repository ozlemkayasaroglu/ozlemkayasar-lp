# Özlem Kayasar Portfolio

Bu proje, Özlem Kayasar'ın kişisel portfolyo web sitesidir. Modern React (Vite), TypeScript ve Tailwind CSS ile geliştirilmiştir.

## Özellikler

- Kişisel tanıtım ve sosyal medya bağlantıları
- Projeler, konferanslar ve blog yazıları bölümleri
- Responsive ve modern tasarım
- Modal ile görsel büyütme
- Spotify embed ile podcast gösterimi
- Temiz, pastel renk paleti

## Renk Paleti

Tüm renkler `src/components/WhoAmI.tsx`, `Projects.tsx`, `Conferences.tsx` gibi ana componentlerdeki `earthPastel` objesinde tanımlıdır:

| Anahtar      | Renk Kodu      | Açıklama                |
|--------------|----------------|-------------------------|
| bg           | #ffffff51      | Pastel açık toprak      |
| border       | #918377ff      | Pastel toprak           |
| text         | #7d6e57        | Toprak metin            |
| text2        | #5b5449ff      | Koyu pastel metin       |
| accent       | #8cc887ff      | Pastel yeşil            |
| highlight    | #e7cba9        | Pastel sarımsı toprak   |
| leaf         | #a3c9a8        | Pastel yaprak yeşili    |
| hover        | #98d1a052      | Hover efekti            |

## Ana Componentler

- **App.tsx**: Uygulamanın ana kabuğu ve sayfa geçişleri.
- **WhoAmI.tsx**: Kişisel tanıtım, sosyal medya ve navigasyon butonları.
- **Projects.tsx**: Proje kartları, özel layoutlar, modal ile görsel büyütme, Spotify embed.
- **Conferences.tsx**: Konferans/panel kartları, başlıklar link, modal ile görsel büyütme.
- **Footer.tsx**: Alt bilgi ve sosyal medya ikonları.
- **SocialMedia.tsx**: Tüm sosyal medya bağlantılarını gösteren component.

## Component Özellikleri

- Tüm componentler fonksiyonel ve TypeScript ile yazılmıştır.
- Kartlar, grid ve flex yapısı ile responsive.
- Modal açılır görsel büyütme (img'ye tıklayınca).
- Spotify podcast embed (Projects.tsx içinde).
- Tüm stiller Tailwind CSS utility class'ları ve inline pastel renklerle özelleştirilmiştir.

## Kurulum

1. **Depoyu klonlayın:**
   ```sh
   git clone https://github.com/ozlemkayasaroglu/ozlemkayasar-lp.git
   cd ozlemkayasar-lp
   ```
2. **Bağımlılıkları yükleyin:**
   ```sh
   npm install
   ```
3. **Geliştirme sunucusunu başlatın:**
   ```sh
   npm run dev
   ```
   Ardından tarayıcınızda `http://localhost:5173` adresini açın.

## Proje Yapısı

```
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── assets/
│   └── components/
│       ├── WhoAmI.tsx
│       ├── Projects.tsx
│       ├── Conferences.tsx
│       ├── Footer.tsx
│       ├── SocialMedia.tsx
│       └── ...
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Kullanılan Teknolojiler

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Geliştirici Notları

- Tüm stiller Tailwind CSS ve pastel renk paleti ile özelleştirilmiştir.
- Proje tamamen fonksiyonel React bileşenleri ile yazılmıştır.
- Görsel büyütme için modal, podcast için Spotify embed kullanılmıştır.
- Responsive tasarım ve animasyonlar için Tailwind yardımcı sınıfları kullanılmıştır.
- Renk paleti ve component yapısı kolayca özelleştirilebilir.

## Lisans

MIT

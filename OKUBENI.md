# Yazı Güncesi — hulyabiyan.com

Hülya Biyan'ın kişisel yazar sitesi. **Tamamen statik** (sunucu gerektirmez),
saf HTML/CSS/JS ile hazırlandı. Cloudflare Pages'e olduğu gibi yüklenebilir.

## Bağlantılar
- **🌐 CANLI SİTE: https://hulyabiyan.com/** (Cloudflare üzerinden yayında)
- **GitHub deposu:** https://github.com/biyanhulya/hulyabiyan-site
- **Yedek adres (GitHub Pages):** https://biyanhulya.github.io/hulyabiyan-site/

> ⚠️ `www.hulyabiyan.com` şu an **522** hatası veriyor; sadece www'suz adres
> çalışıyor. Cloudflare DNS'te `www` için bir CNAME kaydı ekleyip (hedef:
> ana siteyle aynı) ya da www → kök adrese yönlendirme kuralı tanımlayarak
> düzeltilebilir.

> Her güncelleme Claude tarafından otomatik olarak GitHub'a gönderilir; GitHub
> Pages birkaç dakika içinde yeni sürümü yayınlar.

## Klasör içeriği
```
index.html          Ana Sayfa
hakkimda.html       Hakkımda
kitaplarim.html     Kitaplarım (3 kitap)
cocuklar-icin.html  Çocuklar İçin (+ Bay Ağaç şarkısı)
atolyeler.html      Atölyeler
gunce.html          Günce / Blog (yakında)
iletisim.html       İletişim
assets/css/         styles.css  (tüm renk & yazı tipi ayarları)
assets/js/          script.js   (mobil menü)
assets/img/         kitap kapakları ve fotoğraflar
assets/media/       bay-agac-sarki.mp4 (Bay Ağaç şarkısı)
```

## Nasıl yayınlanır (Cloudflare Pages)
1. Cloudflare hesabına gir → **Workers & Pages** → **Create** → **Pages** →
   **Upload assets** (Doğrudan yükleme).
2. Proje adı ver (örn. `hulyabiyan`).
3. Bu `hulyabiyan-site` klasörünün **içindeki** tüm dosyaları sürükle-bırak
   (klasörün kendisini değil, içindekileri). "Deploy" de.
4. Yayınlandıktan sonra proje → **Custom domains** → **Set up a domain** →
   `hulyabiyan.com` yaz. Alan adın zaten Cloudflare'de olduğu için DNS otomatik
   ayarlanır.

## Sonradan düzenlenecek yerler (kolay)
- **Instagram:** `https://instagram.com/hulyabiyan_yaziguncesi` olarak ayarlı.
  (Not: Instagram kullanıcı adları Türkçe karakter kabul etmediği için
  `hülyabiyan_yazıgüncesi` → `hulyabiyan_yaziguncesi` yazıldı.)
- **E-posta:** `biyanhulya@gmail.com` olarak ayarlı.
- **YouTube:** Henüz boş (`href="https://youtube.com/"`). Kanal adresin
  belli olunca footer'lardaki ve `iletisim.html` içindeki bu bağlantıyı yaz.
- **Renkler / yazı tipleri:** `assets/css/styles.css` en üstteki `:root`
  bölümünden tek yerden değiştirilir.
- **Çocuklar İçin & Atölyeler:** Şimdilik "Yakında" örnek kartlar var; gerçek
  içerik hazır olunca ilgili HTML'deki metinleri değiştir.
- **Günce yazıları:** `gunce.html` içine yeni yazı kartları eklenebilir.

## Yerel önizleme (isteğe bağlı)
Bilgisayarda test için bu klasörde bir terminal aç ve şunu çalıştır:
```
py -m http.server 8899
```
Sonra tarayıcıdan `http://127.0.0.1:8899` adresine git.

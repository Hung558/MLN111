# MLN111 - Website Triết Học Nhóm 4

Website giáo dục triết học tương tác được xây dựng cho môn **MLN111** tại FPT University. Dự án lấy cảm hứng từ bộ bài tú lơ khơ, đưa người học vào hành trình khám phá triết học cùng nhân vật Po — một chú gấu trúc trên con đường giác ngộ triết học Mác–Lênin.

---

## Giới thiệu

Thay vì trình bày triết học theo lối học thuật khô khan, website sử dụng hệ thống **52 lá bài triết học** chia thành 4 chất bài, mỗi chất tương ứng một nhánh triết học lớn. Người dùng có thể đọc lý thuyết, khám phá từng lá bài khái niệm, hoặc theo dõi câu chuyện tương tác dạng truyện tranh để hiểu triết học theo cách trực quan và thú vị hơn.

---

## Tính năng

- **Trang chủ** — Giới thiệu tổng quan với hiệu ứng 3D hộp bài (Ace Deck) và particle animation
- **Lý thuyết** — Các bài viết chuyên sâu về triết học Mác–Lênin, triết học phương Đông, và khái niệm tha hóa trong xã hội hiện đại
- **Hệ thống 52 lá bài** — Mỗi lá bài là một khái niệm triết học, được phân theo 4 chất:
  - **Bích (Xanh)** — Chủ nghĩa duy vật, vật chất & ý thức
  - **Rô (Cam)** — Phép biện chứng, quy luật mâu thuẫn
  - **Cỏ (Đỏ)** — Tự do, giải phóng con người
  - **Chuôn (Lục)** — Thực tiễn & nhận thức
- **Truyện tương tác** — Câu chuyện dạng comic 25 slide về hành trình của Po học triết học
- **Giao diện sáng/tối** — Chuyển đổi theme với lưu trữ qua localStorage
- **Responsive** — Tương thích đầy đủ trên desktop và mobile

---

## Công nghệ sử dụng

| Lĩnh vực | Công nghệ |
|---|---|
| Markup | HTML5 |
| Styling | CSS3, Tailwind CSS (CDN) |
| Scripting | Vanilla JavaScript, Web Components API |
| Fonts | Be Vietnam Pro, Cormorant Garamond, Google Fonts |
| Icons | Material Symbols Outlined |
| Server | Python `http.server` |

Không sử dụng framework JavaScript. Toàn bộ component điều hướng được xây dựng bằng **Custom Elements API** (Web Components).

---

## Cấu trúc thư mục

```
mlnWeb/
├── index.html          # Trang chủ
├── lythuyet.html       # Trang lý thuyết
├── thebai.html         # Trang chọn chất bài
├── bich.html           # Chất Bích (Duy vật)
├── ro.html             # Chất Rô (Biện chứng)
├── co.html             # Chất Cỏ (Giải phóng)
├── chuon.html          # Chất Chuôn (Thực tiễn)
├── css/
│   ├── shared.css      # Biến CSS toàn cục, theme sáng/tối
│   ├── index.css       # Style trang chủ
│   ├── lythuyet.css    # Style trang lý thuyết
│   ├── thebai.css      # Style trang chọn bài
│   ├── cards.css       # Style trang lá bài
│   ├── ace-deck.css    # Animation hộp bài 3D
│   └── story.css       # Style trình đọc truyện
├── js/
│   ├── components.js   # Web Components (SideBar, TopBar, BottomBar)
│   └── story.js        # Logic trình đọc truyện 25 slide
├── images/             # Ảnh minh họa cho truyện (25 PNG)
└── video/
    └── videomln111.mp4 # Video giới thiệu dự án
```

---

## Cài đặt & Chạy

**Yêu cầu:** Python 3.x

```bash
# Clone repository
git clone <repo-url>
cd mlnWeb

# Khởi động server
python -m http.server 3400
```

Sau đó mở trình duyệt tại `http://localhost:3400`.

> Cần chạy qua HTTP server vì Web Components và ES modules không hoạt động khi mở file HTML trực tiếp (`file://`).

---

## Thành viên nhóm

Dự án của **Nhóm 4 — Môn MLN111**, FPT University.

---

## Giấy phép

Dự án học thuật, không dùng cho mục đích thương mại.

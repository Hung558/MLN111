/* ========================================
   STORY.JS - Comic-style Story Reader
   ======================================== */

const storyData = [
    {
        emoji: "🏔️",
        text: "Ngày xưa, ở một vùng núi xa xôi có một học viện mang tên Thiên Trúc Sơn. Đó không phải là nơi đào tạo những chiến binh mạnh nhất, mà là nơi đào tạo những người hiểu được bản chất của thế giới."
    },
    {
        emoji: "🐼",
        text: "Trong học viện ấy có một chú gấu trúc tên Po. Po nổi tiếng vì ba điều: ham ăn, ngủ gật và cực kỳ ghét học Triết học."
    },
    {
        emoji: "📚",
        text: "Mỗi lần thầy giáo giảng đến những khái niệm như 'vật chất', 'biện chứng', 'nhận thức'... Po đều cảm thấy đầu óc quay cuồng. Với cậu, Triết học chỉ là những dòng chữ khô khan."
    },
    {
        emoji: "🥟",
        text: "Trong khi các bạn khác chăm chỉ luyện tập, Po lại trốn ra sau núi để ăn bánh bao. Cậu luôn nghĩ rằng: 'Chỉ cần sống vui vẻ là đủ, cần gì phải hiểu thế giới.'"
    },
    {
        emoji: "⛈️",
        text: "Cho đến một đêm mưa lớn, mọi thứ thay đổi. Po bị phạt dọn thư viện cũ dưới tầng hầm. Trong lúc đang lau bụi, Po vô tình làm rơi một cuốn sách cổ. Mặt đất rung chuyển. Một cánh cửa đá từ từ mở ra."
    },
    {
        emoji: "✨",
        text: "Sau cánh cửa là một bộ bài phát sáng màu vàng kim. Trên hộp bài có dòng chữ: 'Người muốn thay đổi cuộc đời mình phải học cách hiểu thế giới.'"
    },
    {
        emoji: "🌌",
        text: "Po tò mò chạm vào lá bài đầu tiên. Ngay lập tức, ánh sáng bao trùm toàn bộ căn phòng. Cậu bị hút vào một không gian vô tận nơi các hành tinh đang chuyển động. Một giọng nói vang lên: 'Muốn trưởng thành, ngươi phải hoàn thành Hành trình Ngộ Triết.'"
    },
    {
        emoji: "🏔️",
        text: "Po bước vào thế giới đầu tiên. Ở đó, cậu nhìn thấy núi non, sông biển, bầu trời và vô số sinh vật. Một vị sư già hỏi: 'Con nghĩ những thứ này tồn tại vì con nhìn thấy chúng sao?'"
    },
    {
        emoji: "🪨",
        text: "Lần đầu tiên Po hiểu rằng thế giới không phụ thuộc vào suy nghĩ của riêng mình. Núi vẫn là núi dù không ai quan sát. Dòng sông vẫn chảy dù không ai lắng nghe. Po bắt đầu hiểu khái niệm 'vật chất'."
    },
    {
        emoji: "🪞",
        text: "Vị sư dẫn Po tới một căn phòng đầy gương. Trong mỗi tấm gương là những cảm xúc, ký ức và suy nghĩ khác nhau của Po. Vị sư nói: 'Ý thức của con không tự sinh ra. Nó phản ánh thế giới mà con đã trải qua.'"
    },
    {
        emoji: "🍂",
        text: "Càng đi tiếp, Po càng thấy mọi thứ luôn thay đổi: lá cây úa rồi mọc lại, nước bốc hơi rồi thành mưa, ngày nối tiếp đêm, mùa đông chuyển sang mùa xuân. Po hiểu: mọi sự vật đều vận động và phát triển."
    },
    {
        emoji: "⚔️",
        text: "Ở cánh cổng tiếp theo, Po gặp một kẻ giống hệt mình - Hắc Po. Hắc Po lười biếng, nóng giận, ích kỷ. Hai bên lao vào chiến đấu dữ dội. Nhưng Po càng đánh, Hắc Po càng mạnh."
    },
    {
        emoji: "🪞",
        text: "Kiệt sức, Po hét lên: 'Tại sao ta không thể thắng ngươi?' Hắc Po cười: 'Vì ta chính là ngươi.' Po hiểu rằng con người luôn tồn tại những mặt đối lập: mạnh và yếu, tốt và xấu."
    },
    {
        emoji: "💧",
        text: "Po được giao nhiệm vụ đun một nồi nước khổng lồ. Suốt một thời gian dài, nước vẫn không thay đổi dù nhiệt độ liên tục tăng. Nhưng đúng khi nhiệt độ đạt 100 độ, toàn bộ nước hóa thành hơi."
    },
    {
        emoji: "🌱",
        text: "Vị sư mỉm cười: 'Có những thay đổi nhỏ tích lũy âm thầm, cho tới một thời điểm sẽ tạo ra bước chuyển lớn.' Po hiểu rằng sự trưởng thành cũng như vậy. Mọi cố gắng đều cần thời gian tích lũy."
    },
    {
        emoji: "⚔️",
        text: "Nhưng rồi một thất bại lớn xảy ra. Trong một trận chiến, Po thua hoàn toàn. Cậu mất niềm tin vào bản thân và muốn bỏ cuộc."
    },
    {
        emoji: "🌿",
        text: "Vị sư đưa cho Po một hạt tre nhỏ rồi hỏi: 'Con nghĩ hạt tre biến mất khi cây tre mọc lên sao?' Po lắc đầu. 'Không, nó vẫn tồn tại trong hình dạng mới.' Po hiểu rằng cái mới kế thừa những điều tốt đẹp để phát triển hơn."
    },
    {
        emoji: "🌉",
        text: "Hành trình tiếp theo đưa Po tới một ngôi làng nghèo nơi cây cầu duy nhất đã sập. Người dân không thể vận chuyển lương thực. Po lao vào đọc sách sửa cầu và tin rằng mình đã hiểu mọi thứ."
    },
    {
        emoji: "🔨",
        text: "Nhưng khi bắt tay làm thật, cây cầu đổ sập ngay lập tức. Vị sư nói: 'Kiến thức không được kiểm chứng bằng thực tế chỉ là lý thuyết.' Po bắt đầu học từ người dân: cách đo dòng nước, cách buộc dây, cách đặt nền móng."
    },
    {
        emoji: "🌉",
        text: "Sau rất nhiều lần thất bại, cây cầu cuối cùng cũng được xây xong. Người dân reo hò trong niềm vui. Po hiểu sâu sắc rằng: thực tiễn là nơi kiểm chứng chân lý."
    },
    {
        emoji: "🏙️",
        text: "Trên đoạn đường cuối cùng, Po đi qua những ngôi làng, các nhà máy, thành phố đông đúc, và cả chiến tranh. Cậu chứng kiến con người lao động để tồn tại."
    },
    {
        emoji: "👥",
        text: "Po thấy xã hội thay đổi khi công cụ thay đổi. Cậu thấy những mâu thuẫn giữa giàu và nghèo, giữa cái cũ và cái mới. Ban đầu Po nghĩ lịch sử được tạo nên bởi những anh hùng."
    },
    {
        emoji: "🤝",
        text: "Nhưng rồi cậu nhận ra: chính những người dân bình thường, những người lao động mỗi ngày, mới là những người xây dựng xã hội. Một người có thể mạnh. Nhưng hàng ngàn con người đoàn kết còn mạnh hơn."
    },
    {
        emoji: "🌟",
        text: "Sau khi hoàn thành lá bài cuối cùng, Po trở về học viện. Nhưng giờ đây, cậu không còn là chú gấu trúc ham chơi ngày nào nữa. Po nhìn bầu trời rồi mỉm cười."
    },
    {
        emoji: "📖",
        text: "Cậu hiểu rằng Triết học không phải là những dòng chữ khô khan để học thuộc lòng. Triết học là: cách nhìn thế giới, cách hiểu con người, và cách trưởng thành từ chính những trải nghiệm của bản thân."
    },
    {
        emoji: "✨",
        text: "52 lá bài bay lên giữa bầu trời đêm. Mỗi lá bài là một bài học. Mỗi thử thách là một bước trưởng thành. Và Po cuối cùng nhận ra: 'Ngộ Triết không phải trở thành người thông minh nhất. Mà là học cách hiểu cuộc đời.'"
    }
];

class StoryReader {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.currentSlide = 0;
        this.totalSlides = storyData.length;
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        const wrapper = document.createElement('div');
        wrapper.className = 'story-card-wrapper';

        storyData.forEach((slide, index) => {
            const slideEl = document.createElement('div');
            slideEl.className = `story-slide ${index === 0 ? 'active' : ''}`;
            slideEl.innerHTML = `
                <div class="comic-frame">
                    <div class="comic-illustration">${slide.emoji}</div>
                    <div class="comic-text-bubble">${slide.text}</div>
                </div>
            `;
            wrapper.appendChild(slideEl);
        });

        const controls = document.createElement('div');
        controls.className = 'story-controls';
        controls.innerHTML = `
            <button class="story-btn prev-btn" aria-label="Trang trước">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <span class="story-progress"><span class="current-page">1</span> / <span class="total-pages">${this.totalSlides}</span></span>
            <button class="story-btn next-btn" aria-label="Trang tiếp theo">
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        `;

        this.container.appendChild(wrapper);
        this.container.appendChild(controls);
        this.updateButtons();
    }

    attachEventListeners() {
        const prevBtn = this.container.querySelector('.prev-btn');
        const nextBtn = this.container.querySelector('.next-btn');

        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(index) {
        const slides = this.container.querySelectorAll('.story-slide');

        slides[this.currentSlide].classList.remove('active');
        slides[this.currentSlide].classList.add('exit');

        setTimeout(() => {
            slides[this.currentSlide].classList.remove('exit');
            this.currentSlide = index;
            slides[this.currentSlide].classList.add('active');
            this.updateProgress();
            this.updateButtons();
        }, 300);
    }

    updateProgress() {
        const currentPage = this.container.querySelector('.current-page');
        if (currentPage) {
            currentPage.textContent = this.currentSlide + 1;
        }
    }

    updateButtons() {
        const prevBtn = this.container.querySelector('.prev-btn');
        const nextBtn = this.container.querySelector('.next-btn');

        prevBtn.classList.toggle('disabled', this.currentSlide === 0);
        nextBtn.classList.toggle('disabled', this.currentSlide === this.totalSlides - 1);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-reader');
    if (storyContainer) {
        new StoryReader('story-reader');
    }
});

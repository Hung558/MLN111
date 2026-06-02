/* ========================================
   STORY.JS - Comic-style Story Reader with Premium Effects
   ======================================== */

const storyData = [
    {
        image: "images/1.png",
        gradient: "bg-grad-mountains",
        text: "Ngày xưa, ở một vùng núi xa xôi có một học viện mang tên Thiên Trúc Sơn. Đó không phải là nơi đào tạo những chiến binh mạnh nhất, mà là nơi đào tạo những người hiểu được bản chất của thế giới."
    },
    {
        image: "images/2.png",
        gradient: "bg-grad-panda",
        text: "Trong học viện ấy có một chú gấu trúc tên Po. Po nổi tiếng vì ba điều: ham ăn, ngủ gật và cực kỳ ghét học Triết học."
    },
    {
        image: "images/3.png",
        gradient: "bg-grad-book",
        text: "Mỗi lần thầy giáo giảng đến những khái niệm như 'vật chất', 'biện chứng', 'nhận thức'... Po đều cảm thấy đầu óc quay cuồng. Với cậu, Triết học chỉ là những dòng chữ khô khan."
    },
    {
        image: "images/4.png",
        gradient: "bg-grad-panda",
        text: "Trong khi các bạn khác chăm chỉ luyện tập, Po lại trốn ra sau núi để ăn bánh bao. Cậu luôn nghĩ rằng: 'Chỉ cần sống vui vẻ là đủ, cần gì phải hiểu thế giới.'"
    },
    {
        image: "images/5.png",
        gradient: "bg-grad-storm",
        text: "Cho đến một đêm mưa lớn, mọi thứ thay đổi. Po bị phạt dọn thư viện cũ dưới tầng hầm. Trong lúc đang lau bụi, Po vô tình làm rơi một cuốn sách cổ. Một cánh cửa đá từ từ mở ra."
    },
    {
        image: "images/6.png",
        gradient: "bg-grad-magic",
        text: "Sau cánh cửa là một bộ bài phát sáng màu vàng kim. Trên hộp bài có dòng chữ: 'Người muốn thay đổi cuộc đời mình phải học cách hiểu thế giới.'"
    },
    {
        image: "images/7.png",
        gradient: "bg-grad-cosmos",
        text: "Po tò mò chạm vào lá bài đầu tiên. Ngay lập tức, ánh sáng bao trùm toàn bộ căn phòng. Cậu bị hút vào một không gian vô tận. Một giọng nói vang lên: 'Muốn trưởng thành, ngươi phải hoàn thành Hành trình Ngộ Triết.'"
    },
    {
        image: "images/8.png",
        gradient: "bg-grad-mountains",
        text: "Po bước vào thế giới đầu tiên. Ở đó, cậu nhìn thấy núi non, sông biển, bầu trời. Một vị sư già hỏi: 'Con nghĩ những thứ này tồn tại vì con nhìn thấy chúng sao?'"
    },
    {
        image: "images/9.png",
        gradient: "bg-grad-cosmos",
        text: "Lần đầu tiên Po hiểu rằng thế giới không phụ thuộc vào suy nghĩ của mình. Núi vẫn là núi dù không ai quan sát. Dòng sông vẫn chảy dù không ai lắng nghe. Cậu bắt đầu hiểu 'vật chất'."
    },
    {
        image: "images/10.png",
        gradient: "bg-grad-mirror",
        text: "Vị sư dẫn Po tới một căn phòng đầy gương. Vị sư nói: 'Ý thức của con không tự sinh ra. Nó phản ánh thế giới mà con đã trải qua.' Po nhận ra suy nghĩ của mình được hình thành từ cuộc sống."
    },
    {
        image: "images/11.png",
        gradient: "bg-grad-leaves",
        text: "Càng đi tiếp, Po càng thấy mọi thứ luôn thay đổi: lá úa rồi mọc lại, nước bốc hơi rồi thành mưa. Cậu hiểu: mọi sự vật đều luôn vận động và phát triển không ngừng."
    },
    {
        image: "images/12.png",
        gradient: "bg-grad-battle",
        text: "Ở cánh cổng tiếp theo, Po gặp Hắc Po - kẻ lười biếng, nóng giận. Po càng đánh, Hắc Po càng mạnh. Po hét lên: 'Tại sao ta không thể thắng ngươi?'"
    },
    {
        image: "images/13.png",
        gradient: "bg-grad-mirror",
        text: "Hắc Po cười: 'Vì ta chính là ngươi.' Po hiểu rằng con người luôn tồn tại những mặt đối lập: mạnh và yếu, tốt và xấu. Không thể trưởng thành nếu trốn tránh phần tối của mình."
    },
    {
        image: "images/14.png",
        gradient: "bg-grad-battle",
        text: "Po đun một nồi nước khổng lồ. Suốt thời gian dài, nước vẫn không đổi dù nhiệt độ tăng cao. Nhưng khi đạt đúng 100 độ, toàn bộ nước hóa thành hơi trong chớp mắt."
    },
    {
        image: "images/15.png",
        gradient: "bg-grad-water",
        text: "'Có những thay đổi nhỏ tích lũy âm thầm, cho tới một thời điểm sẽ tạo ra bước chuyển lớn.' Po hiểu rằng sự trưởng thành cũng cần thời gian tích lũy kiên trì."
    },
    {
        image: "images/16.png",
        gradient: "bg-grad-storm",
        text: "Nhưng rồi một thất bại lớn xảy ra. Po thua hoàn toàn. Cậu mất niềm tin vào bản thân và muốn bỏ cuộc, nằm gục xuống trong bóng tối."
    },
    {
        image: "images/17.png",
        gradient: "bg-grad-sprout",
        text: "Vị sư đưa cho Po một hạt tre: 'Con nghĩ hạt tre biến mất khi cây tre mọc lên sao? Không, nó vẫn tồn tại trong hình dạng mới.' Po hiểu rằng cái mới kế thừa cái cũ để tốt đẹp hơn."
    },
    {
        image: "images/18.png",
        gradient: "bg-grad-bridge",
        text: "Po tới một ngôi làng nghèo nơi cây cầu duy nhất đã sập. Po lao vào đọc sách sửa cầu và tin rằng mình đã giỏi. Nhưng khi làm thật, cầu đổ sập ngay lập tức."
    },
    {
        image: "images/19.png",
        gradient: "bg-grad-bridge",
        text: "Vị sư nói: 'Kiến thức không được kiểm chứng bằng thực tế chỉ là lý thuyết.' Po bắt đầu học từ dân làng cách đo dòng nước, buộc dây... Thực tiễn mới là nơi kiểm chứng chân lý."
    },
    {
        image: "images/20.png",
        gradient: "bg-grad-city",
        text: "Trên chặng cuối, Po đi qua những nhà máy, thành phố đông đúc. Cậu chứng kiến con người lao động để tồn tại. Cậu thấy xã hội thay đổi khi công cụ lao động thay đổi."
    },
    {
        image: "images/21.png",
        gradient: "bg-grad-city",
        text: "Po nhận ra: chính những người lao động bình thường mới là những người thực sự xây dựng nên xã hội. Một người có thể mạnh, nhưng hàng ngàn người đoàn kết còn mạnh hơn rất nhiều."
    },
    {
        image: "images/22.png",
        gradient: "bg-grad-panda",
        text: "Sau khi hoàn thành lá bài cuối cùng, Po trở về học viện. Cậu không còn là chú gấu trúc ham chơi ngày nào. Po nhìn bầu trời rồi mỉm cười thanh thản."
    },
    {
        image: "images/23.png",
        gradient: "bg-grad-book",
        text: "Cậu hiểu rằng Triết học không phải là lý thuyết khô khan. Nó là cách nhìn thế giới, cách hiểu con người, và cách trưởng thành từ chính trải nghiệm của bản thân."
    },
    {
        image: "images/24.png",
        gradient: "bg-grad-magic",
        text: "52 lá bài bay lên giữa bầu trời đêm rực rỡ. Mỗi lá bài là một bài học. Mỗi thử thách là một bước trưởng thành trên hành trình cuộc đời."
    },
    {
        image: "images/25.png",
        gradient: "bg-grad-cosmos",
        text: "'Ngộ Triết không phải trở thành người thông minh nhất. Mà là học cách hiểu cuộc đời.' Po đã thực sự tìm thấy bản ngã của mình."
    }
];

class StoryReader {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        this.currentSlide = 0;
        this.totalSlides = storyData.length;
        this.init();
    }

    init() {
        this.render();
        this.attachEventListeners();
    }

    render() {
        this.container.innerHTML = ''; // Clear container

        const wrapper = document.createElement('div');
        wrapper.className = 'story-card-wrapper';
        wrapper.style.position = 'relative';

        storyData.forEach((slide, index) => {
            const slideEl = document.createElement('div');
            slideEl.className = `story-slide ${index === 0 ? 'active' : ''}`;

            slideEl.innerHTML = `
                <div class="comic-frame">
                    <div class="comic-illustration-container ${slide.gradient}">
                        <div class="cosmic-dust"></div>
                        <div class="comic-illustration">
                            <img src="${slide.image}" alt="Minh họa ${index + 1}" class="story-image">
                        </div>
                    </div>
                    <div class="comic-text-bubble">${slide.text}</div>
                </div>
            `;
            wrapper.appendChild(slideEl);
        });

        // Thêm overlay nav ở giữa 2 bên thẻ
        const overlayNav = document.createElement('div');
        overlayNav.className = 'story-overlay-nav';
        overlayNav.innerHTML = `
            <button class="story-overlay-btn overlay-prev-btn" aria-label="Trang trước">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <button class="story-overlay-btn overlay-next-btn" aria-label="Trang tiếp theo">
                <span class="material-symbols-outlined">arrow_forward</span>
            </button>
        `;
        wrapper.appendChild(overlayNav);

        const controls = document.createElement('div');
        controls.className = 'story-controls';
        controls.innerHTML = `
            <span class="story-progress"><span class="current-page">1</span> / <span class="total-pages">${this.totalSlides}</span></span>
        `;

        this.container.appendChild(wrapper);
        this.container.appendChild(controls);
        this.updateButtons();
    }

    attachEventListeners() {
        const overlayPrevBtn = this.container.querySelector('.overlay-prev-btn');
        const overlayNextBtn = this.container.querySelector('.overlay-next-btn');

        if (overlayPrevBtn) overlayPrevBtn.addEventListener('click', () => this.prevSlide());
        if (overlayNextBtn) overlayNextBtn.addEventListener('click', () => this.nextSlide());

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
        if (!slides[this.currentSlide] || !slides[index]) return;

        const oldSlide = slides[this.currentSlide];
        const newSlide = slides[index];

        // Slide cũ sẽ thoát ra
        oldSlide.classList.remove('active');
        oldSlide.classList.add('exit');

        // Slide mới sẽ xuất hiện ngay lập tức (giao thoa mượt mà)
        newSlide.classList.add('active');

        this.currentSlide = index;
        this.updateProgress();
        this.updateButtons();

        // Dọn dẹp class exit sau khi hiệu ứng kết thúc (600ms tương ứng với CSS transition 0.6s)
        setTimeout(() => {
            oldSlide.classList.remove('exit');
        }, 600);
    }

    updateProgress() {
        const currentPage = this.container.querySelector('.current-page');
        if (currentPage) {
            currentPage.textContent = this.currentSlide + 1;
        }
    }

    updateButtons() {
        const overlayPrevBtn = this.container.querySelector('.overlay-prev-btn');
        const overlayNextBtn = this.container.querySelector('.overlay-next-btn');

        const isFirst = this.currentSlide === 0;
        const isLast = this.currentSlide === this.totalSlides - 1;

        if (overlayPrevBtn) overlayPrevBtn.classList.toggle('disabled', isFirst);
        if (overlayNextBtn) overlayNextBtn.classList.toggle('disabled', isLast);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const storyContainer = document.getElementById('story-reader');
    if (storyContainer) {
        new StoryReader('story-reader');
    }
});
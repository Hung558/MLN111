/* ========================================
   COMPONENTS.JS - Quản lý thanh Bar chung
   ======================================== */

class SideBar extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active') || '';
        this.innerHTML = `
    <aside class="hidden lg:flex flex-col h-full py-6 gap-6 w-64 fixed left-0 top-0 z-40 border-r transition-all duration-300">
        <div class="px-6 mb-4">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm" style="background:#002442; color:#fff;">
                    <span class="material-symbols-outlined">school</span>
                </div>
                <div>
                    <h2 class="text-base font-bold leading-tight transition-colors duration-300">Triết Học Hệ Số</h2>
                    <p class="text-xs transition-colors duration-300">Nhóm 4 Triết Học MLN111</p>
                </div>
            </div>
            <a href="lythuyet.html" class="sidebar-btn w-full text-sm font-semibold py-2.5 rounded-full hover:opacity-90 transition-all shadow-sm flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-sm">auto_stories</span>
                Khám phá lý thuyết
            </a>
        </div>
        <nav class="flex-grow space-y-1 px-2">
            <a href="index.html" class="${active === 'index' ? 'nav-active' : ''} rounded-full px-4 py-2.5 flex items-center gap-3 transition-all shadow-sm">
                <span class="material-symbols-outlined">home</span>
                <span class="text-sm font-bold">Trang Chủ</span>
            </a>
            <a href="lythuyet.html" class="${active === 'lythuyet' ? 'nav-active' : ''} rounded-full px-4 py-2.5 flex items-center gap-3 cursor-pointer transition-all hover:bg-opacity-10">
                <span class="material-symbols-outlined">menu_book</span>
                <span class="text-sm font-medium">Lý Luận Chi Tiết</span>
            </a>
            <a href="thebai.html" class="${active === 'thebai' ? 'nav-active' : ''} rounded-full px-4 py-2.5 flex items-center gap-3 cursor-pointer transition-all hover:bg-opacity-10">
                <span class="material-symbols-outlined">style</span>
                <span class="text-sm font-medium">Hệ Thống Thẻ Bài</span>
            </a>
        </nav>
        <div class="mt-auto border-t pt-4 px-4 space-y-1 transition-colors duration-300" style="border-color: rgba(195,198,206,0.1);">
            <div class="rounded-full px-4 py-2 flex items-center gap-3 cursor-pointer transition-all hover:bg-opacity-10">
                <span class="material-symbols-outlined">info</span>
                <span class="text-sm font-medium">Giới thiệu</span>
            </div>
        </div>
    </aside>
        `;
    }
}

class TopBar extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active') || '';
        this.innerHTML = `
    <header class="shadow-sm fixed top-0 left-0 right-0 lg:left-64 z-50 border-b transition-all duration-300">
        <div class="flex justify-between items-center w-full px-6 py-3 max-w-6xl mx-auto">
            <h1 class="text-xl font-extrabold tracking-tight transition-colors duration-300">Triết Học Hệ Số</h1>
            <nav class="hidden md:flex gap-6 items-center">
                <a class="${active === 'index' ? 'top-active border-b-2' : ''} text-sm font-bold pb-1 transition-all duration-300" href="index.html">Trang Chủ</a>
                <a class="${active === 'lythuyet' ? 'top-active border-b-2' : ''} text-sm font-medium pb-1 hover:opacity-80 transition-all duration-300" href="lythuyet.html">Lý Luận</a>
                <a class="${active === 'thebai' ? 'top-active border-b-2' : ''} text-sm font-medium pb-1 hover:opacity-80 transition-all duration-300" href="thebai.html">Thẻ Bài</a>
            </nav>
            <div class="flex items-center gap-3">
                <span id="mode-text" class="text-[10px] font-bold hidden sm:inline uppercase tracking-wider transition-colors duration-300">TÙ TÚNG (ÂM)</span>
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" id="theme-toggle" class="sr-only peer">
                    <div class="toggle-track w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#b71032] shadow-inner"></div>
                </label>
            </div>
        </div>
    </header>
    <div class="h-[60px] w-full invisible shrink-0"></div>
        `;
    }
}

class BottomBar extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active') || '';
        this.innerHTML = `
    <nav class="bottom-nav lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-3 pt-2 shadow-lg border-t transition-all duration-300">
        <a href="index.html" class="${active === 'index' ? 'bnav-active' : ''} flex flex-col items-center justify-center rounded-xl py-1.5 px-4 cursor-pointer shadow-sm transition-all duration-300">
            <span class="material-symbols-outlined text-xl">home</span>
            <span class="text-[10px] font-bold mt-0.5">Trang chủ</span>
        </a>
        <a href="lythuyet.html" class="${active === 'lythuyet' ? 'bnav-active' : ''} flex flex-col items-center justify-center rounded-xl py-1.5 px-4 cursor-pointer shadow-sm transition-all duration-300">
            <span class="material-symbols-outlined text-xl">auto_stories</span>
            <span class="text-[10px] font-bold mt-0.5">Lý Luận</span>
        </a>
        <a href="thebai.html" class="${active === 'thebai' ? 'bnav-active' : ''} flex flex-col items-center justify-center rounded-xl py-1.5 px-4 cursor-pointer shadow-sm transition-all duration-300">
            <span class="material-symbols-outlined text-xl">style</span>
            <span class="text-[10px] font-bold mt-0.5">Thẻ bài</span>
        </a>
    </nav>
        `;
    }
}

customElements.define('side-bar', SideBar);
customElements.define('top-bar', TopBar);
customElements.define('bottom-bar', BottomBar);

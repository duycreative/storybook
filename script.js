document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const pages = book.querySelectorAll('.page');
    const pageCount = pages.length;
    let currentFlipped = 0;

    // Sắp xếp z-index ban đầu để các trang xếp chồng đúng thứ tự
    pages.forEach((page, index) => {
        page.style.zIndex = pageCount - index;
    });

    // Thêm sự kiện click cho từng trang
    pages.forEach((page, index) => {
        page.addEventListener('click', function() {
            // Logic để lật trang tới
            if (!this.classList.contains('flipped')) {
                // Chỉ lật trang tiếp theo đúng thứ tự
                if (index === currentFlipped) {
                    this.classList.add('flipped');
                    currentFlipped++;
                }
            } 
            // Logic để lật trang về
            else {
                // Chỉ lật về trang trước đó đúng thứ tự
                if (index === currentFlipped - 1) {
                    this.classList.remove('flipped');
                    currentFlipped--;
                }
            }
        });
    });
});
// สร้าง IntersectionObserver ใหม่
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // ทำให้หายไปเมื่อไม่อยู่ในหน้าจอ
      }
    });
  }, { threshold: 0.5 }); // เริ่มสังเกตเมื่อ 50% ขององค์ประกอบอยู่ในหน้าจอ

// เลือกทุกข้อความที่ต้องการให้ค่อยๆ ขึ้นมา
const hiddenTextElements = document.querySelectorAll('.hidden-text');
hiddenTextElements.forEach(element => {
  observer.observe(element); // เริ่มการสังเกต
});

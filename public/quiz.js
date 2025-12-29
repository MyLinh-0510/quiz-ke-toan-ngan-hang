const questions = [
  { q: "Đối tượng nào KHÔNG phải đối tượng của kế toán ngân hàng?",
    o: ["Tiền gửi tiết kiệm", "ATM", "Chi phí lương", "Thị phần sản phẩm"], a: 3 },

  { q: "Phương trình kế toán cơ bản:",
    o: ["TS = NPT + VCSH", "TS = Nguồn vốn", "LN = DT - CP", "Cả 3 đáp án đều đúng"], a: 3 },

  { q: "Tiền gửi tiết kiệm không kỳ hạn của KH là:",
    o: ["Tài sản", "Nợ phải trả", "Chi phí", "Thu nhập"], a: 1 },

  { q: "Khoản cho vay khách hàng là:",
    o: ["Tài sản", "Nợ phải trả", "Chi phí", "Thu nhập"], a: 0 },

  { q: "Chỉ tiêu KHÔNG thuộc bảng CĐKT:",
    o: ["TG thanh toán", "Cho vay KH", "Chi phí khấu hao TSCĐ", "TG tại NHNN"], a: 2 },

  { q: "Chỉ tiêu KHÔNG thuộc BCKQKD:",
    o: ["LN sau thuế", "Chi phí trả lãi", "TG khách hàng", "Thu lãi tiền gửi"], a: 2 },

  { q: "TK loại 3 – TSCĐ có nguyên tắc:",
    o: ["SD Nợ, tăng Có, giảm Nợ", "SD Nợ, tăng Nợ, giảm Có", "SD Có, tăng Có, giảm Nợ", "SD Có, tăng Nợ, giảm Có"], a: 1 },

  { q: "Tài sản chiếm tỷ trọng lớn nhất:",
    o: ["TG NH", "CKKD", "Cho vay KH", "TSCĐ"], a: 2 },

  { q: "TK loại 5 – Thanh toán:",
    o: ["SD Nợ, tăng Có, giảm Nợ", "SD Có, tăng Nợ, giảm Có", "SD Nợ/Có, tăng Có, giảm Nợ", "SD Nợ/Có, tăng Nợ, giảm Có"], a: 3 },

  { q: "Thu từ thanh lý TSCĐ ghi vào:",
    o: ["Thu HĐKD", "Thu nhập khác", "Tài sản", "VCSH"], a: 1 },

  { q: "TG của NH tại TCTD khác là:",
    o: ["Tài sản", "Nợ phải trả", "VCSH", "Thu nhập"], a: 0 },

  { q: "Quỹ dự phòng tài chính là:",
    o: ["Tài sản", "Nợ phải trả", "VCSH", "Không đáp án"], a: 2 },

  { q: "TK 4232 – TG tiết kiệm VND:",
    o: ["SD Nợ, tăng Nợ", "SD Có, tăng Nợ", "SD Nợ, tăng Có", "SD Có, tăng Có"], a: 3 },

  { q: "TK 70 – Thu nhập tín dụng:",
    o: ["SD Nợ", "Không SD, tăng Nợ", "Không SD, tăng Có", "SD Có"], a: 2 },

  { q: "TK 80 – Chi phí tín dụng:",
    o: ["SD Nợ", "Không SD, tăng Nợ", "Không SD, tăng Có", "SD Có"], a: 1 },

  { q: "Lãi phải thu cho vay là:",
    o: ["Tài sản", "Nợ phải trả", "VCSH", "Chi phí"], a: 0 },

  { q: "Lãi phải trả TG thanh toán là:",
    o: ["Tài sản", "Nợ phải trả", "VCSH", "Thu nhập"], a: 1 },

  { q: "Tài khoản ngoại bảng ghi:",
    o: ["Ghi đơn", "Ghi kép", "Cả hai", "Không cái nào"], a: 0 },

  { q: "Theo dõi cơ cấu vốn đọc báo cáo:",
    o: ["BCTC", "KQKD", "LCTT", "Thuyết minh"], a: 0 },

  { q: "Xác định kết quả kinh doanh đọc:",
    o: ["BCTC", "KQKD", "LCTT", "Thuyết minh"], a: 1 },
];

// render UI
const quizDiv = document.getElementById("quiz");

questions.forEach((q, i) => {
  quizDiv.innerHTML += `
    <div class="question" id="q${i}">
      <p><b>Câu ${i + 1}:</b> ${q.q}</p>
      <div class="options">
        ${q.o.map((op, j) => `
          <label>
            <input type="radio" name="q${i}" value="${j}"> ${op}
          </label>
        `).join("")}
      </div>
    </div>
  `;
});

// chấm điểm
document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    const box = document.getElementById(`q${i}`);

    if (selected && Number(selected.value) === q.a) {
      score++;
      box.classList.add("correct");
    } else {
      box.classList.add("wrong");
    }
  });

  document.getElementById("result").innerHTML =
    `🎯 Kết quả: ${score}/${questions.length} câu đúng`;
});

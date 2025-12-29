const questions = [
  { question: "Đối tượng nào sau đây không phải là đối tượng của kế toán ngân hàng:", options: ["Tiền gửi tiết kiệm của khách hàng", "Máy rút tiền tự động (ATM)", "Chi phí lương nhân viên", "Thị phần sản phẩm"], answer: 3 },

  { question: "Phương trình kế toán cơ bản:", options: ["Tài sản = Nợ phải trả + Vốn chủ sở hữu", "Tài sản = Nguồn vốn", "Lợi nhuận = Tổng doanh thu, thu nhập - Tổng chi phí", "Cả 3 đáp án đều đúng"], answer: 3 },

  { question: "Khoản tiền gửi tiết kiệm không kỳ hạn của khách hàng là:", options: ["Tài sản của ngân hàng", "Nợ phải trả của ngân hàng", "Chi phí của ngân hàng", "Thu nhập của ngân hàng"], answer: 1 },

  { question: "Khoản cho vay khách hàng là:", options: ["Tài sản của ngân hàng", "Nợ phải trả của ngân hàng", "Chi phí của ngân hàng", "Thu nhập của ngân hàng"], answer: 0 },

  { question: "Chỉ tiêu nào sau đây không thuộc Bảng cân đối kế toán của ngân hàng:", options: ["Tiền gửi thanh toán của khách hàng", "Cho vay khách hàng", "Chi phí khấu hao tài sản cố định", "Tiền gửi tại ngân hàng nhà nước"], answer: 2 },

  { question: "Chỉ tiêu nào sau đây không thuộc Báo cáo kết quả hoạt động kinh doanh:", options: ["Lợi nhuận sau thuế", "Chi phí trả lãi vay", "Tiền gửi của khách hàng", "Thu lãi tiền gửi"], answer: 2 },

  { question: "Nguyên tắc ghi chép vào TK loại 3 - Tài sản cố định và Tài sản Có khác:", options: ["SD bên Nợ, tăng bên Có, giảm bên Nợ", "SD bên Nợ, tăng bên Nợ, giảm bên Có", "SD bên Có, tăng bên Có, giảm bên Nợ", "SD bên Có, tăng bên Nợ, giảm bên Có"], answer: 1 },

  { question: "Trong tổng Tài sản Có thì tài sản nào chiếm tỷ trọng lớn nhất:", options: ["Tiền gửi ngân hàng", "Chứng khoán kinh doanh", "Cho vay khách hàng", "Tài sản cố định"], answer: 2 },

  { question: "Nguyên tắc ghi chép vào TK loại 5 - Hoạt động thanh toán:", options: ["SD Nợ, tăng Có, giảm Nợ", "SD Có, tăng Nợ, giảm Có", "SD Nợ/Có, tăng Có, giảm Nợ", "SD Nợ/Có, tăng Nợ, giảm Có"], answer: 2 },

  { question: "Khoản tiền thu được từ thanh lý nhượng bán TSCĐ được ghi nhận vào:", options: ["Thu nhập từ hoạt động kinh doanh", "Thu nhập khác", "Tài sản", "Vốn chủ sở hữu"], answer: 1 },

  { question: "Tiền gửi của ngân hàng TMCP tại các tổ chức tín dụng khác là:", options: ["Tài sản", "Nợ phải trả", "Vốn chủ sở hữu", "Thu nhập"], answer: 0 },

  { question: "Quỹ dự phòng tài chính là:", options: ["Tài sản", "Nợ phải trả", "Vốn chủ sở hữu", "Không có đáp án đúng"], answer: 2 },

  { question: "Nguyên tắc ghi chép vào TK4232 - Tiền gửi tiết kiệm VNĐ:", options: ["SD Nợ, tăng Nợ, giảm Có", "SD Có, tăng Nợ, giảm Có", "SD Nợ, tăng Có, giảm Nợ", "SD Có, tăng Có, giảm Nợ"], answer: 3 },

  { question: "Nguyên tắc ghi chép vào TK70 - Thu nhập từ hoạt động tín dụng:", options: ["SD Nợ, tăng Nợ, giảm Có", "Không SD, tăng Nợ, giảm Có", "Không SD, tăng Có, giảm Nợ", "SD Có, tăng Có, giảm Nợ"], answer: 2 },

  { question: "Nguyên tắc ghi chép vào TK80 - Chi phí hoạt động tín dụng:", options: ["SD Nợ, tăng Nợ, giảm Có", "Không SD, tăng Nợ, giảm Có", "Không SD, tăng Có, giảm Nợ", "SD Có, tăng Có, giảm Nợ"], answer: 1 },

  { question: "Số tiền lãi phải thu từ cho vay khách hàng là:", options: ["Tài sản", "Nợ phải trả", "Vốn chủ sở hữu", "Chi phí"], answer: 0 },

  { question: "Số tiền lãi phải trả khi huy động vốn từ tiền gửi thanh toán là:", options: ["Tài sản", "Nợ phải trả", "Vốn chủ sở hữu", "Thu nhập"], answer: 1 },

  { question: "Nguyên tắc ghi chép của tài khoản ngoại bảng:", options: ["Ghi đơn", "Ghi kép", "Cả a và b", "Cả a và b đều sai"], answer: 0 },

  { question: "Để theo dõi cơ cấu vốn của ngân hàng, cần đọc báo cáo:", options: ["Báo cáo tình hình tài chính", "Báo cáo kết quả hoạt động", "Báo cáo lưu chuyển tiền tệ", "Thuyết minh BCTC"], answer: 0 },

  { question: "Để xác định kết quả kinh doanh của ngân hàng, cần đọc báo cáo:", options: ["Báo cáo tình hình tài chính", "Báo cáo kết quả hoạt động", "Báo cáo lưu chuyển tiền tệ", "Thuyết minh BCTC"], answer: 1 },

  { question: "Nguồn nào sau đây không phải là nguồn huy động vốn:", options: ["Tiền gửi khách hàng", "Cho vay khách hàng", "Phát hành giấy tờ có giá", "Vay NHNN"], answer: 1 },

  { question: "Nguồn nào sau đây là nguồn huy động vốn:", options: ["Cho vay khách hàng", "Cho vay TCTD", "Tiền gửi của TCTD", "Tiền gửi tại NHNN"], answer: 2 },

  { question: "Phát hành trái phiếu mệnh giá 20.000, giá bán 21.000 là:", options: ["Ngang giá", "Chiết khấu", "Phụ trội", "Không đúng"], answer: 2 },

  { question: "Phát hành trái phiếu mệnh giá 20.000, giá bán 20.000 là:", options: ["Ngang giá", "Chiết khấu", "Phụ trội", "Không đúng"], answer: 0 },

  { question: "Phát hành trái phiếu mệnh giá 20.000, giá bán 19.000 là:", options: ["Ngang giá", "Chiết khấu", "Phụ trội", "Không đúng"], answer: 1 },

  { question: "Trả lãi trước tiền gửi khách hàng, lãi đã trả ghi nhận vào:", options: ["TK388", "TK491", "TK421", "TK801"], answer: 0 },

  { question: "Lãi dự chi tiền gửi tiết kiệm theo dõi trên TK:", options: ["TK4913", "TK4911", "TK4211", "TK4232"], answer: 0 },

  { question: "Nguyên tắc ghi chép vào TK42 - Tiền gửi khách hàng:", options: ["SD Nợ, tăng Nợ, giảm Có", "SD Nợ, tăng Có, giảm Nợ", "SD Có, tăng Nợ, giảm Có", "SD Có, tăng Có, giảm Nợ"], answer: 3 },

  { question: "Theo dõi lãi phải trả tiền gửi thanh toán dùng TK:", options: ["TK4911", "TK702", "TK421", "TK211"], answer: 0 },

  { question: "Tính lãi dự chi sổ tiết kiệm có kỳ hạn:", options: ["Nợ 801/Có 4911", "Nợ 801/Có 4913", "Nợ 4911/Có 4211", "Nợ 4913/Có 4211"], answer: 1 },

  { question: "Tính lãi dự chi tiền gửi thanh toán:", options: ["Nợ 801/Có 4232", "Nợ 801/Có 4913", "Nợ 801/Có 4911", "Nợ 4913/Có 4232"], answer: 2 },

  { question: "Nộp tiền mặt mở TK tiền gửi thanh toán:", options: ["Nợ 1011/Có 4232", "Nợ 4232/Có 1011", "Nợ 1011/Có 4211", "Nợ 4211/Có 1011"], answer: 2 },

  { question: "Nhập vốn lãi sổ tiết kiệm đến hạn:", options: ["Nợ 4913/Có 4232", "Nợ 4913/Có 4211", "Nợ 4211/Có 4913", "Nợ 4232/Có 4913"], answer: 0 },

  { question: "Trích tiền gửi thanh toán mở sổ tiết kiệm:", options: ["Nợ 4232/Có 4211", "Nợ 4211/Có 1011", "Nợ 1011/Có 4232", "Nợ 4211/Có 4232"], answer: 3 },

  { question: "Rút lãi sổ tiết kiệm bằng tiền mặt (chưa dự chi):", options: ["Nợ 4913/Có 1011", "Nợ 1011/Có 4913", "Nợ 801/Có 1011", "Nợ 1011/Có 801"], answer: 2 },

  { question: "A chuyển tiền thanh toán cho B cùng ngân hàng:", options: ["Nợ 4211(A)/Có 4211(B)", "Nợ 4211(B)/Có 4211(A)", "Nợ 4211(A)/Có 1011", "Nợ 1011/Có 4211(A)"], answer: 0 },

  { question: "Tất toán sổ tiết kiệm nhập gốc+lãi vào TGTT:", options: ["Nợ 4211/Có 4232,4913", "Nợ 4211/Có 4232,4911", "Nợ 4232,4911/Có 4211", "Nợ 4232,4913/Có 4211"], answer: 3 },

  { question: "Trả lãi trước sổ tiết kiệm bằng tiền mặt:", options: ["Nợ 801/Có 1011", "Nợ 388/Có 1011", "Nợ 4911/Có 1011", "Nợ 4913/Có 1011"], answer: 1 },

  { question: "Nhập lãi tiền gửi thanh toán (đã dự chi):", options: ["Nợ 4911/Có 4211", "Nợ 4913/Có 4211", "Nợ 4211/Có 4911", "Nợ 4211/Có 4913"], answer: 0 },

  { question: "Phân bổ lãi tiền gửi tiết kiệm trả trước:", options: ["Nợ 801/Có 388", "Nợ 388/Có 801", "Nợ 801/Có 1011", "Nợ 801/Có 4211"], answer: 0 },

  { question: "Khoản vay ngắn hạn quá hạn 100 ngày thuộc nhóm nợ:", options: ["Nợ nhóm 2", "Nợ nhóm 3", "Nợ nhóm 4", "Nợ nhóm 5"], answer: 2 },

  { question: "Mục đích phân loại các nhóm nợ:", options: ["Quản lý lần vay tiếp theo", "Cơ sở trích lập dự phòng", "Đánh giá rủi ro nợ", "Cả 3 đáp án"], answer: 3 },

  { question: "Tỷ lệ trích lập dự phòng nợ nhóm 5:", options: ["5%", "20%", "50%", "100%"], answer: 3 },

  { question: "Mức trích lập dự phòng chung nhóm 1–4:", options: ["5%", "0.75%", "20%", "50%"], answer: 1 },

  { question: "Nợ ngắn hạn VNĐ chuyển từ nhóm 3 sang nhóm 4 theo dõi TK:", options: ["TK2111", "TK2112", "TK2121", "TK2122"], answer: 3 },

  { question: "Ngân hàng tính lãi dự thu cho khoản vay từ nhóm 1 đến 5:", options: ["Đúng", "Sai"], answer: 1 },

  { question: "TK219 ghi Nợ khi:", options: ["Trích lập dự phòng", "Sử dụng xử lý rủi ro", "Chuyển nợ quá hạn", "Không đáp án đúng"], answer: 1 },

  { question: "TK394 dùng để:", options: ["Tính lãi tiền gửi", "Tính lãi phải thu", "Thu lãi đã dự thu", "Cả b và c"], answer: 3 },

  { question: "Vay trả góp gốc đều, lãi giảm dần – tiền thu mỗi kỳ:", options: ["Gốc + tổng lãi", "Gốc/kỳ + lãi kỳ đó", "Gốc + lãi kỳ đó", "Gốc/kỳ + tổng lãi"], answer: 1 },

  { question: "Thu nợ đã xóa của KH ghi nhận vào:", options: ["Thu nhập tín dụng", "Chi phí khác", "Thu nhập khác", "Chi phí tín dụng"], answer: 2 },

  { question: "Tính lãi dự thu cho vay:", options: ["Nợ 394/Có 702", "Nợ 702/Có 394", "Nợ 4211/Có 702", "Nợ 702/Có 4211"], answer: 0 },

  { question: "Thu lãi vay ngắn hạn bằng tiền mặt:", options: ["Nợ 394/Có 702", "Nợ 702/Có 394", "Nợ 1011/Có 394", "Nợ 394/Có 1011"], answer: 2 },

  { question: "Thu nợ khó đòi đã xóa, thu tiền mặt:", options: ["Nợ 1011/Có 79", "Nợ 79/Có 1011", "Nợ 1011/Có 79 + Nợ 971", "Nợ 1011/Có 79 + Có 971"], answer: 2 },

  { question: "Giải ngân vay ngắn hạn chuyển vào TGTT:", options: ["Nợ 2111/Có 4211", "Nợ 2112/Có 4211", "Nợ 4211/Có 2111", "Nợ 4211/Có 2112"], answer: 0 },

  { question: "Chuyển nợ từ nhóm 2 sang nhóm 3:", options: ["Nợ 2112/Có 2111", "Nợ 2111/Có 2112", "Không làm gì", "Chỉ chuyển nhóm"], answer: 0 },

  { question: "Trích lập dự phòng cho vay:", options: ["Nợ 882/Có 219", "Nợ 219/Có 882", "Nợ 219/Có 2112", "Nợ 2112/Có 219"], answer: 0 },

  { question: "Xóa nợ bằng dự phòng:", options: ["Nợ 882/Có 219 + Nợ 971", "Nợ 219/Có 2112", "Nợ 219/Có 2112 + Nợ 971", "Nợ 2112/Có 219 + Có 971"], answer: 2 },

  { question: "KH trả nợ vay ngắn hạn bằng tiền mặt:", options: ["Nợ 1011/Có 2111", "Nợ 1011/Có 2112", "Nợ 2111/Có 1011", "Nợ 2112/Có 1011"], answer: 0 },

  { question: "Chuyển vay từ nhóm 1 sang nhóm 2:", options: ["Nợ 2111/Có 2112", "Nợ 2112/Có 2111", "Không cần hạch toán", "Cả 3 sai"], answer: 2 },

  { question: "Tiền gửi thanh toán theo dõi TK:", options: ["TK4211", "TK2111", "TK427", "TK454"], answer: 0 },

  { question: "Thanh toán cùng hệ thống khác chi nhánh dùng TK:", options: ["TK519", "TK5012", "TK4211", "TK1113"], answer: 0 },

  { question: "Thanh toán khác hệ thống dùng TK:", options: ["TK519", "TK5012", "TK4211", "TK1113"], answer: 1 },

  { question: "Tiền ký quỹ KH theo dõi TK:", options: ["TK4211", "TK427", "TK454", "TK4232"], answer: 1 },

  { question: "Số dư cuối ngày TK519:", options: ["Bên Nợ", "Bên Có", "Nợ hoặc Có", "Nợ và Có"], answer: 2 },

  { question: "Số dư cuối ngày TK5012:", options: ["Bên Nợ", "Bên Có", "Nợ hoặc Có", "Không có"], answer: 3 },

  { question: "TK519 dư Nợ cuối ngày là:", options: ["Tài sản NH", "Nợ phải trả", "VCSH", "Thu nhập"], answer: 0 },

  { question: "Phí chuyển tiền KH trả ghi vào TK:", options: ["TK702", "TK394", "TK711", "TK713"], answer: 2 },

  { question: "Thẻ tín dụng của KH là:", options: ["Tài sản NH", "Nợ phải trả", "VCSH", "Thu nhập"], answer: 0 },

  { question: "Theo dõi tiền thẻ tín dụng dùng TK:", options: ["TK211", "TK4211", "TK4232", "TK394"], answer: 0 },

  { question: "Nhận ký quỹ tiền mặt:", options: ["Nợ 427/Có 111", "Nợ 427/Có 4211", "Nợ 1011/Có 427", "Nợ 4211/Có 427"], answer: 2 },

  { question: "Số dư Có TK519 cuối ngày là:", options: ["Tài sản", "Nợ phải trả", "VCSH", "Không đáp án"], answer: 1 },

  { question: "Thu chênh lệch phải thu qua NH chủ trì:", options: ["Nợ 5012/Có 4211", "Nợ 5012/Có 1113", "Nợ 1113/Có 5012", "Nợ 4211/Có 5012"], answer: 2 },

  { question: "Bảo chi séc:", options: ["Nợ 4271/Có 4211", "Nợ 4211/Có 4271", "Nợ 4271/Có 1011", "Nợ 1011/Có 4271"], answer: 1 },

  { question: "Thanh toán chênh lệch phải trả NH chủ trì:", options: ["Nợ 5012/Có 4211", "Nợ 5012/Có 1113", "Nợ 1113/Có 5012", "Nợ 4211/Có 5012"], answer: 1 },

  { question: "Thanh toán hàng hóa bằng thẻ tín dụng:", options: ["Nợ 4211/Có 211", "Nợ 211/Có 4211", "Nợ 4211/Có 1011", "Nợ 1011/Có 4211"], answer: 1 },

  { question: "Rút tiền ATM cùng hệ thống:", options: ["Nợ 4211/Có 1011", "Nợ 4211/Có 1014", "Nợ 211/Có 1011", "Nợ 211/Có 1014"], answer: 1 },

  { question: "Rút tiền ATM khác hệ thống:", options: ["Nợ 4211/Có 5012", "Nợ 4211/Có 1014", "Nợ 4211/Có 1011", "Nợ 5012/Có 1014"], answer: 0 },

  { question: "Phí rút tiền ATM:", options: ["Nợ 4211/Có 702,4531", "Nợ 4211/Có 711,4531", "Nợ 1011/Có 702,4531", "Nợ 1011/Có 711,4531"], answer: 1 },

  { question: "Chuyển tiền khác hệ thống:", options: ["Nợ 5012/Có 4211", "Nợ 519/Có 4211", "Nợ 4211/Có 519", "Nợ 4211/Có 5012"], answer: 3 },

  { question: "Chuyển tiền cùng ngân hàng khác chi nhánh:", options: ["Nợ 5012/Có 4211", "Nợ 519/Có 4211", "Nợ 211/Có 519", "Nợ 4211/Có 5012"], answer: 1 },

  { question: "A chuyển tiền cho B cùng ngân hàng:", options: ["Nợ 4211(A)/Có 4211(B)", "Nợ 4211(B)/Có 4211(A)", "Nợ 4211(A)/Có 519", "Nợ 4211(A)/Có 5012"], answer: 0 }


];




/* ================== RENDER + CHẤM ================== */

function renderQuiz() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  questions.forEach((q, i) => {
    quiz.innerHTML += `
      <div class="question" id="q${i}">
        <p><b>Câu ${i+1}:</b> ${q.question}</p>
        ${q.options.map((op,j)=>`
          <label>
            <input type="radio" name="q${i}" value="${j}"> ${op}
          </label><br>
        `).join("")}
      </div>
    `;
  });
}

document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;

  questions.forEach((q,i)=>{
    const sel = document.querySelector(`input[name="q${i}"]:checked`);
    const box = document.getElementById(`q${i}`);
    box.classList.remove("correct","wrong");

    if(sel && Number(sel.value)===q.answer){
      score++;
      box.classList.add("correct");
    }else{
      box.classList.add("wrong");
    }
  });

  document.getElementById("result").innerHTML =
    `🎯 Kết quả: ${score}/${questions.length} câu đúng`;
});

renderQuiz();

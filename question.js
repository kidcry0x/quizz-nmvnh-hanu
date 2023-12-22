window._questions = [];

const CHUONG_1 = [
//CHƯƠNG I. KHÁI QUÁT VỀ LỊCH SỬ VÀ QUÁ TRÌNH PHÁT TRIỂN TIẾNG VIỆT
    {
        question: 'Phương pháp so sánh NN nào được dùng để xác định nguồn gốc của một ngôn ngữ?',
        answers: [
            { text: 'Phương pháp so sánh hình thái học', correct: false },
            { text: 'Phương pháp so sánh ngữ âm', correct: false },
            { text: 'Phương pháp so sánh lịch sử', correct: true },
            { text: 'Phương pháp so sánh từ vựng', correct: false },
        ],
    },
    {
        question: 'Phương pháp so sánh NN nào không chú trọng đến quan hệ họ hàng giữa các ngôn ngữ được so sánh?',
        answers: [
            { text: 'Phương pháp so sánh loại hình', correct: true },
            { text: 'Phương pháp so sánh cấu trúc', correct: false },
            { text: 'Phương pháp so sánh lịch sử', correct: false },
            { text: 'Phương pháp so sánh ngữ cảnh', correct: false },
        ],
    },
    {
        question: 'Họ NN Nam Á hiện diện ở các khu vực địa lý nào?',
        answers: [
            { text: 'Đông Nam Á', correct: true },
            { text: 'Nam Á', correct: false },
            { text: 'Trung Á', correct: false },
            { text: 'Đông Á', correct: false },
        ],
    },
    {
        question: 'Xét về phạm vi không gian địa lý, ĐNA hành chính có tương quan thế nào với ĐNA địa - ngôn ngữ?',
        answers: [
            { text: 'Nhỏ hơn', correct: true },
            { text: 'Lớn hơn', correct: false },
            { text: 'Bằng nhau', correct: false },
            { text: 'Không có mối tương quan', correct: false },
        ],
    },
    {
        question: 'Tiếng Việt là NN thuộc nhóm nào?',
        answers: [
            { text: 'Nhóm Việt-Mường', correct: true },
            { text: 'Nhóm Môn-Khơ me', correct: false },
            { text: 'Nhóm Tày-Thái', correct: false },
            { text: 'Nhóm Mông-Dao', correct: false },
        ],
    },
    {
        question: 'Chữ quốc ngữ được hình thành từ khoảng thời gian nào?',
        answers: [
            { text: 'Thế kỉ XVII', correct: true },
            { text: 'Thế kỉ XVII và XVIII', correct: false },
            { text: 'Thế kỉ XIX', correct: false },
            { text: 'Thế kỉ XX', correct: false },
        ],
    },
    {
        question: 'Trong từ vựng tiếng Việt, từ ngữ chiếm số lượng lớn nhất có nguồn gốc từ ngôn ngữ nào?',
        answers: [
            { text: 'Tiếng Hán', correct: true },
            { text: 'Tiếng Pháp', correct: false },
            { text: 'Tiếng Anh', correct: false },
            { text: 'Tiếng Bồ Đào Nha', correct: false },
        ],
    },
    {
        question: 'Tiếng Việt cận đại (nửa cuối thế kỷ XIX - 1945) sử dụng những loại văn tự nào?',
        answers: [
            { text: 'Có 4 văn tự: chữ Pháp, chữ Hán, chữ Nôm, chữ quốc ngữ', correct: true },
            { text: 'Có 3 văn tự: chữ Pháp, chữ Nôm, chữ quốc ngữ', correct: false },
            { text: 'Có 2 văn tự: chữ Hán, chữ quốc ngữ', correct: false },
            { text: 'Có 4 văn tự: chữ Anh, chữ Hán, chữ Nôm, chữ quốc ngữ', correct: false },
        ],
    },
    {
        question: 'Khi phân loại các ngôn ngữ theo nguồn gốc, bình diện nào đóng vai trò quyết định?',
        answers: [
            { text: 'Ngữ âm', correct: true },
            { text: 'Ngữ pháp', correct: false },
            { text: 'Từ vựng', correct: false },
            { text: 'Tiếp xúc văn hóa', correct: false },
        ],
    },
    {
        question: 'Cấu tạo chữ Nôm ... cấu tạo chữ Hán',
        answers: [
            { text: 'vừa giống, vừa khác', correct: true },
            { text: 'hoàn toàn khác', correct: false },
            { text: 'hoàn toàn giống', correct: false },
            { text: 'không thể so sánh được', correct: false },
        ],
    },
    {
        question: 'Nhận định nào sau đây về nguồn gốc tiếng Việt hiện được phần lớn giới nghiên cứu nhất trí?',
        answers: [
            { text: 'Tiếng Việt thuộc họ Nam Á, nhánh Môn Khmer, nhóm Việt Mường', correct: true },
            { text: 'Tiếng Việt có liên quan với ngôn ngữ của người Kinh và người Mường', correct: false },
            { text: 'Tiếng Việt có sự tương quan với ngôn ngữ của các dân tộc Nam Á', correct: false },
            { text: 'Tiếng Việt có liên quan với ngôn ngữ của người Kinh và người Mường', correct: false },
        ],
    },
    {
        question: 'Ngữ hệ là tập hợp các ngôn ngữ có quan hệ ...',
        answers: [
            { text: 'Họ hàng với nhau, cùng xuất phát từ một NN gốc', correct: true },
            { text: 'Có sự tương quan về ngữ âm, ngữ pháp và từ vựng', correct: false },
            { text: 'Phát triển và thay đổi trong cùng một khu vực địa lý', correct: false },
            { text: 'Có sự tương quan về ngữ âm, ngữ pháp và từ vựng', correct: false },
        ],
    },
    {
        question: 'Xét về nguồn gốc, từ vựng tiếng Việt gồm các từ ngữ thuộc những nguồn gốc nào?',
        answers: [
            { text: 'Nam Á, Tày Thái, Hán, Ấn Âu', correct: true },
            { text: 'Nam Á, Mông Cổ, Pháp, Trung Quốc', correct: false },
            { text: 'Tây Ban Nha, Ấn Độ, Hán, Khmer', correct: false },
            { text: 'Mông Cổ, Lào, Pháp, Hồi giáo', correct: false },
        ],
    }
];

const CHUONG_2 = [
    //CHƯƠNG 2: NGỮ ÂM
    {
        question: 'Thanh bằng trong tiếng Việt gồm những thanh nào?',
        answers: [
            { text: 'thanh ngang, thanh huyền', correct: true },
            { text: 'thanh sắc, thanh hỏi', correct: false },
            { text: 'thanh nặng, thanh ngã', correct: false },
            { text: 'thanh ngang, thanh nặng', correct: false },
        ],
    },
    {
        question: 'Dựa vào tiêu chí nào mà thanh điệu được phân thành gãy và không gãy?',
        answers: [
            { text: 'Dựa vào đường nét của thanh điệu', correct: true },
            { text: 'Dựa vào chiều dài của thanh điệu', correct: false },
            { text: 'Dựa vào khoảng cách giữa các thanh điệu', correct: false },
            { text: 'Dựa vào độ cong của thanh điệu', correct: false },
        ],
    },
    {
        question: 'Dựa vào tiêu chí nào mà thanh điệu được phân thành thanh bằng và thanh trắc',
        answers: [
            { text: 'Dựa vào âm điệu', correct: true },
            { text: 'Dựa vào chiều dài của thanh điệu', correct: false },
            { text: 'Dựa vào khoảng cách giữa các thanh điệu', correct: false },
            { text: 'Dựa vào độ cong của thanh điệu', correct: false },
        ],
    },
    {
        question: 'Thanh nào sau đây có phẩm chất “âm vực cao, âm điệu bằng phẳng”',
        answers: [
            { text: 'Thanh ngang', correct: true },
            { text: 'Thanh hỏi', correct: false },
            { text: 'Thanh nặng', correct: false },
            { text: 'Thanh huyền', correct: false },
        ],
    },
    {
        question: 'Thanh nào sau đây có phẩm chất “ âm vực cao, âm điệu không bằng phẳng, đường nét gãy”',
        answers: [
            { text: 'Thanh ngã', correct: true },
            { text: 'Thanh hỏi', correct: false },
            { text: 'Thanh nặng', correct: false },
            { text: 'Thanh huyền', correct: false },
        ],
    },
    {
        question: 'Thanh ngã và thanh hỏi phân biệt nhau theo tiêu chí nào?',
        answers: [
            { text: 'Âm vực (thanh ngã có âm vực cao, thanh hỏi âm vực thấp)', correct: true },
            { text: 'Độ dài của thanh điệu', correct: false },
            { text: 'Độ cong của thanh điệu', correct: false },
            { text: 'Khoảng cách giữa các thanh điệu', correct: false },
        ],
    },
    {
        question: 'Thanh hỏi và thanh huyền không xuất hiện trong các âm tiết kết thúc bằng loại phụ âm nào?',
        answers: [
            { text: 'phụ âm tắc vô thanh /p, t, k/', correct: true },
            { text: 'phụ âm mũi /m, n, ŋ/', correct: false },
            { text: 'phụ âm rơi /r/', correct: false },
            { text: 'phụ âm xốp /s, h/', correct: false },
        ],
    },
    {
        question: 'Trong tiếng Việt, nguyên âm đôi nào được thể hiện bằng nhiều hình thức chữ viết nhất?',
        answers: [
            { text: 'nguyên âm /-ie-/ được thể hiện bằng con chữ iê, yê, ia, ya', correct: true },
            { text: 'nguyên âm /-oa-/', correct: false },
            { text: 'nguyên âm /-ây-/', correct: false },
            { text: 'nguyên âm /-uy-/', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết tiếng Việt, thành phần nào luôn được thể hiện bằng chữ viết?',
        answers: [
            { text: 'âm chính', correct: true },
            { text: 'âm đầu', correct: false },
            { text: 'âm cuối', correct: false },
            { text: 'âm đệm', correct: false },
        ],
    },
    {
        question: 'Âm tiết “muốn” có những thành phần âm vị nào được thể hiện bằng chữ viết?',
        answers: [
            { text: 'âm đầu /m-/, âm chính /-uo-/, âm cuối /-n/ và thanh sắc (5)', correct: true },
            { text: 'âm đầu /-mu-/, âm chính /-ốn-/, âm cuối /-p/', correct: false },
            { text: 'âm đầu /-m-/, âm chính /-ư-/, âm cuối /-n/', correct: false },
            { text: 'âm đầu /-m-/, âm chính /-u-/, âm cuối /-ng/', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết “say”, “a” là sự thể hiện chữ viết của âm vị nào?',
        answers: [
            { text: 'âm vị “ă” vì sau nó là âm vị /-j/', correct: true },
            { text: 'âm vị “ay” vì sau nó là âm vị /-t/', correct: false },
            { text: 'âm vị “â” vì sau nó là âm vị /-y/', correct: false },
            { text: 'âm vị “a” vì sau nó là âm vị /-p/', correct: false },
        ],
    },
    {
        question: 'Âm tiết “tai” và “tay” khác nhau ở thành phần âm vị nào?',
        answers: [
            { text: 'âm chính /a/ trong “tai” và âm chính “ă” trong “tay”', correct: true },
            { text: 'âm chính /ai/ trong “tai” và âm chính “ay” trong “tay”', correct: false },
            { text: 'âm chính /t/ trong “tai” và âm chính “t” trong “tay”', correct: false },
            { text: 'âm chính /i/ trong “tai” và âm chính “a” trong “tay”', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết “mua”, tổ hợp “ua” là sự thể hiện chữ viết của thành phần âm vị nào?',
        answers: [
            { text: 'âm chính', correct: true },
            { text: 'âm đầu', correct: false },
            { text: 'âm cuối', correct: false },
            { text: 'âm đệm', correct: false },
        ],
    },
    {
        question: 'Bậc 2 trong cấu trúc âm tiết tiếng Việt gồm những thành phần nào?',
        answers: [
            { text: 'âm đệm, âm chính, âm cuối', correct: true },
            { text: 'âm đầu, âm chính, âm cuối', correct: false },
            { text: 'âm đầu, âm chính', correct: false },
            { text: 'âm đệm, âm chính', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết “nhanh”, con chữ “a” là sự thể hiện chữ viết của âm vị nào?',
        answers: [
            { text: 'âm vị /-εˇ-/', correct: true },
            { text: 'âm vị /-i-/', correct: false },
            { text: 'âm vị /-ɑˇ-/', correct: false },
            { text: 'âm vị /-o-/', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết “thuở”, tổ hợp “uơ” là sự thể hiện chữ viết của thành phần âm vị nào?',
        answers: [
            { text: 'âm đệm, âm cuối', correct: true },
            { text: 'âm đầu, âm cuối', correct: false },
            { text: 'âm đầu, âm chính', correct: false },
            { text: 'âm chính, âm cuối', correct: false },
        ],
    },
    {
        question: 'Âm vị âm cuối /k/ trong tiếng Việt được thể hiện bằng những con chữ nào?',
        answers: [
            { text: 'c, ch', correct: true },
            { text: 'p, t', correct: false },
            { text: 'm, n', correct: false },
            { text: 's, h', correct: false },
        ],
    },
    {
        question: 'Âm tiết “xao” và “sau” có thành phần âm vị nào khác nhau?',
        answers: [
            { text: 'Âm đầu và âm chính', correct: true },
            { text: 'Âm chính và âm cuối', correct: false },
            { text: 'Âm đầu và âm cuối', correct: false },
            { text: 'Âm đệm và âm chính', correct: false },
        ],
    },
    {
        question: 'Con chữ nào trong âm tiết “quốc” là sự thể hiện chữ viết của âm vị âm chính?',
        answers: [
            { text: '“ô”', correct: true },
            { text: '“qu”', correct: false },
            { text: '“c”', correct: false },
            { text: '“u”', correct: false },
        ],
    },
    {
        question: 'Trong âm tiết “võng”, con chữ “o” là sự thể hiện chữ viết của âm vị nào?',
        answers: [
            { text: '/ɔˇ/', correct: true },
            { text: '/o/', correct: false },
            { text: '/ɑˇ/', correct: false },
            { text: '/ɔ/', correct: false },
        ],
    }
];

const CHUONG_3 = [
    //CHƯƠNG 3: TỪ VỰNG - NGỮ NGHĨA
    {
        question: 'Đơn vị nào là đơn vị cấu tạo từ?',
        answers: [
            { text: 'Hình vị', correct: true },
            { text: 'Âm vị', correct: false },
            { text: 'Từ ngữ', correct: false },
            { text: 'Nguyên âm', correct: false },
        ],
    },
    {
        question: 'Tiếng Việt sử dụng những phương thức cấu tạo từ chủ yếu nào?',
        answers: [
            { text: 'Từ hóa hình vị, ghép hình vị, láy hình vị', correct: true },
            { text: 'Từ ghép, cấu trúc ngữ pháp', correct: false },
            { text: 'Láy vần, hoán dụ', correct: false },
            { text: 'Ẩn dụ, trường nghĩa', correct: false },
        ],
    },
    {
        question: 'Các từ “ăn, đi, chơi, ngủ” được tạo thành theo phương thức cấu tạo từ nào?',
        answers: [
            { text: 'Từ hóa hình vị', correct: true },
            { text: 'Láy vần', correct: false },
            { text: 'Từ ghép', correct: false },
            { text: 'Ẩn dụ', correct: false },
        ],
    },
    {
        question: '“Lấn bấn, lè nhè, tủn mủn” là các từ láy thuộc nhóm nào?',
        answers: [
            { text: 'Láy vần ( Hình vị láy và hình vị gốc có vần giống nhau)', correct: true },
            { text: 'Láy hình vị', correct: false },
            { text: 'Láy ghép', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: '“Lùng tùng, lèng tèng, lủng củng” là các từ láy thuộc nhóm nào?',
        answers: [
            { text: 'Láy vần (hình vị láy và hình vị gốc có vần, thanh điệu giống nhau)', correct: true },
            { text: 'Láy hình vị', correct: false },
            { text: 'Láy ghép', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: 'Trong câu “Những dòng chữ đều tăm tắp như nhảy múa trước mắt tôi”, từ “dòng” được dùng theo phương thức chuyển nghĩa nào?',
        answers: [
            { text: 'Ẩn dụ', correct: true },
            { text: 'Láy vần', correct: false },
            { text: 'Hoán dụ', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: 'Trong câu “Ngồi đây làm bát tiết canh đã” từ “bát” được dùng theo phương thức chuyển nghĩa nào?',
        answers: [
            { text: 'Hoán dụ', correct: true },
            { text: 'Ẩn dụ', correct: false },
            { text: 'Láy vần', correct: false },
            { text: 'Láy ghép', correct: false },
        ],
    },
    {
        question: 'Trong câu “Nàng là cô Tấm trong mắt tôi”, cụm từ “cô Tấm” được dùng theo phương thức chuyển nghĩa nào?',
        answers: [
            { text: 'Ẩn dụ', correct: true },
            { text: 'Láy vần', correct: false },
            { text: 'Hoán dụ', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: 'Trong các cụm từ “cắt viện trợ, câu hỏi vặn”, từ “cắt” và “vận” được dùng theo phương thức chuyển nghĩa nào?',
        answers: [
            { text: 'Ẩn dụ', correct: true },
            { text: 'Láy vần', correct: false },
            { text: 'Hoán dụ', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: '“Cơ” trong “cơ hàn” và “cơ” trong “động cơ” là:',
        answers: [
            { text: 'Những yếu tố đồng âm', correct: true },
            { text: 'Những yếu tố trái nghĩa', correct: false },
            { text: 'Những yếu tố láy vần', correct: false },
            { text: 'Những yếu tố láy ghép', correct: false },
        ],
    },
    {
        question: '“Tâm” trong “lương tâm” và “tâm” trong “tâm bão” là:',
        answers: [
            { text: 'Yếu tố đa nghĩa', correct: true },
            { text: 'Yếu tố trái nghĩa', correct: false },
            { text: 'Yếu tố đồng âm', correct: false },
            { text: 'Yếu tố láy vần', correct: false },
        ],
    },
    {
        question: 'Cách diễn đạt nào sau đây thể hiện nội dung của khái niệm từ đồng âm?',
        answers: [
            { text: 'Từ đồng âm là những từ giống nhau về hình thức ngữ âm nhưng khác nhau về nghĩa', correct: true },
            { text: 'Từ ghép là những từ có nghĩa giống nhau', correct: false },
            { text: 'Từ hoán dụ là những từ thay thế cho nhau', correct: false },
            { text: 'Từ láy là những từ được tạo thành từ nguyên âm', correct: false },
        ],
    },
    {
        question: 'Cách diễn đạt nào sau đây thể hiện nội dung của khái niệm trường nghĩa:',
        answers: [
            { text: 'Trường nghĩa là tập hợp các đơn vị từ vựng có quan hệ với nhau về nghĩa, giữa chúng có chung một thành tố nghĩa', correct: true },
            { text: 'Trường nghĩa là tập hợp các từ có hình thức giống nhau', correct: false },
            { text: 'Trường nghĩa là sự kết hợp của âm vị và thanh điệu', correct: false },
            { text: 'Trường nghĩa là một cách diễn đạt bằng từ láy', correct: false },
        ],
    },
    {
        question: 'Các từ “hơn hớn, tưng tức, ang ác, nơm nớp” được xếp vào loại từ láy nào sau đây?',
        answers: [
            { text: 'Láy hoàn toàn', correct: true },
            { text: 'Láy vần', correct: false },
            { text: 'Láy hình vị', correct: false },
            { text: 'Láy nghĩa', correct: false },
        ],
    },
    {
        question: 'Cụm từ nào sau đây là một quán ngữ',
        answers: [
            { text: '“Chẳng qua là”', correct: true },
            { text: '“Chẳng qua cầu vồng”', correct: false },
            { text: '“Chẳng qua sông”', correct: false },
            { text: '“Chẳng qua núi”', correct: false },
        ],
    },
    {
        question: 'Cụm từ “Mắt lá dăm” được xếp vào loại CTCĐ nào sau đây?',
        answers: [
            { text: 'Ngữ cố định định danh', correct: true },
            { text: 'Ngữ cố định biểu hiện', correct: false },
            { text: 'Quán ngữ', correct: false },
            { text: 'Ngữ cố định mô tả', correct: false },
        ],
    },
    {
        question: 'Cụm từ “Nói dại đổ đi” được xếp vào loại CTCĐ nào sau đây?',
        answers: [
            { text: 'Quán ngữ', correct: true },
            { text: 'Ngữ cố định mô tả', correct: false },
            { text: 'Ngữ cố định biểu hiện', correct: false },
            { text: 'Ngữ cố định định danh', correct: false },
        ],
    }
];

const CHUONG_4 = [
    //CHƯƠNG 4. NGỮ PHÁP (TỪ LOẠI)
    {
        question: 'Liên từ là tiểu nhóm thuộc từ loại nào?',
        answers: [
            { text: 'Quan hệ từ/ Kết từ', correct: true },
            { text: 'Trợ từ', correct: false },
            { text: 'Tình thái từ', correct: false },
            { text: 'Đại từ', correct: false },
        ],
    },
    {
        question: 'Trợ từ là tiểu nhóm thuộc từ loại nào?',
        answers: [
            { text: 'Tình thái từ', correct: true },
            { text: 'Quan hệ từ/ Kết từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Phụ từ', correct: false },
        ],
    },
    {
        question: 'Tiểu từ tình thái là tiểu nhóm thuộc từ loại nào?',
        answers: [
            { text: 'Tình thái từ', correct: true },
            { text: 'Liên từ', correct: false },
            { text: 'Quan hệ từ/ Kết từ', correct: false },
            { text: 'Phụ từ', correct: false },
        ],
    },
    {
        question: 'Định từ là nhóm từ chuyên phụ cho từ loại nào?',
        answers: [
            { text: 'Danh từ', correct: true },
            { text: 'Tính từ', correct: false },
            { text: 'Trợ từ', correct: false },
            { text: 'Đại từ', correct: false },
        ],
    },
    {
        question: 'Từ loại nào là lớp từ mang ý nghĩa khái quát thực thể, sự vật tính?',
        answers: [
            { text: 'Danh từ', correct: true },
            { text: 'Tính từ', correct: false },
            { text: 'Đại từ', correct: false },
            { text: 'Trợ từ', correct: false },
        ],
    },
    {
        question: 'Lớp từ nào có chức năng thay thế cho một số từ loại khác?',
        answers: [
            { text: 'Đại từ', correct: true },
            { text: 'Quan hệ từ/ Kết từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Tính từ', correct: false },
        ],
    },
    {
        question: 'Từ loại nào là lớp từ chuyên đi kèm danh từ, động từ, tính từ bổ sung ý nghĩa cho các từ loại này?',
        answers: [
            { text: 'Phụ từ', correct: true },
            { text: 'Quan hệ từ/ Kết từ', correct: false },
            { text: 'Trợ từ', correct: false },
            { text: 'Tính từ', correct: false },
        ],
    },
    {
        question: 'Cách diễn đạt nào thể hiện nội dung của khái niệm tính từ?',
        answers: [
            { text: 'Tính từ là từ chỉ tính chất, đặc điểm của sự vật, hoạt động và trạng thái', correct: true },
            { text: 'Tính từ là từ chỉ hành động', correct: false },
            { text: 'Tính từ là từ chỉ vị trí', correct: false },
            { text: 'Tính từ là từ chỉ thời gian', correct: false },
        ],
    },
    {
        question: 'Phạm trù hư từ mang đặc trưng nào?',
        answers: [
            { text: 'Bản chất ý nghĩa thiên về tính chất ngữ pháp, không có ý nghĩa từ vựng', correct: true },
            { text: 'Bản chất ý nghĩa thiên về ngữ âm, không có ý nghĩa ngữ pháp', correct: false },
            { text: 'Bản chất ý nghĩa thiên về ý nghĩa từ vựng, không có ý nghĩa ngữ pháp', correct: false },
            { text: 'Bản chất ý nghĩa thiên về ngữ âm và ngữ pháp', correct: false },
        ],
    },
    {
        question: 'Từ loại nào chuyên được dùng để bổ sung ý nghĩa tình thái, nhấn mạnh cho một từ/ ngữ làm thành phần câu?',
        answers: [
            { text: 'Trợ từ', correct: true },
            { text: 'Phụ từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Đại từ', correct: false },
        ],
    },
    {
        question: 'Các từ “hòn, mảnh, viên, quyển” được xếp vào từ loại nào?',
        answers: [
            { text: 'Danh từ đơn vị', correct: true },
            { text: 'Đại từ', correct: false },
            { text: 'Tính từ', correct: false },
            { text: 'Trợ từ', correct: false },
        ],
    },
    {
        question: 'Nhóm từ loại nào thuộc phạm trù thực từ?',
        answers: [
            { text: 'Động từ, danh từ, tính từ, số từ, đại từ', correct: true },
            { text: 'Liên từ, số từ, đại từ', correct: false },
            { text: 'Trợ từ, Động từ, danh từ, tính từ', correct: false },
            { text: 'Phụ từ, danh từ, tính từ, số từ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Tôi nghĩ đến cha tôi”, từ “đến” được xếp vào từ loại nào?',
        answers: [
            { text: 'Giới từ', correct: true },
            { text: 'Trợ từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Phụ từ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Đến tôi cũng không hiểu ra làm sao”, từ “đến” được xếp vào từ loại nào sau đây?',
        answers: [
            { text: 'Trợ từ', correct: true },
            { text: 'Giới từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Phụ từ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Chờ em tẹo đã”, từ “đã” được xếp vào từ loại nào?',
        answers: [
            { text: 'Tình thái từ', correct: true },
            { text: 'Trợ từ', correct: false },
            { text: 'Liên từ', correct: false },
            { text: 'Phụ từ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Tôi chỉ có mỗi mình nó là con trai”, từ “chỉ” được xếp vào từ loại nào?',
        answers: [
            { text: 'Trợ từ', correct: true },
            { text: 'Liên từ', correct: false },
            { text: 'Phụ từ', correct: false },
            { text: 'Giới từ', correct: false },
        ],
    }
];

const CHUONG_5 = [
    //CHƯƠNG 4. NGỮ PHÁP (CÂU)
    {
        question: 'Nòng cốt câu bao gồm những thành phần nào?',
        answers: [
            { text: 'Chủ ngữ, vị ngữ, bổ ngữ', correct: true },
            { text: 'Trạng ngữ, chủ ngữ, bổ ngữ', correct: false },
            { text: 'Chủ ngữ, vị ngữ, tân ngữ', correct: false },
            { text: 'Trạng ngữ, vị ngữ, tân ngữ', correct: false },
        ],
    },
    {
        question: 'Câu “Trong 4 năm ở đây, tôi đã mua 4 cái nhà” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Nó thấy buồn, cười nhạt nhẽo rồi ngồi xuống” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Cụm từ được gạch chân trong câu “Cô ấy đi mua đồ, |nhân thể ghé thăm tôi|, tối muộn mới về”, đảm nhiệm chức năng NP của thành phần câu nào? (lưu ý: phần gạch chân chính là phần nằm trong |...|)',
        answers: [
            { text: 'Trạng ngữ', correct: true },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Vị ngữ', correct: false },
            { text: 'Tân ngữ', correct: false },
        ],
    },
    {
        question: 'Câu “Nó phá bao nhiêu, chị ấy buồn bấy nhiêu” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu ghép', correct: true },
            { text: 'Câu đơn', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Trong nhà ra mở cửa” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Cơm dọn rồi” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu ẩn CN', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Cụm từ được gạch chân trong câu “Bà là |quê hương của tôi|”, đảm nhiệm chức năng NP của thành phần câu nào? (lưu ý: phần gạch chân chính là phần nằm trong |...|)',
        answers: [
            { text: 'Vị ngữ', correct: true },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Trạng ngữ', correct: false },
            { text: 'Tân ngữ', correct: false },
        ],
    },
    {
        question: 'Câu “Cửa từ từ đóng” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Vì anh, tôi bị vạ lây” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Nó gãy tay”, ngữ đoạn nào đảm nhiệm chức năng CN ngữ pháp?',
        answers: [
            { text: 'Tay', correct: true },
            { text: 'Nó', correct: false },
            { text: 'Gãy tay', correct: false },
            { text: 'Nó gãy', correct: false },
        ],
    },
    {
        question: 'Câu “Nó bị mẹ phạt” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu đơn', correct: true },
            { text: 'Câu ghép', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Câu “Chiếc áo len này, mẹ đan cho tôi từ ngày tôi còn bé xíu, vẫn còn giữ nguyên màu” được xếp vào loại câu nào?',
        answers: [
            { text: 'Câu ghép', correct: true },
            { text: 'Câu đơn', correct: false },
            { text: 'Câu hỏi', correct: false },
            { text: 'Câu phức', correct: false },
        ],
    },
    {
        question: 'Các câu “ Tay tôi gãy”, “Tôi gãy tay”, “Gãy tay tôi rồi” khác nhau ở đâu?',
        answers: [
            { text: 'Cấu trúc cú pháp, ngữ nghĩa, ngữ dụng', correct: true },
            { text: 'Ngữ nghĩa, ngữ dụng', correct: false },
            { text: 'Cấu trúc cú pháp, ngữ nghĩa', correct: false },
            { text: 'Ngữ dụng', correct: false },
        ],
    },
    {
        question: 'Ngữ đoạn được gạch chân trong các câu “Cô ấy ra |phố|”, “Nó mua |sách|”, “Bà rán |cá|” đảm nhiệm chức năng ngữ pháp của thành phần câu nào? (lưu ý: phần gạch chân chính là phần nằm trong |...|)',
        answers: [
            { text: 'BN', correct: true },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Vị ngữ', correct: false },
            { text: 'Tân ngữ', correct: false },
        ],
    },
    {
        question: '... là cấu trúc tối giản đảm bảo cho câu độc lập về nội dung và hoàn chỉnh về hình thức',
        answers: [
            { text: 'Nòng cốt câu', correct: true },
            { text: 'Trạng ngữ', correct: false },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Vị ngữ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Thì ra nó ở đây”, “thì ra” đảm nhiệm chức năng NP nào?',
        answers: [
            { text: 'ĐNC', correct: true },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Vị ngữ', correct: false },
            { text: 'Tân ngữ', correct: false },
        ],
    },
    {
        question: 'Trong câu “Nháy mắt, Nhái Bén nhảy thoắt đến trước mặt tôi, nói ...”, “nháy măt” đảm nhiệm chức năng ngữ pháp nào?',
        answers: [
            { text: 'ĐNC', correct: true },
            { text: 'Chủ ngữ', correct: false },
            { text: 'Vị ngữ', correct: false },
            { text: 'Tân ngữ', correct: false },
        ],
    }
];
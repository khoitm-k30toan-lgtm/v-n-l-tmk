const questions = [
    {
        id: 1,
        question: "Các học thuyết, quan điểm về Nhà nước có mục tiêu:",
        options: [
            "Lý giải sự ra đời tồn tại và phát triển của nhà nước.",
            "Lý giải sự phát triển của xã hội.",
            "Lý giải thuyết khoa học về Nhà nước.",
            "Bảo vệ Nhà nước của giai cấp thống trị."
        ],
        answer: 0 // Đáp án đúng [cite: 191]
    },
    {
        id: 2,
        question: "Quan điểm nào cho rằng Nhà nước được tổ chức như một gia đình:",
        options: [
            "Học thuyết thần quyền.",
            "Học thuyết gia trưởng.",
            "Học thuyết khế ước xã hội.",
            "Học thuyết Mác - Lê Nin."
        ],
        answer: 1 // Đáp án đúng [cite: 191]
    },
    {
        id: 3,
        question: "Học thuyết khẳng định Nhà nước được hình thành bởi đấng tối cao:",
        options: [
            "Học thuyết thần quyền.",
            "Học thuyết gia trưởng.",
            "Học thuyết khế ước xã hội.",
            "Học thuyết Mác - Lê Nin."
        ],
        answer: 0 // Đáp án đúng [cite: 191]
    },
    {
        id: 4,
        question: "Quyền lực quản lý Nhà nước trong xã hội công xã thị tộc nhằm giải quyết nhu cầu:",
        options: [
            "Xây dựng và quản lý các công trình thủy lợi",
            "Tổ chức chiến tranh xâm lược và chống xâm lược.",
            "Quản lý các công việc của thị tộc.",
            "Trấn áp các giai cấp trong xã hội."
        ],
        answer: 2 // Đáp án đúng [cite: 191]
    },
    {
        id: 5,
        question: "Nhận định sai về nhà nước:",
        options: [
            "Nhà nước thiết lập quyền lực công cộng đặc biệt",
            "Nhà nước có chủ quyền quốc gia",
            "Nhà nước phân chia dân cư theo tôn giáo",
            "Nhà nước ban hành pháp luật và quản lý xã hội bằng pháp luật"
        ],
        answer: 2 // Đáp án đúng [cite: 191]
    },
    {
        id: 6,
        question: "Nguyên nhân xuất hiện của Nhà nước theo quan điểm Mác- Lênin là:",
        options: [
            "Sự hình thành và phát triển của tư hữu.",
            "Kinh tế phát triển, dẫn đến xã hội thay đổi.",
            "Sự phát triển của sản xuất và hình thành giai cấp.",
            "Sự hình thành chế độ tư hữu và đấu tranh giai cấp."
        ],
        answer: 0 // Đáp án đúng [cite: 191]
    },
    {
        id: 7,
        question: "Nguyên nhân xuất hiện của Nhà nước theo quan điểm Mác- Lênin là (câu hỏi biến thể):",
        options: [
            "Sự hình thành và phát triển của tư hữu.",
            "Kinh tế phát triển, dẫn đến xã hội thay đổi.",
            "Sự phát triển của sản xuất và hình thành giai cấp.",
            "Sự hình thành chế độ tư hữu và đấu tranh giai cấp."
        ],
        answer: 2 // Đáp án đúng [cite: 191]
    },
    {
        id: 8,
        question: "Chức năng của Nhà nước là:",
        options: [
            "Những mặt hoạt động của Nhà nước nhằm thực hiện nhiệm vụ của Nhà nước.",
            "Những công việc và mục đích mà Nhà nước cần giải quyết.",
            "Những chính sách do Nhà nước đặt ra.",
            "Những hoạt động cơ bản của Nhà nước."
        ],
        answer: 0 // Đáp án đúng [cite: 191, 192]
    },
    {
        id: 9,
        question: "Chức năng của Nhà nước là (câu hỏi biến thể):",
        options: [
            "Những mặt hoạt động của Nhà nước nhằm thực hiện nhiệm vụ của Nhà nước.",
            "Những công việc và mục đích mà Nhà nước cần giải quyết.",
            "Những chính sách do Nhà nước đặt ra.",
            "Những hoạt động cơ bản của Nhà nước."
        ],
        answer: 2 // Đáp án đúng [cite: 192]
    },
    {
        id: 10,
        question: "Chế độ chính trị của Nhà nước gồm:",
        options: [
            "Phương pháp dân chủ.",
            "Phương pháp phản dân chủ.",
            "Phương pháp dân chủ và phương pháp phản dân chủ.",
            "Phương pháp kinh tế."
        ],
        answer: 2 // Đáp án đúng [cite: 192]
    },
    {
        id: 11,
        question: "Toà án nhân dân có chức năng:",
        options: [
            "Thực hành quyền công tố",
            "Chức năng xét xử.",
            "Chức năng lập pháp, hành pháp và tư pháp.",
            "Chức năng hành pháp."
        ],
        answer: 1 // Đáp án đúng [cite: 192]
    },
    {
        id: 12,
        question: "Việt Nam hiện nay có bao nhiêu tỉnh, thành phố trực thuộc trung ương:",
        options: [
            "33",
            "34",
            "63",
            "36"
        ],
        answer: 1 // Đáp án đúng [cite: 192]
    },
    {
        id: 13,
        question: "Quốc hội Việt Nam có chức năng:",
        options: [
            "Lập hiến, lập pháp.",
            "Quyết định các vấn đề quan trọng của đất nước.",
            "Giám sát tối cao.",
            "Lập hiến, lập pháp, Quyết định các vấn đề quan trọng của đất nước và giám sát tối cao."
        ],
        answer: 3 // Đáp án đúng [cite: 192]
    },
    {
        id: 14,
        question: "Viện kiểm sát nhân dân có chức năng:",
        options: [
            "Thực hành quyền công tố.",
            "Kiểm sát hoạt động tuân theo pháp luật.",
            "Thực hành quyền công tố và kiểm sát hoạt động tuân theo pháp luật.",
            "Xét xử"
        ],
        answer: 2 // Đáp án đúng [cite: 192]
    },
    {
        id: 15,
        question: "Chức danh nào là nguyên thủ quốc gia ở Việt Nam:",
        options: [
            "Tổng bí thư",
            "Chủ tịch nước",
            "Chủ tịch quốc hội",
            "Thủ tướng chính phủ"
        ],
        answer: 1 // Đáp án đúng [cite: 192]
    },
    {
        id: 16,
        question: "Nhiệm kỳ Quốc hội nước CHXHCN Việt Nam hiện này là:",
        options: [
            "4 năm",
            "5 năm",
            "6 năm",
            "7 năm"
        ],
        answer: 1 // Đáp án đúng [cite: 192]
    },
    {
        id: 17,
        question: "Nhiệm kỳ của Chủ tịch nước và Thủ tướng chính phủ nước CHXHCN Việt Nam hiện nay là:",
        options: [
            "4 năm",
            "5 năm",
            "6 năm",
            "7 năm"
        ],
        answer: 1 // Đáp án đúng [cite: 192, 193]
    },
    {
        id: 18,
        question: "Nhiệm kỳ của Chánh án TAND tối cao hiện nay là:",
        options: [
            "4 năm",
            "5 năm",
            "6 năm",
            "7 năm"
        ],
        answer: 1 // Đáp án đúng [cite: 193]
    },
    {
        id: 19,
        question: "Kiểu Nhà nước đầu tiên trong lịch sử là:",
        options: [
            "Nhà nước phong kiến",
            "Nhà nước tư sản",
            "Nhà nước chủ nô",
            "Nhà nước xã hội chủ nghĩa"
        ],
        answer: 2 // Đáp án đúng [cite: 193]
    },
    {
        id: 20,
        question: "Hình thức chính thể của Nhà nước gồm:",
        options: [
            "Chính thể quân chủ",
            "Chính thể quân chủ lập hiến",
            "Chính thể cộng hoà",
            "Chính thể quân chủ và chính thể cộng hoà"
        ],
        answer: 3 // Đáp án đúng [cite: 193]
    },
    {
        id: 21,
        question: "Nhận định nào sau đây là đúng đối với chức danh Thủ tướng Chính phủ:",
        options: [
            "Do nhân dân bầu ra.",
            "Do Quốc hội bầu ra.",
            "Được bổ nhiệm.",
            "Cha truyền con nối."
        ],
        answer: 1 // Đáp án đúng [cite: 193]
    },
    {
        id: 22,
        question: "Mối liên hệ giữa chức năng Nhà nước và Bộ máy nhà nước:",
        options: [
            "Chức năng Nhà nước hình thành bởi bộ máy Nhà nước.",
            "Bộ máy Nhà nước là phương thức thực hiện chức năng Nhà nước.",
            "Chức năng là một loại cơ quan Nhà nước.",
            "Bộ máy Nhà nước hình thành nhằm thực hiện chức năng Nhà nước."
        ],
        answer: 3 // Đáp án đúng [cite: 193]
    },
    {
        id: 23,
        question: "Ở khu vực Đông Nam Á có những Nhà nước theo hình thức cấu trúc Nhà nước liên bang:",
        options: [
            "Myanma.",
            "Malaysia.",
            "Myanma, Malaysia.",
            "Việt Nam."
        ],
        answer: 2 // Đáp án đúng [cite: 193]
    },
    {
        id: 24,
        question: "Ở khu vực Đông Nam Á, quốc gia nào sau đây có chính thể quân chủ:",
        options: [
            "Thái Lan.",
            "Malaysia.",
            "Brunei",
            "Thái Lan, Malaysia, Brunei"
        ],
        answer: 3 // Đáp án đúng [cite: 193]
    },
    {
        id: 25,
        question: "Nhà nước Việt Nam phân chia lãnh thổ trở thành mấy cấp chính quyền để quản lý:",
        options: [
            "Tỉnh, huyện, xã.",
            "Tỉnh, huyện.",
            "Tỉnh, huyện, xã, ấp.",
            "Tỉnh, xã."
        ],
        answer: 0 // Đáp án đúng [cite: 193, 194]
    },
    {
        id: 26,
        question: "Nhà nước CHXHCN Việt Nam theo hình thức cấu trúc:",
        options: [
            "Đơn nhất",
            "Liên bang",
            "Liên minh",
            "Liên hiệp"
        ],
        answer: 0 // Đáp án đúng [cite: 194]
    },
    {
        id: 27,
        question: "Nhà nước CHXHCN Việt Nam theo hình thức chính thể:",
        options: [
            "Cộng hòa tổng thống.",
            "Cộng hòa đại nghị.",
            "Cộng hòa XHCN.",
            "Cộng hòa lưỡng tính."
        ],
        answer: 2 // Đáp án đúng [cite: 194]
    },
    {
        id: 28,
        question: "Các thành phố trực thuộc trung ương ở Việt Nam là:",
        options: [
            "Hà Nội, TP.HCM, Quảng Ninh, Đà Nẵng, Cần Thơ.",
            "Hà Nội, TP.HCM, Hải Phòng, Đà Nẵng, Cần Thơ.",
            "Hà Nội, TP.HCM, Huế, Đà Nẵng, Cần Thơ.",
            "Hà Nội, TP.HCM, Hải Phòng, Huế, Cần Thơ."
        ],
        answer: 1 // Đáp án đúng [cite: 194]
    },
    {
        id: 29,
        question: "TP.HCM hiện nay có bao nhiêu đơn vị hành chính cấp huyện:",
        options: [
            "22",
            "23",
            "24",
            "25"
        ],
        answer: 2 // Đáp án đúng [cite: 194]
    },
    {
        id: 30,
        question: "Cơ quan Nhà nước nào ở Việt Nam có chức năng xét xử:",
        options: [
            "Quốc hội",
            "Chính phủ",
            "Tòa án nhân dân",
            "Viện kiểm sát nhân dân"
        ],
        answer: 2 // Đáp án đúng [cite: 194]
    },
    {
        id: 31,
        question: "Cơ quan kiểm toán Nhà nước được thành lập bởi:",
        options: [
            "Quốc hội",
            "Chính phủ",
            "Hội đồng nhân dân",
            "Ủy ban nhân dân"
        ],
        answer: 0 // Đáp án đúng [cite: 194]
    },
    {
        id: 32,
        question: "Tổng kiểm toán Nhà nước do:",
        options: [
            "Quốc hội bầu",
            "Thủ tướng chính phủ bổ nhiệm",
            "Chủ tịch nước bổ nhiệm",
            "Chủ tịch quốc hội bổ nhiệm"
        ],
        answer: 0 // Đáp án đúng [cite: 194]
    },
    {
        id: 33,
        question: "Hội đồng bầu cử quốc gia được thành lập bởi:",
        options: [
            "Quốc hội",
            "Chủ tịch Quốc hội",
            "Chủ tịch nước",
            "Thủ tướng chính phủ"
        ],
        answer: 0 // Đáp án đúng [cite: 194]
    },
    {
        id: 34,
        question: "Công dân từ bao nhiêu tuổi trở lên có quyền ứng cử đại biểu Quốc hội CHXHCN Việt Nam:",
        options: [
            "Đủ 18",
            "Đủ 19",
            "Đủ 20",
            "Đủ 21"
        ],
        answer: 3 // Đáp án đúng [cite: 194, 195]
    },
    {
        id: 35,
        question: "Công dân Việt Nam từ bao nhiêu tuổi trở lên được quyền bầu cử đại biểu Quốc hội CHXHCN Việt Nam:",
        options: [
            "Đủ 18",
            "Đủ 19",
            "Đủ 20",
            "Đủ 21"
        ],
        answer: 0 // Đáp án đúng [cite: 195]
    },
    {
        id: 36,
        question: "Quyền lực công cộng đặc biệt của Nhà nước được hiểu là:",
        options: [
            "Khả năng sử dụng vũ lực.",
            "Khả năng sử dụng biện pháp thuyết phục, giáo dục.",
            "Có thể sử dụng quyền lực kinh tế, chính trị hoặc tư tưởng.",
            "Việc sử dụng sức mạnh cưỡng chế là độc quyền."
        ],
        answer: 3 // Đáp án đúng [cite: 195]
    },
    {
        id: 37,
        question: "Nhà nước thu thuế để:",
        options: [
            "Trả lương cho cán bộ trong bộ máy Nhà nước.",
            "Phục vụ nhu cầu phát triển đất nước.",
            "Xây dựng cơ sở hạ tầng.",
            "Trả lương cho cán bộ trong bộ máy Nhà nước, phục vụ nhu cầu phát triển đất nước và xây dựng cơ sở hạ tầng."
        ],
        answer: 3 // Đáp án đúng [cite: 195]
    },
    {
        id: 38,
        question: "Nhà nước định ra việc thu thuế bởi vì:",
        options: [
            "Nhà nước thực hiện quyền lực công cộng của mình.",
            "Nhà nước thực hiện chức năng quản lý của mình.",
            "Nhà nước có chủ quyền quốc gia.",
            "Nhà nước không tự đảm bảo nguồn tài chính."
        ],
        answer: 0 // Đáp án đúng [cite: 195]
    },
    {
        id: 39,
        question: "Nhà nước có chủ quyền quốc gia là:",
        options: [
            "Nhà nước toàn quyền quyết định trong phạm vi lãnh thổ.",
            "Nhà nước có quyền lực.",
            "Nhà nước có quyền quyết định chi phối trong một số quan hệ quốc tế.",
            "Nhà nước được nhân dân trao quyền lực."
        ],
        answer: 0 // Đáp án đúng [cite: 195]
    },
    {
        id: 40,
        question: "Pháp luật có thuộc tính cơ bản là:",
        options: [
            "Tính cưỡng chế.",
            "Tính xác định chặt chẽ về hình thức.",
            "Tính quy phạm và phổ biến.",
            "Tính cưỡng chế, tính xác định chặt chẽ về hình thức, tính quy phạm và phổ biến"
        ],
        answer: 3 // Đáp án đúng [cite: 195]
    },
    {
        id: 41,
        question: "Tính cưỡng chế của pháp luật được thể hiện:",
        options: [
            "Những hành vi vi phạm pháp luật đều bị xử phạt hành chính.",
            "Những hành vi vi phạm pháp luật đều bị áp dụng hình phạt.",
            "Những hành vi vi phạm pháp luật đều có thể bị áp dụng biện pháp chế tài.",
            "Những hành vi vi phạm pháp luật đều bị xử lý kỷ luật."
        ],
        answer: 2 // Đáp án đúng [cite: 195]
    },
    {
        id: 42,
        question: "Để bảo đảm cho pháp luật được tôn trọng và thực hiện, Nhà nước có những biện pháp nào?",
        options: [
            "Biện pháp về mặt kinh tế.",
            "Biện pháp về mặt tổ chức",
            "Biện pháp cưỡng chế Nhà nước.",
            "Biện pháp về mặt kinh tế, biện pháp về mặt tổ chức, biện pháp cưỡng chế Nhà nước."
        ],
        answer: 3 // Đáp án đúng [cite: 195, 196]
    },
    {
        id: 43,
        question: "Pháp luật có những chức năng gì?",
        options: [
            "Chỉ có chức năng điều chỉnh.",
            "Chỉ có chức năng giáo dục.",
            "Có cả chức năng điều chỉnh và chức năng giáo dục.",
            "Chỉ có chức năng phản ánh."
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 44,
        question: "Pháp luật xuất hiện từ khi nào?",
        options: [
            "Khi có sự xuất hiện loài người và có quan hệ giữa người với người trong xã hội.",
            "Khi có quan hệ trao đổi sản phẩm hàng hoá và sự xuất hiện đồng tiền.",
            "Khi Nhà nước ra đời thì pháp luật cũng xuất hiện.",
            "Khi có sự xuất hiện loài người."
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 45,
        question: "Trong lịch sử đã xuất hiện những kiểu pháp luật gì?",
        options: [
            "Pháp luật chủ nô, pháp luật phong kiến và pháp luật tư sản.",
            "Pháp luật chủ nô, pháp luật phong kiến.",
            "Pháp luật tư sản, pháp luật phong kiến.",
            "Pháp luật chủ nô, pháp luật phong kiến, pháp luật tư sản và pháp luật xã hội chủ nghĩa."
        ],
        answer: 3 // Đáp án đúng [cite: 196]
    },
    {
        id: 46,
        question: "Theo quan điểm chủ nghĩa Mác-Lênin, pháp luật chỉ có thể hình thành bằng con đường?",
        options: [
            "Cá nhân.",
            "Pháp nhân.",
            "Nhà nước.",
            "Chính trị."
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 47,
        question: "Pháp luật mang tính xã hội vì:",
        options: [
            "Pháp luật không phải là công cụ quản lý xã hội.",
            "Pháp luật được hình thành do ý chí của pháp nhân.",
            "Pháp luật là công cụ quản lý xã hội.",
            "Pháp luật do giai cấp thống trị ban hành"
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 48,
        question: "Hình thức pháp luật xuất hiện sớm nhất và được sử dụng nhiều trong các nhà nước chủ nô và nhà nước phong kiến là:",
        options: [
            "Văn bản quy phạm pháp luật.",
            "Tiền lệ pháp.",
            "Tập quán pháp.",
            "Án lệ"
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 49,
        question: "Văn bản nào là văn bản quy phạm pháp luật?",
        options: [
            "Công văn.",
            "Bản án.",
            "Lệnh của Chủ tịch nước.",
            "Thông báo."
        ],
        answer: 2 // Đáp án đúng [cite: 196]
    },
    {
        id: 50,
        question: "Nghị định là văn bản quy phạm pháp luật do cơ quan Nhà nước có thẩm quyền nào ban hành?",
        options: [
            "Chính phủ.",
            "Ủy ban Thường vụ Quốc hội.",
            "Thủ tướng Chính phủ.",
            "Chủ tịch nước."
        ],
        answer: 0 // Đáp án đúng [cite: 196, 197]
    },  
     // --- PHẦN 2: TỪ CÂU 51 ĐẾN 100 ---
    {
        id: 51,
        question: "Ở Việt Nam hiện nay, thẩm quyền thông qua án lệ thuộc về:",
        options: [
            "Hội đồng thẩm phán Tòa án nhân dân cấp cao.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Chánh án Tòa án nhân dân tối cao.",
            "Chánh án tòa án nhân dân cấp cao."
        ],
        answer: 1 // B
    },
    {
        id: 52,
        question: "Ở Việt Nam hiện nay, thẩm quyền công bố án lệ thuộc về:",
        options: [
            "Hội đồng thẩm phán Tòa án nhân dân cấp cao.",
            "Hội đồng thẩm phán Tòa án nhân dân tối cao.",
            "Chánh án Tòa án nhân dân tối cao.",
            "Chánh án tòa án nhân dân cấp cao."
        ],
        answer: 2 // C
    },
    {
        id: 53,
        question: "Theo quan điểm chủ nghĩa Mác-Lênin “…….là hình thức Nhà nước thừa nhận một số tập quán đã lưu truyền trong xã hội...”. Đây là khái niệm:",
        options: [
            "Tiền lệ pháp.",
            "Văn bản quy phạm pháp luật.",
            "Tập quán pháp.",
            "Quy phạm pháp luật."
        ],
        answer: 2 // C
    },
    {
        id: 54,
        question: "Nhà nước thừa nhận các quyết định của cơ quan hành chính hoặc xét xử đã có hiệu lực pháp luật... Đây là khái niệm:",
        options: [
            "Tập quán pháp.",
            "Tiền lệ pháp.",
            "Văn bản quy phạm pháp luật.",
            "Quy phạm pháp luật."
        ],
        answer: 1 // B
    },
    {
        id: 55,
        question: "Theo Luật ban hành văn bản quy phạm pháp luật 2015 thì văn bản nào sau đây là văn bản quy phạm pháp luật:",
        options: [
            "Hiến pháp, Tờ trình.",
            "Luật, Công văn.",
            "Nghị quyết của Quốc hội, Thông báo.",
            "Hiến pháp, Luật, Nghị quyết của Quốc hội."
        ],
        answer: 3 // D
    },
    {
        id: 56,
        question: "Quốc hội là cơ quan có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức:",
        options: [
            "Hiến pháp, Luật, Nghị quyết.",
            "Pháp lệnh, Nghị quyết.",
            "Lệnh, Quyết định.",
            "Nghị định, Lệnh."
        ],
        answer: 0 // A
    },
    {
        id: 57,
        question: "Chủ tịch nước có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức:",
        options: [
            "Lệnh, Nghị định.",
            "Lệnh, Pháp lệnh.",
            "Lệnh, Quyết định.",
            "Lệnh, Thông tư."
        ],
        answer: 2 // C
    },
    {
        id: 58,
        question: "Văn bản nào có giá trị pháp lý cao nhất trong các văn bản quy phạm pháp luật ở nước ta:",
        options: [
            "Hiến pháp.",
            "Luật.",
            "Nghị định.",
            "Thông tư."
        ],
        answer: 0 // A
    },
    {
        id: 59,
        question: "Nhận định nào sai khi nói về vai trò của pháp luật?",
        options: [
            "Pháp luật là cơ sở để thiết lập, củng cố và tăng cường quyền lực Nhà nước.",
            "Pháp luật là phương tiện để Nhà nước quản lí kinh tế, xã hội.",
            "Pháp luật không tạo ra môi trường ổn định cho việc thiết lập mối quan hệ giữa các nước.",
            "Pháp luật là phương tiện để nhân dân bảo vệ quyền chính đáng của mình."
        ],
        answer: 2 // C
    },
    {
        id: 60,
        question: "Theo Luật ban hành văn bản quy phạm pháp luật thì văn bản nào sau đây là văn bản dưới luật:",
        options: [
            "Nghị định",
            "Thông tư",
            "Pháp lệnh",
            "Nghị định, Thông tư và Pháp lệnh"
        ],
        answer: 3 // D
    },
    {
        id: 61,
        question: "Để đảm bảo nguyên tắc thống nhất trong việc xây dựng và áp dụng pháp luật thì cần phải:",
        options: [
            "Tôn trọng tính tối cao của Hiến pháp và Luật.",
            "Đảm bảo tính thống nhất của pháp luật.",
            "Tôn trọng tính tối cao của Hiến pháp và Luật; Đảm bảo tính thống nhất của pháp luật.",
            "Sử dụng ngôn ngữ pháp lý trong các văn bản quy phạm pháp luật."
        ],
        answer: 2 // C
    },
    {
        id: 62,
        question: "Tính giai cấp của pháp luật thể hiện ở chỗ:",
        options: [
            "Pháp luật là sản phẩm của xã hội có giai cấp.",
            "Pháp luật là ý chí của giai cấp thống trị.",
            "Pháp luật là công cụ để điều chỉnh các mối quan hệ xã hội.",
            "Pháp luật là ý chí, sản phẩm của giai cấp thống trị để điều chỉnh các mối quan hệ xã hội."
        ],
        answer: 3 // D
    },
    {
        id: 63,
        question: "Pháp luật và pháp chế có mối quan hệ như thế nào?",
        options: [
            "Pháp luật và pháp chế là hai phạm trù đồng nhất với nhau.",
            "Pháp luật là tiền đề của pháp chế, còn pháp chế là phương tiện để bảo đảm cho pháp luật được thực hiện.",
            "Pháp luật và pháp chế là hai phạm trù độc lập và không có quan hệ với nhau.",
            "Tình trạng pháp chế không phụ thuộc vào pháp luật mà chỉ phụ thuộc vào ý thức pháp luật."
        ],
        answer: 1 // B
    },
    {
        id: 64,
        question: "Pháp luật và đạo đức có điểm gì khác nhau?",
        options: [
            "Pháp luật điều chỉnh quan hệ xã hội còn đạo đức thì không.",
            "Pháp luật mang tính bắt buộc chung còn đạo đức thì không mang tính bắt buộc chung.",
            "Pháp luật là quy tắc xử sự còn đạo đức không là quy tắc xử sự.",
            "Đều là quy tắc xử sự."
        ],
        answer: 1 // B
    },
    {
        id: 65,
        question: "Vai trò, giá trị xã hội của pháp luật được biểu hiện như thế nào?",
        options: [
            "Pháp luật phải thể hiện ý chí bảo vệ lợi ích của tất cả các thành viên trong xã hội.",
            "Pháp luật phải điều chỉnh được tất cả các quan hệ pháp sinh trong đời sống xã hội.",
            "Pháp luật thể hiện ý chí của giai cấp thống trị.",
            "Pháp luật thể hiện ý chí của Nhà nước."
        ],
        answer: 0 // A (Theo đáp án trong file)
    },
    {
        id: 66,
        question: "Pháp luật tồn tại trong điều kiện xã hội như thế nào?",
        options: [
            "Trong bất kỳ hình thái kinh tế - xã hội nào cũng tồn tại pháp luật.",
            "Pháp luật chỉ tồn tại trong chế độ xã hội có người bóc lột người.",
            "Pháp luật chỉ tồn tại khi xã hội có sự phân chia thành giai cấp.",
            "Khi xã hội xuất hiện nhà nước."
        ],
        answer: 3 // D
    },
    {
        id: 67,
        question: "Hiểu như thế nào về bản chất giai cấp của pháp luật?",
        options: [
            "Pháp luật là sự thể hiện ý chí của giai cấp thống trị, nhằm bảo vệ lợi ích của giai cấp thống trị.",
            "Pháp luật là khuôn mẫu, quy tắc xử sự đối với mọi công dân.",
            "Pháp luật phản ánh các quy luật khách quan của đời sống kinh tế, xã hội.",
            "Là công cụ quản lý xã hội."
        ],
        answer: 0 // A
    },
    {
        id: 68,
        question: "Nhà nước bảo đảm cho pháp luật được thực hiện bằng những biện pháp nào?",
        options: [
            "Chỉ bằng biện pháp cưỡng chế Nhà nước.",
            "Nhà nước bóc lột thì áp dụng cưỡng chế, Nhà nước XHCN chỉ áp dụng giáo dục.",
            "Phải kết hợp nhiều biện pháp: giáo dục, thuyết phục, khuyến khích và cưỡng chế bắt buộc.",
            "Biện pháp thuyết phục."
        ],
        answer: 2 // C
    },
    {
        id: 69,
        question: "Tính quy phạm phổ biến của pháp luật xuất phát từ nguyên nhân:",
        options: [
            "Pháp luật không bắt buộc sử dụng ngôn ngữ pháp lý.",
            "Pháp luật thể hiện ý chí, quyền lực của giai cấp thống trị.",
            "Pháp luật không bắt buộc ban hành theo trình tự.",
            "Pháp luật không mang tính giai cấp."
        ],
        answer: 1 // B
    },
    {
        id: 70,
        question: "Theo quan điểm chủ nghĩa Mác-Lênin, nhận định nào sau đây sai:",
        options: [
            "Chỉ có pháp luật mới có tính quy phạm.",
            "Pháp luật có tính quy phạm phổ biến.",
            "Có tính cưỡng chế.",
            "Có tính khách quan."
        ],
        answer: 0 // A
    },
    {
        id: 71,
        question: "Bộ Giáo dục và Đào tạo có quyền ban hành văn bản quy phạm pháp luật nào sau đây?",
        options: [
            "Luật Giáo dục.",
            "Nghị định.",
            "Thông tư.",
            "Nghị quyết."
        ],
        answer: 2 // C
    },
    {
        id: 72,
        question: "Một nhóm quy phạm pháp luật có đặc điểm giống nhau để điều chỉnh một nhóm quan hệ xã hội tương ứng... được gọi là:",
        options: [
            "Hệ thống pháp luật.",
            "Ngành luật.",
            "Chế định pháp luật.",
            "Quy phạm pháp luật."
        ],
        answer: 2 // C
    },
    {
        id: 73,
        question: "Thủ tướng chính phủ có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức:",
        options: [
            "Quyết định.",
            "Nghị định.",
            "Nghị quyết.",
            "Thông tư."
        ],
        answer: 0 // B (Lưu ý: Theo file đáp án là Nghị định, thực tế thường là Quyết định)
    },
    {
        id: 74,
        question: "Hội đồng nhân dân là cơ quan có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức:",
        options: [
            "Nghị định.",
            "Chỉ thị.",
            "Lệnh.",
            "Nghị quyết."
        ],
        answer: 3 // D
    },
    {
        id: 75,
        question: "Quy tắc xử sự do Nhà nước ban hành và bảo đảm thực hiện để điều chỉnh các quan hệ xã hội, đó chính là:",
        options: [
            "Quy phạm pháp luật.",
            "Chế định pháp luật.",
            "Ngành luật.",
            "Hệ thống pháp luật."
        ],
        answer: 0 // A
    },
    {
        id: 76,
        question: "Tổng hợp các quy phạm pháp luật điều chỉnh các lĩnh vực khác nhau của đời sống xã hội, đó chính là:",
        options: [
            "Quy phạm pháp luật.",
            "Ngành luật.",
            "Chế định pháp luật.",
            "Hệ thống pháp luật."
        ],
        answer: 1 // B (Theo file đáp án là Ngành luật. Lưu ý: Tổng hợp các QPPL điều chỉnh 1 lĩnh vực là Ngành luật, nhiều lĩnh vực là Hệ thống PL, đáp án B có thể hiểu theo ý file)
    },
    {
        id: 77,
        question: "Thành tố nhỏ nhất cấu thành nên hệ thống pháp luật là:",
        options: [
            "Quy phạm pháp luật.",
            "Ngành luật.",
            "Chế định pháp luật",
            "Hệ thống pháp luật"
        ],
        answer: 0 // A
    },
    {
        id: 78,
        question: "Nhận định nào sau đây là đúng về ngành luật:",
        options: [
            "Một quan hệ xã hội luôn là đối tượng điều chỉnh của một ngành luật.",
            "Một quan hệ xã hội có thể là đối tượng điều chỉnh của nhiều ngành luật.",
            "Các ngành luật khác nhau sẽ có phương pháp điều chỉnh hoàn toàn khác nhau.",
            "Ngành luật là đơn vị cấu trúc bên ngoài của hệ thống pháp luật."
        ],
        answer: 1 // B
    },
    {
        id: 79,
        question: "Tính quy phạm phổ biến là đặc tính của:",
        options: [
            "Pháp luật.",
            "Đạo đức.",
            "Tôn giáo.",
            "Tổ chức xã hội."
        ],
        answer: 0 // A
    },
    {
        id: 80,
        question: "Điều 33 Hiến pháp năm 2013 nêu rõ: “Mọi người có quyền tự do kinh doanh trong những ngành nghề mà pháp luật không cấm”. Quy định này thể hiện thuộc tính nào của pháp luật:",
        options: [
            "Tính quy phạm phổ biến.",
            "Tính xác định chặt chẽ về mặt hình thức.",
            "Tính đảm bảo thực hiện bằng quyền lực nhà nước.",
            "Tính khách quan."
        ],
        answer: 0 // A
    },
    {
        id: 81,
        question: "Pháp luật được xây dựng theo thủ tục, thẩm quyền một cách chặt chẽ và minh bạch... là thể hiện thuộc tính:",
        options: [
            "Tính quy phạm phổ biến.",
            "Tính khách quan.",
            "Tính xác định chặt chẽ về mặt hình thức.",
            "Tính được đảm bảo thực hiện bằng nhà nước."
        ],
        answer: 2 // C
    },
    {
        id: 82,
        question: "Luật lao động là một….trong hệ thống pháp luật Việt Nam:",
        options: [
            "Hệ thống pháp luật.",
            "Chế định pháp luật.",
            "Quy phạm pháp luật.",
            "Ngành luật."
        ],
        answer: 3 // D
    },
    {
        id: 83,
        question: "Hình thức pháp luật chủ yếu được áp dụng ở Việt Nam là:",
        options: [
            "Văn bản quy phạm pháp luật.",
            "Tập quán pháp.",
            "Án lệ.",
            "Học thuyết pháp lý."
        ],
        answer: 0 // A
    },
    {
        id: 84,
        question: "Pháp luật phát sinh và tồn tại trong xã hội:",
        options: [
            "Có Nhà nước.",
            "Không có giai cấp.",
            "Không có Nhà nước",
            "Khi xuất hiện loài người."
        ],
        answer: 0 // A
    },
    {
        id: 85,
        question: "Việt Nam không áp dụng hình thức pháp luật:",
        options: [
            "Tiền lệ pháp.",
            "Học thuyết pháp lý.",
            "Văn bản quy phạm pháp luật.",
            "Luật tập quán."
        ],
        answer: 1 // B
    },
    {
        id: 86,
        question: "Hình phạt trong Bộ Luật Hình sự... thể hiện đặc trưng nào của pháp luật:",
        options: [
            "Tính quy phạm phổ biến.",
            "Tính xác định chặt chẽ về mặt hình thức.",
            "Tính đảm bảo thực hiện bằng quyền lực nhà nước.",
            "Tính khách quan."
        ],
        answer: 2 // C
    },
    {
        id: 87,
        question: "Điền vào chỗ trống: “Pháp luật của ta là pháp luật thật sự dân chủ, vì nó bảo vệ………………….rộng rãi cho nhân dân lao động”.",
        options: [
            "Quyền và lợi ích hợp pháp.",
            "Quyền và lợi ích chính đáng.",
            "Quyền và nghĩa vụ.",
            "Quyền tự do, dân chủ."
        ],
        answer: 3 // D
    },
        {
        id: 88,
        question: "Điền vào chỗ trống: “Pháp luật của ta là pháp luật thật sự dân chủ, vì nó bảo vệ………………….rộng rãi cho nhân dân lao động”.",
        options: [
            "Quyền và lợi ích hợp pháp.",
            "Quyền và lợi ích chính đáng.",
            "Quyền và nghĩa vụ.",
            "Quyền tự do, dân chủ."
        ],
        answer: 3 // D
    },
    {
        id: 89,
        question: "Pháp luật và đạo đức có quan hệ…",
        options: [
            "Chặt chẽ với nhau, người tuân thủ pháp luật là người có đạo đức...",
            "Pháp luật là phương tiện đặc thù để thể hiện và bảo vệ các giá trị đạo đức.",
            "Đạo đức là nền tảng hình thành nhân cách, pháp luật là nền tảng đảm bảo trật tự xã hội.",
            "Tất cả các ý trên đều đúng."
        ],
        answer: 3 // D (Câu này tổng hợp các ý trên, file đánh dấu D cho cả đoạn dài)
    },
    {
        id: 90,
        question: "Quan hệ nào dưới đây là quan hệ pháp luật?",
        options: [
            "A và B tổ chức đám cưới.",
            "A và B đăng ký kết hôn và được cấp giấy chứng nhận đăng ký kết hôn.",
            "A và B sống chung.",
            "A và B tổ chức đám hỏi."
        ],
        answer: 1 // B
    },
    {
        id: 91,
        question: "Thành phần của quan hệ pháp luật bao gồm:",
        options: [
            "Khách thể, chủ thể, nội dung của quan hệ pháp luật.",
            "Mặt khách quan, chủ thể, nội dung của quan hệ pháp luật.",
            "Mặt chủ quan, chủ thể, nội dung của quan hệ pháp luật.",
            "Mặt chủ quan, chủ thể, nội dung của quan hệ pháp luật."
        ],
        answer: 0 // A
    },
    {
        id: 92,
        question: "Năng lực pháp luật của cá nhân xuất hiện từ khi nào:",
        options: [
            "Từ khi cá nhân sinh ra.",
            "Khi cá nhân đạt đủ 15 tuổi.",
            "Khi cá nhân đủ 18 tuổi.",
            "Từ khi cá nhân sinh ra đến khi cá nhân mất đi."
        ],
        answer: 0 // A
    },
    {
        id: 93,
        question: "Năng lực hành vi của cá nhân phụ thuộc vào:",
        options: [
            "Độ tuổi, sức khỏe.",
            "Quyết định của cơ quan nhà nước có thẩm quyền.",
            "Khả năng nhận thức và điều khiển hành vi của mình.",
            "Độ tuổi, sức khỏe; Quyết định của cơ quan nhà nước; Khả năng nhận thức."
        ],
        answer: 3 // D
    },
    {
        id: 94,
        question: "‘Công dân có nghĩa vụ nộp thuế...’. Quy định này thể hiện loại năng lực nào:",
        options: [
            "Năng lực chủ thể pháp luật.",
            "Năng lực hành vi.",
            "Năng lực pháp luật.",
            "Năng lực khách thể của pháp luật."
        ],
        answer: 2 // C
    },
    {
        id: 95,
        question: "‘Người thành niên có quyền lập di chúc...’. Quy định này thể hiện loại năng lực nào:",
        options: [
            "Năng lực chủ thể pháp luật.",
            "Năng lực hành vi.",
            "Năng lực pháp luật.",
            "Năng lực khách thể của pháp luật."
        ],
        answer: 1 // B
    },
    {
        id: 96,
        question: "Khẳng định nào sau đây là đúng:",
        options: [
            "Cá nhân là chủ thể của mọi quan hệ pháp luật.",
            "Nhà nước là chủ thể đặc biệt trong một số quan hệ pháp luật quan trọng.",
            "Năng lực pháp luật và năng lực hành vi của cá nhân xuất hiện đồng thời.",
            "Năng lực hành vi là khả năng mà pháp luật quy định cho chủ thể được hưởng các quyền."
        ],
        answer: 1 // B
    },
    {
        id: 97,
        question: "Sự kiện pháp lý làm phát sinh quan hệ pháp luật:",
        options: [
            "A dùng dao giết B chết.",
            "A bị điều chuyển công việc từ nhân viên điều dưỡng sang làm hộ lý bệnh viện.",
            "A và B ly hôn.",
            "Tất cả các trường hợp trên."
        ],
        answer: 3 // D
    },
    {
        id: 98,
        question: "Một cá nhân được xem là có năng lực hành vi dân sự khi chủ thể đủ bao nhiêu tuổi:",
        options: [
            "Đủ 15 tuổi.",
            "Đủ 18 tuổi.",
            "Đủ 21 tuổi.",
            "Đủ 13 tuổi."
        ],
        answer: 1 // B
    },
    {
        id: 99,
        question: "Cá nhân chưa đủ 6 tuổi được xem là:",
        options: [
            "Không có năng lực hành vi dân sự.",
            "Có năng lực hành vi dân sự chưa đầy đủ.",
            "Bị mất năng lực hành vi dân sự.",
            "Bị hạn chế năng lực hành vi dân sự."
        ],
        answer: 0 // A
    },
    {
        id: 100,
        question: "Cá nhân bao gồm:",
        options: [
            "Công dân.",
            "Người nước ngoài.",
            "Người không quốc tịch.",
            "Công dân, người nước ngoài, người không quốc tịch."
        ],
        answer: 3 // D
    },
    // --- PHẦN 3: TỪ CÂU 101 ĐẾN 150 ---
    {
        id: 101,
        question: "Trong các tổ chức dưới đây, tổ chức nào không có tư cách pháp nhân:",
        options: [
            "Công ty TNHH MTV ABC.",
            "Hội đồng nhân dân tỉnh X.",
            "Doanh nghiệp tư nhân XYZ.",
            "Mặt trận tổ quốc Việt Nam."
        ],
        answer: 2 // C
    },
    {
        id: 102,
        question: "Quyền chủ thể là những cách thức xử sự mà pháp luật………chủ thể được tiến hành nhằm đáp ứng các lợi ích của mình.",
        options: [
            "Cho phép",
            "Bắt buộc.",
            "Cấm.",
            "Yêu cầu."
        ],
        answer: 0 // A
    },
    {
        id: 103,
        question: "Nghĩa vụ chủ thể là những cách thức xử sự …….mà chủ thể phải tiến hành theo quy định của pháp luật nhằm đáp ứng quyền và lợi ích của chủ thể khác:",
        options: [
            "Cho phép",
            "Bắt buộc.",
            "Cấm.",
            "Yêu cầu."
        ],
        answer: 1 // B
    },
    {
        id: 104,
        question: "Sự kiện pháp lý làm phát sinh quan hệ pháp luật:",
        options: [
            "A dùng dao giết B chết.",
            "A bị điều chuyển công việc từ nhân viên điều dưỡng sang làm hộ lý bệnh viện.",
            "A và B ly hôn.",
            "Tất cả các trường hợp trên."
        ],
        answer: 3 // D
    },
    {
        id: 105,
        question: "Sự kiện pháp lý làm chấm dứt quan hệ pháp luật:",
        options: [
            "A dùng dao giết B chết.",
            "A bị điều chuyển công việc từ nhân viên điều dưỡng sang làm hộ lý bệnh viện.",
            "A và B ly hôn.",
            "A và B đăng ký kết hôn."
        ],
        answer: 2 // C
    },
    {
        id: 106,
        question: "Trong các trường hợp dưới đây, trường hợp nào được xem là sự biến pháp lý:",
        options: [
            "A cướp giật tài sản của B.",
            "A bị lũ cuốn trôi và mất tích.",
            "A hủy hoại tài sản của B.",
            "A dùng cây đập vào đầu B cho đến chết."
        ],
        answer: 1 // B
    },
    {
        id: 107,
        question: "Trong các trường hợp dưới đây, trường hợp nào được xem là hành vi pháp lý:",
        options: [
            "A nhận hối lộ tiền.",
            "A bị lũ cuốn trôi và mất tích.",
            "A bị điện giật chết.",
            "A ngã xuống hố sâu và chết."
        ],
        answer: 0 // A
    },
    {
        id: 108,
        question: "………………………. được hiểu là quy tắc xử sự của con người, dùng để điều chỉnh mối quan hệ giữa người với người trong xã hội.",
        options: [
            "Quy phạm pháp luật",
            "Quy phạm xã hội",
            "Quy phạm tập quán",
            "Quy phạm tôn giáo"
        ],
        answer: 1 // B
    },
    {
        id: 109,
        question: "…………………………. là những quy tắc xử sự của con người được hình thành từ các quan điểm, quan niệm của con người về điều thiện, điều ác...",
        options: [
            "Quy phạm pháp luật",
            "Quy phạm xã hội",
            "Quy phạm đạo đức",
            "Quy phạm tôn giáo"
        ],
        answer: 2 // C
    },
    {
        id: 110,
        question: "Quy phạm tập quán được hiểu là những quy tắc xử sự chung của những người ở trong một ………………… hay một vùng nhất định.",
        options: [
            "Tôn giáo",
            "Tổ chức",
            "Hiệp hội",
            "Địa phương"
        ],
        answer: 3 // D
    },
    {
        id: 111,
        question: "Nội dung nào sau đây là đặc điểm của quy phạm pháp luật:",
        options: [
            "Là những quy tắc xử sự của một địa phương",
            "Vừa mang tính giai cấp vừa mang tính xã hội",
            "Là những quy tắc xử sự có hiệu lực bắt buộc chung",
            "Chỉ áp dụng cho một số đối tượng nhất định"
        ],
        answer: 2 // C
    },
    {
        id: 112,
        question: "Quy tắc xử sự chung được hiểu là:",
        options: [
            "Quy tắc này áp dụng cho một số chủ thể",
            "Quy tắc này áp dụng cho tất cả chủ thể",
            "Quy tắc này áp dụng cho một chủ thể",
            "Quy tắc này áp dụng cho các tổ chức"
        ],
        answer: 1 // B
    },
    {
        id: 113,
        question: "Điểm khác biệt giữa quy phạm pháp luật so với các quy phạm xã hội khác bởi nó là:",
        options: [
            "Quy tắc xử sự chung và có hiệu lực bắt buộc chung",
            "Quy tắc xử sự riêng và có hiệu lực chung",
            "Quy tắc xử sự và có hiệu lực bắt buộc chung",
            "Quy tắc xử sự chung"
        ],
        answer: 0 // A
    },
    {
        id: 114,
        question: "Quy phạm nào sau đây có thể là quy tắc xử sự chung cho nhiều chủ thể nhưng không có hiệu lực bắt buộc:",
        options: [
            "Quy phạm tôn giáo",
            "Quy phạm đạo đức",
            "Quy phạm xã hội",
            "Quy phạm pháp luật"
        ],
        answer: 1 // B
    },
    {
        id: 115,
        question: "Chủ thể nào sau đây đảm bảo thực hiện các quy phạm pháp luật:",
        options: [
            "Các tổ chức chính trị - xã hội",
            "Các pháp nhân",
            "Các cá nhân",
            "Nhà nước"
        ],
        answer: 3 // D
    },
    {
        id: 116,
        question: "Cơ cấu của quy phạm pháp luật gồm có:",
        options: [
            "Một bộ phận.",
            "Hai bộ phận.",
            "Ba bộ phận.",
            "Bốn bộ phận."
        ],
        answer: 2 // C
    },
    {
        id: 117,
        question: "Cơ cấu của một quy phạm pháp luật gồm có các bộ phận sau:",
        options: [
            "Giả định, quy định, quy phạm.",
            "Quy định, quy phạm, chế tài.",
            "Giả định, chế tài, quy phạm.",
            "Giả định, quy định, chế tài."
        ],
        answer: 3 // D
    },
    {
        id: 118,
        question: "“………….là bộ phận của quy phạm pháp luật nêu những điều kiện, hoàn cảnh có thể xảy ra và cá nhân hay tổ chức trong những điều kiện đó chịu sự tác động của quy phạm pháp luật”.",
        options: [
            "Giả định.",
            "Quy định.",
            "Chế tài.",
            "Quy phạm."
        ],
        answer: 0 // A
    },
    {
        id: 119,
        question: "Bộ phận giả định của quy phạm pháp luật chứa đựng:",
        options: [
            "Mệnh lệnh của nhà nước.",
            "Điều kiện, hoàn cảnh.",
            "Biện pháp tác động.",
            "Biện pháp cưỡng chế."
        ],
        answer: 1 // B
    },
    {
        id: 120,
        question: "“…………... là bộ phận của quy phạm pháp luật, chứa đựng mệnh lệnh của nhà nước, nêu cách thức xử sự của chủ thể trong hoàn cảnh đã nêu tại bộ phận giả định”.",
        options: [
            "Quy định",
            "Giả định",
            "Chế tài",
            "Quy phạm"
        ],
        answer: 0 // A
    },
    {
        id: 121,
        question: "Cách xác định bộ phận chế tài của quy phạm pháp luật là trả lời câu hỏi:",
        options: [
            "Chủ thể phải gánh chịu hậu quả bất lợi gì?",
            "Chủ được làm gì?",
            "Chủ thể không được làm gì?",
            "Chủ thể đạt được lợi ích gì?"
        ],
        answer: 0 // A
    },
    {
        id: 122,
        question: "Nhận định nào sau đây sai:",
        options: [
            "Chỉ có quy phạm xã hội mới được nhà nước đảm bảo giá trị thực hiện bằng biện pháp cưỡng chế.",
            "Chỉ có quy phạm pháp luật mới được nhà nước đảm bảo giá trị thực hiện bằng biện pháp cưỡng chế.",
            "Quy phạm pháp luật chỉ do nhà nước bảo đảm thực hiện.",
            "Chỉ có quy phạm pháp luật mang tính bắt buộc chung và có hiệu lực bắt buộc chung."
        ],
        answer: 0 // A
    },
    {
        id: 123,
        question: "Nhận định nào sau đây đúng:",
        options: [
            "Trật tự các bộ phận giả định, quy định, chế tài trong một quy phạm pháp luật có thể bị thay đổi.",
            "Trật tự các bộ phận giả định, quy định, chế tài trong một quy phạm pháp luật không thể bị thay đổi.",
            "Một quy phạm pháp luật bắt buộc phải có đầy đủ cả ba bộ phận.",
            "Bộ phận chế tài của pháp luật chứa đựng mệnh lệnh của nhà nước."
        ],
        answer: 0 // A
    },
    {
        id: 124,
        question: "Một điều luật bắt buộc phải có đầy đủ ba bộ phận:",
        options: [
            "Đúng, vì cơ cấu của một điều luật có ba bộ phận.",
            "Sai, vì một điều luật không nhất thiết phải có đầy đủ ba bộ phận.",
            "Đúng, vì một điều luật phải có đủ giả định, quy định và chế tài.",
            "Sai, vì trật tự của các bộ phận có thể thay đổi."
        ],
        answer: 1 // B
    },
    {
        id: 125,
        question: "Điều 116 BLDS năm 2015 quy định: “Giao dịch dân sự là hợp đồng hoặc hành vi pháp lý đơn phương làm phát sinh, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự.”. Quy phạm pháp luật này gồm có:",
        options: [
            "Giả định và chế tài",
            "Giả định và quy định",
            "Quy định và giả định",
            "Chế tài và giả định"
        ],
        answer: 1 // B
    },
    {
        id: 126,
        question: "Khoản 1, Điều 125 của BLHS năm 2015: “Người nào giết người trong trạng thái tinh thần bị kích động mạnh do hành vi trái pháp luật nghiêm trọng của nạn nhân đối với người đó hoặc đối với người thân thích của người đó, thì bị phạt tù từ 06 tháng đến 03 năm.”. Quy phạm này gồm:",
        options: [
            "Giả định và chế tài",
            "Giả định, quy định và chế tài",
            "Chế tài, quy định và giả định",
            "Chế tài và giả định"
        ],
        answer: 0 // A
    },
    {
        id: 127,
        question: "Khoản 1 Điều 2 Luật Dược năm 2016 quy định: “Dược là thuốc và nguyên liệu làm thuốc.” Quy phạm này gồm:",
        options: [
            "Giả định và chế tài",
            "Giả định, quy định và chế tài",
            "Giả định",
            "Giả định và quy định"
        ],
        answer: 3 // D
    },
    {
        id: 129,
        question: "Khoản 3, Điều 5 Nghị định 100/2019/NĐ-CP quy định: “Phạt tiền... đối với người điều khiển xe thực hiện...”. Quy phạm này gồm:",
        options: [
            "Giả định và chế tài",
            "Giả định, quy định và chế tài",
            "Chế tài, quy định và giả định",
            "Chế tài và giả định"
        ],
        answer: 3 // D
    },
    {
        id: 130,
        question: "Chọn nhận định Đúng:",
        options: [
            "Vi phạm pháp luật có thể có lỗi hoặc không có lỗi",
            "Lỗi là dấu hiệu bắt buộc của vi phạm pháp luật",
            "Lỗi là biểu hiện bắt buộc của mặt khách quan",
            "Vi phạm pháp luật không có lỗi"
        ],
        answer: 1 // B
    },
    {
        id: 131,
        question: "Chính phủ là cơ quan có thẩm quyền ban hành văn bản quy phạm pháp luật dưới hình thức:",
        options: [
            "Nghị định, Lệnh",
            "Nghị quyết",
            "Quyết định",
            "Nghị định"
        ],
        answer: 3 // D
    },
    {
        id: 132,
        question: "Văn bản quy phạm pháp luật và văn bản áp dụng quy phạm pháp luật đều được:",
        options: [
            "Nhà nước đảm bảo giá trị thi hành.",
            "Tổ chức đảm bảo giá trị thi hành.",
            "Cá nhân đảm bảo giá trị thi hành.",
            "Pháp nhân đảm bảo giá trị thi hành."
        ],
        answer: 0 // A
    },
    {
        id: 133,
        question: "Văn bản áp dụng quy phạm pháp luật được áp dụng cho:",
        options: [
            "Tất cả mọi người",
            "Đối tượng cụ thể",
            "Những người trong một tôn giáo nhất định",
            "Cho những người đã có năng lực hành vi dân sự"
        ],
        answer: 1 // B
    },
    {
        id: 134,
        question: "Thành tố nhỏ nhất của hệ thống pháp luật là:",
        options: [
            "Đối tượng điều chỉnh của ngành luật",
            "Quy phạm pháp luật",
            "Chế định luật",
            "Phương pháp điều chỉnh của ngành luật"
        ],
        answer: 1 // B
    },
    {
        id: 135,
        question: "Chọn nhận định đúng về Áp dụng pháp luật:",
        options: [
            "Là việc thực hiện pháp luật của tổ chức.",
            "Là việc thực hiện pháp luật của cá nhân.",
            "Là việc thực hiện pháp luật của cơ quan nhà nước và cá nhân được trao quyền.",
            "Bất kỳ cá nhân, tổ chức nào cũng được áp dụng pháp luật."
        ],
        answer: 2 // C
    },
    {
        id: 136,
        question: "Chủ thể có thẩm quyền áp dụng pháp luật là:",
        options: [
            "Tổ chức xã hội.",
            "Cơ quan nhà nước, cá nhân có thẩm quyền, tổ chức được Nhà nước trao quyền.",
            "Bất kỳ cá nhân nào cũng được áp dụng pháp luật",
            "Bất kỳ tổ chức nào cũng được áp dụng pháp luật"
        ],
        answer: 1 // B
    },
    {
        id: 137,
        question: "Thi hành pháp luật là hình thức thực hiện pháp luật, trong đó:",
        options: [
            "Chủ thể thực hiện cách xử sự mà pháp luật cho phép.",
            "Chủ thể kiềm chế mình không thực hiện hành vi pháp luật cấm.",
            "Chủ thể bằng hành động tích cực thực hiện hành vi pháp luật yêu cầu.",
            "Chủ thể áp dụng quy định pháp luật để giải quyết các vụ việc"
        ],
        answer: 2 // C
    },
    {
        id: 138,
        question: "Tuân thủ pháp luật là hình thức thực hiện pháp luật, trong đó:",
        options: [
            "Chủ thể thực hiện cách xử sự mà pháp luật cho phép.",
            "Chủ thể kiềm chế mình không thực hiện điều pháp luật cấm.",
            "Chủ thể bằng hành vi hành động tích cực thực hiện điều pháp luật yêu cầu.",
            "Chủ thể áp dụng quy định pháp luật để giải quyết các vụ việc"
        ],
        answer: 1 // B
    },
    {
        id: 139,
        question: "Sử dụng pháp luật là:",
        options: [
            "Không được làm những điều mà pháp luật cấm bằng hành vi thụ động.",
            "Có quyền thực hiện hay không thực hiện những điều mà pháp luật cho phép.",
            "Tích cực thực hiện những điều pháp luật yêu cầu.",
            "Chủ thể áp dụng quy định pháp luật để giải quyết các vụ việc"
        ],
        answer: 1 // B
    },
    {
        id: 140,
        question: "Thực hiện pháp luật gồm:",
        options: [
            "Tuân thủ pháp luật.",
            "Thi hành pháp luật.",
            "Sử dụng pháp luật và áp dụng pháp luật.",
            "Tuân thủ pháp luật, thi hành pháp luật, sử dụng pháp luật và áp dụng pháp luật."
        ],
        answer: 3 // D
    },
    {
        id: 141,
        question: "Đây là hình thức tuân thủ pháp luật:",
        options: [
            "Lừa đảo chiếm đoạt tài sản.",
            "Không cứu giúp người khác đang trong trình trạng nguy hiểm đến tính mạng.",
            "Không lạm dụng tín nhiệm chiếm đoạt tài sản.",
            "Khởi kiện yêu cầu ly hôn."
        ],
        answer: 2 // C
    },
    {
        id: 142,
        question: "Đây là hình thức thi hành pháp luật:",
        options: [
            "Cướp giật tài sản.",
            "Tố giác tội phạm",
            "Mua bán hàng hoá.",
            "Khởi kiện yêu cầu ly hôn."
        ],
        answer: 1 // B
    },
    {
        id: 143,
        question: "Đây là hình thức sử dụng pháp luật:",
        options: [
            "Buôn lậu.",
            "Lạm dụng tín nhiệm chiếm đoạt tài sản.",
            "Kết hôn.",
            "Toà án xét xử các vụ án."
        ],
        answer: 2 // C
    },
    {
        id: 144,
        question: "Đây là hình thức áp dụng pháp luật:",
        options: [
            "Nam công dân thực hiện nghĩa vụ quân sự.",
            "Xử phạt vi phạm hành chính trong lĩnh vực giao thông.",
            "Ký kết hợp đồng xây dựng.",
            "Đăng ký kết hôn."
        ],
        answer: 1 // B
    },
    {
        id: 145,
        question: "Đây là hình thức tuân thủ pháp luật:",
        options: [
            "Không cố ý gây thương tích.",
            "Nhận nuôi con nuôi.",
            "Ly hôn.",
            "Đăng ký kết hôn."
        ],
        answer: 0 // A
    },
    {
        id: 146,
        question: "Đây là hình thức thi hành pháp luật:",
        options: [
            "Đeo khẩu trang ở nơi công cộng trong thời gian phòng chống dịch bệnh.",
            "Buôn lậu.",
            "Khiếu nại về quyết định thu hồi đất.",
            "Đăng ký kết hôn."
        ],
        answer: 0 // A
    },
    {
        id: 147,
        question: "Đây là hình thức áp dụng pháp luật:",
        options: [
            "UBND cấp xã cấp Giấy chứng nhận kết hôn.",
            "Đăng ký kinh doanh.",
            "Không tham ô.",
            "Khởi kiện đòi nợ."
        ],
        answer: 0 // A
    },
    {
        id: 148,
        question: "Đây là hình thức áp dụng pháp luật:",
        options: [
            "Giám đốc bệnh viện ban hành Quyết định tuyển dụng công chức.",
            "Tổ chức sử dụng ma tuý.",
            "Kinh doanh pháo.",
            "Khởi kiện đòi nợ."
        ],
        answer: 0 // A
    },
    {
        id: 149,
        question: "Biểu hiện quan trọng nhất thuộc mặt chủ quan của vi phạm pháp luật là:",
        options: [
            "Động cơ.",
            "Mục đích.",
            "Lỗi.",
            "Độ tuổi."
        ],
        answer: 2 // C
    },
    {
        id: 150,
        question: "Biểu hiện quan trọng nhất thuộc mặt khách quan của vi phạm pháp luật là:",
        options: [
            "Thiệt hại cho xã hội.",
            "Hành vi trái pháp luật.",
            "Mối liên hệ nhân quả giữa hành vi-thiệt hại cho xã hội.",
            "Các yếu tố khác: công cụ, thời gian, địa điểm."
        ],
        answer: 1 // B
    },
    // --- PHẦN 4: TỪ CÂU 151 ĐẾN 200 ---
    {
        id: 151,
        question: "Dấu hiệu vi phạm pháp luật gồm:",
        options: [
            "Hành vi xác định của con người.",
            "Hành vi trái pháp luật, có lỗi.",
            "Chủ thể thực hiện hành vi có năng lực trách nhiệm pháp lý.",
            "Hành vi trái pháp luật, có lỗi, chủ thể thực hiện hành vi có năng lực trách nhiệm pháp lý, quan hệ xã hội được pháp luật bảo vệ."
        ],
        answer: 3 // D
    },
    {
        id: 152,
        question: "Đây không phải biểu hiệu thuộc mặt khách quan của vi phạm pháp luật:",
        options: [
            "Suy nghĩ trái pháp luật.",
            "Hành vi trái pháp luật.",
            "Hậu quả của hành vi.",
            "Mối liên hệ hành vi-hậu quả."
        ],
        answer: 0 // A
    },
    {
        id: 153,
        question: "Xác định lỗi: Sau khi gây tai nạn cho nạn nhân, tài xế A thực hiện hành vi lùi xe và điều khiển xe chèn qua người nạn nhân hai lần khiến nạn nhân tử vong.",
        options: [
            "Cố ý trực tiếp.",
            "Cố ý gián tiếp.",
            "Vô ý do cẩu thả.",
            "Vô ý do quá tự tin."
        ],
        answer: 0 // A
    },
    {
        id: 154,
        question: "Xác định hành vi vi phạm pháp luật: Anh A trốn khỏi khu cách ly của cơ quan y tế về thăm bạn gái ở xã lân cận.",
        options: [
            "Trốn khỏi khu cách ly.",
            "Thăm bạn gái.",
            "Trốn khỏi khu cách ly, thăm bạn gái.",
            "Bạn gái của A không khai báo về việc A về thăm mình."
        ],
        answer: 0 // A
    },
    {
        id: 155,
        question: "Xác định động cơ của vi phạm pháp luật: A đăng thông tin sai sự thật trên mạng xã hội về dịch bệnh Covid 19 để tăng số lượng người theo dõi tài khoản của mình.",
        options: [
            "Đăng thông tin sai sự thật về dịch bệnh Covid.",
            "Tăng số lượng người theo dõi tài khoản cá nhân.",
            "Kiếm tiền thông qua quảng cáo online.",
            "Tìm người yêu có cùng sở thích."
        ],
        answer: 1 // B
    },
    {
        id: 156,
        question: "Xác định động cơ của vi phạm pháp luật: A ghen tuông với B - vợ của nhân tình, A gửi 6 ly trà sữa có pha chất độc xyanua và gửi tới phòng làm việc của B, khiến 1 đồng nghiệp của B tử vong do uống nhầm ly trà sữa có độc tố.",
        options: [
            "Giải quyết mâu thuẫn tình cảm.",
            "Tước đoạt tính mạng của B.",
            "Cảnh cáo B.",
            "Giải quyết mâu thuẫn với đồng nghiệp của B"
        ],
        answer: 0 // A
    },
    {
        id: 157,
        question: "Xác định năng lực chịu trách nhiệm pháp lý: Trẻ em 5 tuổi vặn tay ga khiến xe máy tông vào người đi đường",
        options: [
            "Cố ý gián tiếp.",
            "Cố ý trực tiếp.",
            "Không có năng lực chịu trách nhiệm pháp lý.",
            "Không có lỗi"
        ],
        answer: 2 // C
    },
    {
        id: 158,
        question: "Xác định lỗi: Vì gấp rút đưa người chấn thương do tai nạn tới bệnh viện, anh A đã có hành vi điều khiển xe ôtô vượt đèn đỏ.",
        options: [
            "Cố ý trực tiếp.",
            "Cố ý gián tiếp.",
            "Không có lỗi",
            "Vô ý do cẩu thả"
        ],
        answer: 2 // C (Sự kiện bất ngờ/Tình thế cấp thiết thường loại trừ lỗi/trách nhiệm)
    },
    {
        id: 159,
        question: "Xác định loại vi phạm pháp luật: Nhân viên công ty An Minh đi làm muộn 30 phút so với quy định.",
        options: [
            "Vi phạm hành chính.",
            "Vi phạm hình sự.",
            "Vi phạm dân sự.",
            "Vi phạm kỷ luật"
        ],
        answer: 3 // D
    },
    {
        id: 160,
        question: "Cấu thành của vi phạm pháp luật gồm:",
        options: [
            "Mặt khách quan và mặt chủ quan.",
            "Chủ thể và khách thể.",
            "Giả định, quy định, chế tài.",
            "Mặt khách quan và mặt chủ quan, chủ thể và khách thể"
        ],
        answer: 3 // D
    },
    {
        id: 161,
        question: "Xác định khách thể của vi phạm pháp luật: A vay B một khoản tiền và không trả lại tiền khi đáo hạn",
        options: [
            "Khoản tiền vay",
            "Quyền sở hữu về tài sản của B",
            "Năng lực vay tiền của A",
            "Nghĩa vụ trả tiền của A"
        ],
        answer: 1 // B
    },
    {
        id: 162,
        question: "Biện pháp trách nhiệm pháp lý nghiêm khắc nhất là:",
        options: [
            "Trách nhiệm pháp lý hành chính.",
            "Trách nhiệm pháp lý hình sự",
            "Trách nhiệm kỷ luật.",
            "Trách nhiệm pháp lý dân sự."
        ],
        answer: 1 // B
    },
    {
        id: 163,
        question: "Vi phạm pháp luật nào gây hậu quả nguy hiểm nhất cho xã hội:",
        options: [
            "Vi phạm dân sự.",
            "Vi phạm hình sự",
            "Vi phạm hành chính.",
            "Vi phạm kỷ luật"
        ],
        answer: 1 // B
    },
    {
        id: 164,
        question: "Trách nhiệm pháp lý bao gồm:",
        options: [
            "Trách nhiệm pháp lý dân sự.",
            "Trách nhiệm pháp lý hành chính.",
            "Trách nhiệm pháp lý hình sự và trách nhiệm kỷ luật.",
            "Trách nhiệm pháp lý dân sự, trách nhiệm pháp lý hành chính, trách nhiệm pháp lý hình sự và trách nhiệm kỷ luật."
        ],
        answer: 3 // D
    },
    {
        id: 165,
        question: "Chủ thể của vi phạm pháp luật là:",
        options: [
            "Cá nhân",
            "Tổ chức",
            "Cá nhân hoặc tổ chức",
            "Pháp nhân"
        ],
        answer: 2 // C
    },
    {
        id: 166,
        question: "Đây là biện pháp trách nhiệm pháp lý:",
        options: [
            "Phạt tiền vì hành vi trốn thuế",
            "Cưỡng chế tiêu hủy gia cầm mắc bệnh cúm",
            "Tước chứng chỉ hành nghề do vi phạm quy định hành nghề",
            "Tất cả các phương án trên đều đúng."
        ],
        answer: 3 // D (Câu gốc chọn cả 3 ý trên)
    },
    {
        id: 167,
        question: "Cơ quan có thẩm quyền truy cứu trách nhiệm pháp lý là:",
        options: [
            "Cơ quan, tổ chức xã hội.",
            "Cơ quan, tổ chức được Nhà nước trao quyền.",
            "Tổ chức chính trị.",
            "Pháp nhân."
        ],
        answer: 1 // B
    },
    {
        id: 168,
        question: "Vi phạm pháp luật được phân loại thành:",
        options: [
            "Tội phạm và các vi phạm pháp luật khác.",
            "Tội phạm.",
            "Vi phạm hành chính, vi phạm hình sự, vi phạm dân sự, vi phạm kỷ luật",
            "Vi phạm tài chính, vi phạm đất đai, vi phạm môi trường."
        ],
        answer: 2 // C
    },
    {
        id: 169,
        question: "Vi phạm pháp luật gây ra thiệt hại thể hiện dưới dạng:",
        options: [
            "Vật chất",
            "Tinh thần",
            "Tinh thần hoặc vật chất",
            "Phi vật chất"
        ],
        answer: 2 // C
    },
    {
        id: 170,
        question: "Hình thức thực hiện pháp luật nào cần sự tham gia của Nhà nước:",
        options: [
            "Tuân thủ pháp luật.",
            "Thi hành pháp luật.",
            "Sử dụng pháp luật.",
            "Áp dụng pháp luật"
        ],
        answer: 3 // D
    },
    {
        id: 171,
        question: "Xác định loại vi phạm pháp luật: Anh A sử dụng vắc xin hết hạn sử dụng để tiêm cho bệnh nhân",
        options: [
            "Vi phạm hình sự.",
            "Vi phạm hành chính và hình sự, tùy theo mức độ.",
            "Vi phạm dân sự.",
            "Vi phạm kỷ luật."
        ],
        answer: 1 // B
    },
    {
        id: 172,
        question: "Trường hợp nào sau đây là vi phạm pháp luật:",
        options: [
            "Người tâm thần đập phá tài sản của người khác",
            "Gây thương tích cho người khác trong tình huống phòng vệ chính đáng",
            "Thuê chứng chỉ hành nghề dược",
            "Giết người trong trường hợp phòng vệ chính đáng"
        ],
        answer: 2 // C
    },
    {
        id: 173,
        question: "Anh A điều khiển xe máy có nồng độ cồn 0.6mg/l khí thở. Trách nhiệm pháp lý áp dụng là:",
        options: [
            "Trách nhiệm hình sự",
            "Trách nhiệm hành chính.",
            "Trách nhiệm dân sự.",
            "Trách nhiệm kỷ luật."
        ],
        answer: 1 // B
    },
    {
        id: 174,
        question: "Cá nhân được miễn trách nhiệm pháp lý trong các trường hợp sau:",
        options: [
            "Chích hút ma túy dẫn tới không có khả năng nhận thức.",
            "Mắc bệnh dẫn tới mất khả năng nhận thức.",
            "Say rượu dẫn tới không có khả năng nhận thức.",
            "Giết người do vượt quá giới hạn phòng vệ chính đáng"
        ],
        answer: 1 // D (Lưu ý: Theo đáp án file là D, nhưng thực tế vượt quá giới hạn vẫn chịu TNHS, có thể được giảm nhẹ. Tuy nhiên hãy theo đáp án trong file)
    },
    {
        id: 175,
        question: "Trường hợp không phải chịu trách nhiệm pháp luật hình sự:",
        options: [
            "Thi công công trình xây dựng không có giấy phép xây dựng",
            "Người say rượu thực hiện hành vi giết người",
            "Dược sĩ bán không đúng thuốc đã kê trong đơn.",
            "Trẻ em 4 tuổi nghịch lửa gây hoả hoạn cháy nhà hàng xóm"
        ],
        answer: 3 // D
    },
    {
        id: 176,
        question: "A dự định ăn trộm, mua dụng cụ nhưng chưa hành động và vẫn giữ dụng cụ trong nhà. Hành vi của A:",
        options: [
            "Hành vi của A là vi phạm pháp luật.",
            "Hành vi của A không vi phạm pháp luật",
            "Hành vi của A có lỗi.",
            "Hành vi của A là trái pháp luật"
        ],
        answer: 1 // B
    },
    {
        id: 177,
        question: "Xác định loại vi phạm pháp luật: Ông A có hành vi tung tin đồn sai sự thật về người khác trên mạng xã hội.",
        options: [
            "Vi phạm hình sự.",
            "Vi phạm hành chính hoặc hình sự, tùy mức độ.",
            "Vi phạm kỷ luật.",
            "Vi phạm dân sự."
        ],
        answer: 1 // B
    },
    {
        id: 178,
        question: "Trường hợp nào sau đây là vi phạm pháp luật:",
        options: [
            "Ký hợp đồng lao động với người 16 tuổi",
            "Người tâm thần thực hiện hành vi trốn khỏi bệnh viện",
            "Người mộng du đập phá tài sản của hàng xóm",
            "Anh A nhập cư trái phép vào Việt Nam"
        ],
        answer: 3 // D
    },
    {
        id: 179,
        question: "Chọn nhận định đúng:",
        options: [
            "Vi phạm pháp luật phải là hành vi gây thiệt hại cho xã hội.",
            "Hành vi chưa gây thiệt hại cho xã hội có thể là vi phạm pháp luật",
            "Vi phạm pháp luật phải là hành vi cố ý gây thiệt hại cho xã hội.",
            "Vi phạm pháp luật phải là hành vi vô ý gây thiệt hại cho xã hội."
        ],
        answer: 1 // B
    },
    {
        id: 180,
        question: "A giả danh Công an gọi điện lừa đảo chiếm đoạt tài sản. Trách nhiệm pháp lý áp dụng với A là:",
        options: [
            "Trách nhiệm pháp lý hình sự.",
            "Trách nhiệm pháp lý hành chính.",
            "Trách nhiệm pháp lý dân sự.",
            "Trách nhiệm kỷ luật."
        ],
        answer: 0 // A
    },
    {
        id: 181,
        question: "Xác định khách thể của vi phạm pháp luật: Chị A cố ý “cầm nhầm” giỏ xách của chị B...",
        options: [
            "Chị B",
            "Chiếc giỏ xách",
            "Quyền sở hữu tài sản của chị B",
            "Quyền sử dụng tài sản của chị B"
        ],
        answer: 2 // C
    },
    {
        id: 182,
        question: "Tiệm thuốc lợi dụng dịch bệnh tăng giá khẩu trang. Trách nhiệm pháp lý áp dụng là:",
        options: [
            "Trách nhiệm pháp lý dân sự",
            "Trách nhiệm pháp lý hành chính",
            "Trách nhiệm kỷ luật",
            "Trách nhiệm pháp lý hình sự"
        ],
        answer: 1 // B
    },
    {
        id: 183,
        question: "Đây không phải biện pháp trách nhiệm pháp lý:",
        options: [
            "Buộc xã A thực hiện giãn cách xã hội 15 ngày vì có người cư trú mắc bệnh Covid 19",
            "Cảnh cáo.",
            "Phạt tiền",
            "Tước chứng chỉ hành nghề"
        ],
        answer: 0 // A
    },
    {
        id: 184,
        question: "Đây không phải biện pháp trách nhiệm pháp lý:",
        options: [
            "Buộc anh A bồi thường giá trị tài sản do A làm hỏng cho siêu thị",
            "Buộc anh A vào trại cách ly do tiếp xúc với người nhiễm bệnh Covid 19",
            "Buộc anh A phá dỡ công trình xây dựng trái phép",
            "Buộc A chấp hành hình phạt tù do thực hiện hành vi cướp tài sản"
        ],
        answer: 1 // B
    },
    {
        id: 185,
        question: "Chọn nhận định Đúng:",
        options: [
            "Chủ thể không nhận thức được hậu quả do hành vi của mình gây ra thì không có lỗi.",
            "Chủ thể phải nhận thức được hậu quả do hành vi của mình gây ra thì mới có lỗi.",
            "Chủ thể không mong muốn hậu quả xảy ra thì không có lỗi.",
            "Chủ thể không nhận thức được hậu quả do hành vi của mình gây ra có thể có lỗi."
        ],
        answer: 1 // B (Theo đáp án file)
    },
    {
        id: 186,
        question: "Nhận định nào đúng:",
        options: [
            "Mọi hành vi trái pháp luật là vi phạm pháp luật.",
            "Mọi hành vi vi phạm pháp luật có thể có lỗi, có thể không có lỗi.",
            "Hành vi trái pháp luật có thể là vi phạm pháp luật, có thể không phải vi phạm pháp luật.",
            "Mọi hành vi vi phạm pháp luật không có lỗi."
        ],
        answer: 2 // C
    },
    {
        id: 187,
        question: "Chọn nhận định đúng về chủ thể vi phạm:",
        options: [
            "Vi phạm pháp luật là hành vi do bất kỳ cá nhân nào thực hiện.",
            "Vi phạm pháp luật có thể có lỗi hoặc không có lỗi.",
            "Vi phạm pháp luật là hành vi do chủ thể có năng lực trách nhiệm pháp lý thực hiện.",
            "Vi phạm pháp luật không có lỗi."
        ],
        answer: 2 // C
    },
    {
        id: 188,
        question: "Chọn nhận định đúng về lỗi:",
        options: [
            "Vi phạm pháp luật có thể có lỗi hoặc không có lỗi.",
            "Lỗi là dấu hiệu bắt buộc của vi phạm pháp luật",
            "Lỗi là biểu hiện bắt buộc của vi phạm pháp luật",
            "Vi phạm pháp biểu hiện bắt buộc của mặt khách quan."
        ],
        answer: 1 // B
    },
    {
        id: 189,
        question: "Chọn nhận định đúng về trách nhiệm pháp lý:",
        options: [
            "Mọi biện pháp cưỡng chế của Nhà nước đều là trách nhiệm pháp lý.",
            "Trách nhiệm pháp lý là biện pháp cưỡng chế của Nhà nước đối với chủ thể vi phạm pháp luật.",
            "Trách nhiệm pháp lý là biện pháp cưỡng chế bất kỳ của Nhà nước.",
            "Trách nhiệm pháp lý là biện pháp cưỡng chế của Nhà nước đối với chủ thể thực hiện hành vi trái luật."
        ],
        answer: 1 // B
    },
    {
        id: 190,
        question: "Nền kinh tế thị trường Việt Nam hiện nay có bản chất:",
        options: [
            "Nền kinh tế thị trường tự nhiên.",
            "Nền kinh tế thị trường có sự chi phối của Nhà nước.",
            "Nền kinh tế thị trường định hướng XHCN.",
            "Nền kinh tế thị trường tư bản chủ nghĩa"
        ],
        answer: 2 // C
    },
    {
        id: 191,
        question: "Hiến pháp 2013 có bao nhiêu chương, điều:",
        options: [
            "11 chương với 120 điều",
            "11 chương với 121 điều",
            "12 chương với 122 điều",
            "13 chương với 123 điều"
        ],
        answer: 0 // A
    },
    {
        id: 192,
        question: "Hiến pháp 2013 có hiệu lực kể từ ngày tháng năm nào:",
        options: [
            "01/01/2013",
            "01/01/2014",
            "01/07/2013",
            "01/07/2014"
        ],
        answer: 1 // B
    },
    {
        id: 193,
        question: "Kể từ khi thành lập đến nay, nước CHXHCN Việt Nam đã có bao nhiêu bản Hiến pháp:",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: 2 // C
    },
    {
        id: 194,
        question: "Giấy tờ chứng minh quốc tịch Việt Nam bao gồm:",
        options: [
            "Giấy khai sinh",
            "Căn cước công dân",
            "Hộ chiếu",
            "Giấy khai sinh, căn cước công dân và hộ chiếu"
        ],
        answer: 3 // D
    },
    {
        id: 195,
        question: "Người nào sau đây không đủ điều kiện nhập quốc tịch Việt Nam:",
        options: [
            "Mất năng lực hành vi dân sự",
            "Đang bị truy cứu trách nhiệm hình sự",
            "Đã có quốc tịch nào khác",
            "Cả 3 trường hợp trên"
        ],
        answer: 2 // C (Theo file đáp án chọn C: Đã có quốc tịch nào khác)
    },
    {
        id: 196,
        question: "Ai có quyền cho nhập quốc tịch Việt Nam:",
        options: [
            "Tổng bí thư",
            "Chủ tịch nước",
            "Thủ tướng chính phủ",
            "Chủ tịch Quốc hội"
        ],
        answer: 1 // B
    },
    {
        id: 197,
        question: "Người từ 16 tuổi trở lên phải chịu trách nhiệm hành chính trong trường hợp thực hiện lỗi…….:",
        options: [
            "Vô ý",
            "Vô ý hoặc cố ý",
            "Cố ý",
            "Suy đoán"
        ],
        answer: 1 // B
    },
    {
        id: 198,
        question: "Hiến pháp 2013 của Việt Nam ghi nhận và bảo vệ quyền và lợi ích của:",
        options: [
            "Công dân Việt Nam",
            "Người nước ngoài sinh sống ở Việt Nam",
            "Người không quốc tịch sinh sống ở Việt Nam",
            "Công dân Việt Nam, Người nước ngoài và Người không quốc tịch sinh sống ở Việt Nam."
        ],
        answer: 3 // D
    },
    {
        id: 199,
        question: "Chế định “Quyền và nghĩa vụ cơ bản của công dân” thuộc đối tượng điều chỉnh của ngành luật:",
        options: [
            "Ngành Luật hôn nhân gia đình.",
            "Ngành Luật hình sự.",
            "Ngành Luật lao động.",
            "Ngành Luật hiến pháp."
        ],
        answer: 3 // D
    },
    {
        id: 200,
        question: "Hệ thống chính trị ở Việt Nam bao gồm:",
        options: [
            "Đảng CSVN",
            "Nhà nước CHXHCN Việt Nam",
            "Mặt trận TQ Việt Nam và các Đoàn thể",
            "Nhà nước CHXHCN Việt Nam, Đảng CSVN, Mặt trận TQ Việt Nam và các Đoàn thể."
        ],
        answer: 3 // D
    },
    // --- PHẦN 5: TỪ CÂU 201 ĐẾN 250 ---
    {
        id: 201,
        question: "Chính sách nào ở Việt Nam được coi là quốc sách hàng đầu:",
        options: [
            "Giáo dục và đào tạo",
            "Khoa học và công nghệ",
            "Kinh tế",
            "Giáo dục và đào tạo - Khoa học và công nghệ"
        ],
        answer: 3 // D
    },
    {
        id: 202,
        question: "Phương pháp điều chỉnh của Luật hành chính là:",
        options: [
            "Mệnh lệnh - phục tùng",
            "Bình đẳng - hợp tác",
            "Bình đẳng - thoả thuận",
            "Mệnh lệnh - thoả thuận"
        ],
        answer: 0 // A
    },
    {
        id: 203,
        question: "Độ tuổi chịu trách nhiệm hành chính đầy đủ là:",
        options: [
            "Đủ 14 tuổi",
            "Đủ 16 tuổi",
            "Đủ 18 tuổi",
            "Đủ 20 tuổi"
        ],
        answer: 1 // B
    },
    {
        id: 204,
        question: "Cơ quan hành chính Nhà nước CHXHCN Việt Nam bao gồm:",
        options: [
            "Chính phủ",
            "Uỷ ban nhân dân các cấp",
            "Bộ, cơ quan ngang bộ",
            "Chính phủ, Uỷ ban nhân dân các cấp, Bộ, cơ quan ngang bộ"
        ],
        answer: 3 // D
    },
    {
        id: 205,
        question: "Độ tuổi tối thiểu phải chịu trách nhiệm hành chính là:",
        options: [
            "Đủ 14 tuổi",
            "Đủ 16 tuổi",
            "Đủ 18 tuổi",
            "Đủ 20 tuổi"
        ],
        answer: 0 // A
    },
    {
        id: 206,
        question: "Đây là hình thức xử phạt vi phạm hành chính:",
        options: [
            "Cảnh cáo",
            "Trục xuất",
            "Phạt tiền",
            "Cảnh cáo, trục xuất, phạt tiền"
        ],
        answer: 3 // D
    },
    {
        id: 207,
        question: "Đây là hình thức xử phạt hành chính bổ sung:",
        options: [
            "Phạt tiền",
            "Cảnh cáo",
            "Tịch thu phương tiện đi lại",
            "Phạt tù"
        ],
        answer: 2 // C
    },
    {
        id: 208,
        question: "Vi phạm hành chính là do cá nhân, tổ chức thực hiện với lỗi...:",
        options: [
            "Hành vi – cố ý – tội phạm",
            "Hành vi – cố ý hoặc vô ý – tội phạm",
            "Hành vi – vô ý – tội phạm",
            "Hành vi – cố ý – vi phạm"
        ],
        answer: 1 // B
    },
    {
        id: 209,
        question: "Người từ đủ 14 tuổi đến dưới 16 tuổi phải chịu trách nhiệm trong trường hợp thực hiện lỗi:",
        options: [
            "Vô ý",
            "Vô ý hoặc cố ý",
            "Cố ý",
            "Suy đoán"
        ],
        answer: 2 // C
    },
    {
        id: 210,
        question: "Xử phạt vi phạm hành chính là hoạt động của các...:",
        options: [
            "Cá nhân - xử phạt - tổ chức",
            "Chủ thể - cưỡng chế - tổ chức, cá nhân",
            "Cá nhân - xử phạt - cá nhân",
            "Chủ thể - xử phạt - cá nhân"
        ],
        answer: 1 // B
    },
    {
        id: 211,
        question: "Đây là biện pháp xử phạt hành chính áp dụng với cá nhân, tổ chức vi phạm nhỏ, lần đầu...:",
        options: [
            "Phạt tiền",
            "Cảnh cáo và phạt tiền",
            "Cảnh cáo",
            "Trục xuất"
        ],
        answer: 2 // C
    },
    {
        id: 212,
        question: "Đây là hình thức xử phạt chính:",
        options: [
            "Tước giấy phép hành nghề",
            "Tịch thu phương tiện đi lại",
            "Cảnh cáo",
            "Tước giấy phép hành nghề - Tịch thu phương tiện đi lại - Cảnh cáo"
        ],
        answer: 3 // D (Theo đáp án file chọn D)
    },
    {
        id: 213,
        question: "Đây là cơ quan hành chính Nhà nước (câu 1):",
        options: [
            "Bộ Tư pháp",
            "Hội đồng nhân dân cấp xã",
            "Toà án",
            "Viện kiểm sát"
        ],
        answer: 0 // A
    },
    {
        id: 214,
        question: "Đây là cơ quan hành chính Nhà nước (câu 2):",
        options: [
            "Quốc hội",
            "Uỷ ban nhân dân cấp xã",
            "Hội đồng nhân dân cấp tỉnh",
            "Toà án nhân dân cấp tỉnh"
        ],
        answer: 1 // B
    },
    {
        id: 215,
        question: "Việc xử phạt hành chính chỉ tiến hành khi có hành vi:",
        options: [
            "Vi phạm dân sự",
            "Vi phạm hành chính",
            "Vi phạm hình sự",
            "Vi phạm kỉ luật"
        ],
        answer: 1 // B
    },
    {
        id: 216,
        question: "Xử phạt vi phạm hành chính trong trường hợp nào sau đây:",
        options: [
            "Người thực hiện hành vi vi phạm hành chính say rượu",
            "Phòng vệ chính đáng",
            "Tình thế cấp thiết",
            "Sự kiện bất ngờ"
        ],
        answer: 0 // A
    },
    {
        id: 217,
        question: "Phương pháp quản lý hành chính gồm:",
        options: [
            "Phương pháp thuyết phục",
            "Phương pháp kinh tế",
            "Phương pháp cưỡng chế và phương pháp hành chính",
            "Tất cả các phương pháp trên"
        ],
        answer: 3 // D
    },
    {
        id: 218,
        question: "Đây không phải Bộ trực thuộc Chính phủ:",
        options: [
            "Bộ Tư pháp",
            "Bộ Chính trị",
            "Bộ Y tế",
            "Bộ Tài chính"
        ],
        answer: 1 // B
    },
    {
        id: 219,
        question: "Theo Hiến pháp 2013, Chính phủ là cơ quan …… Nhà nước cao nhất.",
        options: [
            "Lập pháp",
            "Hành chính",
            "Hành pháp",
            "Tư pháp"
        ],
        answer: 1 // B
    },
    {
        id: 220,
        question: "Thủ tướng Chính phủ nước CHXHCN Việt Nam do:",
        options: [
            "Dân bầu",
            "Quốc hội bầu",
            "Chính phủ bầu",
            "Chủ tịch nước bổ nhiệm"
        ],
        answer: 1 // B
    },
    {
        id: 221,
        question: "Cơ quan chức năng phát hiện anh A lái xe tải chở 1 xác lợn nặng 80kg không rõ nguồn gốc. Hành vi của A sẽ bị xử lý:",
        options: [
            "Cảnh cáo",
            "Tịch thu xe",
            "Phạt tiền",
            "Cảnh cáo - Tịch thu xe"
        ],
        answer: 2 // C (Dựa theo các đáp án tương tự thường là phạt tiền)
    },
    {
        id: 222,
        question: "Anh A điều khiển xe gắn máy vượt đèn đỏ. Hành vi của A sẽ bị xử lý như thế nào?",
        options: [
            "Cảnh cáo",
            "Trục xuất",
            "Phạt tiền",
            "Cảnh cáo và trục xuất"
        ],
        answer: 2 // C
    },
    {
        id: 223,
        question: "Công ty ABC xả nước thải chưa qua xử lý xuống mương nước, gây ô nhiễm môi trường, hành vi này là:",
        options: [
            "Vi phạm hình sự",
            "Vi phạm hành chính",
            "Vi phạm dân sự",
            "Vi phạm kỷ luật"
        ],
        answer: 0 // A (Theo file đáp án chọn A)
    },
    {
        id: 224,
        question: "Chị A thuê chứng chỉ hành nghề để bán thuốc. Hành vi của chị A sẽ bị xử lý:",
        options: [
            "Phạt tiền",
            "Phạt tù",
            "Trục xuất",
            "Cảnh cáo"
        ],
        answer: 0 // A
    },
    {
        id: 225,
        question: "Anh A điều khiển xe chạy quá tốc độ cho phép. Hành vi của anh A sẽ bị xử lý:",
        options: [
            "Phạt tiền",
            "Phạt tiền và tước bằng lái",
            "Cảnh cáo",
            "Phạt tiền - Phạt tiền và tước bằng lái"
        ],
        answer: 1 // B
    },
    {
        id: 226,
        question: "Bộ trưởng nước CHXHCN Việt Nam do:",
        options: [
            "Quốc hội phê chuẩn, chủ tịch nước bổ nhiệm",
            "Mặt trận tổ quốc bầu",
            "Chính phủ bầu",
            "Dân bầu"
        ],
        answer: 2 // C (Theo file đáp án chọn C, dù thực tế pháp lý là A)
    },
    {
        id: 227,
        question: "Chị A không đeo khẩu trang khi đi mua sắm tại siêu thị trong đợt dịch. Hành vi của chị A bị xử lý:",
        options: [
            "Cảnh cáo",
            "Cảnh cáo và phạt tiền",
            "Phạt tiền",
            "Trục xuất"
        ],
        answer: 2 // C
    },
    {
        id: 228,
        question: "10 người nước ngoài nhập cảnh trái phép vào Việt Nam. Hành vi của họ sẽ bị xử lý:",
        options: [
            "Cảnh cáo",
            "Trục xuất",
            "Phạt tù",
            "Phạt tiền"
        ],
        answer: 1 // B
    },
    {
        id: 229,
        question: "Hộ dân mổ heo mắc bệnh và bán trên thị trường. Hành vi của họ sẽ bị xử lý:",
        options: [
            "Cảnh cáo",
            "Trục xuất",
            "Phạt tiền",
            "Phạt tù"
        ],
        answer: 2 // C
    },
    {
        id: 230,
        question: "Có mấy nguyên tắc cơ bản của pháp Luật Dân sự:",
        options: [
            "2",
            "3",
            "5",
            "7"
        ],
        answer: 2 // C
    },
    {
        id: 231,
        question: "Bộ luật dân sự mới nhất của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là:",
        options: [
            "Bộ luật dân sự 2014",
            "Bộ luật dân sự 2015",
            "Bộ luật dân sự 2016",
            "Bộ luật dân sự 2017"
        ],
        answer: 1 // B
    },
    {
        id: 232,
        question: "Đối tượng điều chỉnh của ngành luật dân sự là:",
        options: [
            "Nhóm quan hệ tài sản",
            "Nhóm quan hệ nhân thân",
            "Nhóm quan hệ tài sản và nhóm quan hệ nhân thân",
            "Nhóm quan hệ giữa thương nhân Việt Nam và nước ngoài"
        ],
        answer: 2 // C
    },
    {
        id: 233,
        question: "Phương pháp nào sau đây điều chỉnh ngành luật dân sự?",
        options: [
            "Phương pháp quyền uy.",
            "Phương pháp thỏa thuận.",
            "Phương pháp tự định đoạt.",
            "Phương pháp thoả thuận và phương pháp tự định đoạt."
        ],
        answer: 3 // D
    },
    {
        id: 234,
        question: "Văn bản nào sau đây là nguồn của luật dân sự?",
        options: [
            "Hiến pháp năm 2013.",
            "Bộ luật hình sự năm 2015.",
            "Luật tố tụng hành chính 2015.",
            "Luật phòng, chống tham nhũng 2019."
        ],
        answer: 0 // A
    },
    {
        id: 235,
        question: "Phạm vi điều chỉnh của Bộ luật Dân sự năm 2015 được quy định như thế nào?",
        options: [
            "Tội phạm và hình phạt.",
            "Trật tự quản lý hành chính nhà nước.",
            "Quy định về địa vị pháp lý của các chủ thể kinh doanh.",
            "Các quan hệ về nhân thân và tài sản."
        ],
        answer: 3 // D
    },
    {
        id: 236,
        question: "Theo Bộ luật Dân sự năm 2015, năng lực pháp luật dân sự của cá nhân là gì?",
        options: [
            "Là khả năng của cá nhân có quyền dân sự.",
            "Là khả năng của cá nhân có nghĩa vụ dân sự.",
            "Là khả năng của cá nhân có quyền dân sự và nghĩa vụ dân sự.",
            "Là khả năng của cá nhân chịu trách nhiệm pháp luật dân sự."
        ],
        answer: 2 // C
    },
    {
        id: 237,
        question: "Theo Bộ luật Dân sự năm 2015, năng lực hành vi dân sự của cá nhân là gì?",
        options: [
            "Là khả năng của cá nhân bằng hành vi của mình xác lập, thực hiện quyền, nghĩa vụ dân sự.",
            "Là khả năng của cá nhân thực hiện quyền, nghĩa vụ dân sự.",
            "Là khả năng của cá nhân xác lập quyền, nghĩa vụ dân sự.",
            "Là khả năng cá nhân chịu trách nhiệm hình sự nếu phạm tội."
        ],
        answer: 0 // A
    },
    {
        id: 238,
        question: "Bộ luật Dân sự năm 2015 quy định như thế nào về nơi cư trú của cá nhân?",
        options: [
            "Nơi cư trú của cá nhân là nơi người đó thường xuyên sinh sống.",
            "Nơi cư trú của cá nhân là nơi người đó thường xuyên công tác.",
            "Nơi cư trú của cá nhân là nơi cư trú của cha mẹ.",
            "Nơi cư trú của cá nhân là nơi người đó có nhiều tài sản hiện diện."
        ],
        answer: 0 // A
    },
    {
        id: 239,
        question: "Bộ luật Dân sự 2015 quy định các quyền khác đối với tài sản bao gồm các quyền gì?",
        options: [
            "Quyền đối với bất động sản liền kề; quyền hưởng dụng; quyền bề mặt.",
            "Quyền hưởng dụng.",
            "Quyền bề mặt.",
            "Quyền chiếm đoạt"
        ],
        answer: 0 // A
    },
    {
        id: 240,
        question: "Hiệu lực thi hành của Bộ luật Tố tụng dân sự năm 2015 được quy định như thế nào?",
        options: [
            "Có hiệu lực từ 01/7/2016.",
            "Có hiệu lực từ 01/01/2017.",
            "Có hiệu lực từ 01/7/2016 và từ 01/01/2017 đối với một số trường hợp.",
            "Có hiệu lực từ 01/07/2015."
        ],
        answer: 2 // C
    },
    {
        id: 241,
        question: "Theo Luật Tố tụng dân sự năm 2015, cơ quan tiến hành tố tụng bao gồm:",
        options: [
            "Tòa án, Viện kiểm sát.",
            "Cơ quan điều tra, Viện kiểm sát, Tòa án.",
            "Thẩm phán, Kiểm sát viên.",
            "Điều tra viên, Thẩm tra viên."
        ],
        answer: 0 // A
    },
    {
        id: 242,
        question: "Bộ luật Tố tụng dân sự năm 2015 quy định những người nào là đương sự trong vụ án dân sự?",
        options: [
            "Cơ quan, tổ chức.",
            "Cơ quan, tổ chức, cá nhân bao gồm nguyên đơn, bị đơn, người có quyền lợi, nghĩa vụ liên quan.",
            "Cá nhân.",
            "Pháp nhân nước ngoài."
        ],
        answer: 1 // B
    },
    {
        id: 243,
        question: "Tố tụng dân sự là toàn bộ thủ tục giải quyết:",
        options: [
            "Các vụ án dân sự",
            "Các việc dân sự",
            "Các vụ việc dân sự",
            "Các vụ án dân sự, hình sự và hành chính."
        ],
        answer: 2 // C
    },
    {
        id: 244,
        question: "Bộ luật tố tụng dân sự năm 2015 quy định cấp xét xử là:",
        options: [
            "Sơ thẩm và phúc thẩm",
            "Giám đốc thẩm",
            "Tái thẩm",
            "Sơ thẩm, phúc thẩm và Giám đốc thẩm hoặc Tái thẩm."
        ],
        answer: 0 // A
    },
    {
        id: 245,
        question: "Theo Bộ luật Dân sự năm 2015, chủ thể nào phải bồi thường thiệt hại do cây cối gây ra?",
        options: [
            "Chủ sở hữu.",
            "Người được giao quản lý.",
            "Chủ sở hữu, người chiếm hữu, người được giao quản lý.",
            "Thiệt hại do người bị thiệt hại tự chịu."
        ],
        answer: 2 // C
    },
    {
        id: 246,
        question: "Người gây thiệt hại không phải chịu trách nhiệm bồi thường thiệt hại trong trường hợp nào?",
        options: [
            "Thiệt hại phát sinh không do sự kiện bất khả kháng.",
            "Thiệt hại phát sinh do sự kiện bất khả kháng hoặc hoàn toàn do lỗi của bên bị thiệt hại.",
            "Thiệt hại phát sinh do một phần lỗi của bên bị thiệt hại.",
            "Thiệt hại xảy ra nếu hai bên không có thoả thuận trước."
        ],
        answer: 1 // B
    },
    {
        id: 247,
        question: "Bộ luật Dân sự năm 2015 quy định như thế nào về thời hiệu?",
        options: [
            "Thời hiệu là thời hạn do luật quy định.",
            "Thời hiệu là thời hạn do luật quy định mà khi kết thúc thì phát sinh hậu quả pháp lý...",
            "Thời hiệu là thời hạn chấm dứt hợp đồng.",
            "Thời hạn là thời hạn thì bên có nghĩa vụ phải thực hiện nghĩa vụ..."
        ],
        answer: 1 // B
    },
    {
        id: 248,
        question: "Bộ luật Dân sự năm 2015 quy định pháp nhân chấm dứt tồn tại trong trường hợp nào sau đây?",
        options: [
            "Hợp nhất, sáp nhập, chia, chuyển đổi hình thức, giải thể pháp nhân.",
            "Hợp nhất, sáp nhập, chia, chuyển đổi, giải thể, bị tuyên bố phá sản.",
            "Bị hạn chế năng lực pháp luật dân sự.",
            "Tuyên bố phá sản"
        ],
        answer: 1 // B
    },
    {
        id: 249,
        question: "Bộ luật Dân sự năm 2015 quy định như thế nào về quyền xác định lại giới tính?",
        options: [
            "Cá nhân không có quyền xác định lại giới tính.",
            "Chỉ một số cá nhân nhất định có quyền.",
            "Cá nhân có quyền xác định lại giới tính nếu bị khuyết tật bẩm sinh hoặc chưa định hình chính xác...",
            "Người chuyển giới."
        ],
        answer: 2 // C
    },
    {
        id: 250,
        question: "Quyền sở hữu là tổng hợp các ………………… nhằm điều chỉnh các quan hệ xã hội phát sinh trong lĩnh vực ………………… các tài sản theo quy định của pháp luật.",
        options: [
            "qui định pháp luật … chiếm hữu, sử dụng và định đoạt…",
            "quy phạm pháp luật - chiếm hữu…",
            "quy phạm pháp luật - sử dụng…",
            "quy phạm pháp luật - định đoạt…"
        ],
        answer: 0 // A
    },
    {
        id: 251,
        question: "Chủ thể nào được kháng nghị bản án đã có hiệu lực pháp luật theo thủ tục Giám đốc thẩm và Tái thẩm:",
        options: [
            "Chánh án TAND tỉnh và Viện trưởng VKSND tỉnh.",
            "Chánh án TAND huyện và Viện trưởng VKSND huyện.",
            "Chánh án TAND cấp cao và Viện trưởng VKSND cấp cao.",
            "Chánh án TAND cấp cao, Chánh án TAND tối cao và Viện trưởng VKSND cấp cao, Viện trưởng VKSND tối cao."
        ],
        answer: 3 // D
    },
    // --- PHẦN 6: TỪ CÂU 252 ĐẾN 300 ---
    {
        id: 252,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, những trường hợp nào Hội đồng xét xử không công bố tài liệu, chứng cứ của vụ án?",
        options: [
            "Không công bố mọi tài liệu, chứng cứ của vụ án.",
            "Không công bố tài liệu, chứng cứ do cơ quan tiến hành tố tụng thu thập.",
            "Không công bố những tài liệu, chứng cứ thuộc trường hợp cần giữ bí mật nhà nước, giữ gìn thuần phong mỹ tục, bí mật nghề nghiệp, kinh doanh, cá nhân, gia đình...",
            "Những chứng cứ bất lợi cho bị đơn hoặc nguyên đơn."
        ],
        answer: 2 // C
    },
    {
        id: 253,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, tính chất của xét xử phúc thẩm được quy định như thế nào?",
        options: [
            "Xét xử phúc thẩm là việc Tòa án cấp phúc thẩm trực tiếp xét xử lại vụ án mà bản án, quyết định của Tòa án cấp sơ thẩm chưa có hiệu lực pháp luật bị kháng cáo, kháng nghị.",
            "Xét xử phúc thẩm là việc Tòa án cấp phúc thẩm trực tiếp xét xử lại vụ án mà bản án, quyết định của Tòa án cấp sơ thẩm bị đương sự kháng cáo.",
            "Xét xử phúc thẩm là việc Tòa án phát hiện bản án, quyết định có vi phạm và trực tiếp xét xử lại vụ án...",
            "Xét xử phúc thẩm là việc Tòa án cấp phúc thẩm trực tiếp xét xử lại vụ án mà bản án, quyết định của Tòa án cấp sơ thẩm đã có hiệu lực pháp luật bị kháng cáo, kháng nghị."
        ],
        answer: 0 // A
    },
    {
        id: 254,
        question: "…………………… là ngành luật trong hệ thống pháp luật, bao gồm hệ thống các quy phạm pháp luật điều chỉnh các quan hệ phát sinh trong tố tụng dân sự...",
        options: [
            "Trọng tài thương mại",
            "Luật tố tụng dân sự",
            "Luật tố tụng hành chính",
            "Luật tố tụng hình sự"
        ],
        answer: 1 // B
    },
    {
        id: 255,
        question: "Chế định nào sau đây được quy định trong Bộ luật dân sự năm 2015?",
        options: [
            "Chế định quyền sở hữu và quyền khác đối với tài sản; chế định thừa kế; chế định hợp đồng.",
            "Chế định ban hành văn bản áp dụng quy phạm pháp luật.",
            "Chế định về Quốc hội, Chủ tịch nước, Toà án nhân dân.",
            "Chế định hình phạt tử hình."
        ],
        answer: 0 // A
    },
    {
        id: 256,
        question: "Theo Bộ luật Dân sự 2015, “tài sản” được hiểu như thế nào và bao gồm những gì?",
        options: [
            "Tài sản là vật, tiền, giấy tờ có giá và quyền tài sản.",
            "Tài sản là bất động sản.",
            "Tài sản là vật, tiền, giấy tờ có giá và quyền tài sản. Tài sản bao gồm bất động sản và động sản.",
            "Tài sản phải là vật hiện hữu."
        ],
        answer: 2 // C
    },
    {
        id: 257,
        question: "Theo Bộ luật Dân sự năm 2015, bất động sản bao gồm những loại tài sản nào sau đây?",
        options: [
            "Đất đai; Nhà, công trình xây dựng gắn liền với đất đai; Tài sản khác gắn liền với đất đai, nhà, công trình xây dựng...",
            "Xe máy, tàu thuyển, máy bay.",
            "Động vật nuôi trong nhà và sống trên cạn.",
            "Tất cả các loại vật nuôi."
        ],
        answer: 0 // A
    },
    {
        id: 258,
        question: "…………. là người được thừa hưởng di sản của người chết để lại theo chỉ định trong di chúc hoặc theo qui định của pháp luật.",
        options: [
            "Người để lại di sản thừa kế",
            "Người thừa kế",
            "Người làm chứng",
            "Công chứng viên"
        ],
        answer: 1 // B
    },
    {
        id: 259,
        question: "……………. là sự thể hiện ý chí của cá nhân nhằm chuyển tài sản của mình cho người khác sau khi chết.",
        options: [
            "Di chúc",
            "Di tặng",
            "Tặng, cho",
            "Trao đổi"
        ],
        answer: 0 // A
    },
    {
        id: 260,
        question: "……………………… là việc chuyển tài sản của người đã chết cho những người thừa kế theo ý chí tự nguyện của người để lại di sản thể hiện trong di chúc.",
        options: [
            "Thừa kế theo pháp luật.",
            "Thừa kế theo di chúc.",
            "Thừa kế thế vị.",
            "Thừa kế đồng tử."
        ],
        answer: 1 // B
    },
    {
        id: 261,
        question: "……………………….. là thừa kế theo hàng thừa kế, điều kiện và trình tự thừa kế do pháp luật qui định",
        options: [
            "Thừa kế theo pháp luật",
            "Thừa kế theo di chúc",
            "Thừa kế thế vị.",
            "Thừa kế đồng tử."
        ],
        answer: 0 // A
    },
    {
        id: 262,
        question: "Bộ luật dân sự năm 2015 quy định có mấy hàng thừa kế theo pháp luật:",
        options: [
            "4",
            "5",
            "3",
            "2"
        ],
        answer: 2 // C
    },
    {
        id: 263,
        question: "Những người thừa kế theo pháp luật được quy định theo “hàng thừa kế thứ nhất” gồm:",
        options: [
            "Ông nội, bà nội, ông ngoại, bà ngoại, anh ruột, chị ruột...",
            "Vợ, chồng, cha đẻ, mẹ đẻ, cha nuôi, mẹ nuôi, con đẻ, con nuôi của người chết;",
            "Cụ nội, cụ ngoại của người chết; bác ruột, chú ruột...",
            "Con nuôi, bác ruột, chú ruột, cậu ruột, cô ruột."
        ],
        answer: 1 // B
    },
    {
        id: 264,
        question: "Tâp quán pháp có thể được áp dụng khi nào?",
        options: [
            "Khi các bên tranh chấp mà pháp luật không quy định",
            "Khi các bên thỏa thuận áp dụng tập quán pháp",
            "Khi các bên không có thỏa thuận và pháp luật không quy định",
            "Khi tranh chấp xảy ra ở những nơi hẻo lánh..."
        ],
        answer: 2 // C
    },
    {
        id: 265,
        question: "Phương thức nào sau đây được coi là phương thức bảo vệ quyền dân sự?",
        options: [
            "Quyết định xử phạt hành chính",
            "Buộc chấm dứt hành vi xâm phạm",
            "Yêu cầu cải chính",
            "Buộc chấm dứt hành vi xâm phạm và yêu cầu cải chính."
        ],
        answer: 3 // D
    },
    {
        id: 266,
        question: "Nhận định nào sau đây là ĐÚNG?",
        options: [
            "Các cá nhân đều có năng lực pháp luật dân sự ngoại trừ những người bị tâm thần.",
            "Mọi cá nhân đều có năng lực pháp luật dân sự như nhau.",
            "Tùy vào mức độ nhận thức mà cá nhân có năng lực pháp luật dân sự khác nhau.",
            "Mọi cá nhân khi vừa sinh ra đã có năng lực hành vi dân sự."
        ],
        answer: 1 // B
    },
    {
        id: 267,
        question: "Nhận định nào sau đây là ĐÚNG?",
        options: [
            "Người thành niên là người đủ 16 tuổi trở lên.",
            "Tất cả những người thành niên đều có năng lực hành vi dân sự đầy đủ",
            "Người thành niên là người đủ 18 tuổi trở lên.",
            "Cá nhân khi đạt tới độ tuổi luật định mới có năng lực pháp luật dân sự."
        ],
        answer: 2 // C
    },
    {
        id: 268,
        question: "Hãy chỉ ra nhận định SAI về quyền nhân thân:",
        options: [
            "Con sinh ra mặc nhiên phải theo họ của cha đẻ...",
            "Việc thay đổi tên cho người từ đủ chín tuổi trở lên phải có sự đồng ý của người đó.",
            "Có thể đặt tên con bằng số hoặc ký tự miễn là không xâm phạm đến quyền lợi của người khác",
            "Con sinh ra mặc nhiên phải theo họ của cha đẻ. Khi chưa xác định được cha đẻ thì họ của đứa bé được xác định theo thỏa thuận của những người thân thích bên người mẹ; Có thể đặt tên con bằng số hoặc ký tự miễn là không xâm phạm đến quyền lợi của người khác."
        ],
        answer: 3 // D (Đáp án D bao gồm các ý trên và được đánh dấu SAI trong file vì chứa quy định đặt tên bằng số là sai)
    },
    {
        id: 269,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, nếu không biết nơi cư trú của bị đơn thì nguyên đơn có quyền lựa chọn Tòa án nào?",
        options: [
            "Tòa án nơi bị đơn cư trú, làm việc, có trụ sở cuối cùng hoặc nơi bị đơn có tài sản giải quyết.",
            "Tòa án nơi bị đơn cư trú, làm việc, có trụ sở cuối cùng giải quyết.",
            "Tòa án nơi có tài sản giải quyết.",
            "Toà án sẽ không có thẩm quyền giải quyết trong tình huống này."
        ],
        answer: 0 // A
    },
    {
        id: 270,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, biện pháp nào sau đây là biện pháp khẩn cấp tạm thời?",
        options: [
            "Cấm tiếp xúc với nạn nhân bạo lực gia đình.",
            "Cấm xuất cảnh đối với người có nghĩa vụ.",
            "Cấm tiếp xúc với nạn nhân bạo lực gia đình; cấm xuất cảnh đối với người có nghĩa vụ.",
            "Cấm đảm nhiệm chức vụ, quyền hạn."
        ],
        answer: 2 // C
    },
    {
        id: 271,
        question: "Nhận định nào sau đây là SAI về pháp nhân?",
        options: [
            "Pháp nhân chấm dứt tồn tại từ thời điểm bị tuyên bố phá sản",
            "Pháp nhân chấm dứt tồn tại kể từ thời điểm xóa tên trong sổ đăng ký pháp nhân...",
            "Pháp nhân chấm dứt tồn tại khi bị thu hồi Giấy chứng nhận đăng ký kinh doanh.",
            "Pháp nhân chấm dứt tồn tại khi bị cơ quan có thẩm quyền xử phạt..."
        ],
        answer: 0 // A (Theo file đáp án chọn A là câu SAI, vì pháp nhân chấm dứt khi có quyết định tuyên bố phá sản có hiệu lực chứ không phải 'bị tuyên bố' chung chung, hoặc file chọn A vì đó là đáp án được đánh dấu *DUNG* cho câu hỏi tìm câu SAI)
    },
    {
        id: 272,
        question: "Nhận định nào sau đây ĐÚNG về tài sản?",
        options: [
            "Tài sản là những gì cá nhân hiện có",
            "Giấy tờ có giá, quyền tài sản và vật, tiền",
            "Tài sản bao gồm bất động sản và động sản và các tài sản khác.",
            "Căn hộ hình thành trong tương lai không phải là tài sản."
        ],
        answer: 1 // B
    },
    {
        id: 273,
        question: "Giao dịch dân sự có thể được lập bằng:",
        options: [
            "Bằng miệng (lời nói) hoặc bằng văn bản",
            "Bằng hành vi cụ thể.",
            "Bằng lời nói, văn bản và bằng hành vi cụ thể.",
            "Tập quán."
        ],
        answer: 2 // C
    },
    {
        id: 274,
        question: "Thời điểm mở thừa kế là:",
        options: [
            "Là thời điểm người có tài sản chết",
            "Là thời điểm những người được thừa kế nhận được di sản thừa kế",
            "Là thời điểm người có tài sản chết (không bao gồm trường hợp Tòa án tuyên bố một người là đã chết)",
            "Là thời điểm khai nhận thừa kế"
        ],
        answer: 0 // A
    },
    {
        id: 275,
        question: "Bộ luật Dân sự năm 2015 quy định pháp nhân phi thương mại là gì?",
        options: [
            "Pháp nhân có mục tiêu chính là tìm kiếm lợi nhuận.",
            "Pháp nhân không phân chia lợi nhuận cho các thành viên.",
            "Pháp nhân không có mục tiêu chính là tìm kiếm lợi nhuận; nếu có lợi nhuận thì cũng không được phân chia cho các thành viên.",
            "Pháp nhân thuộc sở hữu nhà nước và hoạt động vì mục đích công cộng."
        ],
        answer: 2 // C
    },
    {
        id: 276,
        question: "Theo Bộ luật Dân sự năm 2015, năng lực pháp luật dân sự của pháp nhân có bị hạn chế không?",
        options: [
            "Năng lực pháp luật dân sự của pháp nhân không bị hạn chế.",
            "Năng lực pháp luật dân sự của pháp nhân bị hạn chế.",
            "Năng lực pháp luật dân sự của pháp nhân không bị hạn chế, trừ trường hợp Bộ luật Dân sự năm 2015, luật khác có liên quan quy định khác.",
            "Không hạn chế trong mọi trường hợp."
        ],
        answer: 2 // C
    },
    {
        id: 277,
        question: "Đại diện theo pháp luật của cá nhân được quy định như thế nào trong Bộ luật Dân sự 2015?",
        options: [
            "Cha, mẹ đối với con đã thành niên.",
            "Cha, mẹ đối với con chưa thành niên; người giám hộ đối với người được giám hộ...",
            "Người giám hộ của người có khó khăn trong nhận thức, làm chủ hành vi.",
            "Vợ hoặc chồng của người đó."
        ],
        answer: 1 // B
    },
    {
        id: 278,
        question: "Bộ luật Dân sự năm 2015 quy định có bao nhiêu biện pháp bảo đảm thực hiện nghĩa vụ?",
        options: [
            "07 biện pháp",
            "08 biện pháp",
            "09 biện pháp (cầm cố; thế chấp; đặt cọc; ký cược; ký quỹ; bảo lãnh; tín chấp; bảo lưu quyền sở hữu; cầm giữ tài sản).",
            "06 biện pháp"
        ],
        answer: 2 // C
    },
    {
        id: 279,
        question: "Theo Bộ luật Dân sự 2015, giao dịch dân sự được hiểu như thế nào?",
        options: [
            "Giao dịch dân sự là sự thỏa thuận giữa 2 bên.",
            "Giao dịch dân sự là hợp đồng hoặc hành vi pháp lý đơn phương làm phát sinh, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự.",
            "Giao dịch dân sự là sự thỏa thuận giữa các bên trong quan hệ dân sự.",
            "Giao dịch dân sự là sự thỏa thuận giữa các bên trong quan hệ dân sự với bên thứ ba."
        ],
        answer: 1 // B
    },
    {
        id: 280,
        question: "Theo Bộ luật Dân sự 2015, hợp đồng dân sự được thể hiện bằng những hình thức nào?",
        options: [
            "Bằng email.",
            "Bằng văn bản.",
            "Bằng hành vi cụ thể.",
            "Bằng lời nói, bằng văn bản hoặc bằng hành vi cụ thể."
        ],
        answer: 3 // D
    },
    {
        id: 281,
        question: "Trong các trường hợp sau, bên vận chuyển có thể từ chối chuyên chở hành khách?",
        options: [
            "Anh Lưu có dắt theo 02 trẻ nhỏ.",
            "Ông Hào đã trên 100 tuổi.",
            "Anh Kong Long Xeng vừa trốn khỏi khu cách ly theo quy định của pháp luật.",
            "Chị Luyến mang thai 8 tháng."
        ],
        answer: 0 // A (Theo file đáp án chọn A, có thể do quy định riêng hoặc lỗi file, thông thường là C nếu vi phạm, nhưng ta tuân thủ file)
    },
    {
        id: 282,
        question: "Bộ luật Dân sự năm 2015 quy định như thế nào về căn cứ xác lập quyền đối với bất động sản liền kề?",
        options: [
            "Quyền đối với bất động sản liền kề được xác lập do địa thế tự nhiên, theo quy định của luật, theo thỏa thuận hoặc theo di chúc.",
            "Quyền đối với bất động sản liền kề được xác lập theo di chúc.",
            "Quyền đối với bất động sản liền kề được xác lập theo thỏa thuận.",
            "Quyền đối với bất động sản liền kề phụ thuộc vào ý chí của chủ sở hữu bất động sản đó."
        ],
        answer: 0 // A
    },
    {
        id: 283,
        question: "Theo Bộ luật Dân sự năm 2015, một tổ chức được công nhận là pháp nhân trong trường hợp nào sau đây?",
        options: [
            "Được thành lập theo quy định của Bộ luật dân sự, luật khác có liên quan; có cơ cấu tổ chức; có tài sản độc lập và tự chịu trách nhiệm; nhân danh mình tham gia quan hệ pháp luật.",
            "Được thành lập theo quy định của Bộ luật dân sự, luật khác có liên quan.",
            "Có tài sản độc lập với cá nhân, pháp nhân khác và tự chịu trách nhiệm bằng tài sản của mình.",
            "Tổ chức đó được thành lập hợp pháp."
        ],
        answer: 0 // A
    },
    {
        id: 284,
        question: "Theo Bộ luật Dân sự năm 2015, quyền sở hữu chấm dứt trong trường hợp nào sau đây?",
        options: [
            "Chủ sở hữu không còn ở Việt Nam.",
            "Tài sản đã được tiêu dùng hoặc bị tiêu hủy.",
            "Chủ sở hữu chuyển quyền sở hữu của mình cho người khác; tài sản đã được tiêu dùng hoặc bị tiêu huỷ.",
            "Chủ sở hữu để lại thừa kế."
        ],
        answer: 2 // C
    },
    {
        id: 285,
        question: "Bộ luật Tố tụng dân sự năm 2015 quy định đơn kháng cáo của đương sự phải gửi cho cơ quan nào?",
        options: [
            "Tòa án cấp sơ thẩm đã ra bản án, quyết định.",
            "Tòa án cấp phúc thẩm.",
            "Viện Kiểm sát cùng cấp với Toà án cấp sơ thẩm đã ra bản án, quyết định.",
            "Viện Kiểm sát cấp trên."
        ],
        answer: 0 // A
    },
    {
        id: 286,
        question: "Bộ luật Tố tụng dân sự năm 2015 quy định Tòa án phải gửi bản án, quyết định cho những cá nhân, tổ chức, cơ quan nào?",
        options: [
            "Các đương sự, cơ quan, tổ chức, cá nhân khởi kiện.",
            "Toà án cấp trên.",
            "Các đương sự, cơ quan, tổ chức, cá nhân khởi kiện; Viện kiểm sát cùng cấp.",
            "Viện Kiểm sát cấp trên."
        ],
        answer: 2 // C
    },
    {
        id: 287,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, có bao nhiêu phương thức gửi đơn khởi kiện cho Tòa án?",
        options: [
            "Nộp trực tiếp tại Tòa án, gửi đến Tòa án qua đường dịch vụ bưu chính.",
            "Nộp trực tiếp tại Tòa án; gửi đến Tòa án theo đường dịch vụ bưu chính; gửi trực tuyến bằng hình thức điện tử qua Cổng thông tin điện tử của Tòa án (nếu có).",
            "Nộp trực tiếp cho Tòa án để vào sổ nhận đơn.",
            "Nộp trực tiếp; gửi bưu chính; gửi trực tuyến; Thư ký tòa án sẽ đến tận nơi nhận đơn."
        ],
        answer: 1 // B
    },
    {
        id: 288,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015 thì quy định nào sau đây là ĐÚNG?",
        options: [
            "Khi xét xử vụ án dân sự, Thẩm phán và Hội thẩm nhân dân không ngang quyền với nhau.",
            "Thẩm phán, Hội thẩm nhân dân xét xử vụ án dân sự, Thẩm phán giải quyết việc dân sự độc lập và chỉ tuân theo pháp luật.",
            "Khi xét xử vụ án dân sự Thẩm phán độc lập và chỉ tuân theo pháp luật.",
            "Hội thẩm nhân dân phải phụ thuộc vào quyết định của Thẩm phán."
        ],
        answer: 1 // B
    },
    {
        id: 289,
        question: "Anh Nghĩa khởi kiện chị Địa yêu cầu xin ly hôn... sau đó tranh chấp tài sản. Đây thuộc loại tranh chấp nào?",
        options: [
            "Tranh chấp về hôn nhân và gia đình.",
            "Tranh chấp về đất đai.",
            "Tranh chấp về quyền sở hữu.",
            "Tranh chấp về kinh doanh thương mại."
        ],
        answer: 0 // A
    },
    {
        id: 290,
        question: "Tháng 03/2020, ông Bất Tử lập di chúc miệng khi đột quỵ. Sau đó ông phục hồi. Di chúc miệng bị hủy bỏ từ thời điểm nào?",
        options: [
            "5/2020",
            "6/2020",
            "6/2021",
            "5/2022"
        ],
        answer: 1 // B (Di chúc miệng hủy bỏ sau 3 tháng nếu người lập còn sống và minh mẫn)
    },
    {
        id: 291,
        question: "Bà Nụ không biết chữ muốn lập di chúc... thì di chúc đó có cần công chứng hoặc chứng thực hay không?",
        options: [
            "Có.",
            "Không cần thiết.",
            "Tuỳ vào ý chí của bà Nụ.",
            "Chỉ công chứng hoặc chứng thực khi có yêu cầu của cơ quan nhà nước có thẩm quyền."
        ],
        answer: 0 // A
    },
    {
        id: 292,
        question: "Anh Tiên muốn đổi tên cho con vì trùng tên bà cô tổ... vợ chồng anh Tiên có thể thay đổi tên cho con được không?",
        options: [
            "Không được.",
            "Tuỳ vào sự đồng ý của cơ quan có thẩm quyền.",
            "Được.",
            "Tuỳ vào tập quán từng địa phương."
        ],
        answer: 2 // C
    },
    {
        id: 293,
        question: "Ông Trí bị tuyên bố đã chết, sau đó trở về. Gia đình ông Trí có thể:",
        options: [
            "Đề nghị cơ quan có thẩm quyền hủy bỏ quyết định tuyên bố ông Trí đã chết.",
            "Đề nghị cơ quan có thẩm quyền giữ nguyên quyết định tuyên bố ông Trí đã chết.",
            "Tiến hành chia di sản của ông Trí.",
            "Đề nghị cơ quan có thẩm quyền ra quyết định buộc ông Trí ở lại cơ sở chăm sóc."
        ],
        answer: 0 // A
    },
    {
        id: 294,
        question: "Chị Như đăng tải thông tin nghệ sĩ Quý bị ung thư lên Facebook khi chưa hỏi ý kiến. Hành vi của chị Như:",
        options: [
            "Không vi phạm do Như và Quý là bạn bè.",
            "Vi phạm quy định pháp luật về quyền bảo vệ bí mật cá nhân của người khác.",
            "Không vi phạm vì chỉ quen qua Facebook.",
            "Không vi phạm do Quý không có thiệt hại."
        ],
        answer: 1 // B
    },
    {
        id: 295,
        question: "Theo Bộ luật Tố tụng dân sự năm 2015, tranh chấp nào sau đây là tranh chấp về lao động thuộc thẩm quyền giải quyết của Tòa án?",
        options: [
            "Về giao dịch dân sự, hợp đồng dân sự.",
            "Về bồi thường thiệt hại ngoài hợp đồng.",
            "Về bồi thường thiệt hại, trợ cấp khi chấm dứt hợp đồng lao động.",
            "Tranh chấp về quyền sử dụng đất."
        ],
        answer: 2 // C
    },
    {
        id: 296,
        question: "Ca sĩ Hiếu Chủ Nhật bị tung clip phẫu thuật thẩm mỹ gây thiệt hại. Ca sĩ này có thể làm gì?",
        options: [
            "Không thể làm gì.",
            "Khởi kiện trung tâm trị liệu, bệnh viện để yêu cầu chấm dứt hành vi, xin lỗi và bồi thường thiệt hại.",
            "Yêu cầu bệnh viện miễn phí cho những lần phẫu thuật sau.",
            "Yêu cầu Giám đốc bệnh viện kỷ luật y tá."
        ],
        answer: 1 // B
    },
    {
        id: 297,
        question: "Ông Đạt bị báo đăng tin về đời tư ly hôn. Ông Đạt có thể khởi kiện tác giả và tờ báo không?",
        options: [
            "Không được.",
            "Được do những thông tin liên quan đến vụ việc li hôn là thông tin cá nhân...",
            "Không được do tác giả đã được sự đồng ý của thẩm phán.",
            "Không được do bài báo nhằm mục đích phổ cập kiến thức."
        ],
        answer: 1 // B
    },
    {
        id: 298,
        question: "Ông Lợi có thể sửa đổi, bổ sung di chúc đã lập ở thời điểm nào?",
        options: [
            "Bất cứ lúc nào",
            "Khi di chúc chưa được công chứng hoặc chứng thực",
            "Khi di chúc chưa được ký tên",
            "Khi việc sửa đổi, bổ sung di chúc đó có người làm chứng."
        ],
        answer: 0 // A
    },
    {
        id: 299,
        question: "Theo bộ luật lao động hiện hành, có bao nhiêu loại hợp đồng lao động:",
        options: [
            "1.",
            "2.",
            "3.",
            "4"
        ],
        answer: 1 // B
    },
    {
        id: 300,
        question: "Hợp đồng 24 tháng là loại hợp đồng lao động nào dưới đây:",
        options: [
            "Hợp đồng mùa vụ.",
            "Hợp đồng xác định thời hạn.",
            "Hợp đồng không xác định thời hạn.",
            "Không phải tất cả các loại hợp đồng trên."
        ],
        answer: 1 // B
    },
    // --- PHẦN 7: TỪ CÂU 301 ĐẾN 350 ---
    {
        id: 301,
        question: "Loại hợp đồng nào dưới đây mà người người lao động không phải thử việc?",
        options: [
            "Hợp đồng có thời hạn dưới 1 tháng.",
            "Hợp đồng xác định thời hạn.",
            "Hợp đồng không xác định thời hạn.",
            "Hợp đồng dưới 3 năm."
        ],
        answer: 0 // A
    },
    {
        id: 302,
        question: "Thời gian làm việc trong một ngày được xác định như thế nào?",
        options: [
            "Sáng từ 7h -11h, chiều từ 13h-17h.",
            "Sáng từ 8h – 12h, chiều từ 13h-17h.",
            "Sáng từ 7h30 – 11h30, chiều từ 13h – 17h.",
            "Tùy thuộc vào sự thỏa thuận của các bên nhưng không vượt quá 8h/ngày."
        ],
        answer: 3 // D
    },
    {
        id: 303,
        question: "Thời giờ làm việc và làm thêm tối đa trong một ngày là bao nhiêu:",
        options: [
            "Không quá 12 giờ/ngày.",
            "Không quá 8 giờ/ngày.",
            "Không giới hạn, tùy thuộc vào sự thỏa thuận của các bên.",
            "Tùy thuộc vào ngành nghề làm việc và sự thỏa thuận giữa các bên."
        ],
        answer: 0 // A
    },
    {
        id: 304,
        question: "Thời giờ làm thêm tối đa trong một ngày là bao nhiêu?",
        options: [
            "Không quá 4 giờ/ngày.",
            "Không quá 6 giờ/ngày.",
            "Không giới hạn, tùy thuộc vào sự thỏa thuận của các bên.",
            "Tùy thuộc vào ngành nghề làm việc và sự thỏa thuận giữa các bên."
        ],
        answer: 0 // A
    },
    {
        id: 305,
        question: "Thời giờ làm việc ban đêm được tính từ:",
        options: [
            "18 giờ tối trở đi.",
            "18 giờ tối trở đi đến hết 5 giờ sáng hôm sau.",
            "22 giờ tối đến đến hết 6 giờ sáng hôm sau.",
            "19 giờ tối trở đi."
        ],
        answer: 2 // C
    },
    {
        id: 306,
        question: "Khi người lao động làm việc theo hợp đồng lao động không xác định thời hạn muốn đơn phương chấm dứt hợp đồng lao động phải thông báo trước cho người sử dụng lao động bao nhiêu ngày:",
        options: [
            "15 ngày.",
            "30 ngày.",
            "45 ngày.",
            "Tùy thuộc vào thỏa thuận giữa các bên."
        ],
        answer: 1 // B (Lưu ý: Theo đáp án trong file)
    },
    {
        id: 307,
        question: "Khi người lao động làm việc theo hợp đồng lao động xác định thời hạn muốn đơn phương chấm dứt hợp đồng lao động phải thông báo trước cho người sử dụng lao động bao nhiêu ngày:",
        options: [
            "15 ngày.",
            "30 ngày.",
            "45 ngày.",
            "Tùy thuộc vào thỏa thuận giữa các bên."
        ],
        answer: 1 // B
    },
    {
        id: 308,
        question: "Người sử dụng lao động được ký tối đa bao nhiêu lần hợp đồng lao động xác định thời hạn với người lao động:",
        options: [
            "1.",
            "2.",
            "3.",
            "Không giới hạn, phụ thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 1 // B
    },
    {
        id: 309,
        question: "Người sử dụng lao động có hành vi cung cấp thông tin không trung thực làm ảnh hưởng đến việc thực hiện hợp đồng lao động thì quyền đơn phương chấm dứt hợp đồng lao động của người lao động được quy định như thế nào?",
        options: [
            "Người lao động có quyền chấm dứt hợp đồng lao động nhưng phải báo trước 15 ngày.",
            "Người lao động có quyền chấm dứt hợp đồng lao động nhưng phải báo trước 30 ngày.",
            "Người lao động có quyền chấm dứt hợp đồng lao động nhưng phải báo trước 45 ngày.",
            "Người lao động có quyền chấm dứt hợp đồng lao động và không cần phải báo trước."
        ],
        answer: 3 // D
    },
    {
        id: 310,
        question: "Hình thức của hợp đồng lao động bao gồm:",
        options: [
            "Lời nói, hành vi, văn bản.",
            "Lời nói, văn bản.",
            "Chỉ bằng văn bản.",
            "Chỉ bằng hành vi."
        ],
        answer: 1 // B
    },
    {
        id: 311,
        question: "Loại hợp đồng nào dưới đây không bắt buộc phải ký bằng văn bản?",
        options: [
            "Hợp đồng xác định thời hạn hợp đồng dưới 12 tháng.",
            "Hợp đồng xác định thời hạn dưới 1 tháng hoặc mùa vụ.",
            "Hợp đồng lao động giúp việc nhà.",
            "Hợp đồng lao động không xác định thời hạn."
        ],
        answer: 1 // B
    },
    {
        id: 312,
        question: "Người lao động làm thêm giờ vào ngày nghỉ hàng tuần thì tiền lương được xác định như thế nào?",
        options: [
            "Ít nhất bằng 150% lương ngày làm việc bình thường.",
            "Ít nhất bằng 200% lương ngày làm việc bình thường.",
            "Ít nhất bằng 300% lương ngày làm việc bình thường.",
            "Tùy thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 1 // B
    },
    {
        id: 313,
        question: "Người lao động làm thêm vào ngày làm việc bình thường thì tiền lương được xác định như thế nào?",
        options: [
            "Ít nhất bằng 150% lương ngày làm việc bình thường.",
            "Ít nhất bằng 200% lương ngày làm việc bình thường.",
            "Ít nhất bằng 300% lương ngày làm việc bình thường.",
            "Tùy thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 0 // A
    },
    {
        id: 314,
        question: "Bộ luật lao động năm 2019 đã bỏ đi loại hợp đồng nào?",
        options: [
            "Hợp đồng mùa vụ.",
            "Hợp đồng xác định thời hạn.",
            "Hợp đồng không xác định thời hạn.",
            "Không bỏ đi loại hợp đồng nào."
        ],
        answer: 0 // A
    },
    {
        id: 315,
        question: "Lao động nữ mang thai muốn đơn phương chấm dứt hợp đồng lao động thì thời hạn thông báo cho người sử dụng lao động là bao lâu?",
        options: [
            "15 ngày.",
            "30 ngày.",
            "45 ngày.",
            "Tùy thuộc vào sự chỉ định của bác sĩ."
        ],
        answer: 3 // D
    },
    {
        id: 316,
        question: "Loại hợp đồng nào mà người lao động muốn đơn phương chấm dứt hợp đồng chỉ cần thực hiện thủ tục thông báo mà không cần phải nêu rõ lý do?",
        options: [
            "Hợp đồng xác định thời hạn.",
            "Hợp đồng mùa vụ hoặc công việc dưới 12 tháng.",
            "Hợp đồng không xác định thời hạn.",
            "Không có loại hợp đồng nào."
        ],
        answer: 2 // C
    },
    {
        id: 317,
        question: "Người lao động làm đủ 12 tháng trong năm liên tục thì được nghỉ tối thiểu bao nhiêu ngày nghỉ hàng năm nếu làm trong điều kiện làm việc bình thường:",
        options: [
            "12 ngày.",
            "14 ngày.",
            "16 ngày.",
            "Tùy vào sự thỏa thuận giữa các bên."
        ],
        answer: 0 // A
    },
    {
        id: 318,
        question: "Người lao động làm đủ 12 tháng trong năm liên tục thì được nghỉ bao nhiêu ngày nghỉ hàng năm nếu làm trong điều kiện làm việc đặc biệt nặng nhọc, độc hại, nguy hiểm:",
        options: [
            "12 ngày.",
            "14 ngày.",
            "16 ngày.",
            "Tùy vào sự thỏa thuận giữa các bên."
        ],
        answer: 2 // C
    },
    {
        id: 319,
        question: "Người lao động làm đủ 12 tháng trong năm liên tục thì được nghỉ bao nhiêu ngày nghỉ hàng năm nếu làm trong điều kiện làm việc nặng nhọc, độc hại, nguy hiểm:",
        options: [
            "12 ngày.",
            "14 ngày.",
            "16 ngày.",
            "Tùy vào sự thỏa thuận giữa các bên."
        ],
        answer: 1 // B
    },
    {
        id: 320,
        question: "Trong một tháng, người lao động được nghỉ hàng tuần tối thiểu bao nhiêu ngày?",
        options: [
            "4 ngày.",
            "5 ngày.",
            "6 ngày.",
            "Tùy thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 0 // A
    },
    {
        id: 321,
        question: "Trong một năm, người lao động được nghỉ lễ, tết tối thiểu bao nhiêu ngày?",
        options: [
            "8.",
            "9",
            "10",
            "11."
        ],
        answer: 3 // D
    },
    {
        id: 322,
        question: "Theo quy định của BLLĐ 2019, nếu Anh A kết hôn với chị B thì thời gian anh A được nghỉ là bao lâu?",
        options: [
            "3 ngày.",
            "4 ngày.",
            "5 ngày.",
            "Tùy vào sự cho phép của người sử dụng lao động."
        ],
        answer: 0 // A
    },
    {
        id: 323,
        question: "Người lao động làm thêm vào ngày nghỉ lễ, tết có hưởng lương thì tiền lương được xác định như thế nào?",
        options: [
            "150% lương ngày làm việc bình thường.",
            "200% lương ngày làm việc bình thường.",
            "300% lương ngày làm việc bình thường.",
            "Tùy thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 2 // C
    },
    {
        id: 324,
        question: "Người lao động nước ngoài làm việc tại Việt Nam thì phải đạt độ tuổi tối thiểu là bao nhiêu?",
        options: [
            "Đủ 15 tuổi.",
            "Đủ 18 tuổi.",
            "Đủ 21 tuổi.",
            "Tùy thuộc vào sự thỏa thuận giữa các bên."
        ],
        answer: 1 // B
    },
    {
        id: 325,
        question: "Người lao động có hành vi gây thiệt hại cho tài sản của người sử dụng lao động... trừ trường hợp bất khả kháng. Quy định này thể hiện nguyên tắc nào?",
        options: [
            "Nguyên tắc bảo vệ người lao động.",
            "Nguyên tắc bảo vệ quyền và lợi ích hợp pháp của người sử dụng lao động.",
            "Nguyên tắc bảo vệ công đoàn.",
            "Nguyên tắc bình đẳng, thỏa thuận."
        ],
        answer: 1 // B
    },
    {
        id: 326,
        question: "Khi hợp đồng lao động xác định thời hạn hết hạn mà người lao động vẫn tiếp tục làm việc... trở thành hợp đồng không xác định thời hạn. Quy định này thể hiện nguyên tắc nào?",
        options: [
            "Nguyên tắc bảo vệ người lao động.",
            "Nguyên tắc bảo vệ quyền và lợi ích hợp pháp của người sử dụng lao động.",
            "Nguyên tắc bảo vệ công đoàn.",
            "Nguyên tắc bình đẳng, thỏa thuận."
        ],
        answer: 0 // A
    },
    {
        id: 327,
        question: "Tỷ lệ đóng bảo hiểm (bảo hiểm y tế, bảo hiểm xã hội, bảo hiểm thất nghiệp) của người sử dụng lao động hiện nay là bao nhiêu?",
        options: [
            "20%.",
            "21%.",
            "21.5%.",
            "22.5%."
        ],
        answer: 2 // C
    },
    {
        id: 328,
        question: "Tỷ lệ đóng bảo hiểm (bảo hiểm y tế, bảo hiểm xã hội, bảo hiểm thất nghiệp) của người lao động hiện nay là bao nhiêu?",
        options: [
            "10%.",
            "10.5%.",
            "11%.",
            "11.5%."
        ],
        answer: 1 // B
    },
    {
        id: 329,
        question: "Trong các quan hệ dưới đây, quan hệ nào không được xem là quan hệ lao động?",
        options: [
            "Công ty A thanh toán tiền lương cho người lao động.",
            "Công ty A đóng bảo hiểm xã hội cho người lao động.",
            "Công ty A tuyển dụng người lao động làm việc theo hợp đồng lao động.",
            "Công ty A điều chuyển người lao động làm công việc khác so với hợp đồng."
        ],
        answer: 1 // B (Theo đáp án trong file)
    },
    {
        id: 330,
        question: "Trong quan hệ về ký kết hợp đồng lao động giữa người lao động và người sử dụng lao động, luật lao động sử dụng phương pháp điều chỉnh nào dưới đây?",
        options: [
            "Bình đẳng, thỏa thuận.",
            "Mệnh lệnh phục tùng.",
            "Quyền uy phục tùng.",
            "Bình đẳng, thỏa thuận, mệnh lệnh, phục tùng, quyền uy."
        ],
        answer: 0 // A
    },
    {
        id: 331,
        question: "Trong quan hệ về xử lý kỷ luật người lao động, luật lao động sử dụng phương pháp điều chỉnh nào dưới đây?",
        options: [
            "Bình đẳng, thỏa thuận.",
            "Mệnh lệnh phục tùng.",
            "Quyền uy phục tùng.",
            "Tiền lương cơ bản, phụ cấp lương, các khoản phụ cấp bổ sung."
        ],
        answer: 1 // B
    },
    {
        id: 332,
        question: "Theo quy định của bộ luật lao động hiện hành, tiền lương bao gồm:",
        options: [
            "Tiền lương cơ bản.",
            "Phụ cấp lương.",
            "Các khoản phụ cấp bổ sung.",
            "Tiền lương cơ bản, phụ cấp lương, các khoản phụ cấp bổ sung."
        ],
        answer: 3 // D
    },
    {
        id: 333,
        question: "Tiền lương tối thiểu vùng hiện nay do cơ quan có thẩm quyền nào dưới đây quy định:",
        options: [
            "Quốc hội.",
            "Ủy ban thường vụ Quốc hội",
            "Chính phủ.",
            "UBND cấp tỉnh."
        ],
        answer: 2 // C
    },
    {
        id: 334,
        question: "Luật Hôn nhân và gia đình năm 2014 quy định nam nữ được kết hôn khi đạt độ tuổi nào?",
        options: [
            "Nam từ đủ 19 tuổi, nữ từ đủ 18 tuổi",
            "Nam từ 20 tuổi, nữ từ 18 tuổi",
            "Nam từ đủ 20 tuổi, nữ từ đủ 18 tuổi",
            "Nữ từ 18 tuổi trở lên, nam từ 19 tuổi trở lên"
        ],
        answer: 2 // C
    },
    {
        id: 335,
        question: "Đây là trường hợp cấm kết hôn theo Luật Hôn nhân và gia đình năm 2014:",
        options: [
            "Giữa người đang có vợ và đang có chồng.",
            "Người mất năng lực hành vi dân sự.",
            "Người có dòng máu về trực hệ; có họ trong phạm vi ba đời.",
            "Tất cả các trường hợp trên."
        ],
        answer: 3 // D
    },
    {
        id: 336,
        question: "Cơ quan có thẩm quyền đăng ký kết hôn là:",
        options: [
            "Thôn, bản, khối phố.",
            "UBND cấp xã nơi hai bên nam, nữ cư trú.",
            "UBND cấp huyện nơi một trong hai bên nam, nữ cư trú.",
            "Nhà thờ."
        ],
        answer: 1 // B
    },
    {
        id: 337,
        question: "Vợ chồng đã ly hôn nay muốn kết hôn lại có cần phải đăng ký kết hôn không?",
        options: [
            "Không cần đăng ký.",
            "Phải đăng ký kết hôn lại.",
            "Không đăng ký nhưng phải báo cáo UBND cấp xã.",
            "Không đăng ký nhưng phải báo cáo thôn, khối phố."
        ],
        answer: 1 // B
    },
    {
        id: 338,
        question: "Khi tổ chức đăng ký kết hôn, hai bên nam nữ có bắt buộc phải có mặt hay không?",
        options: [
            "Bắt buộc hai bên nam nữ phải có mặt.",
            "Chỉ cần một trong hai bên có mặt là được.",
            "Cả hai bên vắng mặt cũng được nhưng phải ủy quyền cho người khác.",
            "Tùy từng trường hợp có thể đến, có thể không."
        ],
        answer: 0 // A
    },
    {
        id: 339,
        question: "Cơ quan giải quyết ly hôn:",
        options: [
            "UBND cấp xã nơi đã tiến hành đăng ký kết hôn.",
            "Hội Liên hiệp phụ nữ.",
            "Cơ quan bảo vệ và chăm sóc trẻ em.",
            "Tòa án nhân dân."
        ],
        answer: 3 // D
    },
    {
        id: 340,
        question: "Vợ, chồng có nghĩa vụ và quyền đối với nhau như thế nào?",
        options: [
            "Vợ chồng bình đẳng, có nghĩa vụ và quyền ngang nhau về mọi mặt trong gia đình.",
            "Vợ chồng bình đẳng, có nghĩa vụ và quyền ngang nhau về một số mặt trong gia đình.",
            "Có nghĩa vụ và quyền khác nhau.",
            "Chồng có quyền quyết định các vấn đề quan trọng trong gia đình."
        ],
        answer: 0 // A
    },
    {
        id: 341,
        question: "Những tài sản nào sau đây được coi là tài sản chung của vợ và chồng?",
        options: [
            "Tài sản do vợ, chồng tạo ra, thu nhập do lao động...",
            "Tài sản mà vợ chồng được thừa kế chung...",
            "Quyền sử dụng đất mà vợ chồng có được sau khi kết hôn.",
            "Tài sản trong thời kỳ hôn nhân, được thừa kế, tặng cho chung và theo sự thỏa thuận là tài sản chung."
        ],
        answer: 3 // D
    },
    {
        id: 342,
        question: "Vợ, chồng có quyền như thế nào trong việc chiếm hữu, sử dụng và định đoạt tài sản chung?",
        options: [
            "Chồng có quyền cao hơn vợ.",
            "Vợ có quyền cao hơn chồng.",
            "Vợ chồng có quyền ngang nhau.",
            "Người nào có công nhiều hơn trong việc tạo lập khối tài sản chung thì có quyền cao hơn."
        ],
        answer: 2 // C
    },
    {
        id: 343,
        question: "Những tài sản nào sau đây là tài sản riêng của vợ chồng?",
        options: [
            "Tài sản mà mỗi người có trước khi kết hôn...",
            "Tài sản được chia riêng cho vợ, chồng trong thời kỳ hôn nhân.",
            "Tài sản phục vụ nhu cầu thiết yếu của vợ, chồng.",
            "Tất cả các tài sản trên."
        ],
        answer: 3 // D
    },
    {
        id: 344,
        question: "Nghĩa vụ và quyền của cha mẹ đối với con như thế nào?",
        options: [
            "Thương yêu, trông nom, nuôi dưỡng...",
            "Không được phân biệt đối xử giữa các con...",
            "Cả A và B đều đúng.",
            "Cha mẹ không có quyền và nghĩa vụ đối với con cái."
        ],
        answer: 2 // C (Dựa theo đáp án chọn câu dài nhất gồm cả A và B)
    },
    {
        id: 345,
        question: "Nghĩa vụ và quyền của con đối với cha mẹ như thế nào?",
        options: [
            "Con có bổn phận yêu quý, kính trọng...",
            "Con có nghĩa vụ và quyền chăm sóc...",
            "Nghiêm cấm con có hành vi ngược đãi...",
            "Tất cả các ý trên."
        ],
        answer: 3 // D
    },
    {
        id: 346,
        question: "Con sinh ra trong thời kỳ nào thì được coi là con chung của vợ chồng?",
        options: [
            "Con sinh ra trước ngày đăng ký kết hôn và được cha mẹ thừa nhận.",
            "Con sinh ra trong thời kỳ hôn nhân hoặc vợ đã có thai trong thời kỳ đó.",
            "Con sinh ra tron thời hạn 300 ngày kể từ thời điểm chấm dứt hôn nhân.",
            "Con sinh ra trong thời kỳ hôn nhân hoặc trong thời hạn 300 ngày kể từ thời điểm chấm dứt hôn nhân."
        ],
        answer: 3 // D
    },
    {
        id: 347,
        question: "Cơ quan nào có thẩm quyền giải quyết việc ly hôn?",
        options: [
            "Tòa án nhân dân.",
            "Trưởng thôn, trưởng khối.",
            "UBND cấp xã.",
            "Toà án nhân dân."
        ],
        answer: 3 // D
    },
    {
        id: 348,
        question: "Ai có quyền yêu cầu Tòa án giải quyết việc ly hôn?",
        options: [
            "Chỉ người chồng mới có quyền yêu cầu ly hôn.",
            "Vợ, chồng hoặc cả hai người đều có quyền yêu cầu.",
            "Chỉ người vợ mới có quyền yêu cầu ly hôn.",
            "Cha mẹ của con có quyền yêu cầu ly hôn cho con."
        ],
        answer: 1 // B
    },
    {
        id: 349,
        question: "Khi vợ chồng có yêu cầu xin ly hôn thì Tòa án phải làm gì?",
        options: [
            "Xem xét thụ lý.",
            "Tiến hành hòa giải, nếu không thành thì mở phiên toà xét xử.",
            "Xem xét thụ lý, chuẩn bị xét xử và mở phiên tòa theo thủ tục.",
            "Yêu cầu vợ chồng hòa giải một lần nửa trước khi nộp đơn."
        ],
        answer: 2 // C (Theo đáp án file)
    },
    {
        id: 350,
        question: "Những căn cứ nào để Tòa án giải quyết cho ly hôn",
        options: [
            "Tình trạng trầm trọng, đời sống chung không thể kéo dài, mục đích hôn nhân không đạt được.",
            "Khi vợ chồng mâu thuẫn.",
            "Khi vợ chồng tranh chấp tài sản.",
            "Vợ hoặc chồng bị tâm thần"
        ],
        answer: 0 // A
    },
    // --- PHẦN 8: TỪ CÂU 351 ĐẾN 400 ---
    {
        id: 351,
        question: "Việc chia tài sản khi ly hôn được thực hiện theo nguyên tắc nào?",
        options: [
            "Tài sản chung của vợ chồng được chia đôi.",
            "Tài sản chung của vợ chồng về nguyên tắc được chia đôi, nhưng có xem xét hoàn cảnh của mỗi bên, tình trạng tài sản, công sức đóng góp...",
            "Người nào nuôi con thì được hưởng nhiều hơn.",
            "Vợ chồng tự do thoả thuận"
        ],
        answer: 1 // B
    },
    {
        id: 352,
        question: "Pháp luật hôn nhân và gia đình Việt Nam có thừa nhận hôn nhân giữa những người cùng giới tính hay không?",
        options: [
            "Không thừa nhận.",
            "Có thừa nhận.",
            "Có, trong một số trường hợp đặc biệt.",
            "Có, sau khi tổ chức lễ cưới."
        ],
        answer: 0 // A
    },
    {
        id: 353,
        question: "Khi vợ chồng ly hôn, Toà án quyết định giao con cho một bên trực tiếp nuôi căn cứ:",
        options: [
            "Quyền lợi mọi mặt của con.",
            "Nguyện vọng của con từ 7 tuổi trở lên.",
            "Xem xét nguyện vọng của con từ 7 tuổi trở lên và quyền lợi của con.",
            "Nguyện vọng của con."
        ],
        answer: 2 // C
    },
    {
        id: 354,
        question: "A và B kết hôn năm 2015, chung sống được 2 năm thì A bị tâm thần. Mẹ của A có được yêu cầu giải quyết ly hôn giữa A và B hay không?",
        options: [
            "Không được.",
            "Được.",
            "Do thoả thuận giữa các bên.",
            "Được nếu các bên đồng ý."
        ],
        answer: 1 // B
    },
    {
        id: 355,
        question: "Trường hợp nào chồng không có quyền yêu cầu ly hôn?",
        options: [
            "Vợ đang nuôi con dưới 12 tháng tuổi.",
            "Vợ đang mang thai.",
            "Vợ đang mang thai hoặc nuôi con dưới 12 tháng tuổi.",
            "Vợ bị hạn chế năng lực hành vi dân sự."
        ],
        answer: 2 // C
    },
    {
        id: 356,
        question: "Thời điểm chấm dứt quan hệ hôn nhân là khi nào?",
        options: [
            "Khi vợ chồng không còn chung sống.",
            "Khi vợ chồng ly thân.",
            "Khi bản án ly hôn có hiệu lực pháp luật.",
            "Khi vợ chồng ký vào Văn bản thỏa thuận ly hôn."
        ],
        answer: 2 // C
    },
    {
        id: 357,
        question: "Hôn nhân giữa A, B chấm dứt khi nào?",
        options: [
            "Khi A hoặc B biệt tích.",
            "Khi bản án ly hôn có hiệu lực pháp luật.",
            "Khi một trong hai người bị mất tích.",
            "Khi một trong hai người bị mất năng lực hành vi dân sự."
        ],
        answer: 1 // B
    },
    {
        id: 358,
        question: "Vợ chồng A, B đang sống tại căn nhà là tài sản riêng của A. Ngày 03/01/2017, A, B ly hôn, B gặp khó khăn về chỗ ở thì có được ở lại nhà A không?",
        options: [
            "Không được.",
            "Được, tối đa 03 tháng.",
            "Được, tối đa 06 tháng.",
            "Được, tối đa 12 tháng."
        ],
        answer: 2 // C
    },
    {
        id: 359,
        question: "Toàn và Hạnh sống chung với nhau như vợ chồng từ 2010, có một con chung. Cho tới thời điểm hiện tại, hai người có phải là vợ chồng không?",
        options: [
            "Phải, vì đã có con chung với nhau.",
            "Phải, vì đã chung sống 9 năm với nhau.",
            "Không phải vì chưa đăng ký kết hôn.",
            "Phải nếu gia đình hai bên đồng ý."
        ],
        answer: 2 // C
    },
    {
        id: 360,
        question: "A và B chung sống với nhau như vợ chồng, có 1 con chung. Sau đó đi đăng ký kết hôn. Quan hệ hôn nhân giữa A,B được xác lập từ thời điểm nào?",
        options: [
            "Từ lúc cùng sống chung.",
            "Từ lúc có con.",
            "Từ lúc đăng ký kết hôn.",
            "Từ khi tổ chức lễ cưới."
        ],
        answer: 2 // C
    },
    {
        id: 361,
        question: "Ông X, bà Y kết hôn và sống với nhau trong căn nhà là tài sản chung của XY. Các hành động sau của ông X, hành động nào sai?",
        options: [
            "Tự ý bán nhà, không hỏi ý kiến bà Y.",
            "Bán nhà sau khi hỏi ý kiến bà Y, hai vợ chồng cùng ký vào hợp đồng bán nhà.",
            "Thỏa thuận hợp đồng tặng cho tài sản với bà A.",
            "Chia tài sản với bà A."
        ],
        answer: 0 // A
    },
    {
        id: 362,
        question: "Nam, nữ chung sống với nhau như vợ chồng mà không đăng ký kết hôn thì có quyền và nghĩa vụ với con chung hay không?",
        options: [
            "Không có nghĩa vụ với con chung.",
            "Có nghĩa vụ với con chung.",
            "Có quyền và nghĩa vụ đối với con chung.",
            "Có quyền và nghĩa vụ đối với con chung dưới 6 tuổi."
        ],
        answer: 2 // C
    },
    {
        id: 363,
        question: "Bà A vì tin bói toán nên ép con gái là B kết hôn với C. Hành vi của bà A vi phạm nguyên tắc nào sau đây:",
        options: [
            "Nguyên tắc một vợ, một chồng.",
            "Nguyên tắc tự nguyện khi kết hôn.",
            "Nguyên tắc bình đẳng giữa vợ và chồng.",
            "Nguyên tắc hôn nhân tiến bộ."
        ],
        answer: 1 // B
    },
    {
        id: 364,
        question: "Ông A, bà B cấm con gái là C kết hôn với anh D do cho rằng hai gia đình không môn đăng hộ đối. Hành vi của ông bà A, B vi phạm:",
        options: [
            "Nguyên tắc một vợ, một chồng.",
            "Nguyên tắc tự nguyện khi kết hôn.",
            "Nguyên tắc bình đẳng giữa vợ và chồng.",
            "Nguyên tắc hôn nhân tiến bộ."
        ],
        answer: 1 // B
    },
    {
        id: 365,
        question: "A, B là vợ chồng, trong thời gian chung sống mẹ của A tặng cho 2 vợ chồng một mảnh đất để làm ăn. Vậy mảnh đất đó là:",
        options: [
            "Tài sản riêng của A.",
            "Tài sản riêng của B.",
            "Tài sản chung của A, B.",
            "Tài sản của mẹ A."
        ],
        answer: 2 // C
    },
    {
        id: 366,
        question: "A, B là vợ chồng, trong thời gian A,B sống ly thân, anh A có tìm hiểu và kết hôn với chị C. Hành vi của anh A:",
        options: [
            "Vi phạm nguyên tắc tự nguyện khi kết hôn.",
            "Vi phạm nguyên tắc một vợ một chồng.",
            "Vi phạm nguyên tắc bình đẳng giữa vợ và chồng.",
            "Vi phạm nguyên tắc hôn nhân tiến bộ."
        ],
        answer: 1 // B
    },
    {
        id: 367,
        question: "A, B là vợ chồng. Sau 4 năm kết hôn, anh A ngoại tình dẫn tới ly hôn. Khi chia tài sản chung thì anh A có gặp bất lợi gì hay không?",
        options: [
            "Không vì theo nguyên tắc chia đôi tài sản chung.",
            "Không vì A, B đều đóng góp cho tài sản chung.",
            "Có vì anh A có lỗi do đã vi phạm nghĩa vụ người chồng.",
            "Không, vì chia theo công sức đóng góp."
        ],
        answer: 2 // C
    },
    {
        id: 368,
        question: "A và B là vợ chồng. Năm 2013 ly hôn, có con chung là C (15 tháng). Cháu C sẽ do ai trực tiếp nuôi dưỡng?",
        options: [
            "Do anh A nuôi dưỡng.",
            "Do chị B nuôi dưỡng vì cháu C dưới 36 tháng tuổi.",
            "Do Tòa án quyết định.",
            "Xét điều kiện của hai bên."
        ],
        answer: 1 // B
    },
    {
        id: 369,
        question: "A, B là người đồng giới, vậy AB có thể nhận cháu C làm con nuôi chung của hai người hay không?",
        options: [
            "Có thể nhận con nuôi chung vì A, B tự nguyện.",
            "Có thể nhận con nuôi chung vì A, B đủ tuổi.",
            "Không thể nhận con nuôi chung vì A, B không phải vợ chồng theo pháp luật.",
            "Không thể nhận nuôi con vì A và B là người cùng giới."
        ],
        answer: 2 // C
    },
    {
        id: 370,
        question: "A và B chung sống như vợ chồng từ 2005. Tới 2010, A kết hôn với C. B nộp đơn yêu cầu huỷ kết hôn giữa A và C. Tòa có chấp nhận không?",
        options: [
            "Có, vì ông A là người đang có vợ.",
            "Không vì ông A và bà B không phải vợ chồng hợp pháp (chưa đăng ký).",
            "Có, vì cả 2 hoàn toàn tự nguyện chung sống.",
            "Không vì bà C đã có Giấy chứng nhận kết hôn."
        ],
        answer: 1 // B
    },
    {
        id: 371,
        question: "A muốn xin cháu B làm con nuôi. Vậy A cần hơn cháu B bao nhiêu tuổi:",
        options: [
            "15 tuổi trở lên.",
            "22 tuổi trở lên.",
            "20 tuổi trở lên.",
            "30 tuổi trở lên."
        ],
        answer: 2 // C
    },
    {
        id: 372,
        question: "Cặp vợ chồng A, B muốn nhận cháu C làm con nuôi. Vậy độ tuổi của cháu C là:",
        options: [
            "Từ 18 tuổi trở xuống.",
            "Từ 21 tuổi trở xuống.",
            "Từ 15 tuổi trở xuống.",
            "Từ 17 tuổi trở xuống."
        ],
        answer: 2 // C
    },
    {
        id: 373,
        question: "Chị A kết hôn với anh B – người từng là bố nuôi của chị A. Vậy A,B có được phép kết hôn hay không?",
        options: [
            "Được phép kết hôn vì A,B hoàn toàn tự nguyện.",
            "Được phép kết hôn vì A,B đều đã đủ tuổi theo quy định.",
            "Không được phép kết hôn vì vi phạm trường hợp cấm kết hôn.",
            "Được kết hôn nếu cả hai chứng minh được không có quan hệ nuôi dưỡng."
        ],
        answer: 2 // C
    },
    {
        id: 374,
        question: "Hợp đồng lao động có hiệu lực khi nào?",
        options: [
            "Kể từ ngày ký kết.",
            "Từ ngày hai bên thoả thuận.",
            "Từ ngày người lao động bắt đầu làm việc.",
            "Kể từ ngày các bên giao kết, trừ trường hợp hai bên có thỏa thuận khác hoặc pháp luật có quy định khác."
        ],
        answer: 3 // D
    },
    {
        id: 375,
        question: "Khi tạm thời chuyển người lao động làm việc khác so với hợp đồng lao động, người sử dụng lao động phải thông báo trước bao nhiêu ngày?",
        options: [
            "Ít nhất 03 ngày làm việc.",
            "Ít nhất 05 ngày làm việc.",
            "Ít nhất 07 ngày làm việc.",
            "Ít nhất 10 ngày làm việc."
        ],
        answer: 0 // A
    },
    {
        id: 376,
        question: "Trong thời gian thử việc người lao động được trả lương như thế nào?",
        options: [
            "Mức lương cơ bản.",
            "Mức lương do hai bên thỏa thuận.",
            "Ít nhất bằng 85% mức lương của công việc đó.",
            "Mức lương do hai bên thỏa thuận nhưng ít nhất phải bằng 85% tiền lương của công việc đó."
        ],
        answer: 3 // D
    },
    {
        id: 377,
        question: "Theo quy định của Bộ luật Lao động 2019 thì Hợp đồng lao động là gì?",
        options: [
            "Sự thỏa thuận về việc làm.",
            "Sự thỏa thuận về tiền lương.",
            "Sự thỏa thuận về công việc, thời giờ làm việc.",
            "Sự thỏa thuận giữa người lao động và người sử dụng lao động về việc làm có trả lương, điều kiện làm việc, quyền và nghĩa vụ của mỗi bên."
        ],
        answer: 3 // D
    },
    {
        id: 378,
        question: "Những hành vi nào sau đây người sử dụng lao động không được làm khi giao kết, thực hiện hợp đồng lao động?",
        options: [
            "Giữ bản chính giấy tờ tùy thân của người lao động.",
            "Yêu cầu người lao động phải đặt cọc tiền.",
            "Buộc thực hiện biện pháp bảo đảm bằng tài sản.",
            "Tất cả các hành vi trên (Giữ giấy tờ, yêu cầu đặt cọc, bảo đảm bằng tài sản)."
        ],
        answer: 3 // D
    },
    {
        id: 379,
        question: "Đối tượng điều chỉnh của Luật Hình sự là:",
        options: [
            "Quan hệ xã hội phát sinh khi có vi phạm pháp luật hình sự.",
            "Quan hệ phát sinh giữa Nhà nước và người phạm tội khi có tội phạm xảy ra.",
            "Quan hệ giữa người vi phạm luật hình sự và người bị hại.",
            "Quan hệ nhân thân và tài sản."
        ],
        answer: 1 // B
    },
    {
        id: 380,
        question: "Độ tuổi tối thiểu chịu trách nhiệm hình sự là từ đủ:",
        options: [
            "12 tuổi.",
            "14 tuổi.",
            "16 tuổi.",
            "18 tuổi."
        ],
        answer: 1 // B
    },
    {
        id: 381,
        question: "Chủ thể của tội phạm có thể là:",
        options: [
            "Cá nhân.",
            "Cá nhân và tổ chức.",
            "Cá nhân và pháp nhân thương mại.",
            "Công dân Việt Nam."
        ],
        answer: 2 // C
    },
    {
        id: 382,
        question: "Bộ luật hình sự phân loại tội phạm thành:",
        options: [
            "3 loại.",
            "4 loại.",
            "5 loại.",
            "6 loại."
        ],
        answer: 1 // B
    },
    {
        id: 383,
        question: "Tùy theo mức độ phạm tội, tội phạm hình sự được chia thành các loại:",
        options: [
            "Tội phạm nghiêm trọng; tội phạm rất nghiêm trọng.",
            "Tội phạm ít nghiêm trọng; nghiêm trọng; rất nghiêm trọng.",
            "Tội phạm nghiêm trọng; rất nghiêm trọng; đặc biệt nghiêm trọng.",
            "Tội phạm ít nghiêm trọng; tội phạm nghiêm trọng; tội phạm rất nghiêm trọng; tội phạm đặc biệt nghiêm trọng."
        ],
        answer: 3 // D
    },
    {
        id: 384,
        question: "Tội phạm ít nghiêm trọng là tội phạm có mức phạt mà khung hình phạt cao nhất là:",
        options: [
            "2 năm.",
            "3 năm.",
            "4 năm.",
            "5 năm."
        ],
        answer: 1 // B
    },
    {
        id: 385,
        question: "Tội phạm nghiêm trọng là tội phạm có mức phạt mà khung hình phạt cao nhất là:",
        options: [
            "3 năm.",
            "5 năm.",
            "7 năm.",
            "10 năm."
        ],
        answer: 2 // C
    },
    {
        id: 386,
        question: "Tội phạm rất nghiêm trọng là tội phạm có mức phạt mà khung hình phạt cao nhất là:",
        options: [
            "5 năm.",
            "7 năm.",
            "10 năm.",
            "15 năm."
        ],
        answer: 3 // D
    },
    {
        id: 387,
        question: "Thời hiệu truy cứu trách nhiệm hình sự đối với tội phạm ít nghiêm trọng là:",
        options: [
            "3 năm.",
            "5 năm.",
            "7 năm.",
            "10 năm."
        ],
        answer: 1 // B
    },
    {
        id: 388,
        question: "Thời hiệu truy cứu trách nhiệm hình sự đối với tội phạm nghiêm trọng là:",
        options: [
            "5 năm.",
            "7 năm.",
            "10 năm.",
            "12 năm."
        ],
        answer: 2 // C
    },
    {
        id: 389,
        question: "Thời hiệu truy cứu trách nhiệm hình sự đối với tội phạm rất nghiêm trọng là:",
        options: [
            "5 năm.",
            "10 năm.",
            "15 năm.",
            "20 năm."
        ],
        answer: 2 // C
    },
    {
        id: 390,
        question: "Thời hiệu truy cứu trách nhiệm hình sự đối với tội phạm đặc biệt nghiêm trọng là:",
        options: [
            "10 năm.",
            "15 năm.",
            "20 năm.",
            "25 năm." // Lưu ý: Theo file đáp án là 25 năm (D), dù luật hiện hành quy định 20 năm.
        ],
        answer: 3 // D
    },
    {
        id: 391,
        question: "Chế định “Hình phạt” thuộc ngành luật nào:",
        options: [
            "Ngành luật lao động.",
            "Ngành luật hành chính.",
            "Ngành luật hình sự.",
            "Ngành luật tố tụng hình sự."
        ],
        answer: 2 // C
    },
    {
        id: 392,
        question: "Luật hình sự quy định bao nhiêu trường hợp loại trừ trách nhiệm hình sự:",
        options: [
            "5 trường hợp.",
            "6 trường hợp.",
            "7 trường hợp.",
            "8 trường hợp."
        ],
        answer: 2 // C
    },
    {
        id: 393,
        question: "Nguyên tắc áp dụng hình phạt chính và hình phạt bổ sung trong pháp luật hình sự là:",
        options: [
            "Có thể áp dụng một lúc nhiều hình phạt chính.",
            "Có thể áp dụng một lúc nhiều hình phạt chính và một bổ sung.",
            "Chỉ áp dụng một chính và một bổ sung.",
            "Chỉ có thể áp dụng một hình phạt chính, và áp dụng được nhiều hình phạt bổ sung."
        ],
        answer: 3 // D
    },
    {
        id: 394,
        question: "Số lượng các hình phạt trong trách nhiệm hình sự đối với cá nhân:",
        options: [
            "Có 10 hình phạt chính và 10 hình phạt bổ sung.",
            "Có 9 hình phạt chính và 9 hình phạt bổ sung.",
            "Có 8 hình phạt chính và 8 hình phạt bổ sung.",
            "Có 7 hình phạt chính và 7 hình phạt bổ sung."
        ],
        answer: 3 // D
    },
    {
        id: 395,
        question: "Hình thức xử lý nào sau đây không phải là hình phạt theo Bộ luật Hình sự?",
        options: [
            "Tù có thời hạn.",
            "Cải tạo không giam giữ.",
            "Tù chung thân.",
            "Bồi thường thiệt hại."
        ],
        answer: 3 // D
    },
    {
        id: 396,
        question: "Trong các hình phạt của trách nhiệm hình sự….",
        options: [
            "Phạt tiền là hình phạt chính.",
            "Phạt tiền là hình phạt bổ sung.",
            "Phạt tiền vừa là hình thức xử phạt chính vừa là hình thức xử phạt bổ sung.",
            "Không có hình phạt tiền."
        ],
        answer: 2 // C
    },
    {
        id: 397,
        question: "Trong các hình phạt của trách nhiệm hình sự:",
        options: [
            "Trục xuất là hình phạt chính.",
            "Trục xuất là hình phạt bổ sung.",
            "Trục xuất vừa là hình thức xử phạt chính vừa là hình thức xử phạt bổ sung.",
            "Trục xuất không phải là hình phạt trong luật hình sự."
        ],
        answer: 2 // C
    },
    {
        id: 398,
        question: "Hình phạt tịch thu tài sản:",
        options: [
            "Là hình phạt chính.",
            "Là hình phạt bổ sung.",
            "Vừa là hình phạt chính, vừa là hình phạt bổ sung.",
            "Không phải là hình phạt."
        ],
        answer: 1 // B
    },
    {
        id: 399,
        question: "Hình phạt cấm đảm nhiệm chức vụ, cấm hành nghề hoặc làm công việc nhất định:",
        options: [
            "Là hình phạt chính.",
            "Là hình phạt bổ sung.",
            "Vừa là hình phạt chính, vừa là hình phạt bổ sung.",
            "Không phải là hình phạt."
        ],
        answer: 1 // B
    },
    {
        id: 400,
        question: "Trong các hình phạt của trách nhiệm hình sự:",
        options: [
            "Cải tạo không giam giữ chính là án phạt tù treo.",
            "Cải tạo không giam giữ chính là hình phạt cảnh cáo.",
            "Cải tạo không giam giữ chính là án treo...",
            "Không có hình phạt cải tạo không giam giữ." // (Lưu ý: Theo đáp án file chọn D)
        ],
        answer: 3 // D
    },
    // --- PHẦN 9: TỪ CÂU 401 ĐẾN 450 (HẾT) ---
    {
        id: 401,
        question: "Hình phạt nào không áp dụng đối với pháp nhân thương mại?",
        options: [
            "Phạt tiền.",
            "Đình chỉ hoạt động.",
            "Cấm kinh doanh, cấm hoạt động.",
            "Tù có thời hạn."
        ],
        answer: 3 // D
    },
    {
        id: 402,
        question: "Biện pháp bắt buộc chữa bệnh là một biện pháp thuộc trường hợp:",
        options: [
            "Hình phạt chính.",
            "Hình phạt bổ sung.",
            "Biện pháp tư pháp.",
            "Xử phạt hành chính."
        ],
        answer: 2 // C
    },
    {
        id: 403,
        question: "Hình phạt tử hình không áp dụng cho:",
        options: [
            "Người dưới 18 tuổi.",
            "Người từ đủ 75 tuổi.",
            "Phụ nữ có thai, phụ nữ nuôi con dưới 36 tháng tuổi.",
            "Người dưới 18 tuổi, từ đủ 75 tuổi trở lên, phụ nữ có thai hoặc nuôi con dưới 36 tháng tuổi."
        ],
        answer: 3 // D
    },
    {
        id: 404,
        question: "Trục xuất là hình phạt chỉ áp dụng với:",
        options: [
            "Người nước ngoài.",
            "Người không có quốc tịch.",
            "Công dân Việt Nam.",
            "Người nước ngoài và người không có quốc tịch."
        ],
        answer: 3 // D
    },
    {
        id: 405,
        question: "Văn bản pháp luật nào sau đây quy định về trình tự, thủ tục giải quyết vụ án hình sự?",
        options: [
            "Bộ luật Hình sự.",
            "Bộ luật tố tụng hình sự.",
            "Bộ luật Dân sự.",
            "Bộ luật Tố tụng hành chính."
        ],
        answer: 1 // B
    },
    {
        id: 406,
        question: "Trình tự tố tụng hình sự đựơc sắp xếp theo thứ tự nào sau đây:",
        options: [
            "Điều tra - khởi tố - truy tố - xét xử.",
            "Khởi tố - truy tố - điều tra – xét xử.",
            "Truy tố - điều tra - khởi tố - xét xử.",
            "Khởi tố - điều tra – truy tố - xét xử."
        ],
        answer: 3 // D
    },
    {
        id: 407,
        question: "Người nào sau đây không phải là người tiến hành tố tụng:",
        options: [
            "Điều tra viên.",
            "Kiểm sát viên.",
            "Thư ký tòa án.",
            "Người có quyền và nghĩa vụ liên quan."
        ],
        answer: 3 // D
    },
    {
        id: 408,
        question: "Người nào sau đây không phải là người tham gia tố tụng?",
        options: [
            "Bị can, bị cáo.",
            "Người làm chứng.",
            "Hội thẩm nhân dân.",
            "Người bào chữa."
        ],
        answer: 2 // C
    },
    {
        id: 409,
        question: "Cơ quan nào sau đây không có quyền khởi tố vụ án hình sự?",
        options: [
            "Cơ quan điều tra.",
            "Viện kiểm sát nhân dân.",
            "Công an xã, phường, thị trấn.",
            "Bộ đội biên phòng."
        ],
        answer: 2 // C
    },
    {
        id: 410,
        question: "Khi kết thúc điều tra, nếu có đủ chứng cứ, cơ quan điều tra sẽ ban hành:",
        options: [
            "Quyết định khởi tố bị can.",
            "Kết luận điều tra.",
            "Cáo trạng truy tố.",
            "Quyết định xét xử."
        ],
        answer: 1 // B
    },
    {
        id: 411,
        question: "Sau khi việc điều tra kết thúc, vụ án phải được chuyển cho:",
        options: [
            "Viện kiểm sát nhân dân có thẩm quyền.",
            "Tòa án nhân dân có thẩm quyền.",
            "Cơ quan điều tra.",
            "Hội đồng xét xử."
        ],
        answer: 0 // A
    },
    {
        id: 412,
        question: "Khi có quyết định khởi tố, người có hành vi phạm tội được gọi là:",
        options: [
            "Người phạm tội.",
            "Bị can.",
            "Bị cáo.",
            "Bị án."
        ],
        answer: 1 // B
    },
    {
        id: 413,
        question: "Khi có quyết định đưa vụ án ra xét xử, người có hành vi phạm tội được gọi là:",
        options: [
            "Người phạm tội.",
            "Bị can.",
            "Bị cáo.",
            "Bị án."
        ],
        answer: 2 // C
    },
    {
        id: 414,
        question: "Khi có quyết định đưa ra xét xử, người có hành vi phạm tội được gọi là:",
        options: [
            "Người phạm tội.",
            "Bị can.",
            "Bị cáo.",
            "Bị án."
        ],
        answer: 2 // C
    },
    {
        id: 415,
        question: "Trình tự xét xử vụ án hình sự theo thứ tự nào sau đây:",
        options: [
            "Phúc thẩm – Sơ thẩm – Giám đốc thẩm, tái thẩm.",
            "Sơ thẩm – Phúc thẩm – Giám đốc thẩm, tái thẩm.",
            "Giám đốc thẩm, tái thẩm – Phúc thẩm – Sơ thẩm.",
            "Sơ thẩm – Phúc thẩm – Chung thẩm."
        ],
        answer: 1 // B
    },
    {
        id: 416,
        question: "Tòa án nhân dân cấp huyện không được quyền xét xử sơ thẩm tội phạm nào sau đây:",
        options: [
            "Tội phạm nghiêm trọng.",
            "Tội phạm rất nghiêm trọng.",
            "Tội xâm phạm an ninh quốc gia.",
            "Tội phạm ít nghiêm trọng."
        ],
        answer: 2 // C
    },
    {
        id: 417,
        question: "Tòa án nhân dân cấp huyện không được xét xử sơ thẩm các vụ án nào sau đây:",
        options: [
            "Vụ án về tội phạm rất nghiêm trọng.",
            "Vụ án về tội phạm đặc biệt nghiêm trọng.",
            "Vụ án có liên quan đến người nước ngoài.",
            "Vụ án về tội phạm đặc biệt nghiêm trọng; Vụ án có liên quan đến người nước ngoài."
        ],
        answer: 3 // D
    },
    {
        id: 418,
        question: "Người nào không có quyền kháng cáo?",
        options: [
            "Bị cáo, bị hại.",
            "Người đại diện của bị cáo, bị hại.",
            "Nguyên đơn dân sự, bị đơn dân sự.",
            "Người thân thích của bị cáo, bị hại."
        ],
        answer: 3 // D
    },
    {
        id: 419,
        question: "Theo Bộ luật Hình sự, tội phạm là:",
        options: [
            "Hành vi nguy hiểm cho xã hội được quy định trong Bộ luật Hình sự.",
            "Hành vi do người có năng lực trách nhiệm hình sự thực hiện.",
            "Hành vi có lỗi và phải chịu trách nhiệm hình sự.",
            "Hành vi nguy hiểm cho xã hội do người có năng lực trách nhiệm hình sự thực hiện một cách cố ý hoặc vô ý, xâm hại đến các quan hệ xã hội được pháp luật hình sự bảo vệ."
        ],
        answer: 3 // D
    },
    {
        id: 420,
        question: "“Người thực hiện hành vi gây hậu quả nguy hại cho xã hội trong trường hợp không thể thấy trước hoặc không buộc phải thấy trước hậu quả của hành vi đó” là thuộc trường hợp:",
        options: [
            "Tình thế cấp thiết.",
            "Sự kiện bất ngờ.",
            "Phòng vệ chính đáng.",
            "Rủi ro trong nghiên cứu, thử nghiệm."
        ],
        answer: 1 // B
    },
    {
        id: 421,
        question: "“Người vì muốn tránh gây thiệt hại cho quyền, lợi ích hợp pháp của mình, của người khác hoặc lợi ích của Nhà nước, của cơ quan, tổ chức mà không còn cách nào khác là phải gây một thiệt hại nhỏ hơn thiệt hại cần ngăn ngừa” là thuộc trường hợp:",
        options: [
            "Tình thế cấp thiết.",
            "Sự kiện bất ngờ.",
            "Phòng vệ chính đáng.",
            "Rủi ro trong nghiên cứu, thử nghiệm."
        ],
        answer: 0 // A
    },
    {
        id: 422,
        question: "“Người vì bảo vệ quyền hoặc lợi ích chính đáng của mình, của người khác hoặc lợi ích của Nhà nước, của cơ quan, tổ chức mà chống trả lại một cách cần thiết người đang có hành vi xâm phạm các lợi ích nói trên”, là thuộc trường hợp:",
        options: [
            "Tình thế cấp thiết.",
            "Sự kiện bất ngờ.",
            "Phòng vệ chính đáng.",
            "Gây thiệt hại trong khi bắt giữ người phạm tội."
        ],
        answer: 2 // C
    },
    {
        id: 423,
        question: "Một người chỉ có thể được xem là có tội khi:",
        options: [
            "Bị cơ quan công an thi hành lệnh bắt.",
            "Bị cơ quan điều tra ra quyết định khởi tố.",
            "Có hành vi vi phạm pháp luật hình sự.",
            "Bị tòa án ra bản án có hiệu lực pháp luật."
        ],
        answer: 3 // D
    },
    {
        id: 424,
        question: "“Người bị kết án được tòa án quyết định cho họ không phải chấp hành một phần hoặc toàn bộ hình phạt của bản án đã tuyên khi họ có đủ các điều kiện do Bộ luật hình sự quy định” là thuộc trường hợp:",
        options: [
            "Cải tạo không giam giữ.",
            "Hưởng án treo.",
            "Miễn hình phạt.",
            "Miễn chấp hành hình phạt."
        ],
        answer: 3 // D
    },
    {
        id: 425,
        question: "Trong các vụ án hình sự, trách nhiệm pháp lý của người phạm tội:",
        options: [
            "Không bao giờ liên quan đến phần dân sự.",
            "Tất cả đều liên quan đến phần dân sự.",
            "Trách nhiệm hình sự và trách nhiệm dân sự.",
            "Liên quan đến trách nhiệm dân sự, hành chính và kỷ luật."
        ],
        answer: 2 // C
    },
    {
        id: 426,
        question: "Hình phạt trục xuất là:",
        options: [
            "Buộc người Việt Nam bị kết án phải rời khỏi lãnh thổ nước CHXHCN Việt Nam.",
            "Buộc người nước ngoài phải rời khỏi lãnh thổ nước CHXHCN Việt Nam.",
            "Buộc người nước ngoài bị kết án phải rời khỏi lãnh thổ nước CHXHCN Việt Nam.",
            "Buộc người Việt Nam hoặc người nước ngoài bị kết án phải rời khỏi lãnh thổ nước CHXHCN Việt Nam."
        ],
        answer: 2 // C
    },
    {
        id: 427,
        question: "Tử hình là hình phạt:",
        options: [
            "Tước quyền công dân của người phạm tội.",
            "Tước quyền sống của người phạm tội.",
            "Cách ly người phạm tội ra khỏi xã hội vĩnh viễn.",
            "Tù có thời hạn."
        ],
        answer: 1 // B
    },
    {
        id: 428,
        question: "Mục đích của hình phạt là nhằm:",
        options: [
            "Trừng trị người phạm tội.",
            "Cải tạo, giáo dục người phạm tội.",
            "Ngăn ngừa tội phạm chung.",
            "Trừng trị, cải tạo, giáo dục người phạm tội và ngăn ngừa tội phạm."
        ],
        answer: 3 // D
    },
    {
        id: 429,
        question: "Anh A được xem là người có tội và phải chịu hình phạt khi:",
        options: [
            "Có người tố cáo A phạm tội.",
            "Anh A bị khởi tố.",
            "Anh A bị truy tố.",
            "Anh A bị Tòa án tuyên án và ra bản án có hiệu lực."
        ],
        answer: 3 // D
    },
    {
        id: 430,
        question: "Hành vi vi phạm pháp luật nào sau đây không bị xem là tội phạm?",
        options: [
            "Không đăng ký tạm trú, tạm vắng.",
            "Chiếm giữ trái phép tài sản.",
            "Không tuân thủ luật giao thông gây tai nạn với hậu quả nghiêm trọng.",
            "Không tố giác tội phạm."
        ],
        answer: 0 // A
    },
    {
        id: 431,
        question: "A chuẩn bị dao tìm B để giết nhằm trả thù. A phục kích trên đường chờ B đi ngang qua sẽ ra tay. Tuy nhiên, A chưa kịp thực hiện hành vi thì bị phát hiện:",
        options: [
            "A không phải chịu trách nhiệm hình sự.",
            "A vẫn phải chịu trách nhiệm hình sự.",
            "A chỉ bị xử phạt hành chính.",
            "A chỉ phải chịu trách nhiệm dân sự."
        ],
        answer: 1 // B [cite: 77]
    },
    {
        id: 432,
        question: "A đang chạy xe trên đường đúng quy định thì B lao vào đầu xe của A dẫn đến tai nạn, B tử vong:",
        options: [
            "A không phải chịu trách nhiệm hình sự.",
            "A vẫn phải chịu trách nhiệm hình sự.",
            "B mới là người chịu trách nhiệm hình sự.",
            "Cả A và B đều chịu trách nhiệm hình sự."
        ],
        answer: 0 // A
    },
    {
        id: 433,
        question: "Hoàng mượn tiền của Tùng nhưng đến hạn không trả, Tùng đến nhà Hoàng dùng dao đe dọa khiến Hoàng bỏ chạy. Sau đó, Tùng đã dắt chiếc xe của Hoàng (để trước cửa) đem về nhà để cấn trừ nợ. Hoàng đòi xe lại nhưng Tùng không trả:",
        options: [
            "Hành vi lấy xe của Tùng không phải là hành vi phạm tội.",
            "Hành vi lấy xe của Tùng là hành vi phạm tội.",
            "Hành vi của Tùng chỉ vi phạm pháp luật dân sự.",
            "Vay tiền không trả là vi phạm pháp luật hình sự."
        ],
        answer: 1 // B
    },
    {
        id: 434,
        question: "A đang trên đường về nhà thì bị B chặn đường cướp, A rút dao chống trả khiến B bỏ chạy. A rượt theo dùng dao đâm B tử vong. Hành vi của A thuộc trường hợp nào sau đây?",
        options: [
            "Phòng vệ chính đáng.",
            "Tình thế cấp thiết.",
            "Gây thiệt hại trong khi bắt giữ người phạm tội.",
            "A phạm tội và phải chịu trách nhiệm hình sự."
        ],
        answer: 3 // D
    },
    {
        id: 435,
        question: "Nửa đêm, A lẻn vào nhà B trộm tài sản nhưng bị B phát hiện. Do lo sợ bị A tấn công nên B dùng dao chém loạn xạ làm A bị trọng thương. Hành vi của B là:",
        options: [
            "Thuộc trường hợp phòng vệ chính đáng.",
            "Gây thiệt hại trong khi bắt giữ người phạm tội.",
            "Vượt quá giới hạn phòng vệ chính đáng.",
            "Tình thế cấp thiết."
        ],
        answer: 2 // C
    },
    {
        id: 436,
        question: "Trên đường đi làm, A nhặt được ví tiền của B, bên trong có 1.000.000 đồng. Sau đó, B biết được và yêu cầu A trả lại nhưng A cố tình không trả.",
        options: [
            "Hành vi của A là hành vi phạm tội.",
            "Hành vi của A không phải là tội phạm hình sự.",
            "Hành vi của A phải chịu trách nhiệm hình sự.",
            "Hành vi của A cần phải bị khởi tố."
        ],
        answer: 1 // B
    },
    {
        id: 437,
        question: "A bị bệnh tâm thần dùng hung khí gây thương tích cho người khác:",
        options: [
            "A đương nhiên không phải chịu trách nhiệm hình sự.",
            "A vẫn phải chịu trách nhiệm hình sự.",
            "A có thể phải chịu trách nhiệm hình sự.",
            "A chỉ bị áp dụng biện pháp chữa bệnh bắt buộc."
        ],
        answer: 1 // B (Theo đáp án trong file)
    },
    {
        id: 438,
        question: "A bị Tòa án nhân dân cấp tỉnh xét xử phúc thẩm và tuyên án 5 năm tù về tội lừa đảo chiếm đoạt tài sản. Nếu không đồng ý với bản án này, A chỉ có thể thực hiện hành vi nào sau đây:",
        options: [
            "Kháng cáo bản án lên tòa án cấp cao.",
            "Kháng cáo bản án lên tòa án tối cao.",
            "Kháng nghị bản án lên viện kiểm sát cấp cao.",
            "Không được quyền kháng cáo và phải chấp hành bản án."
        ],
        answer: 3 // D
    },
    {
        id: 439,
        question: "Thế nào là tham nhũng?",
        options: [
            "Tham nhũng là hành vi của cán bộ, công chức nhà nước đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.",
            "Tham nhũng là hành vi lợi dụng chức vụ, quyền hạn để vụ lợi.",
            "Tham nhũng là hành vi của người có chức vụ, quyền hạn đã lợi dụng chức vụ, quyền hạn đó vì vụ lợi.",
            "Tham nhũng là hành vi cửa quyền, hách dịch, đòi hỏi, gây khó khăn..."
        ],
        answer: 2 // C
    },
    {
        id: 440,
        question: "Hành vi tham nhũng chịu trách nhiệm pháp lý nào?",
        options: [
            "Trách nhiệm hình sự.",
            "Trách nhiệm dân sự.",
            "Trách nhiệm hành chính.",
            "Trách nhiệm hình sự và kỷ luật."
        ],
        answer: 3 // D
    },
    {
        id: 441,
        question: "Những người nào có nghĩa vụ kê khai tài sản?",
        options: [
            "Cán bộ, công chức nhà nước.",
            "Sĩ quan Công an nhân dân; sĩ quan Quân đội nhân dân, quân nhân chuyên nghiệp.",
            "Người giữ chức vụ từ Phó trưởng phòng và tương đương trở lên công tác tại đơn vị sự nghiệp công lập...",
            "Tất cả các cán bộ, công chức, sĩ quan công an, sĩ quan quân đội, quân nhân chuyên nghiệp, doanh nghiệp nhà nước, người được cử làm đại diện phần vốn nhà nước, người ứng cử đại biểu Quốc hội và Hội đồng nhân dân."
        ],
        answer: 3 // D
    },
    {
        id: 442,
        question: "Theo Luật Phòng, chống tham nhũng, người đứng đầu... không được bố trí những người nào dưới đây giữ chức vụ quản lý về tổ chức nhân sự, kế toán, làm thủ quỹ, thủ kho...",
        options: [
            "Vợ hoặc chồng.",
            "Vợ hoặc chồng, bố, mẹ, con, anh, chị, em ruột.",
            "Bố, mẹ, con, anh, chị, em ruột.",
            "Con, anh, chị, em ruột."
        ],
        answer: 1 // B
    },
    {
        id: 443,
        question: "Chọn đáp án đúng về quyền phản ánh, tố cáo tham nhũng:",
        options: [
            "Cá nhân, tổ chức có quyền phản ánh, tố cáo về hành vi tham nhũng.",
            "Cá nhân, tổ chức có quyền phản ánh về hành vi tham nhũng, cá nhân có quyền tố cáo về hành vi tham nhũng theo quy định của pháp luật.",
            "Tổ chức có quyền phản ánh về hành vi tham nhũng, cá nhân có quyền tố cáo về hành vi tham nhũng.",
            "Cá nhân, tổ chức có liên quan mới có quyền tố cáo về tham nhũng."
        ],
        answer: 1 // B
    },
    {
        id: 444,
        question: "Chủ thể nào sau đây không thuộc người có chức vụ, quyền hạn?",
        options: [
            "Cán bộ, công chức, viên chức.",
            "Sỹ quan, quân nhân chuyên nghiệp...",
            "Người đại diện phần vốn nhà nước tại doanh nghiệp.",
            "Người lao động trong cơ quan, đơn vị, doanh nghiệp."
        ],
        answer: 3 // D
    },
    {
        id: 445,
        question: "Hành vi nào sau đây không phải là hành vi tham nhũng?",
        options: [
            "Tham ô tài sản.",
            "Nhận hối lộ; đưa hối lộ, môi giới hối lộ...",
            "Lạm dụng chức vụ, quyền hạn chiếm đoạt tài sản.",
            "Không thực hiện kịp thời trách nhiệm giải trình."
        ],
        answer: 3 // D
    },
    {
        id: 446,
        question: "Đặc trưng của tham nhũng là:",
        options: [
            "Chủ thể tham nhũng là người không có chức vụ, quyền hạn.",
            "Chủ thể tham nhũng là người có chức vụ, quyền hạn.",
            "Hành vi tham nhũng không có mục đích vụ lợi.",
            "Tất cả các cá nhân, tổ chức đều có thể trở thành chủ thể tham nhũng."
        ],
        answer: 1 // B
    },
    {
        id: 447,
        question: "Ông Q là Tổng Cục trưởng... Anh L là con trai ông Q... Nếu bổ nhiệm, anh L không được đảm nhiệm vị trí nào?",
        options: [
            "Giữ chức vụ quản lý về tổ chức nhân sự, kế toán, làm thủ quỹ, thủ kho.",
            "Giữ chức vụ quản lý về công tác đào tạo, bồi dưỡng.",
            "Giữ chức vụ quản lý trong lĩnh vực nghiên cứu khoa học, hợp tác quốc tế.",
            "Truyền thông, quan hệ công chúng."
        ],
        answer: 0 // A
    },
    {
        id: 448,
        question: "Anh A là thủ quỹ trong cơ quan nhà nước... chiếm đoạt tiền... Hành vi của A đã vi phạm quy định của:",
        options: [
            "Luật hình sự.",
            "Luật phòng chống tham nhũng.",
            "Luật thương mại.",
            "Vi phạm Luật hình sự, Luật phòng chống tham nhũng."
        ],
        answer: 1 // B (Theo đáp án trong file chọn B)
    },
    {
        id: 449,
        question: "Cơ quan nào có thẩm quyền điều tra đối với tội phạm tham nhũng?",
        options: [
            "Cơ quan điều tra của Công an nhân dân.",
            "Cơ quan điều tra thuộc Viện kiểm sát nhân dân tối cao.",
            "Viện Kiểm sát nhân dân.",
            "Tòa án nhân dân."
        ],
        answer: 1 // B
    },
    {
        id: 450,
        question: "Chọn nhận định đúng:",
        options: [
            "Cá nhân chịu trách nhiệm hình sự có thể chuyển trách nhiệm hình sự cho cá nhân, tổ chức khác.",
            "Cá nhân chịu trách nhiệm hình sự chỉ có thể chuyển trách nhiệm hình sự cho cá nhân khác.",
            "Cá nhân chịu trách nhiệm hình sự không được chuyển trách nhiệm hình sự cho cá nhân khác.",
            "Cá nhân chịu trách nhiệm hình sự chỉ có thể chuyển trách nhiệm hình sự cho tổ chức."
        ],
        answer: 2 // C
    }
]; // KẾT THÚC MẢNG DATABASE









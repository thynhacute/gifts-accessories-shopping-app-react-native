const products = [
  {
    id: "1",
    name: "Hộp đựng bút hình thùng rác",
    image: "https://cf.shopee.vn/file/be41fe7f99a4d05af48452fd36da3011",
    caterogy: "",
    gender: "",
    description:
      "Kích thước:🌸 15 x 7 x 5cm, Chất liệu: Nhựa cao cấp, Một trong những item không thể không kể đến trong góc học tập, làm việc của các pạn gòi. Thiết kế nhỏ gọn giúp bạn để các vật dụng văn phòng một cách gọn gàng. Được làm bằng chất liệu dày dặn; cứng cáp; bền đẹp cho thời gian sử dụng dài lâu. Giỏ đựng bút kiểu dáng xinh xắn sẽ là một vật trang trí độc đáo trên bàn làm việc của bạn.",
    price: 89000,
    countInStock: 15,
    rating: 4,
    numReviews: 4,
  },
  {
    id: "2",
    name: "Sticker trang trí phòng hoạt hình",
    image: "https://cf.shopee.vn/file/3796010415b94587f9a95b92cf4ebece",
    description:
      "Tên sản phẩm: 4 tờ dán Sticker màu hồng dễ thương. Kích thước: 108 * 170mm. Chất liệu: Giấy. Gói hàng bao gồm: 4 Tờ / Bộ",
    price: 15000,
    countInStock: 50,
    rating: 4.5,
    numReviews: 2,
  },
  {
    id: "3",
    name: "Túi đụng bút hình con thỏ",
    image:
      "https://filebroker-cdn.lazada.vn/kf/Sab46e1a1de2f4c47a68ea1a181cfaaeeV.jpg",
    description:
      "Chất liệu: PU. Kích thước: dài 21 rộng 3.5 cao 9cm. Khóa kéo kim loại ~ Họa tiết in hoa hai mặt. Sức chứa dễ thương kết cấu thoải mái",
    price: 90000,
    countInStock: 10,
    rating: 3.5,
    numReviews: 3,
  },
  {
    id: "4",
    name: "Balo xinh xắn màu hồng",
    image: "https://baloxinh.vn/wp-content/uploads/2021/09/balo-mau-hong.jpg",
    description:
      "Chẳng có người phụ nữ xấu chỉ có người phụ nữ không biết làm đẹp. Đúng vậy trong thời đại hiện nay. Balo là một phụ kiện không thể thiếu đối với các bạn nữ. Với nhịp sống nhộn nhịp, chúng ta có thể dễ dàng bắt gặp hình ảnh những bạn nữ bên cạnh chiếc balo của mình, dù là đi chơi, đi du lịch hay đi làm.",
    price: 200000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    id: "5",
    name: "Ốp lưng Iphone 11 hình quả Đào",
    image: "https://cf.shopee.vn/file/0992d94596530d5e7f77f6a1134991b8",
    description:
      "100% thương hiệu mới với chất lượng cao. Vỏ mềm, dễ cầm, trọng lượng nhẹ và mỏng. Bảo vệ toàn diện Chống va đập, Chống trượt, Chống bụi bẩn và chống trầy xước.",
    price: 50000,
    countInStock: 7,
    rating: 4.2,
    numReviews: 2,
  },
  {
    id: "6",
    name: "Loa Bluetooth thông minh Divoom Ditoo Plus",
    image:
      "https://bizweb.dktcdn.net/100/450/808/products/aff5a433-702e-4cde-81eb-670bce500c95.jpg?v=1664936103533",
    description:
      "Kết hợp với API Internet Radio, thoả sức khám phá nguồn tài nguyên âm nhạc với hơn 50,000 đài phát thanh trên toàn thế giới. Tích hợp các chức năng: Đồng hồ hiển thị giờ & báo thức, màn hình hỗ trợ giấc ngủ, báo thời tiết, Ghi âm - Voice memo, Hands-free calling, Pixel chat, Đồng hồ bấm giờ, đồng hồ đếm ngược, Scoreboard… Kết nối thông qua Bluetooth v5.0, hỗ trợ AUX và thẻ TF Hiệu năng tốt, thời gian phát nhạc liên tục lên đến 6h-8h. Chơi được 8 games pixel khác nhau",
    price: 1700000,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    id: "7",
    name: "Bàn phím N520 (Pink)",
    image:
      "https://down-vn.img.susercontent.com/file/0f8772fd6c51a57f81e11eef8b40125f",
    description:
      "Thiết kế chắc chắn, kiểu dáng cổ điển ấn tượng. Màu sắc cực Kute. Tiết kiệm pin thông minh (tự chuyển chế độ ngủ đông sau 5 phút không sử dụng). Phím êm dễ sử dụng, độ nhạy cao. Kết nối không dây xa gần 10m, độ truyền chính xác. Tương thích với nhiều loại thiết bị: Windows XP/7/10 Mac OS X 10.3+…",
    price: 350000,
    countInStock: 3,
    rating: 4.5,
    numReviews: 4,
  },
  {
    id: "8",
    name: "Bình Nước Thủy Tinh Màu Hồng Cute",
    image:
      "https://vn-test-11.slatic.net/p/828213a69fa1bb12124bbb667851f6f2.jpg",
    description:
      "Bình Nước Thủy Tinh Màu Hồng Cute. Dung tích: 360ml. Bình kèm theo móc treo chắc chắn, giúp bạn dễ dàng mang theo bên người.",
    price: 100000,
    countInStock: 10,
    rating: 4.8,
    numReviews: 2,
  },
  {
    id: "9",
    name: "Băng đô turban cài tóc sừng hươu",
    image:
      "https://amansaigon.com/wp-content/uploads/2020/12/B%C4%82NG-%C4%90%C3%94-TURBAN-C%C3%80I-T%C3%93C-S%E1%BB%AANG-H%C6%AF%C6%A0U-TU%E1%BA%A6N-L%E1%BB%98C-%C4%90%C3%81NG-Y%C3%8AU-7.jpg",
    description:
      "Băng Đô Cài Tóc sừng hươu tuần lộc có thiết kế xinh xắn, đáng yêu, mang lại vẻ xinh xắn cho bạn gái. Băng Đô cài tóc sừng hươu tuần lộc có màu nhẹ nhàng kết hợp với thiết kế thêm hai chiếc sừng hươu tuần lộc nhỏ siêu dễ thương phía trên. Băng đô có thiết kế đơn giản, phối màu nhẹ nhàng, nữ tính. Phụ kiện đơn giản phù hợp với các bạn nữ và phù hợp với nhiều trang phục.",
    price: 30000,
    countInStock: 20,
    rating: 4.5,
    numReviews: 3,
  },
  {
    id: "10",
    name: "Tai nghe E-Dra EH412 Pro Pink led RGB",
    image: "https://cf.shopee.vn/file/78345eb09f934156073cec68a79e54cb",
    description:
      "Tai nghe E-Dra - EH412 Pro Pink - Tai nghe 7.1 Led RGB là phiên bản màu hồng của tai nghe E-Dra EH412 Pro Black. Kích thước Micro: Φ4.0*1.5mm. Độ nhạy âm: -48±3db. Hướng bắt âm micro: đa hướng",
    price: 399000,
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
];
export default products;

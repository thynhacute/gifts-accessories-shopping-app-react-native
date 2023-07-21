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
    gender: "Nữ",
    category: "Đồ dùng học tập",
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
    gender: "Nữ",
    category: "Đồ trang trí",
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
    gender: "Nữ",
    category: "Đồ dùng học tập",
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
    gender: "Nữ",
    category: "Đồ dùng học tập",
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
    gender: "Nữ",
    category: "Phụ kiện trang trí",
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
    gender: "Nữ",
    category: "Đồ điện tử",
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
    gender: "Nữ",
    category: "Đồ điện tử",
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
    gender: "Nữ",
    category: "Phụ kiện khác",
  },
  {
    id: "9",
    name: "Giày trượt patin có đèn LED cho trẻ em",
    image:
      "https://m.media-amazon.com/images/I/61yvMhFKm6L.ACSX300SY300QL70ML2.jpg",
    description:
      "Đa chức năng: Bạn có thể cuộn nó lại bằng nút ở gót chân để hiển thị cửa sổ bật lên. Vì bạn có thể sử dụng cả giày trượt patin và giày thể thao thông thường Đế: Giày patin tổng hợp được thiết kế có công tắc điều khiển bật/tắt đèn để có thể mang như giày thông thường vào ban ngày. Đèn nháy khi giấu bên trong giày. Giày phát sáng có đèn LED có thể sạc lại Chất liệu bánh xe: PU Loại bánh xe: Bánh đôi Khi cần sử dụng giày thể thao, bạn có thể tháo bánh trước ra, bánh sau có thể thu vào. Đèn LED chống nước, rung nhấp nháy",
    price: 1700000,
    countInStock: 20,
    rating: 4.5,
    numReviews: 3,
    gender: "Nam",
    category: "Phụ kiện khác",
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
    gender: "Nữ",
    category: "Đồ điện tử",
  },
  {
    id: "11",
    name: "Tai nghe khử tiếng ồn Bose Headphone",
    image:
      "https://antien.vn/uploaded/Bose%20Headphone%20700/tai-nghe-bose-noise-cancelling-headphones-700.jpg",
    description:
      "Công nghệ Bose AR – Nền tảng tương tác thực tế ảo về âm thanh độc quyền và duy nhất của Bose. Người dùng sẽ được nghe thêm các thông tin, âm thanh, tiếng động về khu vực mình đang đứng nhờ vào các cảm biến cũng như định vị trên thiết bị. Thiết kế đẹp, hiện đại, cổng sạc USB-C và đem đến 20 giờ sử dụng liên tục.",
    price: 499000,
    countInStock: 7,
    rating: 5,
    numReviews: 2,
    gender: "Nam",
    category: "Đồ điện tử",
  },
  {
    id: "12",
    name: "Bình nước giữ nhiệt Shamoshu 1L",
    image:
      "https://www.clgvietnam.com/uploads/shops/201901/1521470683-binh-giu-nhiet-shamoshu-1l-mau-den.jpg",
    description:
      "Bình Giữ Nhiệt Shamoshu 1L (Màu Đen)​ là bình nước giữ nhiệt  lạnh từ 5 đến 15 độ C, thuộc công ty Shamoshu nổi tiếng Nhật Bản. Thermos là thương hiệu lâu đời hình thành vào năm 1904 tại Nhật Bản, được khẳng định chất lượng và uy tín tại 120 quốc gia trên thế giới. Thermos không ngừng nổ lực để phát minh và cải tiến sản phẩm, nhằm đáp ứng nhu cầu người tiêu dùng và bảo vệ môi trường. Hiện tại, các nhà máy sản xuất sản phẩm Thermos có mặt ở nhiều nơi trên thế giới nhưng vẫn đảm bảo tiêu chất lượng và kiểu dáng toàn cầu.",
    price: 200000,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
    gender: "Nam",
    category: "Phụ kiện khác",
  },
  {
    id: "13",
    name: "Bàn phím cơ P240",
    image:
      "https://kenhtinhoc.vn/wp-content/uploads/2022/02/ban-phim-co-p240-7.jpg",
    description:
      "Ngoài những ưu điểm như các bộ phím cơ khác như thiết kế bố cục 104 phím cao thấp, nắp phím nổi hình chữ U ôm khít ngón tay hoàn hảo…, P240 còn được nâng cấp bảng điều khiển bằng hợp kim nhôm cao cấp, mang lại sự chắc chắn và độ bền cho thiết bị. Về màu sắc, P240 có sự kết hợp màu sắc độc đáo, 2 màu trên 1 bàn phím và cho bạn rất nhiều sự lựa chọn: xanh chủ đạo + trắng, trắng chủ đạo + xanh, hồng chủ đạo + trắng, trắng chủ đạo + hồng, đen chủ đạo + xám, xám chủ đạo + đen và đen hoàn toàn.",
    price: 550000,
    countInStock: 3,
    rating: 4.8,
    numReviews: 4,
    gender: "Nam",
    category: "Đồ điện tử",
  },
  {
    id: "14",
    name: "Ốp Lưng Tpu Silicone In Hình Độc Đáo",
    image: "https://cf.shopee.vn/file/339f60be434bbb962babfc2ef08fda5a",
    description:
      "Chất liệu nhựa Polycarbonat cao cấp khá bền bỉ, tuy là chất nhựa cứng nhưng nó vẫn dễ dàng uống cong, khá khó vỡ và tháo lắp cũng khá dễ dàng không làm tổn hại đến máy.",
    price: 30000,
    countInStock: 10,
    rating: 4.2,
    numReviews: 2,
    gender: "Nam",
    category: "Phụ kiện trang trí",
  },
  {
    id: "15",
    name: "Balo nam cao cấp màu đen trơn premium",
    image: "https://cf.shopee.vn/file/1286ef5b358a6a5571e0a3505af2c526",
    description:
      "Chiếc BALO ĐI HỌC hợp dáng người, hợp màu sắc làm tăng vẻ đẹp của trang phục bạn mặc và khẳng định ấn tượng của bạn trong mắt người đối diện. Tuy nhiên, không phải ai cũng biết chọn một chiếc balo thực sự phù hợp với phom cơ thể của mình. Mang tới cho các cô nàng sự thoải mái khi đi dạo phố hoặc hẹn hò bè bạn vì không phải cầm mang những vật dụng linh tinh, balo đã trở thành người bạn không thể thiếu các nàng. Chúng có sự đa dạng từ kiểu cách tới màu sắc, size…tùy theo nhu cầu của mình mà các nàng lựa chọn một sản phẩm thích hợp. Và nếu bạn cũng đang đi tìm một balo thể thể hiện được cá tính của bản thân một cách rõ nét nhất và đang... lạc lối, thì hãy cùng khám phá và cảm nhận sản phẩm nhé!",
    price: 300000,
    countInStock: 10,
    rating: 4.6,
    numReviews: 2,
    gender: "Nam",
    category: "Đồ dùng học tập",
  },
  // {
  //   id: "15",
  //   name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/10kglqts.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 929,
  //   countInStock: 0,
  //   rating: 3.5,
  //   numReviews: 3,
  // },
  // {
  //   id: "16",
  //   name: "Lace Casual Boots For Boys & Girls  (Tan)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396427/random/7mgja42.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 399,
  //   countInStock: 10,
  //   rating: 5,
  //   numReviews: 9,
  // },
  // {
  //   id: "17",
  //   name: "Lace Walking Shoes For Boys & Girls  (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396422/random/5t573vi.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 49,
  //   countInStock: 7,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "18",
  //   name: "Women Red Heels Sandal",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/6rowzeu.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 29,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   id: "19",
  //   name: "Velcro Ballerinas For Girls (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11dzj0un.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 89,
  //   countInStock: 3,
  //   rating: 4,
  //   numReviews: 4,
  // },
  // {
  //   id: "20",
  //   name: "Velcro Sneakers For Boys & Girls  (Blue)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/1fiq56t.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 599,
  //   countInStock: 10,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "21",
  //   name: "Velcro Ballerinas For Girls (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11dzj0un.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 89,
  //   countInStock: 3,
  //   rating: 4,
  //   numReviews: 4,
  // },
  // {
  //   id: "22",
  //   name: "Velcro Sneakers For Boys & Girls  (Blue)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/1fiq56t.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 599,
  //   countInStock: 10,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "23",
  //   name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/10kglqts.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 929,
  //   countInStock: 0,
  //   rating: 3.5,
  //   numReviews: 3,
  // },
  // {
  //   id: "24",
  //   name: "Lace Casual Boots For Boys & Girls  (Tan)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396427/random/7mgja42.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 399,
  //   countInStock: 10,
  //   rating: 5,
  //   numReviews: 9,
  // },
  // {
  //   id: "25",
  //   name: "Lace Walking Shoes For Boys & Girls  (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396422/random/5t573vi.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 49,
  //   countInStock: 7,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "26",
  //   name: "Women Red Heels Sandal",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/6rowzeu.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 29,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   id: "27",
  //   name: "Velcro Ballerinas For Girls (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11dzj0un.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 89,
  //   countInStock: 3,
  //   rating: 4,
  //   numReviews: 4,
  // },
  // {
  //   id: "28",
  //   name: "Velcro Sneakers For Boys & Girls  (Blue)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/1fiq56t.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 599,
  //   countInStock: 10,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "29",
  //   name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/10kglqts.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 929,
  //   countInStock: 0,
  //   rating: 3.5,
  //   numReviews: 3,
  // },
  // {
  //   id: "30",
  //   name: "Lace Casual Boots For Boys & Girls  (Tan)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396427/random/7mgja42.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 399,
  //   countInStock: 10,
  //   rating: 5,
  //   numReviews: 9,
  // },
  // {
  //   id: "31",
  //   name: "Lace Walking Shoes For Boys & Girls  (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396422/random/5t573vi.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 49,
  //   countInStock: 7,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "32",
  //   name: "Women Red Heels Sandal",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/6rowzeu.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 29,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   id: "33",
  //   name: "Velcro Ballerinas For Girls (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11dzj0un.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 89,
  //   countInStock: 3,
  //   rating: 4,
  //   numReviews: 4,
  // },
  // {
  //   id: "34",
  //   name: "Velcro Sneakers For Boys & Girls  (Blue)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/1fiq56t.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 599,
  //   countInStock: 10,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "35",
  //   name: "Sesame Street Unisex-Child ELMO Puppet Slipper",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/10kglqts.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 929,
  //   countInStock: 0,
  //   rating: 3.5,
  //   numReviews: 3,
  // },
  // {
  //   id: "36",
  //   name: "Lace Casual Boots For Boys & Girls  (Tan)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396427/random/7mgja42.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 399,
  //   countInStock: 10,
  //   rating: 5,
  //   numReviews: 9,
  // },
  // {
  //   id: "37",
  //   name: "Lace Walking Shoes For Boys & Girls  (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396422/random/5t573vi.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 49,
  //   countInStock: 7,
  //   rating: 2,
  //   numReviews: 2,
  // },
  // {
  //   id: "38",
  //   name: "Women Red Heels Sandal",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/6rowzeu.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 29,
  //   countInStock: 0,
  //   rating: 0,
  //   numReviews: 0,
  // },
  // {
  //   id: "39",
  //   name: "Velcro Ballerinas For Girls (Pink)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396418/random/11dzj0un.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 89,
  //   countInStock: 3,
  //   rating: 4,
  //   numReviews: 4,
  // },
  // {
  //   id: "40",
  //   name: "Velcro Sneakers For Boys & Girls  (Blue)",
  //   image:
  //     "https://res.cloudinary.com/zpune/image/upload/v1644396419/random/1fiq56t.png",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  //   price: 599,
  //   countInStock: 10,
  //   rating: 2,
  //   numReviews: 2,
  // },
];
export default products;

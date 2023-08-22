// STRING-05: Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu.
// Lưu ý: không sử dụng regular expression.
// Ví dụ:
// countURLs('my website is: http://ezfrontend.com you can visit it') --> 1
// countURLs('my website is: https://ez.com you can visit it') --> 0 vì phần tên domain chỉ có 2 ký tự ez
// nên không hợp lệ

// STRING-07: Thay thế params thành value tương ứng
// Viết hàm fillPath(path, params) để thay thế các chuỗi params trong path bằng các giá trị tương ứng trong
// object params.
// Ví dụ:
// fillPath('/products/:productId', { productId: 123 }); // '/products/123'
// fillPath('/categories/:categoryId/products/:productId', {
//  categoryId: 1,
//  productId: 2
// });
// should return '/categories/1/products/2'
// fillPath('/categories/:categoryId/products/:productId', { productId: 2 });
// should return '/categories/:categoryId/products/2'

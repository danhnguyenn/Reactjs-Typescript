// Explicit types 
// => Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu 2 chấm đằng sau tên biến
let count: number = 123;
let studentName: string = "Danh Nguyen";
let isActive: boolean = true;
const numberList: number[] = [1,2,3];

// Intered types
// => Typescript thông minh detect được kiểu dữ liệu tương ứng ngay cả khi mình khong khai báo cụ thể kiểu dữ liệu
let countOne = 123;
let studentNameOne = "Danh Nguyen";


// Eraised types 
// => Sau khi compile từ typescript sang javascript, tất cả type annotation sẽ bị xóa
// Nguồn tham khảo: https://www.typescriptlang.org/play?target=1#code/LAKAxg9gdgzgLgAgOYCcCma4EspIFwLwo5IIC8CABgBZoA2dECAJAN4CMCA1AuwL6VQkWBDpoAdIyQAKVBmy4AlAG5QoAPTqEAWl27Q06YvIA+BK1AIrCHHDQoAZgEMwaBAGU4AVwAmaKIgWINYhNj4EUF4AtgBG9qrBoVZQTlFoBEQkCUlWTkjpCJGx8ZbWfGqJVsLwhN5+AQSevv6IFEE5YQTsADSlSSlpBADkAIJ0WK5DvZWheQXsABzTIeUgfQjVgWHdhaloO3MIfOS1zQHZ1tWiElLSWD47A-sIcyqgfIpGCaBAA


// Downleveling
// Tuỳ vào target mà code sau khi được compile ra javascript sẽ khác nhau để đảm bảo target
// environment có thể hiểu và thực thi được code mình viết bên typescript.
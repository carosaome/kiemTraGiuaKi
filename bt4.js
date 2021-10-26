let danhSachNhanVien = 
[
    ['NV1', 18, 5000000, 'NhanVien'],
    ['NV2', 19, 6000000, 'QuanLi'],
    ['NV3', 20, 7000000, 'GiamDoc']

]
console.log(danhSachNhanVien);


for (i = 0; i < 10; i ++){
    let addNV =     [];

    let tenNV = prompt('Ten NV');
    addNV.push(tenNV);
    let tuoiNV = prompt('Tuoi ');
    addNV.push(tuoiNV);

    let luongNV = prompt('Luong');
    addNV.push(luongNV);

    let chucVu = prompt('Chuc Vu');
    addNV.push(chucVu);

    danhSachNhanVien.push(addNV);



}


console.log(danhSachNhanVien);

danhSachNhanVien[1][3] = 'QuetRac';

console.log(danhSachNhanVien);

delete danhSachNhanVien[1];

console.log(danhSachNhanVien);

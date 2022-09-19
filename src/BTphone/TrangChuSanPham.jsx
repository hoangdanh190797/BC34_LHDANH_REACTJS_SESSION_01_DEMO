import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import dataPhone from "./dataPhone.json";
import SanPham from "./SanPham";

export default class TrangChuSanPham extends Component {
  state = {
    statePhone: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./imgPhone/vsphone.jpg",
    },
    gioHang: [],
  };

  handleChitiet = (phone) => {
    this.setState({
      statePhone: phone,
    });
  };
  thongTingioHang = () => {
    let { gioHang } = this.state;
    let soLuongsanPham = gioHang.length;

    let tongTien = 0;
    gioHang.map((sanPham) => {
      tongTien += sanPham.soLuong * sanPham.giaBan;
    });
    return `(${soLuongsanPham} sp - ${tongTien} VNĐ)`;
  };
  themGiohang = (sanPham) => {
    let { gioHang } = this.state;
    let gioHangNew = [...gioHang];
    let sanPhamGH = gioHangNew.find((item) => item.maSanPham == sanPham.maSP);
    if (sanPhamGH) {
    } else {
      let sanPhamthem = { ...sanPham, soLuong: 1 };
      gioHangNew.push(sanPhamthem);
    }
    this.setState({
      gioHang: gioHangNew,
    });
  };
  render() {
    let { statePhone, gioHang } = this.state;
    return (
      <div className="container">
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary p-5"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Giỏ hàng {this.thongTingioHang()}
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Giỏ hàng
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((sanPham) => {
                        return (
                          <tr>
                            <td>{sanPham.maSP}</td>
                            <td>
                              <img
                                className="img-fluid"
                                style={{ height: "50px" }}
                                src={sanPham.hinhAnh}
                              />
                            </td>
                            <td>{sanPham.tenSP}</td>
                            <td>{sanPham.soLuong}</td>
                            <td>{sanPham.giaBan.toLocaleString()}</td>
                            <td>
                              {(
                                sanPham.giaBan * sanPham.soLuong
                              ).toLocaleString()}
                            </td>
                            <td>
                              <button>Xoá</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DanhSachSanPham
          dataPhoneProps={dataPhone}
          handleChitietProps={this.handleChitiet}
          themGiohangProps={this.themGiohang}
        />
        <SanPham statePhone={statePhone} />
      </div>
    );
  }
}

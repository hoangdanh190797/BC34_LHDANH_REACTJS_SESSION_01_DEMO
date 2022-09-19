import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  render() {
    let { dataPhoneProps, handleChitietProps, themGiohangProps } = this.props;
    return (
      <div className="row">
        {dataPhoneProps.map((phone, index) => {
          return (
            <div key={index} className="col-4">
              <img
                style={{ height: "400px" }}
                className="img-fluid"
                src={phone.hinhAnh}
              />
              <h3>{phone.tenSP}</h3>
              <button
                onClick={() => {
                  handleChitietProps(phone);
                }}
                className="btn btn-success"
              >
                Xem chi tiết
              </button>
              <button
                onClick={() => themGiohangProps(phone)}
                className="btn btn-success ml-2"
              >
                Thêm sản phẩm
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

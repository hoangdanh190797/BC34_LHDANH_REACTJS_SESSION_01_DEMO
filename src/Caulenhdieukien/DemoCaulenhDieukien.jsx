import React, { Component } from "react";

export default class DemoCaulenhDieukien extends Component {
  // Thuộc tính

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      userName: "",
    };
  }

  //   isLogin = false; //Ban đầu chưa có Login sẽ là false
  //   userName = ``;

  // Xây dựng phương thức Login
  login = () => {
    //Viết như 2 dòng phía dưới, nó không chạy.
    // this.setState.isLogin = true;
    // this.setState.userName = "Mr. A";
    //
    //this.setState là một phương thức kế thừa từ component
    this.setState({
      isLogin: true,
      userName: "Mr.T",
    }, () => {
        console.log(this.state);
    });
    console.log(this.state);
  };
  //Phía trên, 2 cái log, cho ta thấy rõ, hàm setState là 1 phương
  //thức bất đồng bộ

  logout = () => {
    this.setState({
      isLogin: false,
      userName: "",
    });
  };
  render() {
    return (
      <div>
        {/* {this.renderContent()} */}
        {this.state.isLogin ? (
          <div>
            Welcome {this.state.userName} to My Class{" "}
            <button onClick={this.logout}>Logout</button>
          </div>
        ) : (
          <div>See you again <button onClick={this.login}>Login</button></div>
        )}
      </div>
    );
  }
  //Phương thức
  //   renderContent = () => {
  //     if (this.isLogin) {
  //       //isLogin === true => Đã đăng nhập rồi
  //       this.userName = 'Nguyen Van A'
  //       return (
  //         <div>
  //           Welcome {this.userName} to My Class <button>Logout</button>
  //         </div>
  //       );
  //     }
  //     return (
  //       <div>
  //         <button>Login</button>
  //       </div>
  //     );
  //   };
}

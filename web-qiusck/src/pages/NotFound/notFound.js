import "./style.css";
import iranNavy from "../../assets/images/iranNavy.jpeg";
const NotFound = () => {
  return (
    <>
      <div>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <div
          class="page-404"
          style={{
            background: `url(${iranNavy})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div class="outer">
            <div class="middle">
              <div class="inner">
                <div class="inner-circle">
                  <i class="fa fa-home"></i>
                  <span>404</span>
                </div>
                <span class="inner-status">اشتباهی رخ داده</span>
                <span class="inner-detail">
                  قادر به پیدا کردن صفحه مورد نظر شما نیستیم
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;

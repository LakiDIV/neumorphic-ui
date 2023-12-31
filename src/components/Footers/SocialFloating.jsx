import "./SocialFloating.css";

export default function SocialFloating() {
  return (
    <footer id="main-footer">
      <div className="frame embosed-flat">
        <a href="#" className="icon-box embosed-flat">
          <i className="fab fa-facebook-f" style={{ color: "#3b5998" }}></i>
        </a>
        <a href="#" className="icon-box embosed-flat">
          <i className="fab fa-twitter" style={{ color: "#00acee" }}></i>
        </a>
        <a href="#" className="icon-box embosed-flat">
          <i className="fab fa-linkedin-in" style={{ color: "#0e76a8" }}></i>
        </a>
        <a href="#" className="icon-box embosed-flat">
          <i className="far fa-envelope"></i>
        </a>
      </div>
    </footer>
  );
}

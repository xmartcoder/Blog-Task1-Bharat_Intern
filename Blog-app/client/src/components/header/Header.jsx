import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">We Are waiting For Your</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://img.freepik.com/free-photo/pen-notebook-near-keyboard_23-2147929704.jpg?w=2000"
        alt=""
      />
    </div>
  );
}

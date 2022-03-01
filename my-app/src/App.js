import logo from "./GitHub-Mark-Light-32px.png";
import textLogo from "./GitHub_Logo_White.png"
import "./App.css";

function App() {
  return (
    <div>
      <div class="navBar">
        <img className="textLogo"src={textLogo} alt="Logo" height="32px"/>
        <img className="logo"src={logo} alt="Logo"/>
      </div>
      <form className="UserSearch">
        <input className="searchInput" placeholder="GitHub User">
        </input>
        <button className="searchBtn">Search</button>
      </form>
      <card className="userInfo">
        <img className="userImg" />
        <span className="fullName">FullName</span>
        <span className="userName">UserName</span>
        <span className="email">&#9993; E-mail</span>
      </card>
    </div>
  );
}

export default App;

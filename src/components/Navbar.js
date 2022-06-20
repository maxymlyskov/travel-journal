export default function Navbar() {
  return (
    <div className="header">
      <img
        src={require("../icons/Path.png")}
        alt="path"
        className="path-icon"
      />
      <h1 className="header-title">My travel journal.</h1>
    </div>
  );
}

import React from "react";
import "./BottomBar.css";

function BottomBar() {
  return (
    <div>
      <div className="footerBar">
        <marquee behavior="scroll" direction="left">
          <div className="script">
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
            <div className="scriptInfo">
              Here is some scrolling text... right to left!
            </div>
          </div>
        </marquee>
      </div>
    </div>
  );
}

export default BottomBar;

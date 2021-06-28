import React from "react";
import ReactDOM from "react-dom";

const img1 =
  "https://www.gannett-cdn.com/presto/2020/05/14/USAT/cf6c4584-1b5d-4453-a949-7268d8726122-AP_Switzerland_Montreux_Jazz_Festival.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp";
const img2 =
  "https://media.stubhubstatic.com/stubhub-catalog/d_defaultLogo.jpg/t_f-fs-0fv,q_auto:low,f_auto,c_fill,$w_280_mul_3,$h_180_mul_3/performer/1507017/78fa126de4adb0bf3e59da48496cd104";
const img3 =
  "https://imengine.prod.srp.navigacloud.com/?uuid=5AFACCFC-239C-4D84-8AE2-B57069A71A8F&type=primary&q=72&width=1024";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Jethro Tull
    </h1>
    <div className="img-set" contentEditable="false">
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
    </div>
  </div>,
  document.getElementById("root")
);

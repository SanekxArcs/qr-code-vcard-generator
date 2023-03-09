import React, { useState } from "react";
import QRCode from "qrcode.react";

function QrCodeApp() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDownloadPng = () => {
    if (phone !== "" || name !== "" || email !== "") {
      const canvas = document.getElementById("qrcode");
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "qrcode.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      alert("Please enter your Name, Phone or Email.");
    }
  };

  const handleReset = () => {
    setEmail("");
    setName("");
    setPhone("");
  };

  let inputStype =
    "px-3 shadow py-2 rounded-md outline-none w-80 focus:ring-2 focus:ring-slate-400 hover:bg-slate-200 bg-slate-50 transition-all shadow text-slate-900 font-medium duration-300 hover:-translate-y-1";
  let btn =
    "px-4 py-2 shadow font-medium text-xl uppercase text-slate-100 bg-slate-700 rounded-md w-80 hover:bg-slate-200 hover:text-slate-700 hover:-translate-y-1 transition-all duration-300";
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col items-center gap-3">
          <h1 className="px-2 mb-5 text-4xl font-bold text-center text-slate-800 dark:text-slate-100 ">
            QR-Code vCard Generator
          </h1>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStype}
          />
          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputStype}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStype}
          />
          {phone !== "" || name !== "" || email !== "" ? (
            <>
              <div
                className="overflow-hidden transition-all duration-300 rounded-md shadow w-80 h-80 hover:-translate-y-1"
                onClick={handleDownloadPng}
              >
                <QRCode
                  id="qrcode"
                  value={`BEGIN:VCARD\nVERSION:3.0\nN:${name};;;;\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`}
                  size={320}
                  fgColor="#000000"
                  bgColor="#ffffff"
                  level="H"
                  includeMargin={true}
                />
              </div>
              <button className={btn} onClick={handleDownloadPng}>
                Download PNG
              </button>
              <button className={btn} onClick={handleReset}>
                Clear
              </button>
            </>
          ) : (
            ""
          )}

          <h2 className="text-slate-700">
            by{" "}
            <a
              className="transition-all duration-300 text-slate-700 hover:font-bold dark:hover:text-slate-200"
              href="https://github.com/SanekxArcs"
            >
              Sanekx Arcs
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default QrCodeApp;

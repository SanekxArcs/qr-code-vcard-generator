import React, { useState } from "react";
import QRCode from "qrcode.react";

function QrCodeApp() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleDownloadPng = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qrcode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleReset = () => {
    setEmail("");
    setName("");
    setPhone("");
  };

  let inputStype =
    "px-3 py-2 rounded-md outline-none w-80 focus:ring-2 focus:ring-slate-400 hover:bg-slate-200 bg-slate-50 transition-all shadow text-slate-900 font-medium duration-300 hover:-translate-y-1";
  let btn =
    "px-4 py-2 font-medium text-xl uppercase text-slate-100 bg-slate-700 rounded-md w-80 hover:bg-slate-200 hover:text-slate-700 hover:-translate-y-1 transition-all duration-300";
  return (
    <div className="container mx-auto">
      <div className="">
        <div className="flex flex-col items-center gap-3 w-8">
          <h1 className="font-bold text-3xl md:text-5xl text-center mb-5 text-slate-100 px-2 ">
            QR-Code vCard 3.0 Generator
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
          <div className="overflow-hidden rounded-md w-80 h-80">
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
        </div>
      </div>
    </div>
  );
}

export default QrCodeApp;

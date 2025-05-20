// By Seyi Adedokun

import { useEffect, useState } from "react";

const DeviceTypeCheck = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) setDevice("android");
    else if (/iPhone/i.test(userAgent)) setDevice("iphone");
    else setDevice("desktop");
  }, []);

  return (
    <div>
      <p>You are using: <strong>{device}</strong></p>
      {device === "android" && <p>This is Android specific UI</p>}
      {device === "iphone" && <p>This is iPhone specific UI</p>}
      {device === "desktop" && <p>This is Desktop UI</p>}
    </div>
  );
};

export default DeviceTypeCheck;

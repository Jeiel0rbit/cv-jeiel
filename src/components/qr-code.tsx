import React from "react";
import { Card } from "@heroui/react";

export const QRCode = () => {
  const url = "https://jeiel.pages.dev";
  
  React.useEffect(() => {
    if (window.location.hash === "#id") {
      alert("Curriculo autêntico de Jeiel Lima Miranda ✔");
    }
  }, []);

  return (
    <div className="flex justify-center">
      <Card className="p-4">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=${encodeURIComponent(
            url
          )}`}
          alt="QR Code"
          width={128}
          height={128}
        />
      </Card>
    </div>
  );
};
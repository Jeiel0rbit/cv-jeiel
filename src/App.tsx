import { Card, CardBody, Divider } from "@heroui/react";
import { Header } from "./components/header";
import { Contact } from "./components/contact";
import { Profile } from "./components/profile";
import { Education } from "./components/education";
import { Skills } from "./components/skills";
import { QRCode } from "./components/qr-code";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Header />
        
        <Card>
          <CardBody className="gap-8">
            <Contact />
            <Divider />
            <Profile />
            <Divider />
            <Education />
            <Divider />
            <Skills />
          </CardBody>
        </Card>

        <QRCode />

        <footer className="text-center py-4 text-default-500">
          <p>&copy; Jeiel Lima Miranda - 2024-2025</p>
        </footer>
      </div>
    </div>
  );
}
import Navbar from "../component/navbar";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold text-amber-700 mb-6">Contact Me</h1>
        <div className="bg-white shadow-xl rounded-lg p-8 w-96 text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            I’d love to hear from you! Feel free to reach out via any of the
            options below.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-amber-900 w-6 h-6" />
              <p className="text-gray-600 text-lg">+234-808-8901-005</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-amber-900 w-6 h-6" />
              <p className="text-gray-600 text-lg">
                michealmatthew147@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-amber-900 w-6 h-6" />
              <p className="text-gray-600 text-lg">
                123 Main Street, Lagos, Nigeria
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

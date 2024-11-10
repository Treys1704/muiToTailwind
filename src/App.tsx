// App.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeConverter from "./components/CodeConverter";
import ComponentsList from "./components/ComponentsList";
import Preview from "./components/Preview";
import "./App.css";
import { Toaster } from "sonner";

function App() {
  const [outputCode, setOutputCode] = useState();
  const [activeTab, setActiveTab] = useState("converter");
  const [inputCode, setInputCode] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Toaster position="top-right" expand={false}/>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <header className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
          >
            MUI to Tailwind Converter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            Convert your Material UI components to Tailwind CSS instantly
          </motion.p>
        </header>

        <nav className="mb-8">
          <ul className="flex justify-center space-x-4">
            {["converter", "components", "preview"].map((tab) => (
              <motion.li
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full ${
                    activeTab === tab
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  } transition-colors`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "converter" && (
              <CodeConverter
                inputCode={inputCode}
                outputCode={outputCode}
                onConvert={setOutputCode}
                onInputChange={(value: any) => setInputCode(value)}
              />
            )}
            {activeTab === "components" && <ComponentsList />}
            {activeTab === "preview" && <Preview code={outputCode} />}
          </motion.div>
        </AnimatePresence>

        <hr className="my-8 border-slate-700" />

        <footer className="flex items-center justify-between text-sm text-slate-400">
          <p>
            Built by Tresor MANOCK | © {new Date().getFullYear()} MuiToTailwind. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://vercel.com" className="hover:text-slate-100 transition-colors">
              <span className="sr-only">Vercel</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
            </a>
            <a href="#" className="hover:text-slate-100 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/tr%C3%A9sormanock/" className="hover:text-slate-100 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:jacquesmanock17@gmail.com" className="hover:text-slate-100 transition-colors">
              <span className="sr-only">Email</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;

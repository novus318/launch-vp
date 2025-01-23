"use client";

import { motion } from "framer-motion";
import { PulsatingButton } from "@/components/ui/pulsating-button";

export default function Home() {


  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8  text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl font-bold mb-8 text-gray-900"
        >
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-center mb-8 text-gray-700"
        >
          <p className="mb-4 text-lg">പ്രിയപ്പെട്ട നാട്ടുകാരെ,</p>
          <p className="mb-4 text-lg">
            ഞങ്ങളുടെ പുതിയ സോഫ്റ്റ്‌വെയർ സിസ്റ്റം 24 ജനുവരി 2025 മുതൽ ആരംഭിക്കുന്നതായി
            അറിയിക്കുന്നു! ഈ പ്ലാറ്റ്ഫോം നിങ്ങളുടെ വിവരങ്ങളും പേയ്മെന്റുകളും കൂടുതൽ
            സുഗമമാക്കും. മറ്റ് മഹൽസംബന്ധമായ വിവരങ്ങളും ഇതിലൂടെ അറിയിക്കാൻ സാധിക്കും.
          </p>
          <p className="text-lg">
            നമ്മുടെ ഈ ദീനീ സ്ഥാപനത്തിന് വേണ്ടി നിങ്ങൾ നൽകിവരുന്ന സഹായങ്ങൾ നന്ദിയോടെ
            സ്മരിക്കുന്നു അല്ലാഹു ആ സഹായങ്ങൾ എല്ലാം സ്വീകരിക്കുമാറാകട്ടെ. ആമീൻ.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <PulsatingButton
            onClick={() => {
              window.location.href = "/done";
            }}
            className="hover:bg-opacity-90 transition-all duration-300 mx-auto"
          >
            Send Request
          </PulsatingButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
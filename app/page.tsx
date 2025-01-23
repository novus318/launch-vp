"use client";

import { motion } from "framer-motion";
import { PulsatingButton } from "@/components/ui/pulsating-button";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 sm:p-6 md:p-8 lg:p-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-gray-900"
        >
          ٱلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ ٱللَّٰهِ وَبَرَكَاتُهُ
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl text-center mb-6 sm:mb-8 text-gray-700"
        >
          <p className="mb-4 text-base sm:text-lg md:text-xl">
            പ്രിയപ്പെട്ട നാട്ടുകാരെ,
          </p>
          <p className="mb-4 text-base sm:text-lg md:text-xl">
            ഞങ്ങളുടെ പുതിയ സോഫ്റ്റ്‌വെയർ സിസ്റ്റം 24 ജനുവരി 2025 മുതൽ ആരംഭിക്കുന്നതായി
            അറിയിക്കുന്നു! ഈ പ്ലാറ്റ്ഫോം നിങ്ങളുടെ വിവരങ്ങളും പേയ്മെന്റുകളും കൂടുതൽ
            സുഗമമാക്കും. മറ്റ് മഹൽസംബന്ധമായ വിവരങ്ങളും ഇതിലൂടെ അറിയിക്കാൻ സാധിക്കും.
          </p>
          <p className="text-base sm:text-lg md:text-xl">
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
            className="hover:bg-opacity-90 transition-all duration-300 mx-auto text-sm sm:text-base md:text-lg"
          >
            Send Request
          </PulsatingButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
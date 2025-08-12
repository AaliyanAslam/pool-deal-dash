import React, { useState } from "react";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question_en: "What is your refund policy?",
      question_ur: "ریفنڈ پالیسی کیا ہے؟",
      answer_en:
        "If tools or coins don’t work after activation, you can contact us within 1 hour for a full refund. After 1 hour, refunds are not available.",
      answer_ur:
        "اگر ٹول یا کوائنز ایکٹیویشن کے بعد کام نہیں کرتے تو آپ ایک گھنٹے کے اندر ہم سے رابطہ کر کے مکمل ریفنڈ حاصل کر سکتے ہیں۔ ایک گھنٹے کے بعد ریفنڈ دستیاب نہیں ہوتا۔"
    },
    {
      question_en: "Do you provide same-day delivery?",
      question_ur: "کیا آپ سیم ڈے ڈیلیوری دیتے ہیں؟",
      answer_en:
        "Yes, tools and coins are usually delivered instantly or within a few minutes. Delays happen only in rare cases.",
      answer_ur:
        "جی ہاں، ٹولز اور کوائنز عام طور پر فوراً یا چند منٹوں میں ڈیلیور کر دیے جاتے ہیں۔ تاخیر صرف نایاب صورتوں میں ہوتی ہے۔"
    },
    {
      question_en: "How can I track my order?",
      question_ur: "میں اپنا آرڈر کیسے ٹریک کروں؟",
      answer_en:
        "To track your order, just send us a message on WhatsApp. We will reply instantly with your latest order status.",
      answer_ur:
        "آرڈر ٹریک کرنے کے لیے ہمیں واٹس ایپ پر میسج کریں۔ ہم فوراً آپ کو آرڈر کی تازہ ترین صورتحال بتائیں گے۔"
    },
    {
      question_en: "Can I change my order after placing it?",
      question_ur: "کیا میں آرڈر دینے کے بعد اسے بدل سکتا ہوں؟",
      answer_en:
        "Yes, you can make changes within 30 minutes of placing your order. After that, the process starts and changes are not possible.",
      answer_ur:
        "جی ہاں، آپ آرڈر دینے کے 30 منٹ کے اندر تبدیلی کر سکتے ہیں۔ اس کے بعد پراسیس شروع ہو جاتا ہے اور تبدیلی ممکن نہیں ہوتی۔"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header with Back Button */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-gray-600  transition text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black gradient-text">
          Frequently Asked Questions / اکثر پوچھے گئے سوالات
        </h1>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-card border border-primary/10 rounded-xl shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-foreground hover:bg-primary/5 transition text-sm sm:text-base"
            >
              <span>
                {faq.question_en}
                <br />
                <span className="text-muted-foreground text-xs sm:text-sm">
                  {faq.question_ur}
                </span>
              </span>
              {openIndex === index ? (
                <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-4 mt-2 sm:p-5 pt-0 text-muted-foreground bg-muted/20 border-t border-primary/10 text-sm sm:text-base leading-relaxed">
                {faq.answer_en}
                <br />
                <span className="block mt-1 text-xs sm:text-sm text-gray-500">
                  {faq.answer_ur}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default FAQ;

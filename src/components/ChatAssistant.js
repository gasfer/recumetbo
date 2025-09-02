import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, Trash2 } from 'lucide-react';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
const initialBotMessage = '🤖 ¡Hola! Soy Chaty, tu asistente virtual de RECUMET ♻️. ¿En qué puedo ayudarte hoy?';
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: initialBotMessage,
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    '¿Qué metales reciclan?',
    'Precios actuales',
    'Servicio de recolección',
    'Certificaciones ambientales'
  ];

  const handleToggleChat = () => {
    if (isOpen) handleClearMessages();
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      isBot: false,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(reply);
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (reply) => {
    let botText = '';
    switch (reply) {
      case '¿Qué metales reciclan?':
        botText = '♻️ **RECUMET**, especialistas en reciclaje, recoge metales ferrosos (hierro, acero) y no ferrosos como aluminio perfil, cobre, bronce, latón, además de ollas y residuos electrónicos. Todo el proceso es seguro y certificado.';
        break;
      case 'Precios actuales':
        botText = '♻️ **RECUMET** paga precios justos al contado. Puedes pagar en efectivo o QR. Todas las compras se pesan en nuestra balanza certificada para garantizar exactitud. Más información al <b>69422892 Comercial</b>.';
        break;
      case 'Servicio de recolección':
        botText = '♻️ **RECUMET** ofrece recolección de materiales en grandes volúmenes. Para coordinar tu recojo de chatarra o residuos electrónicos, llámanos al <b>69422892 Comercial</b>. Estamos para ayudarte con agilidad y seguridad.';
        break;
      case 'Certificaciones ambientales':
        botText = '♻️ **RECUMET** cumple con certificaciones ambientales y entrega documentación de reciclaje para cada operación. Ubicados en <b>Sacaba, Cochabamba</b>, garantizamos procesos responsables y confiables.';
        break;
      default:
        botText = '♻️ **RECUMET**, especialistas en reciclaje: Gracias por tu consulta. Un especialista se pondrá en contacto contigo pronto. Para más información, llámanos al <b>69422892 Comercial</b>.';
        break;
    }

    return {
      id: messages.length + 2,
      text: botText,
      isBot: true,
      timestamp: new Date()
    };
  };

  const handleClearMessages = () => {
    setMessages([
      {
        id: 1,
        text: initialBotMessage,
        isBot: true,
        timestamp: new Date()
      }
    ]);
  };

  return (
    <>
      {/* Botón Chat */}
      <motion.button
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#00B04E] to-[#86B500] rounded-full shadow-lg flex items-center justify-center text-white z-50"
        onClick={handleToggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#00B04E] to-[#86B500] p-4 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Asistente Virtual RECUMET</h3>
                  <p className="text-xs opacity-90">En línea</p>
                </div>
              </div>
              <button onClick={handleClearMessages} className="p-2 rounded-full hover:bg-white/30">
                <Trash2 className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-xs px-4 py-2 rounded-2xl ${message.isBot ? 'bg-gray-100 text-gray-800' : 'bg-[#00B04E] text-white'}`}>
                    <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text }}></p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {reply}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B04E] focus:border-transparent text-sm"
                />
                <motion.button type="submit" className="w-10 h-10 bg-[#00B04E] text-white rounded-full flex items-center justify-center hover:bg-[#86B500] transition-colors duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatAssistant;

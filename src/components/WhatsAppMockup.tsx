import { Check, CheckCheck } from "lucide-react";

interface Message {
  text: string;
  isPatient: boolean;
  time: string;
}

interface WhatsAppMockupProps {
  messages: Message[];
  contactName?: string;
}

const WhatsAppMockup = ({ messages, contactName = "Paciente" }: WhatsAppMockupProps) => {
  return (
    <div className="bg-[hsl(210,20%,20%)] rounded-2xl overflow-hidden shadow-xl w-full max-w-[280px] flex-shrink-0">
      {/* Header */}
      <div className="bg-[hsl(152,60%,35%)] px-3 py-2 flex items-center gap-2 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[hsl(210,20%,70%)] flex items-center justify-center flex-shrink-0">
          <span className="text-[hsl(210,20%,30%)] text-xs font-bold">
            {contactName.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-white text-xs sm:text-sm font-medium truncate">{contactName}</span>
      </div>
      
      {/* Chat background */}
      <div 
        className="p-2 sm:p-3 space-y-2 min-h-[100px] sm:min-h-[120px]"
        style={{
          backgroundColor: "hsl(30, 20%, 90%)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isPatient ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`max-w-[90%] rounded-lg px-2.5 py-1.5 sm:px-3 sm:py-2 relative ${
                message.isPatient
                  ? "bg-white text-[hsl(210,20%,20%)]"
                  : "bg-[hsl(152,50%,85%)] text-[hsl(210,20%,20%)]"
              }`}
            >
              <p className="text-xs sm:text-sm leading-tight break-words">{message.text}</p>
              <div className="flex items-center justify-end gap-1 mt-0.5 sm:mt-1">
                <span className="text-[9px] sm:text-[10px] text-[hsl(210,20%,50%)]">{message.time}</span>
                {!message.isPatient && (
                  <CheckCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[hsl(199,89%,48%)]" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppMockup;

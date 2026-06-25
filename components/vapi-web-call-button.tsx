"use client";

import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";
import { PhoneCall, Mic, Loader2 } from "lucide-react";

const VAPI_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "dd33bebc-4d35-43e2-8d2f-31cc3a750fca";

export function VapiWebCallButton({ 
  assistantOverrides,
  className,
  style
}: { 
  assistantOverrides?: Record<string, unknown>;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [callStatus, setCallStatus] = useState<"idle" | "loading" | "active">("idle");

  useEffect(() => {
    const vapiInstance = new Vapi(VAPI_PUBLIC_KEY);
    
    vapiInstance.on("call-start", () => setCallStatus("active"));
    vapiInstance.on("call-end", () => setCallStatus("idle"));
    vapiInstance.on("error", (e: unknown) => {
      console.error(e);
      setCallStatus("idle");
    });

    setVapi(vapiInstance);
    
    return () => {
      vapiInstance.removeAllListeners();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === "active") {
      vapi?.stop();
    } else {
      setCallStatus("loading");
      
      const { 
        voiceGreeting, 
        voiceInstructions, 
        services,
        systemPrompt: customSystemPrompt,
        name,
        ...restOverrides 
      } = assistantOverrides || {};

      const finalSystemPrompt = customSystemPrompt || `
${voiceInstructions || "You are a helpful assistant."}

${services ? `Services available:\n${JSON.stringify(services, null, 2)}` : ""}
      `.trim();

      const assistant = {
        name: name as string || "Demo Assistant",
        firstMessage: voiceGreeting as string | undefined,
        firstMessageMode: "assistant-speaks-first",
        model: {
          provider: "openai",
          model: "gpt-4o",
          messages: [{ role: "system", content: finalSystemPrompt }],
        },
        voice: {
          provider: "openai",
          voiceId: "alloy",
        },
        ...restOverrides
      };

      try {
        // @ts-expect-error - Vapi SDK types conflict with loosely typed overrides
        await vapi?.start(assistant);
      } catch (err) {
        console.error("Failed to start call:", err);
        setCallStatus("idle");
      }
    }
  };

  return (
    <button
      onClick={toggleCall}
      disabled={!vapi || callStatus === "loading"}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        borderRadius: '9999px',
        padding: '1rem 2rem',
        fontSize: '0.9rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        fontFamily: 'var(--font-display)',
        border: 'none',
        cursor: (!vapi || callStatus === "loading") ? 'wait' : 'pointer',
        boxShadow: '0 10px 25px rgba(107,68,35,0.3)',
        backgroundColor: callStatus === "active" ? '#ef4444' : '#6B4423',
        color: '#F5F0E8',
        transition: 'all 0.2s ease',
        ...style
      }}
      className={className}
    >
      {callStatus === "loading" && <Loader2 style={{ width: '1.5rem', height: '1.5rem', animation: 'spin 1s linear infinite' }} />}
      {callStatus === "idle" && <PhoneCall style={{ width: '1.5rem', height: '1.5rem' }} />}
      {callStatus === "active" && <Mic style={{ width: '1.5rem', height: '1.5rem', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />}
      
      {callStatus === "loading" ? "Connecting..." : callStatus === "active" ? "End Call" : "Call the Concierge"}
    </button>
  );
}

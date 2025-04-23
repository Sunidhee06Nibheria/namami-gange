
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { LogIn } from "lucide-react";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  onSignInSuccess?: (user: { email: string }) => void;
  isSignedIn: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AuthDialog: React.FC<AuthDialogProps> = ({
  open,
  onOpenChange,
  onSignInSuccess,
  isSignedIn,
}) => {
  const { toast } = useToast();
  const [step, setStep] = useState<"email" | "otp">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState<string | null>(null);

  React.useEffect(() => {
    if (!open) {
      setStep("email");
      setEmail("");
      setOtp("");
      setLoading(false);
      setEmailSentTo(null);
    }
  }, [open]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast({ title: "Please enter a valid email.", variant: "destructive" });
      return;
    }
    setLoading(true);
    await sleep(1000 + Math.random() * 600); // simulate server request
    setEmailSentTo(email);
    setStep("otp");
    setLoading(false);
    toast({ title: "OTP sent to your email!", description: "Check your inbox." });
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast({ title: "Please enter the 6-digit OTP.", variant: "destructive" });
      return;
    }
    setLoading(true);
    await sleep(900 + Math.random() * 500);
    if (otp !== "123456") { // For demo, only this code works
      setLoading(false);
      toast({ title: "Invalid OTP", description: "Try again.", variant: "destructive" });
      return;
    }
    setLoading(false);
    toast({ title: "Signed in!", description: "Welcome to Namami Gange 🎉" });
    if (onSignInSuccess) {
      onSignInSuccess({ email: emailSentTo! });
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LogIn size={20} className="text-blue-500" />
            {isSignedIn ? "Already Signed In" :
              step === "email" ? "Sign In" : "Verify OTP"
            }
          </DialogTitle>
          <DialogDescription>
            {isSignedIn
              ? "You are already signed in."
              : step === "email"
              ? "Enter your email to receive a One-Time Password (OTP)."
              : `Enter the 6-digit OTP sent to ${emailSentTo}.`}
          </DialogDescription>
        </DialogHeader>
        {isSignedIn ? (
          <div className="py-6 text-center text-blue-600 font-medium">
            You are logged in as <span className="font-bold">{emailSentTo ?? "user"}</span>.
          </div>
        ) : step === "email" ? (
          <form className="space-y-4" onSubmit={handleSendOtp} autoComplete="off">
            <Input
              autoFocus
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
            <DialogFooter>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </DialogFooter>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleVerifyOtp}>
            <div>
              <label className="block text-sm mb-2" htmlFor="otp">6-digit OTP</label>
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                containerClassName="mx-auto"
              >
                <InputOTPGroup>
                  {[...Array(6)].map((_, idx) =>
                    <InputOTPSlot index={idx} key={idx} />
                  )}
                </InputOTPGroup>
              </InputOTP>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Verifying..." : "Sign In"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};


import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Mic, Upload, Square, CheckCircle, CreditCard, LogOut } from "lucide-react";

const Dashboard = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [email, setEmail] = useState("user@company.com");
  const [balance, setBalance] = useState(5.50);
  const [topUpAmount, setTopUpAmount] = useState(10);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const startRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
    setIsSuccess(false); // Reset success state
    // Simulate recording timer
    const timer = setInterval(() => {
      setRecordingTime(prev => prev + 1);
    }, 1000);
    
    // Store timer ID for cleanup
    (window as any).recordingTimer = timer;
  };

  const stopRecording = () => {
    setIsRecording(false);
    if ((window as any).recordingTimer) {
      clearInterval((window as any).recordingTimer);
    }
    // Auto-generate report when recording stops
    if (recordingTime > 0) {
      generateReport();
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File uploaded",
        description: `${file.name} is ready for processing`,
      });
      // Auto-generate report for uploaded file
      generateReport();
    }
  };

  const generateReport = () => {
    if (balance < 0.89) {
      toast({
        title: "Insufficient balance",
        description: "Please top up your account to continue",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    setIsSuccess(false);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setBalance(prev => prev - 0.89);
      toast({
        title: "Report generated successfully!",
        description: `Your report has been sent to ${email}`,
      });
    }, 3000);
  };

  const handleTopUp = () => {
    setBalance(prev => prev + topUpAmount);
    toast({
      title: "Balance topped up",
      description: `Added €${topUpAmount} to your account`,
    });
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-deep-navy">RecapGo</h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-slate-gray">Current Balance</p>
              <p className="text-lg font-semibold text-deep-navy">€{balance.toFixed(2)}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Top Up
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Top Up Balance</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2">
                    {[5, 10, 25].map(amount => (
                      <Button
                        key={amount}
                        variant={topUpAmount === amount ? "default" : "outline"}
                        onClick={() => setTopUpAmount(amount)}
                      >
                        €{amount}
                      </Button>
                    ))}
                  </div>
                  <Button onClick={handleTopUp} className="w-full">
                    Add €{topUpAmount}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Main Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Upload Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <input
                  type="file"
                  accept="audio/*"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  className="w-full h-24 border-dashed border-2"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2" />
                    <p>Choose audio file</p>
                    <p className="text-sm text-slate-gray">MP3, WAV, M4A</p>
                  </div>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mic className="w-5 h-5 mr-2" />
                  Record Audio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Button
                    size="lg"
                    className={`w-24 h-24 rounded-full mb-4 ${isRecording ? 'bg-red-500 hover:bg-red-600' : ''}`}
                    onClick={isRecording ? stopRecording : startRecording}
                  >
                    {isRecording ? (
                      <Square className="w-8 h-8" />
                    ) : (
                      <Mic className="w-8 h-8" />
                    )}
                  </Button>
                  <p className="text-lg font-semibold">
                    {isRecording ? formatTime(recordingTime) : "00:00"}
                  </p>
                  <p className="text-sm text-slate-gray">
                    {isRecording ? "Recording..." : "Click to start"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Email Input */}
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div>
                <Label htmlFor="email">Send report to:</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
                <p className="text-sm text-slate-gray mt-2">
                  Reports will be automatically generated when you upload a file or stop recording.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Processing State */}
          {isProcessing && (
            <Card className="mb-8">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <Mic className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-deep-navy">
                    Turning your meeting into magic...
                  </h3>
                  <Progress value={66} className="w-full" />
                  <p className="text-sm text-slate-gray">
                    This usually takes 30-60 seconds
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Success State */}
          {isSuccess && (
            <Card className="mb-8 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">
                    Your report is on its way!
                  </h3>
                  <p className="text-green-700">
                    ✅ Report successfully sent to {email}
                  </p>
                  <Button variant="outline" size="sm">
                    Download from browser instead
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
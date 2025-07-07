import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [autoTopUp, setAutoTopUp] = useState({ threshold: 2, amount: 10, cap: 50 });
  
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
      setSelectedFile(file);
      toast({
        title: "File selected",
        description: `${file.name} is ready for processing`,
      });
    }
  };

  const generateReportFromFile = () => {
    if (!selectedFile) return;
    generateReport();
    setSelectedFile(null); // Clear after processing
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
      <header className="bg-white/80 backdrop-blur-sm shadow-soft border-b border-sky-tint">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo size="small" />
          <Button variant="ghost" size="sm" onClick={handleLogout} className="hover:bg-sky-tint/50 transition-colors">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Balance Card */}
          <Card className="mb-6 bg-gradient-to-r from-sky-tint to-white border-electric-blue/20 shadow-soft hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-slate-gray">Current Balance</p>
                  <p className="text-2xl font-bold text-deep-navy">€{balance.toFixed(2)}</p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <CreditCard className="w-4 h-4 mr-2" />
                      Top Up
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Manage Balance</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      {/* Top Up Section */}
                      <div>
                        <h3 className="font-semibold mb-3">Top Up Balance</h3>
                        <div className="grid grid-cols-3 gap-2 mb-3">
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

                      {/* Auto Top-Up Section */}
                      <div className="border-t pt-4">
                        <h3 className="font-semibold mb-3">Auto Top-Up Settings</h3>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <Label className="text-xs">If balance falls below</Label>
                              <Input
                                type="number"
                                value={autoTopUp.threshold}
                                onChange={(e) => setAutoTopUp({...autoTopUp, threshold: Number(e.target.value)})}
                                className="h-8"
                              />
                            </div>
                            <div>
                              <Label className="text-xs">Top up by</Label>
                              <Input
                                type="number"
                                value={autoTopUp.amount}
                                onChange={(e) => setAutoTopUp({...autoTopUp, amount: Number(e.target.value)})}
                                className="h-8"
                              />
                            </div>
                          </div>
                          <div>
                            <Label className="text-xs">Monthly cap</Label>
                            <Input
                              type="number"
                              value={autoTopUp.cap}
                              onChange={(e) => setAutoTopUp({...autoTopUp, cap: Number(e.target.value)})}
                              className="h-8"
                            />
                          </div>
                          <Button variant="outline" size="sm" className="w-full">
                            Save Auto Top-up Settings
                          </Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
          {/* Main Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
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
                {!selectedFile ? (
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
                ) : (
                  <div className="space-y-3">
                    <div className="p-3 border rounded-md bg-sky-tint/30">
                      <p className="text-sm font-medium text-deep-navy">{selectedFile.name}</p>
                      <p className="text-xs text-slate-gray">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setSelectedFile(null);
                          if (fileInputRef.current) fileInputRef.current.value = '';
                        }}
                      >
                        Remove
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1"
                        onClick={generateReportFromFile}
                        disabled={isProcessing}
                      >
                        Generate Report
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm">
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
                    className={`w-24 h-24 rounded-full mb-4 transition-all duration-300 ${
                      isRecording 
                        ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                        : 'bg-gradient-primary hover:scale-110 shadow-button'
                    }`}
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
          <Card className="mb-8 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
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
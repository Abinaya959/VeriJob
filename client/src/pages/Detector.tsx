import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle, Info, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FileUpload } from "@/components/ui/file-upload";

export default function Detector() {
  const [jobText, setJobText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeJob = async () => {
    if (!jobText.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock Detection Logic
    const suspiciousKeywords = [
      "urgent", "kindly", "western union", "check", "telegram", "whatsapp",
      "no interview", "investment", "wire transfer", "gmail.com", "yahoo.com"
    ];

    const foundFlags = suspiciousKeywords.filter((kw) =>
      jobText.toLowerCase().includes(kw)
    );

    const isFake = foundFlags.length > 0;
    const score = isFake ? 85 + Math.random() * 14 : 5 + Math.random() * 10; // High score = Fake

    setResult({
      isFake,
      score: Math.round(score),
      flags: foundFlags,
      confidence: 90 + Math.random() * 9,
    });
    setIsAnalyzing(false);
  };

  const handleFileUpload = async (file: File) => {
      // In a real app, we'd read the file content here.
      // For mockup, we'll just put a placeholder text.
      setJobText(`[Uploaded File Content: ${file.name}]\n\nWe are looking for an urgent candidate. Kindly contact me on Telegram for an interview. No experience needed.`);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold mb-2">Fake Job Detector</h1>
        <p className="text-muted-foreground">
          Paste a job description or upload a file to check its legitimacy.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>
                Provide the job description text for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                placeholder="Paste job description here..."
                className="min-h-[200px] font-mono text-sm resize-none"
                value={jobText}
                onChange={(e) => setJobText(e.target.value)}
              />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or upload file</span>
                </div>
              </div>

              <FileUpload 
                label="Upload Job Posting" 
                onFileSelect={handleFileUpload}
                accept=".txt,.pdf,.docx"
              />

              <Button 
                className="w-full" 
                size="lg" 
                onClick={analyzeJob} 
                disabled={!jobText || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Patterns...
                  </>
                ) : (
                  <>
                    Analyze Job Posting
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Results Section */}
        <div className="lg:col-span-1">
            {result ? (
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
               >
                 <Card className={result.isFake ? "border-destructive/50 bg-destructive/5" : "border-success/50 bg-success/5"}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            {result.isFake ? (
                                <AlertTriangle className="h-6 w-6 text-destructive" />
                            ) : (
                                <CheckCircle className="h-6 w-6 text-green-600" />
                            )}
                            {result.isFake ? "High Risk Detected" : "Likely Legitimate"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex justify-between text-sm font-medium">
                                <span>Risk Score</span>
                                <span>{result.score}%</span>
                            </div>
                            <Progress 
                                value={result.score} 
                                className="h-2"
                                // Note: Using style for color override as Progress component might not expose color prop easily in all versions
                                style={{ 
                                    ["--progress-background" as any]: result.isFake ? "var(--destructive)" : "var(--primary)" 
                                }}
                            />
                        </div>

                        {result.flags.length > 0 && (
                            <div className="space-y-2">
                                <span className="text-sm font-semibold text-foreground">Red Flags Found:</span>
                                <div className="flex flex-wrap gap-2">
                                    {result.flags.map((flag: string) => (
                                        <Badge key={flag} variant="destructive" className="capitalize">
                                            {flag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="p-3 bg-background/50 rounded-lg text-sm text-muted-foreground border">
                             <div className="flex items-start gap-2">
                                <Info className="h-4 w-4 mt-0.5 shrink-0" />
                                <p>
                                    {result.isFake 
                                        ? "This job posting contains keywords commonly associated with employment scams. Proceed with extreme caution." 
                                        : "No common scam patterns were detected in the text provided. However, always research the company independently."}
                                </p>
                             </div>
                        </div>
                    </CardContent>
                 </Card>
               </motion.div>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 border rounded-xl border-dashed bg-muted/30 text-muted-foreground min-h-[300px]">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Info className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Ready to Analyze</h3>
                    <p className="text-sm">
                        Analysis results will appear here after you submit a job description.
                    </p>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}

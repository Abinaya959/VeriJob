import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Loader2, Sparkles, TrendingUp, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileUpload } from "@/components/ui/file-upload";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

export default function Analyzer() {
  const [jobText, setJobText] = useState("");
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const analyzeMatch = async () => {
    if (!jobText.trim() && !resumeText.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simple Intersection Logic for Mockup
    const jobWords = new Set(jobText.toLowerCase().match(/\b(\w+)\b/g) || []);
    const resumeWords = new Set(resumeText.toLowerCase().match(/\b(\w+)\b/g) || []);
    
    // Calculate a mock score based on intersection + some random variance for realism
    let matchCount = 0;
    jobWords.forEach(word => {
        if (resumeWords.has(word) && word.length > 3) matchCount++;
    });
    
    // Normalize somewhat
    const totalMeaningfulWords = Array.from(jobWords).filter(w => w.length > 3).length || 1;
    const rawScore = Math.min(100, Math.round((matchCount / totalMeaningfulWords) * 100 * 1.5)); // Boost score a bit
    const score = Math.max(10, rawScore); // Min score 10

    setResult({
      score,
      skillsFound: ["React", "TypeScript", "Communication", "Problem Solving"].filter(() => Math.random() > 0.3),
      missingSkills: ["Python", "AWS", "Docker"].filter(() => Math.random() > 0.3),
      suggestions: [
        "Include more measurable achievements in your experience section.",
        "Add keywords from the job description directly into your summary.",
        "Your resume is a bit short, consider expanding on your projects."
      ]
    });
    setIsAnalyzing(false);
  };

  const handleResumeUpload = (file: File) => {
    setResumeText(`[Resume Content for ${file.name}]\n\nExperienced Developer with skills in React, TypeScript, and Node.js. Passionate about building scalable applications.`);
  };

  const handleJobUpload = (file: File) => {
    setJobText(`[Job Description Content: ${file.name}]\n\nWe are looking for a Senior Developer with Python, AWS, and Docker experience. React is a plus.`);
  };

  const COLORS = ['var(--primary)', 'var(--muted)'];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold mb-2">Resume Analyzer</h1>
        <p className="text-muted-foreground">
          See how well your resume matches the job description.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Job Input */}
        <Card className="flex flex-col h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Job Description
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <Textarea
                    placeholder="Paste job description..."
                    className="min-h-[150px] resize-none"
                    value={jobText}
                    onChange={(e) => setJobText(e.target.value)}
                />
                <div className="text-xs text-center text-muted-foreground uppercase tracking-widest my-2">- OR -</div>
                <FileUpload label="Upload Job PDF/Doc" onFileSelect={handleJobUpload} accept=".pdf,.docx,.txt" />
            </CardContent>
        </Card>

        {/* Resume Input */}
        <Card className="flex flex-col h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Your Resume
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-1">
                <Textarea
                    placeholder="Paste resume text..."
                    className="min-h-[150px] resize-none"
                    value={resumeText}
                    onChange={(e) => setResumeText(e.target.value)}
                />
                <div className="text-xs text-center text-muted-foreground uppercase tracking-widest my-2">- OR -</div>
                <FileUpload label="Upload Resume PDF/Doc" onFileSelect={handleResumeUpload} accept=".pdf,.docx,.txt" />
            </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mb-12">
        <Button 
            size="lg" 
            onClick={analyzeMatch} 
            disabled={(!jobText && !resumeText) || isAnalyzing}
            className="w-full md:w-auto px-12 h-14 text-lg shadow-xl shadow-primary/20"
        >
            {isAnalyzing ? (
                <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculating Match Score...
                </>
            ) : (
                <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Analyze Match
                </>
            )}
        </Button>
      </div>

      {/* Results */}
      {result && (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-6"
        >
            {/* Score Card */}
            <Card className="md:col-span-1 overflow-hidden border-primary/20 bg-primary/5">
                <CardHeader className="text-center pb-2">
                    <CardTitle>Match Score</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center min-h-[200px]">
                    <div className="h-[180px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={[{ name: 'Match', value: result.score }, { name: 'Gap', value: 100 - result.score }]}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                >
                                    {[{ name: 'Match', value: result.score }, { name: 'Gap', value: 100 - result.score }].map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-4xl font-bold font-heading text-primary">{result.score}%</span>
                            <span className="text-xs text-muted-foreground uppercase font-medium">Relevance</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Analysis Details */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-primary" />
                        Detailed Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500" />
                                Matching Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {result.skillsFound.length > 0 ? result.skillsFound.map((skill: string) => (
                                    <span key={skill} className="px-2 py-1 bg-green-500/10 text-green-700 dark:text-green-400 text-xs rounded-md font-medium border border-green-500/20">
                                        {skill}
                                    </span>
                                )) : <span className="text-xs text-muted-foreground italic">No specific skills matched</span>}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-sm font-semibold flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-destructive" />
                                Missing Keywords
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {result.missingSkills.length > 0 ? result.missingSkills.map((skill: string) => (
                                    <span key={skill} className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-md font-medium border border-destructive/20">
                                        {skill}
                                    </span>
                                )) : <span className="text-xs text-muted-foreground italic">Good keyword coverage!</span>}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                        <h4 className="text-sm font-semibold">Improvement Suggestions</h4>
                        <ul className="space-y-2">
                            {result.suggestions.map((suggestion: string, i: number) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
      )}
    </div>
  );
}

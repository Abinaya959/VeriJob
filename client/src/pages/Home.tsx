import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ShieldAlert, FileSearch, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/abstract_digital_security_shield_and_magnifying_glass_analyzing_data.png";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-12 lg:py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h1
              variants={item}
              className="text-4xl lg:text-6xl font-heading font-extrabold tracking-tight text-foreground"
            >
              Verify Jobs. <br />
              <span className="text-primary">Secure Your Career.</span>
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              Don't get scammed. Use our AI-powered tool to detect fake job
              postings and analyze how well your resume matches legitimate
              opportunities.
            </motion.p>
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Link href="/detector">
                <Button size="lg" className="gap-2 text-base h-12 px-8 shadow-lg shadow-primary/25">
                  <ShieldAlert className="h-5 w-5" />
                  Check a Job
                </Button>
              </Link>
              <Link href="/analyzer">
                <Button variant="outline" size="lg" className="gap-2 text-base h-12 px-8">
                  <FileSearch className="h-5 w-5" />
                  Analyze Resume
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform translate-y-10" />
            <img
              src={heroImage}
              alt="AI Security Analysis"
              className="relative z-10 w-full max-w-lg mx-auto rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our advanced machine learning models process text in real-time to
              provide actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={ShieldAlert}
              title="Fake Job Detection"
              description="Identify red flags like urgent payment requests, suspicious domains, and poor grammar that indicate scams."
            />
            <FeatureCard
              icon={FileSearch}
              title="Resume Matching"
              description="See how your resume stacks up against the job description with a detailed compatibility score."
            />
            <FeatureCard
              icon={CheckCircle}
              title="Improvement Tips"
              description="Get AI-generated suggestions on what skills to highlight to increase your chances of getting hired."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: any) {
  return (
    <div className="p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-heading font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

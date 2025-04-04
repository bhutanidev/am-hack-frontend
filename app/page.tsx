"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, Clock, Database, Search, Video, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function LandingPage() {
  const { theme } = useTheme();
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };
  
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary/5 dark:bg-primary/10 border-b border-border">
        <div className="container mx-auto px-4 py-24 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center gap-2 mb-6"
          >
            <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold">SatarkAI</h1>
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-xl md:text-2xl text-center max-w-3xl mb-8"
          >
            Real-Time Violence & Panic Detection for Public Safety
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="text-lg text-center max-w-2xl mb-12 text-muted-foreground"
          >
            Proactive surveillance powered by machine learning that detects aggressive behavior, 
            crowd panic, and medical emergencies before they escalate.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md flex items-center justify-center font-medium"

            >
              <Link href={"/dashboard"}>Request Demo </Link> 
              <motion.span whileHover={{ x: 4 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-6 py-3 bg-transparent border border-input hover:bg-accent hover:text-accent-foreground rounded-md flex items-center justify-center font-medium"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            The Problem
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <div className="mb-4 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-destructive" /> 
                <h3 className="font-semibold text-lg">Delayed Response</h3>
              </div>
              <p className="text-muted-foreground">
                Traditional surveillance relies on human monitoring, leading to slow reactions 
                when incidents occur in crowded spaces.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <div className="mb-4 flex items-center">
                <Search className="mr-2 h-5 w-5 text-destructive" /> 
                <h3 className="font-semibold text-lg">Human Limitations</h3>
              </div>
              <p className="text-muted-foreground">
                Security personnel cannot effectively monitor multiple video feeds simultaneously, 
                causing critical events to be missed.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <div className="mb-4 flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-destructive" /> 
                <h3 className="font-semibold text-lg">Reactive Approach</h3>
              </div>
              <p className="text-muted-foreground">
                Current systems only document incidents after they occur rather than providing 
                tools to prevent escalation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-4"
          >
            Our Solution
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
            className="text-lg text-center max-w-3xl mx-auto mb-16 text-muted-foreground"
          >
            SatarkAI uses advanced machine learning algorithms to detect and alert authorities 
            about potential threats in real-time.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerChildren}
            >
              <motion.div 
                variants={slideUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Video className="mr-2 h-5 w-5 text-primary" /> 
                  Real-Time Stream Processing
                </h3>
                <p className="text-muted-foreground">
                  Connects seamlessly to existing CCTV cameras or mobile live streams without expensive 
                  hardware upgrades.
                </p>
              </motion.div>
              
              <motion.div 
                variants={slideUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-primary" /> 
                  Intelligent Pattern Recognition
                </h3>
                <p className="text-muted-foreground">
                  Detects aggressive gestures, running crowds, collapsed individuals, and other 
                  anomalous behaviors that indicate potential danger.
                </p>
              </motion.div>
              
              <motion.div 
                variants={slideUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                className="mb-8"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-primary" /> 
                  Instant Alert System
                </h3>
                <p className="text-muted-foreground">
                  Sends immediate notifications to security personnel, event organizers, or emergency 
                  services when threatening situations are detected.
                </p>
              </motion.div>
              
              <motion.div 
                variants={slideUp}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Database className="mr-2 h-5 w-5 text-primary" /> 
                  Comprehensive Incident Logging
                </h3>
                <p className="text-muted-foreground">
                  Stores all flagged events with video evidence for future reference, training, and legal purposes.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="rounded-lg overflow-hidden shadow-lg bg-card border border-border"
            >
              <div className="bg-muted p-4 text-foreground text-sm border-b border-border">Satark AI Dashboard</div>
              <div className="h-80 flex items-center justify-center p-8 bg-card">
                <motion.div 
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="text-center"
                >
                  {/* <p className="text-muted-foreground mb-4">Dashboard visualization would be shown here</p> */}
                  <Shield className="h-16 w-16 mx-auto text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-16"
          >
            Powered By Advanced Technology
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <div className="mb-4">
                <h3 className="font-bold text-xl">Machine Learning Core</h3>
                <p className="text-muted-foreground text-sm">AI-driven analysis for accurate detection</p>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Pose Estimation:</span> Tracks body movements to identify aggressive actions and unusual postures</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Object Detection:</span> Using YOLOv8 or MediaPipe to recognize weapons and other dangerous objects</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">Recurrent Neural Networks:</span> Analyzes temporal patterns to understand evolving situations</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <div className="mb-4">
                <h3 className="font-bold text-xl">Robust Development Stack</h3>
                <p className="text-muted-foreground text-sm">Built on industry-standard technologies</p>
              </div>
              
              <div className="space-y-4">
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">MERN Stack:</span> MongoDB, Express.js, React, and Node.js for scalable application architecture</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">WebRTC:</span> Enables low-latency, real-time video processing essential for immediate threat detection</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-success mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-medium text-foreground">MongoDB:</span> Secure and efficient storage of incident logs and system data</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-16"
          >
            Applications & Use Cases
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerChildren}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <h3 className="font-semibold text-lg mb-2">Public Events</h3>
              <p className="text-muted-foreground">
                Concerts, sports events, and festivals where large crowds gather and rapid 
                response is critical.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <h3 className="font-semibold text-lg mb-2">Transportation Hubs</h3>
              <p className="text-muted-foreground">
                Airports, train stations, and bus terminals where quick identification of 
                threats can prevent widespread panic.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <h3 className="font-semibold text-lg mb-2">Educational Institutions</h3>
              <p className="text-muted-foreground">
                Schools and universities to enhance existing security measures and 
                provide faster emergency response.
              </p>
            </motion.div>
            
            <motion.div 
              variants={slideUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card text-card-foreground rounded-lg border border-border shadow p-6"
            >
              <h3 className="font-semibold text-lg mb-2">Shopping Centers</h3>
              <p className="text-muted-foreground">
                Malls and retail environments where detecting shoplifting or aggressive 
                behavior can prevent escalation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="text-3xl font-bold mb-6"
          >
            Ready to Enhance Public Safety?
          </motion.h2>
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideUp}
            className="text-lg max-w-2xl mx-auto mb-10 text-primary-foreground/80"
          >
            Join organizations already using SatarkAI to create safer environments 
            through proactive threat detection.
          </motion.p>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md flex items-center justify-center font-medium"
            >
              Schedule a Demo
              <motion.span whileHover={{ x: 4 }}>
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="px-6 py-3 bg-transparent border border-primary-foreground/20 hover:bg-primary-foreground/10 text-primary-foreground rounded-md flex items-center justify-center font-medium"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6 md:mb-0"
            >
              <div className="p-1 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">SatarkAI</span>
            </motion.div>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} SatarkAI Technologies. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
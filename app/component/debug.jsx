"use client"
import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const challenge = {
  title: "Recursive Fibonacci Sequence Bug",
  scenario: `A developer has written a recursive function to calculate the nth number in the Fibonacci sequence. 
    However, users are reporting that the function is extremely slow for larger numbers and sometimes crashes 
    their browser. The function works correctly for small numbers but becomes unusable for n > 40.`,
  buggyCode: `def fibonacci(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)`,
  steps: [
    {
      step: "Identify the Issue",
      explanation:
        "The recursive implementation recalculates the same Fibonacci numbers multiple times, leading to exponential time complexity O(2^n).",
    },
    {
      step: "Analyze the Problem",
      explanation:
        "For example, calculating fib(5) will calculate fib(4) and fib(3), but fib(4) will also calculate fib(3) again, creating redundant calculations.",
    },
    {
      step: "Implement Solution",
      explanation:
        "Use dynamic programming with memoization to store previously calculated Fibonacci numbers, reducing time complexity to O(n).",
    },
  ],
  fixedCode: `def fibonacci(n, memo=None):
    if memo is None:
        memo = {}
    if n <= 0:
        return 0
    if n == 1:
        return 1
    if n in memo:
        return memo[n]
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]`,
  explanation:
    "The fixed version uses memoization to store previously calculated values in a dictionary. This prevents redundant calculations and dramatically improves performance for larger values of n.",
};

const DebuggingChallenge = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="text-red-500" size={24} />
          {challenge.title}
        </CardTitle>
        <p className="text-gray-600 mt-2">{challenge.scenario}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Buggy Code Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Problematic Implementation</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-sm overflow-x-auto">
              <code>{challenge.buggyCode}</code>
            </pre>
          </div>
        </div>

        {/* Debug Steps */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Debugging Steps</h3>
          {challenge.steps.map((step, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-colors ${
                activeStep === index ? "border-blue-500" : ""
              }`}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                      Step {index + 1}
                    </span>
                    {step.step}
                  </h4>
                  {activeStep === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
                {activeStep === index && (
                  <p className="mt-4 text-gray-600">{step.explanation}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Solution Section */}
        <div className="space-y-4">
          <Button
            onClick={() => setShowSolution(!showSolution)}
            className="w-full"
          >
            {showSolution ? "Hide Solution" : "Show Solution"}
            {showSolution ? (
              <ChevronUp className="ml-2" />
            ) : (
              <ChevronDown className="ml-2" />
            )}
          </Button>

          {showSolution && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  <code>{challenge.fixedCode}</code>
                </pre>
              </div>
              <Card className="bg-green-50">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="text-green-600 mt-1" size={20} />
                    <p className="text-gray-800">{challenge.explanation}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DebuggingChallenge;

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full px-4 md:px-16 py-12">
      <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-lg border border-gray-100 rounded-2xl hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardHeader className="relative">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800">
              About AutoEDA
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="relative">
          <div className="space-y-6">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
AutoEDA is your go-to solution for seamless data preprocessing. Our tool automatically cleans and preprocesses your datasets, eliminating null variables and inconsistencies, ensuring your data is ready for exploratory data analysis (EDA) and model building. By simplifying the data preparation process, we empower users to focus on deriving insights and creating robust machine learning models without the hassle of manual data cleaning.            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
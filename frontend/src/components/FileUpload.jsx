import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { UploadCloud } from 'lucide-react';

const FileUpload = () => {
const [selectedFile, setSelectedFile] = useState(null);

 const handleFileChange = (e) => {
  if (e.target.files && e.target.files.length > 0) {
    setSelectedFile(e.target.files[0]);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    console.log("Uploading file:", selectedFile.name);
    alert(`File "${selectedFile.name}" uploaded successfully!`);
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };

  return (
    <div className="w-full px-4 md:px-16 py-8 flex justify-center items-center">
      <Card className="bg-white shadow-lg border border-gray-100 rounded-xl w-full max-w-3xl hover:shadow-xl transition-shadow">
        <CardHeader className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-blue-50">
              <UploadCloud className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-semibold text-gray-800">
                Upload Your CSV File
              </CardTitle>
              <CardDescription className="text-sm text-gray-600">
                Select a CSV file to upload for automatic preprocessing
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                type="file"
                accept=".csv"
                className="file-input absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="file-input"
                onChange={handleFileChange}
              />
              <label 
                htmlFor="file-input" 
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg p-8 transition-colors"
              >
                <UploadCloud className="w-10 h-10 text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-600 mb-1">
                  <span className="text-blue-600">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">CSV files only</p>
                {selectedFile && (
                  <p className="text-sm text-gray-700 mt-2">Selected: {selectedFile.name}</p>
                )}
              </label>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Button
                type="submit"
                variant="default"
                className="upload-button w-full md:w-auto px-6 py-3"
              >
                Upload File
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleCancel}
                className="w-full md:w-auto px-6 py-3"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FileUpload;

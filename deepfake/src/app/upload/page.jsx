"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const router = useRouter();

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  }, []);

  const handleFileChange = useCallback((e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  }, []);

  const validateFile = (file) => {
    const validTypes = ["image/jpeg", "image/png", "video/mp4"];
    if (!validTypes.includes(file.type)) {
      setUploadStatus("error");
      return false;
    }
    return true;
  };

  const handleUpload = async () => {
    if (!file) return;
    setUploadStatus("uploading");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploadStatus("success");
    setTimeout(() => {
      router.push("/results");
    }, 1500);
  };

  const removeFile = () => {
    setFile(null);
    setUploadStatus("idle");
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <header className="container mx-auto mb-8">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
          DeepFake Detector
        </Link>
      </header>

      <main className="container mx-auto max-w-2xl">
        <div className="w-full p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold">Upload Media</h2>
          <p className="text-gray-600">Drag and drop your file or click to browse. Supported formats: JPG, PNG, MP4</p>

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-4 min-h-[300px] transition-all ${
              isDragging ? "border-primary bg-primary/5" : "border-gray-300"
            } ${uploadStatus === "error" ? "border-red-500" : ""}`}
          >
            {uploadStatus === "idle" && !file && (
              <>
                <Upload className="w-12 h-12 text-gray-400" />
                <p className="text-gray-600 text-center">
                  Drag and drop your file here, or{" "}
                  <label className="text-primary cursor-pointer">
                    browse
                    <input type="file" className="hidden" accept=".jpg,.jpeg,.png,.mp4" onChange={handleFileChange} />
                  </label>
                </p>
              </>
            )}

            {file && uploadStatus === "idle" && (
              <div className="flex items-center gap-4">
                <span className="text-black">{file.name}</span>
                <button onClick={removeFile} className="text-red-500 hover:text-red-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {uploadStatus === "uploading" && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                <p className="text-gray-600">Uploading...</p>
              </div>
            )}

            {uploadStatus === "success" && (
              <div className="flex flex-col items-center gap-4 text-green-500">
                <CheckCircle className="w-12 h-12" />
                <p>Upload successful! Redirecting to results...</p>
              </div>
            )}

            {uploadStatus === "error" && (
              <div className="flex flex-col items-center gap-4 text-red-500">
                <AlertCircle className="w-12 h-12" />
                <p>Invalid file type. Please upload JPG, PNG, or MP4 files only.</p>
              </div>
            )}
          </div>

          <button
            className="w-full mt-4 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition"
            onClick={handleUpload}
            disabled={!file || uploadStatus !== "idle"}
          >
            {uploadStatus === "uploading" ? "Uploading..." : "Analyze Media"}
          </button>
        </div>
      </main>
    </div>
  );
}

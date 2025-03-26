import { useRef } from 'react';
import "./ImageUploadInput.css"

type ImageUploadProps = {
    onFileSelect: (fileString: string) => void;
};
  
export function ImageUploadInput({ onFileSelect }: ImageUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.result) {
                onFileSelect(reader.result.toString());
            }
        };
        reader.readAsDataURL(file);
    }
    };
  
    return (
        <div className="uploadWrapper">
            <label className="uploadLabel" onClick={() => fileInputRef.current?.click()}>
                <span className="plusIcon">+</span>
            </label>
            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hiddenInput"
            />
        </div>
    );
  }
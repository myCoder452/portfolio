import PyPDF2
import os

# Updated path: resume_Things is now in the current directory (webPage)
RESUME_PDF_PATH = 'resume_Things/abadamu_resume.pdf'
OUTPUT_FILE = 'src/assets/resume.txt'

def extract_text_from_pdf(pdf_path):
    if not os.path.exists(pdf_path):
        print(f"Error: Resume file not found at {pdf_path}")
        return None
        
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ''
            for page in reader.pages:
                text += page.extract_text()
        return text
    except Exception as e:
        print(f"Error extracting text: {e}")
        return None

if __name__ == '__main__':
    print(f"Extracting resume from {RESUME_PDF_PATH}...")
    resume_text = extract_text_from_pdf(RESUME_PDF_PATH)
    
    if resume_text:
        # Ensure output directory exists
        os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
        
        with open(OUTPUT_FILE, 'w') as f:
            f.write(resume_text)
        print(f"Successfully wrote resume text to {OUTPUT_FILE}")
    else:
        print("Failed to extract resume text.")
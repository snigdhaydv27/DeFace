## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# DeFace - AI vs Deepfake vs Real Image Classifier 🧠🎭

DeFace is a powerful web-based platform that classifies images into **Real**, **AI-generated**, or **Deepfake** using Google’s ViT (Vision Transformer) architecture. Built with a focus on **cybersecurity**, this tool aids in verifying image authenticity to combat digital misinformation and manipulated media.

---

## 🚀 Problem Statement

**Detect and classify images as Real, AI-generated, or Deepfake.**  
This project aims to provide a robust solution to image authenticity challenges in the era of AI-generated content.

---

## 🛠 Tech Stack

- **Frontend**: Next.js (React Framework), Tailwind CSS  
- **Backend**: Node.js + Express.js  
- **Authentication**: JWT (JSON Web Tokens)  
- **Database**: MongoDB Atlas  
- **ML Model**: Google’s ViT (Vision Transformer)  
- **Deployment**: Vercel

---

## 🔍 Key Features

- **Triple Classification**: Distinguishes between Real, AI, and Deepfake images.
- **High Accuracy**: Achieves **97.5% accuracy** on benchmark datasets like FaceForensics++ and CelebDF.
- **Hybrid ML Model**: Combines CNNs and ViT to capture both local and global features.
- **Explainable Output**: Classification scores visualized via bar charts.
- **Secure Uploads**: Multer handles image uploads with security.

---

## 📦 Use Cases

- 🕵️‍♂️ **Image Verification**  
- 🧑‍⚖️ **Forensic Analysis**  
- 📱 **Content Moderation**  
- 📰 **Media & Journalism Validation**  
- 🎭 **Deepfake Detection in Celeb Content**  
- 💬 **Dating & Social App Profile Filtering**  
- 🕵️ **Law Enforcement Support**  
- 🏛 **NGO & Government Anti-Misinformation Tool**

---

## 📈 Business Potential

- **Market Value**: The deepfake detection market is projected to reach **$10.7B by 2030** with a **41.6% CAGR**.
- **Compliance Ready**: Meets upcoming regulations like the **EU AI Act** and Indian **IT Act**.
- **Generalization Scope**: Adapts well to known deepfake methods, with future-proofing for emerging techniques.

---

## ⚠️ Limitations

- Biased or limited datasets may reduce performance.
- May underperform on extremely low or high-resolution images.
- ViT’s decision process is less interpretable—but visual scores help clarify results.

---

## 👨‍💻 Team AI-liens

- **Aryan Kumar Arya** (Team Leader) - Dual Degree, CSE, Year II  
- **Snigdha Kumar** - Dual Degree, CSE, Year II  
- **Navneet Shreya** - B.Tech, CSE, Year II  
**Institute**: National Institute of Technology, Patna

---

## 📚 References

- [AI-vs-Deepfake-vs-Real Model on HuggingFace](https://huggingface.co/prithivMLmods/AI-vs-Deepfake-vs-Real)  
- [A Sanity Check for AI-generated Image Detection – arXiv](https://arxiv.org/abs/2406.19435)

---

## 📍 Deployment

🔗[Vercel](https://deface-sand.vercel.app/)

---

## 📸 Screenshots

### 📤 Flowchart of Project
![Upload Page](/frontend/public/diagram.png)

### 🖼️ Home Page
![Home Page](/frontend/public/home.png)

### 📊 Classification Output
![Classification Output](/frontend/public/classify.png)
![Classification Output](/frontend/public/classify2.png)

---

## 🛡️ License

This project is licensed under MIT License. See `LICENSE` for more details.



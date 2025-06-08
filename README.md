# 📄 MicroInvoice – Lightweight e-Invoicing SaaS for Micro-Businesses (France)

MicroInvoice is a minimal, privacy-conscious SaaS designed to help French micro-entrepreneurs manage and send compliant electronic invoices under the new government regulation (`facture électronique obligatoire`). 

💡 The goal is to simplify e-invoicing by connecting a clean user interface to the official PPF (Portail Public de Facturation) and later, PDPs.

---

## 🚀 MVP Goals

- Simple web interface to create, send, and manage invoices
- Full support for Factur-X (hybrid PDF + XML)
- API integration with the **PPF (Chorus Pro)** for invoice transmission
- Minimal setup, clear UX, privacy-first design

---

## 🧱 Tech Stack

| Layer         | Tech                                      |
|---------------|-------------------------------------------|
| Frontend      | React + Tailwind CSS                      |
| Backend       | Python (FastAPI)                          |
| ORM/Database  | Prisma + PostgreSQL                       |
| Auth          | JWT or Firebase (TBD)                     |
| E-invoicing   | Factur-X + Chorus Pro API (PPF)           |
| Deployment    | Docker-ready (planned)                    |

---

## 🧾 Features (Planned for MVP)

- [x] Invoice CRUD (create, edit, delete, status)
- [x] Client management
- [x] Basic dashboard
- [x] PDF generation with embedded Factur-X XML
- [ ] API call to PPF (test environment)
- [ ] Error/status handling from PPF responses
- [ ] Export & archive feature (JSON/PDF)

---

## 📂 Project Structure (Draft)

```bash
.
├── backend/
│   ├── app/ (FastAPI logic)
│   ├── prisma/ (schema, migrations)
│   └── pdf/ (Factur-X generation)
├── frontend/
│   └── src/
│       ├── components/
│       ├── views/
│       ├── services/
│       └── api/
├── docs/
└── README.md
```

---

## ⚙️ Getting Started (Soon)

Setup instructions and .env template will be added as development progresses.

---

## 📅 Roadmap

 - [✔] **Define data model** ✅ *(Done)*

 - [✔] **Build UI wireframes** ✅ *(Done)*

 - [ ] **Connect to PPF API (test)** *(Next Step)*

 - [ ] **Deploy MVP for beta users** *(Next Step)*

 - [ ] **Support multi-PDP integration** *(Next Step)*

 - [ ] **Subscription/paywall (annual license)** *(Next Step)*

---

## 🛡 Legal / Compliance

This tool is designed for compliance with the French government’s 2024–2026 e-invoicing reform. PPF connectivity is prioritized, with optional PDP integration planned. Data privacy and transparency are core values.

---

## 📝 **Author**
- 👤 0xRubusData 
- 📧 Contact: 0xRubusData@gmail.com
- 🌍 GitHub: https://github.com/0xrubusdata/MicroInvoice

## 🌐 Connect with Us
- **Twitter (X)**: [0xRubusData](https://x.com/Data0x88850)
- **Website**: [RubusLab](https://rubus-lab.vercel.app/)

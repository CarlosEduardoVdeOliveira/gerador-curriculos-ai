import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { useCVData } from "../hooks/useCVData";
import { FormSection } from "./Layout/FormSection";
import { PreviewSection } from "./Layout/PreviewSection";
import { Header } from "./Preview/Header";

export default function AppContent() {
  const { personalInfo, experience, skills, education } = useCVData();

  const handleExportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(20);
    doc.setFont("helvetica", "bold");
    doc.text(personalInfo.name || "Seu Nome", pageWidth / 2, 25, {
      align: "center",
    });

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    const contactInfo = [
      personalInfo.email ? `Email: ${personalInfo.email}` : "",
      personalInfo.phone ? `Telefone: ${personalInfo.phone}` : "",
      personalInfo.linkedin ? `LinkedIn: ${personalInfo.linkedin}` : "",
    ].filter(Boolean);

    contactInfo.forEach((info, i) => {
      doc.text(info, pageWidth / 2, 35 + i * 6, { align: "center" });
    });

    let y = 55;

    if (personalInfo.profissionalSummaryValue) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Resumo Profissional", 14, y);

      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text(
        doc.splitTextToSize(
          personalInfo.profissionalSummaryValue,
          pageWidth - 28
        ),
        14,
        y + 8
      );

      y += 30;
    }
    if (education?.education?.length) {
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("Escolaridade", 14, y);

  autoTable(doc, {
    startY: y + 5,
    head: [["Curso", "Instituição", "Período", "Status"]],
    body: education.education.map((ed) => [
      ed.course,
      ed.institution,
      `${ed.startDate} - ${ed.endDate || "Atual"}`,
      ed.status,
    ]),
    styles: { fontSize: 11 },
    headStyles: { fillColor: [66, 139, 202], textColor: 255 },
  });

  y = (doc as any).lastAutoTable.finalY + 10;
}
    if (experience?.experiences?.length) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Experiências", 14, y);

      autoTable(doc, {
        startY: y + 5,
        head: [["Cargo", "Empresa", "Período", "Descrição"]],
        body: experience.experiences.map((exp) => [
          exp.position,
          exp.enterprise,
          `${exp.startDate} - ${exp.endDate || "Atual"}`,
          doc.splitTextToSize(exp.descriptionActives || "", 80),
        ]),
        styles: { fontSize: 11, valign: "top" },
        headStyles: { fillColor: [80, 80, 80], textColor: 255 },
        columnStyles: {
          3: { cellWidth: 80 },
        },
      });

      y = (doc as any).lastAutoTable.finalY + 10;
    }

    if (skills?.skills?.length) {
      doc.setFontSize(14);
      doc.setFont("helvetica", "bold");
      doc.text("Habilidades", 14, y);

      autoTable(doc, {
        startY: y + 5,
        head: [["Habilidade", "Nível"]],
        body: skills.skills.map((s) => [s.name, s.level]),
        styles: { fontSize: 11 },
        headStyles: { fillColor: [80, 80, 80], textColor: 255 },
      });
    }
    

    doc.save("curriculo.pdf");
  };

  return (
    <>
      <Header onExportPDF={handleExportPDF} />
      <div className="flex flex-col lg:flex-row w-full justify-between p-4 lg:p-6 gap-4 lg:gap-11 flex-1">
        <FormSection />
        <PreviewSection />
      </div>
    </>
  );
}

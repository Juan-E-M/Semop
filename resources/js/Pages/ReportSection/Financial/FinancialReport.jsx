import {jsPDF} from "jspdf"
import autoTable from 'jspdf-autotable'

export default function FinancialPdfReport (date, project) {
    let total_amount = project.follow_section ? project.follow_section.paid_tdr_amount + project.follow_section.paid_et_amount : 0
    let tdr_paid = project.follow_section ? project.follow_section.paid_tdr_amount : 0
    let et_paid = project.follow_section ? project.follow_section.paid_et_amount : 0
    const doc = new jsPDF();
    const columns = ['','Monto', '%Porcentaje']
    const data = [
        ['TdR pagados', `${tdr_paid}`, `${(tdr_paid*100/total_amount).toFixed(2)}%`],
        ['ET pagados', `${et_paid}`, `${(et_paid*100/total_amount).toFixed(2)}%`],
        ['Monto Total', `${total_amount}`, `${total_amount*100/total_amount}%`]
    ]

    doc.text('Reporte Financiero del Proyecto', 70,20);
    doc.setFontSize(10);
    doc.text(`Título del proyecto: ${project.title}`, 13, 40)
    doc.text(`Fecha: ${date}`, 13, 45)

    doc.autoTable({
        startY:50,
        head:[columns],
        body:data,
        theme:'plain',
        headStyles:{
            halign:'center',
            lineWidth:1,
            lineColor:[0,0,0],
        },
        bodyStyles:{
            lineWidth:1,
            lineColor:[0,0,0]
        }
    }),
    doc.save(`${(project.title).replace(/\s/g, "_")}-ReporteFinanciero.pdf`)
} 
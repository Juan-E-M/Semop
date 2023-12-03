import {jsPDF} from "jspdf"
import autoTable from 'jspdf-autotable'

export default function TechnicalPdfReport (date, project) {
    
    let total_amount = 0
    let completed_amount = 0
    project.milestones?.forEach(milestone => {
        milestone.deliverables.forEach((item)=>{
            total_amount++
            if (item.technical_situation == '100%'){
                completed_amount ++
            }
        })
    });


    const doc = new jsPDF();
    const columns = ['','Cantidad', '%Porcentaje']
    const data = [
        ['Entregables Cumplidos', `${completed_amount}`, `${(completed_amount*100/total_amount).toFixed(2)}%`],
        ['Total de Entregables', `${total_amount}`, `${total_amount*100/total_amount}%`]
    ]

    doc.text('Reporte Técnico del Proyecto', 70,20);
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
    doc.save(`${(project.title).replace(/\s/g, "_")}-ReporteTecnico.pdf`)
} 
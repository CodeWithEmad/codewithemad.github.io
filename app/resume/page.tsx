import { redirect } from 'next/navigation'

export default function ResumePage() {
  const pdfUrl = '/assets/Emad_Ehsanrad_resume_general.pdf'
  redirect(pdfUrl)
}

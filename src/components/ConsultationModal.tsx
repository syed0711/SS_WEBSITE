import React, { useState } from 'react';

const SERVICES = [
  'Polyhouse Construction',
  'Hydroponics Setup',
  'Automation Solutions',
  'Agronomy Consulting',
];

export default function ConsultationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    mode: '',
    message: '',
  });

  if (!open) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Integrate with backend or email service
    alert('Consultation booked! (Demo)');
    onClose();
  }

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={handleOverlayClick}>
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-10 relative border border-gray-100" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-[#2e7d32] text-3xl font-bold transition-colors">&times;</button>
        <h2 className="text-3xl font-extrabold mb-6 text-center text-[#2e7d32] tracking-tight">Book a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Name</label>
              <input required name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Email</label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Phone (optional)</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Service</label>
              <select required name="service" value={form.service} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900">
                <option value="">Select a service</option>
                {SERVICES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Preferred Date</label>
              <input required type="date" name="date" value={form.date} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Preferred Time</label>
              <input required type="time" name="time" value={form.time} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Mode</label>
              <select required name="mode" value={form.mode} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900">
                <option value="">Select mode</option>
                <option value="Zoom">Zoom</option>
                <option value="In-person">In-person</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Additional Message (optional)</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900" rows={2} />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#2e7d32] text-white font-bold text-lg py-3 rounded-xl shadow-md hover:bg-[#219150] transition">Book Consultation</button>
        </form>
      </div>
    </div>
  );
} 
import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { Listbox } from '@headlessui/react';

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const [amPm, setAmPm] = useState<'AM' | 'PM'>('AM');

  const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  const selectedHour = form.time ? form.time.split(/:| /)[0] : '';
  const selectedMinute = form.time ? form.time.split(/:| /)[1] : '';

  if (!open) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCustomTimeChange(type: 'hour' | 'minute', value: string) {
    let [hour, minute] = form.time ? form.time.split(/:| /) : ['',''];
    if (type === 'hour') hour = value;
    if (type === 'minute') minute = value;
    const formatted = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')} ${amPm}`;
    setForm(f => ({ ...f, time: formatted }));
  }

  function handleAmPmToggle() {
    setAmPm(prev => {
      const next = prev === 'AM' ? 'PM' : 'AM';
      // Update form.time as well
      let [hour, minute] = form.time ? form.time.split(/:| /) : ['',''];
      const formatted = `${hour.padStart(2, '0')}:${minute.padStart(2, '0')} ${next}`;
      setForm(f => ({ ...f, time: formatted }));
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    setErrorFields([]);
    // Custom validation for required fields
    const missingFields = [];
    if (!form.name.trim()) missingFields.push('name');
    if (!form.email.trim()) missingFields.push('email');
    if (!form.phone.trim()) missingFields.push('phone');
    if (missingFields.length > 0) {
      setError('Please fill in all required fields: Name, Email, and Phone.');
      setErrorFields(missingFields);
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: 'Book Consultation' }),
      });
      const result = await res.json();
      if (result.success) {
        setSuccess('Consultation booked! We will contact you soon.');
        setForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
          mode: '',
          message: '',
        });
        setTimeout(() => {
          setSuccess(null);
          onClose();
        }, 2000);
      } else {
        setError('Failed to book consultation. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
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
              <label className="block text-base font-medium text-gray-700 mb-1">Name <span className="text-red-500">*</span></label>
              <input required name="name" value={form.name} onChange={handleChange} className={`mt-1 block w-full rounded-lg border ${errorFields.includes('name') ? 'border-red-500' : 'border-gray-300'} bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900`} />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
              <input required type="email" name="email" value={form.email} onChange={handleChange} className={`mt-1 block w-full rounded-lg border ${errorFields.includes('email') ? 'border-red-500' : 'border-gray-300'} bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900`} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
              <input required name="phone" value={form.phone} onChange={handleChange} className={`mt-1 block w-full rounded-lg border ${errorFields.includes('phone') ? 'border-red-500' : 'border-gray-300'} bg-gray-50 px-4 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900`} />
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
              <div className="flex gap-2 items-center mt-1">
                <Listbox value={selectedHour} onChange={val => handleCustomTimeChange('hour', val)}>
                  <div className="relative w-16">
                    <Listbox.Button className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900 text-left">{selectedHour || 'HH'}</Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {hours.map((hour) => (
                        <Listbox.Option
                          key={hour}
                          value={hour}
                          className={({ active }) => `cursor-pointer select-none relative py-2 pl-4 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'}`}
                        >
                          {hour}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
                <span className="text-lg font-semibold">:</span>
                <Listbox value={selectedMinute} onChange={val => handleCustomTimeChange('minute', val)}>
                  <div className="relative w-16">
                    <Listbox.Button className="w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-2 text-lg shadow-sm focus:border-[#2e7d32] focus:ring-[#2e7d32] transition text-gray-900 text-left">{selectedMinute || 'MM'}</Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 max-h-48 w-full overflow-y-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {minutes.map((minute) => (
                        <Listbox.Option
                          key={minute}
                          value={minute}
                          className={({ active }) => `cursor-pointer select-none relative py-2 pl-4 pr-4 ${active ? 'bg-green-100 text-green-900' : 'text-gray-900'}`}
                        >
                          {minute}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
                <button
                  type="button"
                  onClick={handleAmPmToggle}
                  className={`ml-2 px-3 py-2 rounded-lg border font-semibold transition-colors ${amPm === 'AM' ? 'bg-green-50 border-green-500 text-green-700' : 'bg-gray-50 border-gray-300 text-gray-700'}`}
                >
                  {amPm}
                </button>
                <button
                  type="button"
                  tabIndex={-1}
                  className={`ml-2 p-2 rounded-lg border transition-colors bg-gray-50 border-gray-200 flex items-center justify-center shadow-sm ${amPm === 'AM' ? 'hover:bg-yellow-100' : 'hover:bg-indigo-100'}`}
                  aria-label={amPm === 'AM' ? 'Morning' : 'Evening'}
                  disabled
                >
                  {amPm === 'AM' ? (
                    <SunIcon className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <MoonIcon className="h-5 w-5 text-indigo-500" />
                  )}
                </button>
              </div>
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
          <button type="submit" className="w-full bg-[#2e7d32] text-white font-bold text-lg py-3 rounded-xl shadow-md hover:bg-[#219150] transition" disabled={loading}>
            {loading ? 'Booking...' : 'Book Consultation'}
          </button>
          {success && <div className="text-green-600 text-center font-semibold mt-2">{success}</div>}
          {error && (
            <div className="w-full flex justify-center">
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded-lg shadow-sm mt-2 text-center text-base animate-fade-in">
                {error}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
} 
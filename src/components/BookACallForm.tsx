'use client'; // MANDATORY: Required due to use of useState, useMemo, and framer-motion

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Loader2, Calendar } from 'lucide-react';

// --- Configuration Data (Next.js Update) ---

// 1. Next.js uses standard process.env.NEXT_PUBLIC_... for client-side env variables.
// However, since you have an internal API route:
// We will call the relative path directly, making the full URL unnecessary here.
const API_ENDPOINT = '/api/submit-inquiry'; 

const SERVICE_OPTIONS = [
  'Web / App Development',
  'Branding & Logo Design', 
  'Digital Marketing',
  'Media Production (Photo / Video)',
  'SaaS Development',
  'Not Sure Yet (Need Guidance)',
];

const STAGE_OPTIONS = [
  'Just an idea — need consultation',
  'Already have a brand, need digital presence',
  'Need redesign / scaling existing platform',
];

const TIMELINE_OPTIONS = [
  'ASAP (1–2 weeks)',
  'In the next month',
  'In 2–3 months',
  'Just exploring for now',
];

const BUDGET_OPTIONS = [
  'Under ₹25,000',
  '₹25,000 – ₹75,000',
  '₹75,000 – ₹2,00,000',
  '₹2L+ / Long-term partnership',
];

const PLATFORM_OPTIONS = ['Google Meet', 'Zoom', 'WhatsApp Call', 'Other'];

// Custom Colors (Defined using Tailwind standard classes where possible, or inline hex)
const PRIMARY_COLOR = '#FE7B50';
const SECONDARY_COLOR = '#FFB873';

// --- Component Helper Functions ---

const validateStep1 = (data: any) => {
  const errors: any = {};
  if (!data.name) errors.name = 'Full Name is required.';
  // Basic email validation
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Valid Email is required.';
  return Object.keys(errors).length === 0 ? null : errors;
};

// --- Custom UI Components ---
// Converted to TypeScript where types are simple/implicit (like props from parent)

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}
const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="text-sm font-medium uppercase tracking-widest text-gray-500">
      Step {currentStep} of {totalSteps}
    </div>
    <div className="flex space-x-1">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index < currentStep
              ? 'bg-orange-500 w-6' // Completed steps
              : index === currentStep // Current step
              ? 'bg-orange-300 w-4'
              : 'bg-gray-200 w-2' // Future steps
          }`}
        />
      ))}
    </div>
  </div>
);

interface ChipProps {
    children: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
    isMultiSelect?: boolean;
}
const Chip: React.FC<ChipProps> = ({ children, isSelected, onClick, isMultiSelect = false }) => (
  <button
    type="button"
    onClick={onClick}
    className={`
      flex items-center justify-center p-3 sm:p-4 text-sm font-medium rounded-xl 
      transition-all duration-300 ease-in-out border-2 text-center h-full
      ${
        isSelected
          ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
          : 'bg-white text-gray-800 border-gray-200 hover:border-orange-300 hover:shadow-md'
      }
    `}
  >
    {isMultiSelect && (
      <span className="mr-2">
        {isSelected ? <Check className="w-4 h-4" /> : <X className="w-4 h-4 opacity-0" />}
      </span>
    )}
    {children}
  </button>
);

// --- Main Form Component ---

const BookACallForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    business_name: '',
    email: '',
    phone: '',
    services: [] as string[],
    project_stage: '',
    timeline: '',
    budget: '',
    note: '',
    meeting_platform: 'Google Meet',
    preferred_time: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear validation error on change
    if (errors[field]) {
      setErrors((prev: any) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleNext = () => {
    if (step === 1) {
      const step1Errors = validateStep1(formData);
      if (step1Errors) {
        setErrors(step1Errors);
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmissionError(null); // Clear previous error

    // Structure the data exactly as the backend expects
    const submissionData = {
      client_info: {
        name: formData.name,
        business_name: formData.business_name,
        email: formData.email,
        phone: formData.phone || 'N/A',
      },
      project_details: {
        services: formData.services,
        project_stage: formData.project_stage || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        budget: formData.budget || 'Not specified',
      },
      call_preference: {
        note: formData.note,
        meeting_platform: formData.meeting_platform,
        // Ensure preferred_time is set, using current time as fallback if empty
        preferred_time: formData.preferred_time || new Date().toISOString(), 
      },
      submitted_at: new Date().toISOString(),
    };

    try {
        // Use the relative API_ENDPOINT (Next.js API Route)
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submissionData),
        });

        // The server sends a 200 on success
        if (response.ok) {
            console.log('Submission successful!');
            setIsSubmitted(true);
        } else {
            // Handle server-side errors (e.g., Google Sheet failure, Email error)
            const errorData = await response.json();
            throw new Error(errorData.message || `Server error: ${response.status}`);
        }
    } catch (error: any) {
        console.error('Submission failed:', error.message);
        setSubmissionError(`Submission failed. Please check the console or try again. (${error.message})`);
    } finally {
        setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1 formData={formData} updateFormData={updateFormData} errors={errors} />
        );
      case 2:
        return (
          <Step2 formData={formData} updateFormData={updateFormData} />
        );
      case 3:
        return (
          <Step3 
            formData={formData} 
            updateFormData={updateFormData} 
            handleSubmit={handleSubmit} 
            isSubmitting={isSubmitting} 
            submissionError={submissionError}
          />
        );
      default:
        return null;
    }
  };

  if (isSubmitted) {
    return <SuccessMessage />;
  }

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-transparent p-4 mt-8 lg:mt-24 sm:p-8 font-Epilogue">
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23ff8800' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      <div className="w-full max-w-xl bg-white p-6 sm:p-10 rounded-2xl shadow-xl border border-gray-100 relative"> 
        <StepIndicator currentStep={step} totalSteps={3} />

        {/* Form Content with Smooth Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between pt-4 border-t border-gray-100">
          <button
            onClick={() => setStep((prev) => prev - 1)}
            disabled={step === 1}
            className={`text-gray-600 font-medium transition-opacity duration-300 ${
              step === 1 ? 'opacity-0 cursor-default' : 'hover:text-gray-900'
            }`}
          >
            ← Back
          </button>
          {step < 3 && (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl text-white font-semibold bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-md flex items-center gap-2"
            >
              Next Step <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Step 1 Component ---

interface Step1Props {
    formData: any;
    updateFormData: (field: string, value: any) => void;
    errors: any;
}
const Step1: React.FC<Step1Props> = ({ formData, updateFormData, errors }) => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">👋 Tell us about you</h3>
    <p className="text-sm text-gray-500">Don’t worry, this takes less than a minute.</p>

    <Input
      label="Full Name"
      name="name"
      placeholder="John Doe"
      value={formData.name}
      onChange={(e) => updateFormData('name', e.target.value)}
      required
      error={errors.name}
    />

    <Input
      label="Business / Brand Name (Optional)"
      name="business_name"
      placeholder="Beeztech "
      value={formData.business_name}
      onChange={(e) => updateFormData('business_name', e.target.value)}
    />

    <Input
      label="Email Address"
      name="email"
      type="email"
      placeholder="hello@Beeztech .com"
      value={formData.email}
      onChange={(e) => updateFormData('email', e.target.value)}
      required
      error={errors.email}
    />

    <Input
      label="Phone / WhatsApp Number (Optional)"
      name="phone"
      type="tel"
      placeholder="+91 98765 43210"
      value={formData.phone}
      onChange={(e) => updateFormData('phone', e.target.value)}
    />
  </div>
);

// --- Step 2 Component ---

interface Step2Props {
    formData: any;
    updateFormData: (field: string, value: any) => void;
}
const Step2: React.FC<Step2Props> = ({ formData, updateFormData }) => {

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s: string) => s !== service)
      : [...formData.services, service];
    updateFormData('services', updatedServices);
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">🎯 Project Overview</h3>

      {/* Q1: Services */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          1. What do you need help with? (Multi-select)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {SERVICE_OPTIONS.map((service) => (
            <Chip
              key={service}
              isSelected={formData.services.includes(service)}
              onClick={() => handleServiceToggle(service)}
              isMultiSelect
            >
              {service}
            </Chip>
          ))}
        </div>
      </div>

      {/* Q2: Project Stage */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          2. What’s your project stage? (Single choice)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {STAGE_OPTIONS.map((stage) => (
            <Chip
              key={stage}
              isSelected={formData.project_stage === stage}
              onClick={() => updateFormData('project_stage', stage)}
            >
              {stage}
            </Chip>
          ))}
        </div>
      </div>

      {/* Q3: Timeline */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          3. What’s your expected timeline? (Single choice)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {TIMELINE_OPTIONS.map((timeline) => (
            <Chip
              key={timeline}
              isSelected={formData.timeline === timeline}
              onClick={() => updateFormData('timeline', timeline)}
            >
              {timeline}
            </Chip>
          ))}
        </div>
      </div>

      {/* Q4: Budget (Optional) */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-3">
          4. What’s your budget range? (Optional)
        </label>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {BUDGET_OPTIONS.map((budget) => (
            <Chip
              key={budget}
              isSelected={formData.budget === budget}
              onClick={() => updateFormData('budget', budget)}
            >
              {budget}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Step 3 Component ---

interface Step3Props {
    formData: any;
    updateFormData: (field: string, value: any) => void;
    handleSubmit: () => void;
    isSubmitting: boolean;
    submissionError: string | null;
}
const Step3: React.FC<Step3Props> = ({ formData, updateFormData, handleSubmit, isSubmitting, submissionError }) => {
  const summaryData = useMemo(() => {
    return [
      { label: 'Project Needs', value: formData.services.join(', ') || 'Not specified' },
      { label: 'Project Stage', value: formData.project_stage || 'Not specified' },
      { label: 'Timeline', value: formData.timeline || 'Not specified' },
      { label: 'Budget', value: formData.budget || 'Not specified' },
      { label: 'Preferred Platform', value: formData.meeting_platform },
      { label: 'Name', value: formData.name },
      { label: 'Email', value: formData.email },
    ];
  }, [formData]);

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-gray-900">📅 Call & Summary</h3>

      {/* Call Preference Note */}
      <div>
        <label htmlFor="note" className="block text-lg font-semibold text-gray-900 mb-2">
          Tell us a bit more (Short paragraph)
        </label>
        <textarea
          id="note"
          rows={3}
          placeholder="I want to revamp my brand website with a modern design, focusing on better conversion rates and local SEO in Udaipur."
          value={formData.note}
          onChange={(e) => updateFormData('note', e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-900"
        />
      </div>

      {/* Platform & Time */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Preferred Platform */}
        <div>
          <label className="block text-lg font-semibold text-gray-900 mb-3">
            Preferred way to connect:
          </label>
          <div className="space-y-2">
            {PLATFORM_OPTIONS.map((platform) => (
              <div key={platform} className="flex items-center">
                <input
                  id={platform}
                  name="platform"
                  type="radio"
                  checked={formData.meeting_platform === platform}
                  onChange={() => updateFormData('meeting_platform', platform)}
                  className="w-5 h-5 text-orange-500 border-gray-300 focus:ring-orange-500"
                />
                <label htmlFor={platform} className="ml-3 text-gray-700">
                  {platform}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Preferred Time Slot */}
        <div>
          <label htmlFor="time" className="block text-lg font-semibold text-gray-900 mb-2">
            Preferred Time Slot:
          </label>
          <div className="relative">
            <input
              id="time"
              type="datetime-local"
              value={formData.preferred_time}
              onChange={(e) => updateFormData('preferred_time', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-900 appearance-none"
            />
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-inner">
        <h4 className="text-xl font-bold text-gray-900 mb-3">Summary Preview</h4>
        <div className="space-y-2">
          {summaryData.map((item) => (
            <div key={item.label} className="flex justify-between text-sm">
              <span className="font-medium text-gray-600">{item.label}:</span>
              <span className="font-semibold text-gray-900 max-w-[60%] truncate">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Submission Error Message */}
      {submissionError && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
          Error: {submissionError}
        </div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full py-3 rounded-xl text-white font-bold bg-orange-500 hover:bg-orange-600 transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
          </>
        ) : (
          'Book Now & Send Inquiry'
        )}
      </button>
    </div>
  );
};

// --- Success Message Component ---

const SuccessMessage: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen bg-transparent p-4 sm:p-8 font-Epilogue">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-xl bg-white p-8 sm:p-12 text-center rounded-2xl shadow-xl border border-green-100"
    >
      <Check className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Success!</h3>
      <p className="text-lg text-gray-700">
        Thank you! Our creative team will reach out shortly to schedule your call and discuss your project needs.
      </p>
      <p className="text-sm text-gray-500 mt-4">
        (Check your email for confirmation.)
      </p>
    </motion.div>
  </div>
);

// --- Reusable Input Component ---

interface InputProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    required?: boolean;
    error?: string;
}
const Input: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange, placeholder, required, error }) => (
  <div>
    <label htmlFor={name} className="block text-lg font-semibold text-gray-900 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full p-3 border ${
        error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500'
      } rounded-xl focus:border-orange-500 transition-all duration-200 text-gray-900`}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

export default BookACallForm;
// components/sections/ContactSection.tsx
'use client';
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Loader2, Calendar } from 'lucide-react';
// import Slider from './Slider'; 

// --- Configuration Data ---

// 🚨 NEXT.JS ENV: Using NEXT_PUBLIC_ for client-side environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_ENDPOINT = `${API_BASE_URL}/submit-inquiry`; 

const SERVICE_OPTIONS = [
    'Web / App Development',
    'Branding & Logo Design', 
    'Digital Marketing',
    'Media Production ',
    'SaaS Development',
    'Not Sure Yet (Need Guidance)',
] as const; // 'as const' makes this an array of literal strings

const STAGE_OPTIONS = [
    'Just an idea — need consultation',
    'Already have a brand, need digital presence',
    'Need redesign / scaling existing platform',
] as const;

const TIMELINE_OPTIONS = [
    'ASAP (1–2 weeks)',
    'In the next month',
    'In 2–3 months',
    'Just exploring for now',
] as const;

const BUDGET_OPTIONS = [
    'Under ₹25,000',
    '₹25,000 – ₹75,000',
    '₹75,000 – ₹2,00,000',
    '₹2L+ / Long-term partnership',
] as const;

const PLATFORM_OPTIONS = ['Google Meet', 'Zoom', 'WhatsApp Call', 'Other'] as const;

// --- TypeScript Interfaces ---

// Define the shape of the main form data state
interface FormData {
    name: string;
    business_name: string;
    email: string;
    phone: string;
    services: readonly string[]; // Array of strings from SERVICE_OPTIONS
    project_stage: string; // One of STAGE_OPTIONS
    timeline: string; // One of TIMELINE_OPTIONS
    budget: string; // One of BUDGET_OPTIONS
    note: string;
    meeting_platform: string; // One of PLATFORM_OPTIONS
    preferred_time: string;
}

// Define the shape of the validation errors
interface FormErrors {
    name?: string;
    email?: string;
}

// Define the signature for the update function
type UpdateFormData = (field: keyof FormData, value: string | string[]) => void;


// --- Component Helper Functions ---

const validateStep1 = (data: FormData): FormErrors | null => {
    const errors: FormErrors = {};
    if (!data.name) errors.name = 'Full Name is required.';
    // Simple email validation
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) errors.email = 'Valid Email is required.';
    return Object.keys(errors).length === 0 ? null : errors;
};

// --- Custom UI Components ---

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
            flex items-center justify-center p-3 text-sm font-medium rounded-xl h-full
            transition-all duration-300 ease-in-out border-2 text-center
            ${
                isSelected
                    ? 'bg-orange-500 text-white border-orange-500 shadow-lg'
                    : 'bg-gray-800 text-gray-300 border-gray-700 hover:border-orange-400 hover:text-white'
            }
        `}
    >
        {isMultiSelect && (
            <span className="mr-0">
                {isSelected ? <Check className="w-4 h-4" /> : <X className="w-4 h-4 opacity-0" />}
            </span>
        )}
        {children}
    </button>
);

interface InputProps {
    label: string;
    name: keyof FormData;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    error?: string;
}
const Input: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange, placeholder, required, error }) => (
    <div>
        <label htmlFor={name} className="block text-white font-medium mb-2 text-sm">
            {label} {required && <span className="text-orange-500">*</span>}
        </label>
        <input
            id={name}
            name={String(name)} // Convert name to string for the DOM
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`w-full bg-transparent border-b-2 ${
                error ? 'border-red-500 focus:ring-red-500' : 'border-gray-600 focus:border-orange-500'
            } text-white placeholder-gray-500 py-3 px-2 focus:outline-none transition-colors duration-300`}
        />
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
);

// --- Step Components ---

interface Step1Props {
    formData: FormData;
    updateFormData: UpdateFormData;
    errors: FormErrors;
}
const Step1: React.FC<Step1Props> = ({ formData, updateFormData, errors }) => (
    <div className="space-y-6">
        
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
            placeholder="hello@Beeztech.com"
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

interface Step2Props {
    formData: FormData;
    updateFormData: UpdateFormData;
}
const Step2: React.FC<Step2Props> = ({ formData, updateFormData }) => {

    const handleServiceToggle = (service: string) => {
        const updatedServices = formData.services.includes(service)
            ? formData.services.filter((s) => s !== service)
            : [...formData.services, service];
        // 🚨 Type assertion is needed here for the string[] to be accepted by updateFormData
        updateFormData('services', updatedServices as string[]); 
    };

    return (
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">🎯 Project Overview</h3>

            {/* Q1: Services */}
            <div>
                <label className="block text-lg font-semibold text-gray-200 mb-3">
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
                <label className="block text-lg font-semibold text-gray-200 mb-3">
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
                <label className="block text-lg font-semibold text-gray-200 mb-3">
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
                <label className="block text-lg font-semibold text-gray-200 mb-3">
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

interface Step3Props {
    formData: FormData;
    updateFormData: UpdateFormData;
    handleSubmit: () => Promise<void>;
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
            <h3 className="text-2xl font-bold text-white">📅 Call & Summary</h3>

            {/* Call Preference Note */}
            <div>
                <label htmlFor="note" className="block text-lg font-semibold text-gray-200 mb-2">
                    Tell us a bit more (Short paragraph)
                </label>
                <textarea
                    id="note"
                    rows={3}
                    // Incorporating the geographical keyword "Udaipur" as a sample
                    placeholder="I want to revamp my brand website with a modern design, focusing on better conversion rates and local SEO in Udaipur."
                    value={formData.note}
                    onChange={(e) => updateFormData('note', e.target.value)}
                    className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 resize-none"
                />
            </div>

            {/* Platform & Time */}
            <div className="grid sm:grid-cols-2 gap-6">
                {/* Preferred Platform */}
                <div>
                    <label className="block text-lg font-semibold text-gray-200 mb-3">
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
                                    className="w-5 h-5 text-orange-500 border-gray-600 bg-gray-800 focus:ring-orange-500"
                                />
                                <label htmlFor={platform} className="ml-3 text-gray-300">
                                    {platform}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Preferred Time Slot */}
                <div>
                    <label htmlFor="time" className="block text-lg font-semibold text-gray-200 mb-2">
                        Preferred Time Slot:
                    </label>
                    <div className="relative">
                        <input
                            id="time"
                            type="datetime-local"
                            value={formData.preferred_time}
                            onChange={(e) => updateFormData('preferred_time', e.target.value)}
                            className="w-full p-3 border border-gray-600 bg-gray-800 text-white rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 appearance-none"
                        />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Summary Card */}
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 shadow-inner">
                <h4 className="text-xl font-bold text-white mb-3">Summary Preview</h4>
                <div className="space-y-2">
                    {summaryData.map((item) => (
                        <div key={item.label} className="flex justify-between text-sm">
                            <span className="font-medium text-gray-400">{item.label}:</span>
                            <span className="font-semibold text-white max-w-[60%] truncate">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Submission Error Message */}
            {submissionError && (
                <div className="p-3 bg-red-900 border border-red-700 text-red-300 rounded-xl text-sm font-medium">
                    Error: {submissionError}
                </div>
            )}

            {/* Submit Button */}
            <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 font-bold py-4 px-6 rounded-full transition-all duration-300 hover:shadow-xl hover:from-white hover:to-gray-100 flex items-center justify-center gap-2 group"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                    </>
                ) : (
                    <>
                        <span>Book Now & Send Inquiry</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </motion.button>
        </div>
    );
};

const SuccessMessage: React.FC = () => (
    <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-xl bg-gray-950 p-8 sm:p-10 text-center rounded-2xl shadow-xl border border-orange-500"
    >
        <Check className="w-16 h-16 text-orange-500 mx-auto mb-6" />
        <h3 className="text-3xl font-extrabold text-white mb-4">Success!</h3>
        <p className="text-lg text-gray-300">
            Thank you! Our creative team will reach out shortly to schedule your call and discuss your project needs.
        </p>
        <p className="text-sm text-gray-500 mt-4">
            (Check your email for confirmation.)
        </p>
    </motion.div>
);

// --- Core Form Logic Component ---

const BookACallFormContent: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({ // 💡 Added type to useState
        name: '',
        business_name: '',
        email: '',
        phone: '',
        services: [],
        project_stage: '',
        timeline: '',
        budget: '',
        note: '',
        meeting_platform: 'Google Meet',
        preferred_time: '',
    });
    const [errors, setErrors] = useState<FormErrors>({}); // 💡 Added type to useState
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState<string | null>(null);

    const updateFormData: UpdateFormData = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field as keyof FormErrors]) { // Type assertion for errors check
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field as keyof FormErrors];
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
        setSubmissionError(null);

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
                note: formData.note || 'N/A',
                meeting_platform: formData.meeting_platform,
                preferred_time: formData.preferred_time || new Date().toISOString(),
            },
            submitted_at: new Date().toISOString(),
        };

        try {
            const url = API_BASE_URL ? API_ENDPOINT : '/api/submit-inquiry'; 

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData),
            });

            if (response.ok) {
                console.log('Submission successful!');
                setIsSubmitted(true);
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || `Server error: ${response.status}`);
            }
        } catch (error) {
            // 💡 Proper error handling with type assertion
            const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
            console.error('Submission failed:', errorMessage);
            setSubmissionError(`Submission failed. Please check the console or try again. (${errorMessage})`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (<Step1 formData={formData} updateFormData={updateFormData} errors={errors} />);
            case 2:
                return (<Step2 formData={formData} updateFormData={updateFormData} />);
            case 3:
                return (<Step3 formData={formData} updateFormData={updateFormData} handleSubmit={handleSubmit} isSubmitting={isSubmitting} submissionError={submissionError} />);
            default:
                return null;
        }
    };
    
    if (isSubmitted) {
        return <SuccessMessage />;
    }

    // Main form wrapper
    return (
        <div className="w-full">
            {/* <StepIndicator currentStep={step} totalSteps={3} /> */}

            {/* Form Content with Smooth Transitions */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between pt-4 border-t border-gray-700">
                <button
                    onClick={() => setStep((prev) => prev - 1)}
                    disabled={step === 1}
                    className={`text-gray-400 font-medium transition-opacity duration-300 ${
                        step === 1 ? 'opacity-0 cursor-default' : 'hover:text-white'
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
    );
};


// --- Main Exported Component ---
const ContactSection: React.FC = () => { // 💡 Component function type definition
    return (
        <div className="relative bg-white py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-6 overflow-hidden">
            {/* Large Background Text */}
            <div className="absolute top-6 md:-top-12 left-0 right-0 overflow-hidden pointer-events-none">
                <h2 className="text-[55px] text-center sm:text-[180px] lg:text-[170px] font-bold text-gray-300 whitespace-nowrap opacity-40 select-none">
                    Let's Connect
                </h2>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto ">
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl shadow-2xl overflow-hidden">
                    {/* Blurred Background Images */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-48 h-48 bg-orange-500 rounded-lg blur-3xl" />
                        <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-400 rounded-lg blur-3xl" />
                        <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-orange-400 rounded-lg blur-3xl" />
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 p-8 sm:p-12 lg:p-8">
                        {/* Left Side - Heading */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-start "
                        >
                            <h2 className="text-[60px] sm:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-6 leading-16 md:leading-tight">
                                Got a project in mind?
                            </h2>
                            <p className="text-md sm:text-xl text-gray-300 font-light">
                                Let's make something happen together
                            </p>
                        </motion.div>

                        {/* Right Side - Multi-Step Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col justify-center"
                        >
                            <BookACallFormContent />
                        </motion.div>
                    </div>
                {/* SLIDER */}
                <div className="relative z-10 px-4 sm:px-6 lg:px-16 bg-transparent">
                    {/* Infinite Scrolling Text Slider */}
                    <div className="relative w-full overflow-hidden bg-transparent mb-8 sm:mb-4">
                        {/* Left Fade Effect */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
                
                        {/* Right Fade Effect */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-transparent to-transparent z-10" />
                
                        {/* Scrolling Content */}
                        <div className="flex whitespace-nowrap">
                            <motion.div
                                className="flex items-center gap-6 sm:gap-8 text-white"
                                animate={{
                                    x: [0, -1000],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 20,
                                        ease: "linear",
                                    },
                                }}
                            >
                                {[...Array(3)].map((_, setIndex) => (
                                    <React.Fragment key={setIndex}>
                                        <span className="text-xl sm:text-4xl md:text-[25px] font-pilogue font-bold">
                                            hello@beeztech.studio
                                        </span>
                                        <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="Asterisk Separator" className=" h-4 md:h-8"></img>
                
                                        <span className="text-xl sm:text-4xl md:text-[25px] font-pilogue font-bold">
                                            hello@beeztech.studio
                                        </span>
                                        <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="Asterisk Separator" className="h-4 md:h-8"></img>
                
                                        <span className="text-xl sm:text-4xl md:text-[25px] font-pilogue font-bold">
                                            hello@beeztech.studio
                                        </span>
                                        <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="Asterisk Separator" className="h-4 md:h-8"></img>
                
                                        <span className="text-xl sm:text-4xl md:text-[25px] font-pilogue font-bold">
                                            hello@beeztech.studio
                                        </span>
                                        <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="Asterisk Separator" className="h-4 md:h-8"></img>
                
                                        <span className="text-xl sm:text-4xl md:text-[25px] font-pilogue font-bold opacity-40">
                                            hello@beeztech.studio
                                        </span>
                                        <img src="https://res.cloudinary.com/dwz07ormq/image/upload/v1760026414/Icon_tgjxar.svg" alt="Asterisk Separator" className="h-4 md:h-8 "></img>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                
                    <div className="max-w-7xl mx-auto "></div>
                </div>
                </div>
                
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full blur-2xl opacity-40" />
        </div>
    );
};

export default ContactSection;